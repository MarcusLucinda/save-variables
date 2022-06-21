"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allVariablesTemplateTag = void 0;
exports.allVariablesTemplateTag = {
    name: 'allvariables',
    displayName: 'All Variables',
    description: 'show all saved variables',
    run: async (context) => {
        const allItems = await context.store.all();
        const variables = allItems
            .filter(item => item.key.startsWith('variable-'))
            .reduce((acc, curr) => {
            acc[curr.key.substring(9)] = curr.value;
            return acc;
        }, {});
        return JSON.stringify(variables, null, 2);
    },
};
//# sourceMappingURL=all-variables-template-tag.js.map