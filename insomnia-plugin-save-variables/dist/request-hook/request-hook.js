"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variableDeclarationHeaderRequestHook = void 0;
const custom_header_format_1 = require("../custom-header-format/custom-header-format");
const variableDeclarationHeaderRequestHook = async (context) => {
    const headers = context.request.getHeaders();
    const customHeaderNames = headers.map(header => header.name).filter(custom_header_format_1.isCustomHeader);
    customHeaderNames.forEach(name => context.request.removeHeader(name));
    const variableDefinitions = customHeaderNames.map(custom_header_format_1.parseCustomHeader);
    await context.store.setItem('variableDefinitions', JSON.stringify(variableDefinitions));
};
exports.variableDeclarationHeaderRequestHook = variableDeclarationHeaderRequestHook;
//# sourceMappingURL=request-hook.js.map