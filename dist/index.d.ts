export declare const Settings: SettingsStatic;
export declare class SettingsStatic {
    private _settings;
    extend(key: string, ...args: any[]): void;
    get(key: string, otherwise?: any): any;
    set(key: string, value: any): void;
}
