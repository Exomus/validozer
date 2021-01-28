import {ValidationError} from "../error/validation.error";

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
export class Validator<T> {
    /**
     * Object that is validated.
     */
    private readonly object: T;

    /**
     * List of errors produced during the validation
     */
    private readonly errorList: Error[] = [];

    /**
     * Creates a monadic value of given object.
     *
     * @param object object to be validated
     */
    private constructor(object: T) {
        this.object = object;
    }

    /**
     * Creates validator against given object.
     *
     * @param t object to be validated
     * @return new instance of a validator
     */
    public static of<T>(t: T): Validator<T> {
        return new Validator<T>(t);
    }

    /**
     * Checks if the validation is successful.
     *
     * @param predicate one argument boolean-valued function that represents one step of validation.
     *                   Adds exception to main validation exception list when single step validation
     *                   ends with failure.
     * @param failureError Error that will be registered with a customized message
     * @return this
     */
    public validate(predicate: (t: T) => boolean, failureError: Error): Validator<T> {
        try {
            if (!predicate.call(undefined, this.object)) {
                this.errorList.push(failureError);
            }
        } catch (e) {
            this.errorList.push(e);
        }
        return this;
    }

    /**
     * Receives validated object or throws error when invalid.
     *
     * @return object that was validated
     * @throws Error when any validation step results with failure
     */
    public get(): T {
        if (this.errorList.length === 0) {
            return this.object;
        }
        const validationError: ValidationError = new ValidationError(this.errorList);
        validationError.stack = JSON.stringify(this.object);
        throw validationError;
    }
}
