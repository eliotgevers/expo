import { NativeModule } from 'expo';
import type { ObserveConfig, ObserveModule, ObserveAttributes } from './types';
declare class ExpoObserveModule extends NativeModule implements ObserveModule {
    dispatchEvents(): Promise<void>;
    configure(config: ObserveConfig): void;
    setGlobalAttributes(attributes?: ObserveAttributes | null): void;
    setBundleDefaults(defaults: {
        environment: string;
        isJsDev: boolean;
    }): void;
}
declare const _default: typeof ExpoObserveModule;
export default _default;
//# sourceMappingURL=module.web.d.ts.map