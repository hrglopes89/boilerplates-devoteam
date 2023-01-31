import Request from "../base";

export default class Jokes {
    ENDPOINT: string = "/jokes";
    requests: Request;

    constructor(requests: Request) {
        this.requests = requests;
    }

    async getRandomJoke() {
        let endpoint = `${this.ENDPOINT}/random`
        return this.requests.doRequest(endpoint, "GET");
    }
}
