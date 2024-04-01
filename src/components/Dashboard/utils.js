import { colorThemes } from "./constants";

export const getNewGlobalRating = (specialist, userRating) => {
  if (specialist.userRating) {
    return (
      (specialist.initRating * (specialist.ratingsCount - 1) + userRating) /
      specialist.ratingsCount
    );
  }

  return (
    (specialist.rating * specialist.ratingsCount + userRating) /
    (specialist.ratingsCount + 1)
  );
};

export const filterBySearch = (specialists, search) => {
  const lowerCaseSearch = search.toLowerCase();

  const isInSearch = (specialist) =>
    specialist.name.toLowerCase().includes(lowerCaseSearch) ||
    specialist.profession.toLowerCase().includes(lowerCaseSearch);

  return search.length > 2 ? specialists?.filter(isInSearch) : specialists;
};

export const charToTheme = (s) => colorThemes[s.charCodeAt(0) % 3];
