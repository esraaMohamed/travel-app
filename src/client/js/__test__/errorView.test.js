import ErrorComponent from "../errorView";

describe("Error Component", () => {
    test("Testing the Error Component function", () => {
        expect(ErrorComponent).toBeDefined();
        expect(ErrorComponent()).toContain(`Oops! sorry something went wrong. Please enter a valid destination.`)
    });
});
