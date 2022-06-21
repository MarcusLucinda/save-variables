"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVariableKey = exports.getVariableKey = void 0;
const base64_util_1 = require("./base64-util");
function getVariableKey(workspaceId, variableName) {
    return `variable-${base64_util_1.base64Encode(workspaceId)}-${base64_util_1.base64Encode(variableName)}`;
}
exports.getVariableKey = getVariableKey;
function parseVariableKey(key) {
    const parts = key.split('-');
    return {
        workspaceId: base64_util_1.base64Decode(parts[1]),
        variableName: base64_util_1.base64Decode(parts[2]),
    };
}
exports.parseVariableKey = parseVariableKey;
//# sourceMappingURL=variable-key.js.map