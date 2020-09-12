import DestinationInfoComponent from "../destinationInfoView";

describe("DestinationInfoComponent", () => {
    test("Testing the DestinationInfoComponent function", () => {
        expect(DestinationInfoComponent).toBeDefined();
        expect(DestinationInfoComponent('paris', 'France', '2138551', 'Paris', 'FR', 'a capital of a political entity')).toContain(`paris`)
        expect(DestinationInfoComponent('paris', 'France', '2138551', 'Paris', 'FR', 'a capital of a political entity')).toContain(`2138551`)
        expect(DestinationInfoComponent('paris', 'France', '2138551', 'Paris', 'FR', 'a capital of a political entity')).toContain(`FR`)
        expect(DestinationInfoComponent('paris', 'France', '2138551', 'Paris', 'FR', 'a capital of a political entity')).toContain(`a capital of a political entity`) 
    });
});
