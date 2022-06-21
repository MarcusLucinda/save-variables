export declare type VariableKeyParts = {
    workspaceId: string;
    variableName: string;
};
export declare function getVariableKey(workspaceId: string, variableName: string): string;
export declare function parseVariableKey(key: string): VariableKeyParts;
//# sourceMappingURL=variable-key.d.ts.map