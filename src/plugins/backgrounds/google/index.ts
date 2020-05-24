import { Config } from '../../types';
import GoogleDrive from './GoogleDrive';

const config: Config = {
  key: 'background/google',
  name: 'GoogleDrive',
  description: 'Who has time to find their own images.',
  dashboardComponent: GoogleDrive,
  settingsComponent: undefined,
  supportsBackdrop: true,
};

export default config;
