import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { PullRequestMetric } from "../apiClient/types";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import { LOCAL_STORAGE_KEY } from "../types";
import { getItem, setItem } from "../utils/localStorage";
import { getEnumValueFromLabel } from "../utils/objects";

const tabsBar = () => css`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

/**
 * Provide tools for reading/updating persisted tabs.
 * This way we can easily change how to persist them, without
 * modifying the rest of the code
 */
const usePersistedTabs = () => {
  const [persistedTabs, setPersistedTabs] = useState<string[]>([]);

  const persistTabs = (tabs: string[]) => {
    setItem(LOCAL_STORAGE_KEY.tabs, JSON.stringify(tabs))
    setPersistedTabs(tabs)
  }

  useEffect(() => {
    const persistedTabsStr = getItem(LOCAL_STORAGE_KEY.tabs);
    if (persistedTabsStr) {
      try {
        const tabs = JSON.parse(persistedTabsStr) as string[];
        setPersistedTabs(tabs);
      } catch {}
    }
  }, [])

  return {
    persistedTabs,
    persistTabs
  }
}

/**
 * Check if a name has been already assigned to a tab.
 * Name is assigned when selecting a metric to display.
 */
export const tabHasBeenSetup = (tabName?: string) => {
  const lowerCaseName = tabName?.toLowerCase() || '';

  const exists = lowerCaseName.length > 0;
  const containsInitialName = getEnumValueFromLabel<PullRequestMetric>(lowerCaseName).includes('tab-#');

  return exists && !containsInitialName;
}

/**
 * Creates a list of tabs, and provide the tools for add, rename, remove
 * and render them in the UI.
 * 
 * All these tools are automatically persisting them, too.
 */
export const useDynamicTabs = () => {
  const { persistedTabs, persistTabs } = usePersistedTabs();
  const [tabs, setTabs] = useState<string[]>([]);
  const [active, setActive] = useState<string | undefined>();

  const activateTab = (tab: string) => {
    setActive(tab);
  }

  const createTab = () => {
    const tabName = `Tab #${tabs.length + 1}`;
    
    setTabs([
      ...tabs,
      tabName,
    ]);

    activateTab(tabName)
  }

  const removeActiveTab = () => {
    // Find current tab position
    const tabIndex = tabs.findIndex(t => t === active);
    const newTabs = tabs.filter(t => t !== active)

    // Remove activeTab
    setTabs(newTabs);

    // Mark the previous one as active
    activateTab(newTabs[tabIndex === 0 ? tabIndex : tabIndex - 1])

    // Update persisted tabs
    persistTabs(newTabs);
  }

  const renameTab = (tab: string, newName: string) => {
    const updatedTabs = tabs.map(t => t === tab ? newName : t);
    
    persistTabs(updatedTabs);
    
    if (active === tab) {
      activateTab(newName);
    }
  }

  const renderTabs = () => (
    <Tabs>
      { ({ Tab }) => (
        <>
          <div css={ tabsBar }>
            { tabs.map(tab => (
              <Tab key={ tab } active={ active === tab } onClick={ () => activateTab(tab) }>
                { tab }
              </Tab>
            )) }
          </div>

          <Button onClick={ createTab }>
            Add
          </Button>
        </>
      ) }
    </Tabs>
  )

  useEffect(() => {
    setTabs(persistedTabs);

    if (!active) {
      setActive(persistedTabs[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persistedTabs])

  return {
    activeTab: tabHasBeenSetup(active) ? getEnumValueFromLabel<PullRequestMetric>(active) : active,
    removeActiveTab,
    renderTabs,
    renameTab,
    tabs
  }
}
