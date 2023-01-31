import Request from "../../src/base";
import Jokes from "../../src/endpoints/Jokes";



describe("Jokes Endpoint", () => {
    let request: Request;
    let jokes: Jokes;

    beforeEach(async () => {
        request = new Request();
        jokes = new Jokes(request);
    });

    it("Jokes endpoint is up", async () => {
        let res = await jokes.getRandomJoke();
        
        expect(res.status).toEqual(200)
        expect(res.data).toHaveProperty("value")
    });
});
