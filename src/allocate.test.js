const allocateMembers = require('./allocate.js')

describe('can allocate', () => {
  test('when the number of members is not divisible', () => {
    expect(
      allocateMembers(["a", "b", "c", "d", "e", "f", "g"], 3)
    ).toEqual(
      [
        ["g", "f", "e"],
        ["d", "c"],
        ["b", "a"],
      ]
    );
    expect(
      allocateMembers(["a", "b", "c", "d", "e", "f", "g", "h"], 3)
    ).toEqual(
      [
        ["h", "g", "f"],
        ["e", "d", "c"],
        ["b", "a"],
      ]
    );
  })
  test('when the number of members is divisible', () => {
    expect(
      allocateMembers(["a", "b", "c", "d", "e", "f", "g", "h", "i"], 3)
    ).toEqual(
      [
        ["i", "h", "g"],
        ["f", "e", "d"],
        ["c", "b", "a"],
      ]
    );
  })
})

