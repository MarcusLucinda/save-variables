"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMockHeaders = void 0;
function createMockHeaders() {
    const items = new Map();
    return {
        getHeaders: () => Array.from(items).map(([name, value]) => ({
            name,
            value,
        })),
        getHeader: name => (items.has(name) ? items.get(name) : null),
        hasHeader: name => items.has(name),
        removeHeader: name => {
            items.delete(name);
        },
        setHeader: (name, value) => {
            items.set(name, value);
        },
        addHeader: (name, value) => {
            items.set(name, value);
        },
    };
}
exports.createMockHeaders = createMockHeaders;
//# sourceMappingURL=headers-mock.js.map