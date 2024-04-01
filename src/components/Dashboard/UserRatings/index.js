import React, { useState } from "react";
import {
  Ratings,
  UserRating,
  AverageRating,
  Star,
  AverageRatingValue,
  AverageRatingCount,
} from "./styles";
import { ReactSVG } from "react-svg";
import { useDispatch } from "react-redux";

import { setUserRating } from "../slice";

import star from "../../../assets/icons/star.svg";

const UserRatings = ({ rating, ratingsCount, userRating, id }) => {
  const [hover, setHover] = useState(null);
  const dispatch = useDispatch();

  const setRating = (userRating) => {
    dispatch(setUserRating({ id, userRating }));
  };

  return (
    <Ratings>
      <UserRating>
        {[...Array(5)].map((_, index) => {
          const starRating = index + 1;

          return (
            <Star
              selected={starRating <= (hover || userRating)}
              onClick={() => setRating(starRating)}
              onMouseEnter={() => setHover(starRating)}
              onMouseLeave={() => setHover(null)}
              key={index}
              role="button"
              tabIndex="0"
              onKeyDown={(e) =>
                e.key === "Enter" ? setRating(starRating) : null
              }
            >
              <ReactSVG src={star} />
            </Star>
          );
        })}
      </UserRating>

      <AverageRating>
        <AverageRatingValue>{rating}</AverageRatingValue>
        <AverageRatingCount>({ratingsCount})</AverageRatingCount>
      </AverageRating>
    </Ratings>
  );
};

export default UserRatings;
