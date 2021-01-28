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
exports.IllegalStateError = void 0;
/**
 * Signals that a method has been invoked at an illegal or inappropriate time. In other words,
 * the Typescript environment or Typescript application is not in an appropriate state for the requested operation.
 */
var IllegalStateError = /** @class */ (function (_super) {
    __extends(IllegalStateError, _super);
    /**
     * Constructs an IllegalStateException with an optional detail message. A detail message is a String that describes this particular exception.
     * @param message the string that contains a detailed message
     */
    function IllegalStateError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = IllegalStateError.name;
        return _this;
    }
    return IllegalStateError;
}(Error));
exports.IllegalStateError = IllegalStateError;
