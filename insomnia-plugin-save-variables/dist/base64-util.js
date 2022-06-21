"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64Decode = exports.base64Encode = void 0;
function base64Encode(data) {
    return Buffer.from(data).toString('base64');
}
exports.base64Encode = base64Encode;
function base64Decode(data) {
    return Buffer.from(data, 'base64').toString();
}
exports.base64Decode = base64Decode;
//# sourceMappingURL=base64-util.js.map