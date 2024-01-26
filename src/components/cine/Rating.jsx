/* eslint-disable react/prop-types */
import Star from "../../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((star, index) => (
        <img src={star} width="14" height="14" alt="" key={index} />
      ))}
    </>
  );
};

export default Rating;
