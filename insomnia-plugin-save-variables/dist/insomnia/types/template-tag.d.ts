import { TemplateActionContext, TemplateRunContext } from './template-context';
import { TemplateTagStringArg, TemplateTagNumberArg, TemplateTagModelArg, TemplateTagEnumArg, TemplateTagBooleanArg } from './template-tag-arg';
export declare type LiveDisplayArg = {
    quotedBy: string;
    type: string;
    value: string;
};
export declare type TemplateTag = {
    name: string;
    displayName: string;
    disablePreview?: () => boolean;
    description?: string;
    deprecated?: boolean;
    liveDisplayName?: (args: LiveDisplayArg[]) => string | undefined;
    validate?: (value: unknown) => string | undefined;
    priority?: number;
    args?: Array<TemplateTagStringArg | TemplateTagNumberArg | TemplateTagModelArg | TemplateTagEnumArg | TemplateTagBooleanArg>;
    actions?: Array<{
        name: string;
        icon?: string;
        run?: (context: TemplateActionContext) => Promise<void>;
    }>;
    run: (context: TemplateRunContext, ...args: unknown[]) => Promise<unknown>;
};
//# sourceMappingURL=template-tag.d.ts.map