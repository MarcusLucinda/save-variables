export declare type TemplateTagArg = {
    displayName: string | ((args: TemplateTagArgWithValue[]) => string);
    description?: string;
    defaultValue: string | number | boolean;
    type: 'string' | 'number' | 'enum' | 'model' | 'boolean';
    hide?: (args: Array<TemplateTagArg & {
        value: unknown;
    }>) => boolean;
};
export declare type TemplateTagArgWithValue = TemplateTagArg & {
    value: unknown;
};
export declare type TemplateTagStringArg = TemplateTagArg & {
    type: 'string';
    placeholder?: string;
};
export declare type TemplateTagNumberArg = TemplateTagArg & {
    type: 'number';
};
export declare type TemplateTagModelArg = TemplateTagArg & {
    type: 'model';
    modelType?: string;
};
export declare type TemplateTagEnumArg = TemplateTagArg & {
    type: 'enum';
    options?: Array<{
        displayName: string;
        value: string;
        description?: string;
        placeholder?: string;
    }>;
};
export declare type TemplateTagBooleanArg = TemplateTagArg & {
    type: 'boolean';
};
//# sourceMappingURL=template-tag-arg.d.ts.map