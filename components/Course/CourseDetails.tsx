import Ratings from "@/app/utils/Ratings";
import React from "react";
import { useSelector } from "react-redux";
import config from "@/app/config";
type Props = {
  data: any;
};

const CourseDetails = ({ data }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const dicountPercentenge =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;
  const discountPercentengePrice = dicountPercentenge.toFixed(0);
  const isPurchased =
    user && user?.courses?.find((item: any) => item._id === data._id);
  const handleOrder = (e: any) => {
    console.log("ggg");
  };
  return (
    <div>
      <div className="w-[90%] 800px:w-[90%] m-auto py-5">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 888px:w-165%) 800px:pr-5">
            <h1 className="text-[25px) font-Poppins font-[680] text-black dark:text-white">
              {data.name}
            </h1>
            <div className="flex items-center justify-between pt-3">
              <div className="flex itens-center">
                <Ratings rating={data.ratings} />
                <h5 className="text-black dark:text-white">
                  {data.reviews?.length} Reviews
                </h5>
              </div>
              <h5>(data.purchased) Students</h5>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
