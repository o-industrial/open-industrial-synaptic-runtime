import { EaCApplicationsLoggingProvider } from '@fathym/eac-applications/runtime/logging';

export class RuntimeLoggingProvider extends EaCApplicationsLoggingProvider {
  constructor() {
    const loggingPackages = [
      '@o-industrial/common',
      '@o-industrial/open-industrial-synaptic-runtime',
    ];

    super(loggingPackages);
  }
}
