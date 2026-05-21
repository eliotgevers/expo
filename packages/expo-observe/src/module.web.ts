import { NativeModule, registerWebModule } from 'expo';

import type { ObserveConfig, ObserveModule, ObserveAttributes } from './types';

class ExpoObserveModule extends NativeModule implements ObserveModule {
  async dispatchEvents() {}
  configure(config: ObserveConfig): void {}
  setGlobalAttributes(attributes?: ObserveAttributes | null): void {}
  setBundleDefaults(defaults: { environment: string; isJsDev: boolean }): void {}
}

export default registerWebModule(ExpoObserveModule, 'ExpoObserve');
