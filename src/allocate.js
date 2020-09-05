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

module.exports = allocateMembers