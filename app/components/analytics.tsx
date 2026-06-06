import { FC } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';

type AnalyticsProps = {};

const Analytics: FC<AnalyticsProps> = () => {
  return <GoogleAnalytics gaId={process.env.PUBLIC_GA_ID || ''} />;
};

export default Analytics;
