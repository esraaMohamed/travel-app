import TripInfoComponent from "../tripInfoView";

describe("TripInfoComponent", () => {
    test("Testing the TripInfoComponent function", () => {
        expect(TripInfoComponent).toBeDefined();
        expect(TripInfoComponent('paris', 'France')).toContain(`paris`)
        expect(TripInfoComponent('paris', 'France')).toContain(`France`)
    });
});
