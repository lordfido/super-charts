import { css } from '@emotion/react';
import React, { useState } from 'react';
import { PullRequestMetric } from '../../apiClient/types';
import { MultipleValue, SingleValue } from '../../components/Forms/Dropdown';
import Typography from '../../components/Typography';
import { tabHasBeenSetup, useDynamicTabs, usePullRequestMetrics } from '../../hooks';
import MainLayout from '../../layouts/MainLayout';
import { getDefaultDateRange } from '../../utils/dates';
import Header from './components/Header';
import MetricCharts from './components/TabContent';
import TabsSection from './components/TabsSection';

const homescreenStyle = () => css`  
  &.Homescreen {
    .Content {
      padding: 0 20px;
    }
  }
`;

const Homescreen: React.FC = () => {
  // Default values & options
  const { startDate: s, endDate: e } = getDefaultDateRange();

  // Tabs
  const { activeTab, removeActiveTab, renameTab, renderTabs, tabs } = useDynamicTabs();
  const activeTabHasBeenSetup = tabHasBeenSetup(activeTab);

  // User inputs
  const [dateRange, setDateRange] = useState<[Date, Date]>([s, e]);

  // Data results
  const {
    loadingAggregated,
    aggregatedMetrics,
    loadingGrouped,
    groupedMetrics
  } = usePullRequestMetrics({
    dateRange,
    metric: activeTabHasBeenSetup ? activeTab as PullRequestMetric : undefined,
  });

  const onDateRangeChange = (startDate: Date, endDate?: Date) => {
    setDateRange([startDate, endDate as Date])
  }

  const onMetricChange = (newValue: SingleValue | MultipleValue) => {
    renameTab(activeTab as string, (newValue as SingleValue)?.label);
  }

  return (
    <MainLayout>
      <div css={homescreenStyle} className="Homescreen">
        <Header onDateRangeChange={ onDateRangeChange } />

        <div className="Content">
          <Typography type="title1">
            <h2>Insights</h2>
          </Typography>

          <TabsSection
            activeTab={ activeTab }
            activeTabHasBeenSetup={ activeTabHasBeenSetup }
            onMetricChange={ onMetricChange }
            removeActiveTab={ removeActiveTab }
            renderTabs={ renderTabs }
            tabs={ tabs }
          >
            { !!activeTabHasBeenSetup && (
              <MetricCharts
                aggregatedMetrics={ aggregatedMetrics }
                groupedMetrics={ groupedMetrics }
                loadingAggregated={ loadingAggregated }
                loadingGrouped={ loadingGrouped }
                metric={ activeTab as PullRequestMetric }
              />
            ) }
          </TabsSection>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homescreen;
