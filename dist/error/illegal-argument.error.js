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
exports.IllegalArgumentError = void 0;
/**
 * Thrown to indicate that a method has been passed an illegal or inappropriate argument.
 */
var IllegalArgumentError = /** @class */ (function (_super) {
    __extends(IllegalArgumentError, _super);
    /**
     * Constructs an IllegalArgumentError with an optional detail message.
     * @param message the detail message
     */
    function IllegalArgumentError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = IllegalArgumentError.name;
        return _this;
    }
    return IllegalArgumentError;
}(Error));
exports.IllegalArgumentError = IllegalArgumentError;
