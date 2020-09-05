const assert = require("assert");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

function allocateMembers(members, numberOfRooms) {
  const baseCount = (members.length / numberOfRooms) | 0;
  const mod = members.length % numberOfRooms;
  const rooms = [];
  for (let i = 0; i < numberOfRooms; i++) {
    if (i < mod) {
      rooms.push([...Array(baseCount + 1).keys()]);
    } else {
      rooms.push([...Array(baseCount).keys()]);
    }
  }

  return rooms.map((room) => {
    return room.map(() => members.pop());
  });
}

assert.deepStrictEqual(
  allocateMembers(["a", "b", "c", "d", "e", "f", "g"], 3),
  [
    ["g", "f", "e"],
    ["d", "c"],
    ["b", "a"],
  ]
);
assert.deepStrictEqual(
  allocateMembers(["a", "b", "c", "d", "e", "f", "g", "h"], 3),
  [
    ["h", "g", "f"],
    ["e", "d", "c"],
    ["b", "a"],
  ]
);
assert.deepStrictEqual(
  allocateMembers(["a", "b", "c", "d", "e", "f", "g", "h", "i"], 3),
  [
    ["i", "h", "g"],
    ["f", "e", "d"],
    ["c", "b", "a"],
  ]
);