import PhotoComponent from "../photoView";

describe("PhotoComponent", () => {
    test("Testing the PhotoComponent function", () => {
        expect(PhotoComponent).toBeDefined();
        expect(PhotoComponent('http://mock.url', 100, 100)).toContain(`<img class="photo" src=http://mock.url width=100 height=100 alt='destination-photo' />`)
    });
});
