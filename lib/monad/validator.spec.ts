import {Validator} from "./validator";

interface MockUnit {
    foo: string;
    bar: number;
}

describe('Validator', function () {
    let validator: Validator<MockUnit>;

    beforeEach(() => {
        validator = Validator.of<MockUnit>({
            bar: 1,
            foo: 'test'
        })
    })

    it('should be defined', function () {
        expect(validator).toBeDefined();
    });
});
