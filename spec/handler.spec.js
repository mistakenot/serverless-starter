var handler = require('../handler');

describe("Hello function", () => {

  it("returns world", () => {
    var result;
    handler.hello(null, null, (error, r) => result = r);
    expect(result).toBe("world");
  })
  
})