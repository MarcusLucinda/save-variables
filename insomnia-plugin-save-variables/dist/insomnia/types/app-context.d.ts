export declare type AppContext = {
    alert(title: string, message?: string): Promise<void>;
    prompt(title: string, options?: {
        label?: string;
        defaultValue?: string;
        submitName?: string;
        cancelable?: boolean;
    }): Promise<string>;
    getPath(name: 'desktop'): string;
    showSaveDialog(options: {
        defaultPath?: string;
    }): Promise<string | null>;
};
//# sourceMappingURL=app-context.d.ts.map