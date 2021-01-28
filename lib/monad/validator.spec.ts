import {Validator} from "./validator";
import {ValidationError} from "../error/validation.error";

interface MockUnit {
    foo: string;
    bar: number;
}

describe('Validator', () => {
    let validator: Validator<MockUnit>;

    beforeEach(() => {
        validator = Validator.of<MockUnit>({
            bar: 1,
            foo: 'test'
        })
    })

    it('should be defined', () => {
        expect(validator).toBeDefined();
    });

    describe('validate', () => {
        it('should not throw any error', () => {
            expect(() => validator.validate((mockUnit) => mockUnit.bar > 1, new Error('bar must be superior to 1'))).not.toThrow()
        });
    });

    describe('get', () => {
        it('should not throw any error even if no validation has been done', () => {
            expect(() => validator.get()).not.toThrow();
        });

        it('should throw a validation error because bar is equal to 1', () => {

            const expectedValidationError = new ValidationError([new Error('bar must be superior to 1')]);


            expect(() => validator.validate((mockUnit) => mockUnit.bar > 1, new Error('bar must be superior to 1')).get()).toThrowError(Error);

            try {
                validator.validate((mockUnit) => mockUnit.bar > 1, new Error('bar must be superior to 1')).get()
            } catch (e) {
                expect(e.name).toEqual('ValidationError');
            }
        });

        it('should not throw any error because the validation needs bar to be superior to 0', () => {

            const expectedValidationError: ValidationError = new ValidationError([new Error('bar must be superior to 0')]);

            expect(() => validator.validate((mockUnit) => mockUnit.bar > 0, new Error('bar must be superior to 1')).get()).not.toThrow();
            expect(validator.validate((mockUnit) => mockUnit.bar > 0, new Error('bar must be superior to 1')).get()).toEqual<MockUnit>({
                bar: 1,
                foo: 'test'
            })
        });
    });
});
