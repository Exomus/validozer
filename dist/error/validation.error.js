"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
/**
 * Thrown to indicate that a method has been passed an illegal or inappropriate argument.
 */
var illegal_argument_error_1 = require("./illegal-argument.error");
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    /**
     * Constructs an IllegalArgumentError with an optional detail message.
     */
    function ValidationError(errorList) {
        var _this = _super.call(this) || this;
        if (!errorList) {
            throw new illegal_argument_error_1.IllegalArgumentError('errorList must be defined');
        }
        _this.name = ValidationError.name;
        var builtInMessage = 'One or multiple errors have been found during validation:\n';
        errorList.forEach(function (error, index) {
            builtInMessage += error.message ? index + 1 + ") " + error.name + "\n" : index + 1 + ") " + error.name + " - " + error.message + "\n";
        });
        _this.message = builtInMessage;
        return _this;
    }
    return ValidationError;
}(Error));
exports.ValidationError = ValidationError;
