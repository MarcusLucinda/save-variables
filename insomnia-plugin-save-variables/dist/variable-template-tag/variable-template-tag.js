"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savedVariableTemplateTag = void 0;
const variable_key_1 = require("../variable-key");
const sweetalert_1 = __importDefault(require("sweetalert"));
let lastStoreItemName = '';
exports.savedVariableTemplateTag = {
    name: 'variable',
    displayName: 'Variable',
    description: 'use a saved variable',
    liveDisplayName: (args) => {
        return `Variable - ${args[0].value}`;
    },
    args: [
        {
            displayName: 'Variable Name',
            defaultValue: '',
            type: 'string',
        },
    ],
    actions: [
        {
            name: 'Manually Update Value',
            run: async (context) => {
                if (lastStoreItemName !== null) {
                    const currentValue = await context.store.getItem(lastStoreItemName);
                    const newValue = await sweetalert_1.default({
                        title: 'Manually Update Value',
                        text: 'New Value:',
                        buttons: ['Cancel', 'Update Now'],
                        content: {
                            element: 'input',
                            attributes: {
                                placeholder: 'New value',
                                type: 'text',
                                value: currentValue,
                            },
                        },
                    });
                    if (newValue !== null) {
                        context.store.setItem(lastStoreItemName, newValue);
                    }
                }
            },
        },
    ],
    run: async (context, variableNameArg) => {
        const variableName = variableNameArg;
        const storeItemName = variable_key_1.getVariableKey(context.meta.workspaceId, variableName);
        lastStoreItemName = storeItemName;
        if (await context.store.hasItem(storeItemName)) {
            return await context.store.getItem(storeItemName);
        }
        return await getHelpfulErrorMessage(context, variableName);
    },
};
async function getHelpfulErrorMessage(context, variableName) {
    const allItems = await context.store.all();
    const variables = allItems
        .filter(item => item.key.startsWith('variable-'))
        .filter(item => item.key.split('-').length === 3)
        .map(item => variable_key_1.parseVariableKey(item.key))
        .filter(keyParts => keyParts.workspaceId === context.meta.workspaceId)
        .map(keyParts => `"${keyParts.variableName}"`);
    if (variables.length === 0) {
        return `No variable with name "${variableName}". No variables have been set yet.`;
    }
    else {
        return `No variable with name "${variableName}". Choices are [\n${variables.join(',\n')}\n]`;
    }
}
//# sourceMappingURL=variable-template-tag.js.map