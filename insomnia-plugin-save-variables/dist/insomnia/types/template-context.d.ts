import { AppContext } from './app-context';
import { StoreContext } from './store-context';
export declare type TemplateActionContext = {
    store: StoreContext;
};
export declare type TemplateRunContext = {
    app: AppContext;
    store: StoreContext;
    meta: {
        workspaceId: string;
    };
};
//# sourceMappingURL=template-context.d.ts.map