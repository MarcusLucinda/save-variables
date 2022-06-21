"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMockStore = void 0;
function createMockStore() {
    const items = new Map();
    return {
        hasItem: async (key) => items.has(key),
        setItem: async (key, value) => {
            items.set(key, value);
        },
        getItem: async (key) => { var _a; return (_a = items.get(key)) !== null && _a !== void 0 ? _a : null; },
        removeItem: async (key) => {
            items.delete(key);
        },
        clear: async () => items.clear(),
        all: async () => Array.from(items).map(([key, value]) => ({
            key,
            value,
        })),
    };
}
exports.createMockStore = createMockStore;
//# sourceMappingURL=store-mock.js.map