"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHooks = exports.requestHooks = exports.templateTags = void 0;
const all_variables_template_tag_1 = require("./all-variables-template-tag/all-variables-template-tag");
const definition_template_tag_1 = require("./definition-template-tag/definition-template-tag");
const request_hook_1 = require("./request-hook/request-hook");
const response_hook_1 = require("./response-hook/response-hook");
const variable_template_tag_1 = require("./variable-template-tag/variable-template-tag");
exports.templateTags = [definition_template_tag_1.definitionTemplateTag, variable_template_tag_1.savedVariableTemplateTag, all_variables_template_tag_1.allVariablesTemplateTag];
exports.requestHooks = [request_hook_1.variableDeclarationHeaderRequestHook];
exports.responseHooks = [response_hook_1.variableSavingResponseHook];
//# sourceMappingURL=index.js.map