const ReviewCard = ({ imgURL, customerName, rating, feeding }) => {
  return (
    <section flex justify-center items-center flex-col>
      <img
        src={imgURL}
        alt="customer"
        className="object-cover rounded-full w-[120px] h-[120px]"
      />
    </section>
  );
};

export default ReviewCard;
