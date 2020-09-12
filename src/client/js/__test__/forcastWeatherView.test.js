import ForcastWeatherComponent from "../forcastWeatherView";

describe("ForcastWeatherComponent", () => {
    test("Testing the ForcastWeatherComponent function", () => {
        expect(ForcastWeatherComponent).toBeDefined();
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`paris`)
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`23`)
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`11`)
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`5:20`)
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`8:09`)
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`http://mock.url`)
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`Few clouds`)
        expect(ForcastWeatherComponent('paris', '23', '11', '5:20', '8:09', 'http://mock.url', 'Few clouds', 'Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)')).toContain(`Fri Sep 11 2020 17:00:00 GMT-0700 (PDT)`)
    });
});
