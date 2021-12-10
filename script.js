const testArray = [
  { id: 1, universe: "marvel", name: "Spider Man" },
  { id: 6, universe: "Walt Disney", name: "Avatar" },
  { id: 2, universe: "marvel", name: "Iron Man" },
  { id: 3, universe: "dc", name: "Aqua Man" },
  { id: 4, universe: "dc", name: "Bat Man" },
  { id: 5, universe: "Walt Disney", name: "X-mens" },
];

const groupBy = function (arr, key) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Array is not provided");
    }
    if (!key) {
      throw new Error("Key is not provided");
    }
    return arr.reduce((acc, val) => {
      if (val[key] === undefined) {
        return {};
      }
      const property = val[key];
      if (property in acc) {
        return {
          ...acc,
          [property]: acc[property].concat(val),
        };
      }
      return { ...acc, [property]: [val] };
    }, {});
  } catch (error) {
    console.error(error);
  }
};
console.log(groupBy(testArray, "universe"));
