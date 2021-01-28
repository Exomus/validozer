/**
 * Thrown to indicate that a method has been passed an illegal or inappropriate argument.
 */
export class IllegalArgumentError extends Error {
    /**
     * Constructs an IllegalArgumentError with an optional detail message.
     * @param message the detail message
     */
    constructor(message?: string) {
        super(message);
        this.name = IllegalArgumentError.name;
    }
}
