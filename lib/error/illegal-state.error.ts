/**
 * Signals that a method has been invoked at an illegal or inappropriate time. In other words, the Typescript environment or Typescript application is not in an appropriate state for the requested operation.
 */
export class IllegalStateError extends Error {
  /**
   * Constructs an IllegalStateException with an optional detail message. A detail message is a String that describes this particular exception.
   * @param message the string that contains a detailed message
   */
  constructor(message?: string) {
    super(message);
    this.name = IllegalStateError.name;
  }
}
