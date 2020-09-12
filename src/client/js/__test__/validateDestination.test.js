import { validateDestination } from "../validateDestination";

describe("validateDestintaion", () => {
    test("Testing the validateDestination function", () => {
        expect(validateDestination).toBeDefined();
        expect(validateDestination()).toEqual(false)
        expect(validateDestination('Paris')).toEqual(true)
    });
});
