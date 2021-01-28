/**
 * Thrown to indicate that a method has been passed an illegal or inappropriate argument.
 */
import {IllegalArgumentError} from "./illegal-argument.error";

export class ValidationError extends Error {
    private childErrorList: Error[] = [];

    /**
     * Constructs an IllegalArgumentError with an optional detail message.
     */
    constructor() {
        super();
        this.name = ValidationError.name;
    }

    get message(): string {
        let builtInMessage = 'One or multiple errors have been found during validation:\n'

        this.childErrorList.forEach((error, index) => {
            builtInMessage += index + 1 + ') ' + error.name + (error.message ? ' - ' + error.message : '') + '\n';
        })
        return builtInMessage;
    }

    appendChildren(errorList: Error[]) {
        if (!errorList) throw new IllegalArgumentError('Error passed cannot be null or undefined.');
        this.childErrorList = this.childErrorList.concat(errorList);
    }
}
