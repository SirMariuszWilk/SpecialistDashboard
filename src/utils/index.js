import mockData from "./mockData";

const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

const getRandomInt = (max) => Math.floor(Math.random() * max);

/*
  generate random specialists with some of them using 2 available images
*/
export const getSpecialists = () => {
  const specialists = [];
  const { maleNames, femaleNames, surnames, professions } = mockData;

  for (let i = 0; i < 52106; i++) {
    const isFemale = getRandomInt(2);
    const name = getRandomItem(isFemale ? femaleNames : maleNames);
    const surname = getRandomItem(surnames);
    const rating = getRandomInt(4) + 1 + getRandomInt(10) / 10;

    specialists.push({
      name: `${name} ${surname}`,
      profession: getRandomItem(professions),
      image: getRandomInt(2)
        ? isFemale
          ? "erica-morisson"
          : "andrew-carter"
        : undefined,
      isFavorite: true,
      isMySpecialist: false,
      rating: rating,
      initRating: rating,
      ratingsCount: getRandomInt(200) + 1,
      userRating: null,
      id: i,
    });
  }

  return specialists;
};

export const debounce = (mainFunction, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};
