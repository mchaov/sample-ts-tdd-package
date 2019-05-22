import { Core } from "./core";

describe("Core suite", () => {
    it("Core test", () => {
        expect(new Core()).toBeInstanceOf(Core);
    });
});