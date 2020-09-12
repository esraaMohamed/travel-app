import CurrentWeatherComponent from "../currentWeatherView";

describe("Current Weather Component", () => {
    test("Testing the Current Weather Component function", () => {
        expect(CurrentWeatherComponent).toBeDefined();
        expect(CurrentWeatherComponent('paris', 'Europe/Paris', '20', '05:22', '18:09', 'http://mock.url', 'Clear sky')).toContain(`paris`)
        expect(CurrentWeatherComponent('paris', 'Europe/Paris', '20', '05:22', '18:09', 'http://mock.url', 'Clear sky')).toContain(`Europe/Paris`)
        expect(CurrentWeatherComponent('paris', 'Europe/Paris', '20', '05:22', '18:09', 'http://mock.url', 'Clear sky')).toContain(`20`)
        expect(CurrentWeatherComponent('paris', 'Europe/Paris', '20', '05:22', '18:09', 'http://mock.url', 'Clear sky')).toContain(`05:22`)
        expect(CurrentWeatherComponent('paris', 'Europe/Paris', '20', '05:22', '18:09', 'http://mock.url', 'Clear sky')).toContain(`18:09`)
        expect(CurrentWeatherComponent('paris', 'Europe/Paris', '20', '05:22', '18:09', 'http://mock.url', 'Clear sky')).toContain(`http://mock.url`)
        expect(CurrentWeatherComponent('paris', 'Europe/Paris', '20', '05:22', '18:09', 'http://mock.url', 'Clear sky')).toContain(`Clear sky`) 
    });
});
