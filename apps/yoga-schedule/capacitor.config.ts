import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'yoga-schedule',
  webDir: '../../dist/apps/yoga-schedule',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
