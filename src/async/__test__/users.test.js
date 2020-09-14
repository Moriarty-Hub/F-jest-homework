import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const expected = { username: "xdong" };
    const actual = { data: expected };
    axios.get.mockResolvedValue(actual);
    await expect(getUsers()).resolves.toEqual(expected);
  });
});
