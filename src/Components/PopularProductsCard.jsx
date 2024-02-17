import { star } from "../assets/icons";

export const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="text-2xl mt-2 leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="text-2xl font-montserrat mt-2 font-semibold text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};
