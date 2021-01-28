"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./validator");
var validation_error_1 = require("../error/validation.error");
describe('Validator', function () {
    var validator;
    beforeEach(function () {
        validator = validator_1.Validator.of({
            bar: 1,
            foo: 'test'
        });
    });
    it('should be defined', function () {
        expect(validator).toBeDefined();
    });
    describe('validate', function () {
        it('should not throw any error', function () {
            expect(function () { return validator.validate(function (mockUnit) { return mockUnit.bar > 1; }, new Error('bar must be superior to 1')); }).not.toThrow();
        });
    });
    describe('get', function () {
        it('should not throw any error even if no validation has been done', function () {
            expect(function () { return validator.get(); }).not.toThrow();
        });
        it('should throw a validation error because bar is equal to 1', function () {
            var expectedValidationError = new validation_error_1.ValidationError([new Error('bar must be superior to 1')]);
            expect(function () { return validator.validate(function (mockUnit) { return mockUnit.bar > 1; }, new Error('bar must be superior to 1')).get(); }).toThrowError(Error);
            try {
                validator.validate(function (mockUnit) { return mockUnit.bar > 1; }, new Error('bar must be superior to 1')).get();
            }
            catch (e) {
                expect(e.name).toEqual('ValidationError');
            }
        });
        it('should not throw any error because the validation needs bar to be superior to 0', function () {
            var expectedValidationError = new validation_error_1.ValidationError([new Error('bar must be superior to 0')]);
            expect(function () { return validator.validate(function (mockUnit) { return mockUnit.bar > 0; }, new Error('bar must be superior to 1')).get(); }).not.toThrow();
            expect(validator.validate(function (mockUnit) { return mockUnit.bar > 0; }, new Error('bar must be superior to 1')).get()).toEqual({
                bar: 1,
                foo: 'test'
            });
        });
    });
});
