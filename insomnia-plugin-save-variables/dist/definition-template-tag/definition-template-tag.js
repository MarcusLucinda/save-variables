"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definitionTemplateTag = void 0;
const custom_header_format_1 = require("../custom-header-format/custom-header-format");
exports.definitionTemplateTag = {
    name: 'savevariable',
    displayName: 'Save Variable',
    description: 'save response value to a variable',
    liveDisplayName: (args) => {
        return `Save Variable - ${args[0].value}`;
    },
    args: [
        {
            displayName: 'Variable Name',
            defaultValue: '',
            type: 'string',
        },
        {
            displayName: 'Attribute',
            type: 'enum',
            defaultValue: 'body',
            options: [
                {
                    displayName: 'Body Attribute',
                    description: 'value of response body',
                    value: 'body',
                },
                {
                    displayName: 'Header',
                    description: 'value of response header',
                    value: 'header',
                },
            ],
        },
        {
            displayName: args => (args[1].value === 'body' ? 'Response JSON Path' : 'Header Name'),
            defaultValue: '',
            type: 'string',
        },
    ],
    run: async (context, variableNameArg, attributeArg, pathArg) => {
        const variableName = variableNameArg;
        const attribute = attributeArg;
        const path = pathArg;
        const workspaceId = context.meta.workspaceId;
        return custom_header_format_1.createCustomHeader({ variableName, attribute, path, workspaceId });
    },
};
//# sourceMappingURL=definition-template-tag.js.map