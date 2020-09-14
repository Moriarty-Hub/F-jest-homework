import { register } from "../user";
import axios from "axios";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const username = "xdong";
    const password = "123456";
    const expected = { username, password };
    const request = { data: expected };
    axios.post.mockResolvedValue(request);
    await expect(register(username, password)).resolves.toEqual(expected);
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const username = "xdong";
    const password = "123456";
    const actual = new Error("wrong username or password");
    verifyUsername.mockImplementation(() => false);
    await expect(register(username, password)).rejects.toThrowError(actual);
  });
});
