/**
 * Thrown to indicate that a method has been passed an illegal or inappropriate argument.
 */
import {IllegalArgumentError} from "./illegal-argument.error";

export class ValidationError extends Error {

    /**
     * Constructs an IllegalArgumentError with an optional detail message.
     */
    constructor(errorList: Error[]) {
        super();
        if (!errorList) {
            throw new IllegalArgumentError('errorList must be defined');
        }
        this.name = ValidationError.name;

        let builtInMessage = 'One or multiple errors have been found during validation:\n'
        errorList.forEach((error, index) => {
            builtInMessage += error.message ? `${index + 1}) ${error.name}\n` : `${index + 1}) ${error.name} - ${error.message}\n`;
        })
        this.message = builtInMessage;
    }
}
