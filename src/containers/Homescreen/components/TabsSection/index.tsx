import React, { PropsWithChildren, useMemo } from 'react';
import { PullRequestMetric } from '../../../../apiClient/types';
import Button from '../../../../components/Button';
import Dropdown, { MultipleValue, SingleValue } from '../../../../components/Forms/Dropdown';
import Toolbar from '../../../../components/Toolbar';
import { getDropdownItemsFromEnum } from '../../../../utils/objects';

interface Props {
  activeTab?: string;
  activeTabHasBeenSetup: boolean;
  onMetricChange: (newValue: SingleValue | MultipleValue) => void;
  removeActiveTab: () => void;
  renderTabs: () => JSX.Element;
  tabs: string[];
}

const TabsSection: React.FC<PropsWithChildren<Props>> = ({
  activeTab,
  activeTabHasBeenSetup,
  children,
  onMetricChange,
  removeActiveTab,
  renderTabs,
  tabs,
}) => {
  const metricOptions = useMemo(() =>
    getDropdownItemsFromEnum(PullRequestMetric)
      .filter(opt => !tabs.includes(opt.label)),
    [tabs]
  );

  return (
  <>
    { renderTabs() }

    { !!activeTab && (
      <>
        <Toolbar
          fullWidth
          left={
            <>
              { !activeTabHasBeenSetup && (
                <Dropdown
                  onChange={ onMetricChange }
                  options={ metricOptions }
                  placeholder='Select a metric...'
                />
              )}
            </>
          }
          right={ (
            <Button onClick={ removeActiveTab }>
              Close
            </Button>
          ) }
        />
      </>
    ) }

    { children }
  </>
)};

export default TabsSection;
