"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variableSavingResponseHook = void 0;
const jsonpath_plus_1 = require("jsonpath-plus");
const variable_key_1 = require("../variable-key");
const variableSavingResponseHook = async (context) => {
    const serializedDefinitions = await context.store.getItem('variableDefinitions');
    await context.store.removeItem('variableDefinitions');
    if (serializedDefinitions) {
        try {
            const definitions = JSON.parse(serializedDefinitions);
            const response = JSON.parse((context.response.getBody() || '').toString());
            await extractVariablesFromResponse(definitions, response, context);
        }
        catch (e) {
            console.log('Save Variables Plugin Response Hook Error', e);
        }
    }
};
exports.variableSavingResponseHook = variableSavingResponseHook;
async function extractVariablesFromResponse(definitions, response, context) {
    const promises = definitions.map(async (def) => {
        const value = getValueFromResponse(response, def, context);
        if (value !== undefined) {
            const result = value === null ? null : value.toString();
            const key = variable_key_1.getVariableKey(def.workspaceId, def.variableName);
            await context.store.setItem(key, result);
        }
    });
    await Promise.all(promises);
}
function getValueFromResponse(response, definition, context) {
    if (definition.attribute === 'body') {
        return jsonpath_plus_1.JSONPath({
            path: definition.path,
            json: response,
            wrap: false,
        });
    }
    else {
        if (!context.response.hasHeader(definition.path)) {
            return undefined;
        }
        const header = context.response.getHeader(definition.path);
        if (Array.isArray(header)) {
            return header[0];
        }
        else {
            return header;
        }
    }
}
//# sourceMappingURL=response-hook.js.map