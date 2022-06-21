"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCustomHeader = exports.createCustomHeader = exports.isCustomHeader = void 0;
const base64_util_1 = require("../base64-util");
const headerPrefix = 'X-Save-Variable';
function isCustomHeader(headerName) {
    return headerName.startsWith(headerPrefix);
}
exports.isCustomHeader = isCustomHeader;
function createCustomHeader(variableDefinition) {
    const workspaceId = base64_util_1.base64Encode(variableDefinition.workspaceId);
    const name = base64_util_1.base64Encode(variableDefinition.variableName);
    const attribute = base64_util_1.base64Encode(variableDefinition.attribute);
    const path = base64_util_1.base64Encode(variableDefinition.path);
    return `${headerPrefix}-${workspaceId}-${name}-${attribute}-${path}`;
}
exports.createCustomHeader = createCustomHeader;
function parseCustomHeader(headerName) {
    const parts = headerName.split('-');
    return {
        workspaceId: base64_util_1.base64Decode(parts[3]),
        variableName: base64_util_1.base64Decode(parts[4]),
        attribute: base64_util_1.base64Decode(parts[5]),
        path: base64_util_1.base64Decode(parts[6]),
    };
}
exports.parseCustomHeader = parseCustomHeader;
//# sourceMappingURL=custom-header-format.js.map