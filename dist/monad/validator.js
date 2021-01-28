"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var illegal_argument_error_1 = require("../error/illegal-argument.error");
var validation_error_1 = require("../error/validation.error");
/**
 * Class representing Monad design pattern. Monad is a way of chaining operations on the given
 * object together step by step. In Validator each step results in either success or failure
 * indicator, giving a way of receiving each of them easily and finally getting validated object or
 * list of exceptions.
 *
 * @param <T> Placeholder for an object.
 * @link https://github.com/iluwatar/java-design-patterns/blob/master/monad/src/main/java/com/iluwatar/monad/Validator.java
 * This is a reimplementation of the monad pattern for validation purpose coming from a repository in Java to Typescript.
 *
 * CAN CERTAINLY BE REPLACED BY CLASS-VALIDATOR LIBRARY
 */
var Validator = /** @class */ (function () {
    /**
     * Creates a monadic value of given object.
     *
     * @param object object to be validated
     */
    function Validator(object) {
        /**
         * List of errors produced during the validation
         */
        this.errorList = [];
        this.object = object;
    }
    /**
     * Creates validator against given object.
     *
     * @param t object to be validated
     * @return new instance of a validator
     */
    Validator.of = function (t) {
        if (!t) {
            throw new illegal_argument_error_1.IllegalArgumentError("Undefined or null object passed through the Validator constructor");
        }
        return new Validator((t));
    };
    /**
     * Checks if the validation is successful.
     *
     * @param predicate one argument boolean-valued function that represents one step of validation.
     *                   Adds exception to main validation exception list when single step validation
     *                   ends with failure.
     * @param failureError Error that will be registered with a customized message
     * @return this
     */
    Validator.prototype.validate = function (predicate, failureError) {
        if (!predicate.call(undefined, this.object)) {
            this.errorList.push(failureError);
        }
        return this;
    };
    /**
     * Receives validated object or throws error when invalid.
     *
     * @return object that was validated
     * @throws Error when any validation step results with failure
     */
    Validator.prototype.get = function () {
        if (this.errorList.length === 0) {
            return this.object;
        }
        var validationError = new validation_error_1.ValidationError(this.errorList);
        validationError.stack = JSON.stringify(this.object);
        throw validationError;
    };
    return Validator;
}());
exports.Validator = Validator;
