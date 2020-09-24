import VaccineTest from "../vaccineTest";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    // TODO feedback: 这个测试的描述是说要injection with vaccine

    // expect(mockAcceptInjection).toHaveBeenCalledTimes(1);
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    mockGetHasAntibodies.mockReturnValue(true);
    const vaccineTest = new VaccineTest();
    const result = vaccineTest.test();
    // TODO feedback: 当我们测试的function有返回值的时候，我们测返回值就可以了

    // expect(mockGetHasAntibodies).toBeCalled();
    // expect(mockGetHasAntibodies).toBeCalledTimes(1);

    expect(result).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies.mockReturnValue(false);
    const vaccineTest = new VaccineTest();
    const result = vaccineTest.test();
    // TODO feedback: 当我们测试的function有返回值的时候，我们测返回值就可以了

    // expect(mockGetHasAntibodies).toBeCalled();
    // expect(mockGetHasAntibodies).toBeCalledTimes(1);
    expect(result).toEqual("Vaccine Test Failed");
  });
});
