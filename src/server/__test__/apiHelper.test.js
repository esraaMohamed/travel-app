import { getCurrentWeather, getForcastWeather, getGeoData, getPixaBayPhoto } from "../apiHelper";

describe("Api Helpers", () => {
    test("Testing the getCurrentWeather function", async () => {
        try {
            await getCurrentWeather("asff", "asfdsafs");
        } catch (error) {
            expect(error).toBe('Please provide the lat and lng values');
        }
    });
    test("Testing the getForcastWeather function", async () => {
        try {
            await getForcastWeather("asff", "asfdsafs");
        } catch (error) {
            expect(error).toBe('Please provide the lat and lng values');
        }
    });
    test("Testing the getGeoData function", async () => {
        try {
            await getGeoData("asff");
        } catch (error) {
            expect(error).toBe("Please provide valid destination");
        }
    });
    test("Testing the getPixaBayPhoto function", async () => {
        try {
            await getPixaBayPhoto("asff");
        } catch (error) {
            expect(error).toBe("Please provide valid destination");
        }
    });
});
