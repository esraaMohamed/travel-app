import { handleSubmit } from "../formHandler";

describe("Testing the handle submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    const event = new Event('click', { "target": { "value": 8 } })
    jest.spyOn(event, 'preventDefault');
    document.body.innerHTML += `
    <section>
                <form class="" onsubmit="return Client.handleSubmit(event)">
                    <label class="title" for="destination">City Destination:
                    </label>
                    <input id="destination" type="text" name="input" value="" placeholder="Enter Destination">
                    <label class="title" for="from">Date:
                    </label>
                    <input id="from" type="date" min="2018-01-01" max="2050-12-31" name="input" value="" placeholder="Choose From Date">
                    <label class="title" for="forcast">Want a 16 day forcast?</label><input id="forcast" type="checkbox"/>
                    <input id="submit" type="submit" name="" value="Let's Go!" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
                    <p id="error" class="error" hidden></p>
                </form>
                <section>
                    <div id="photo"></div>
                </section>
                <section class="results">
                    <div id="photo"></div>
                    <div id="invalid-destination"></div>
                    <div id="trip-info"></div>
                    <div id="destination-info"></div>
                    <div id="current-weather"></div>
                    <div id="forcast-weather"></div>
                </section>
            </section>`;
    handleSubmit(event)
    expect(handleSubmit).toBeDefined();
    expect(event.preventDefault).toHaveBeenCalled()
  });
});
