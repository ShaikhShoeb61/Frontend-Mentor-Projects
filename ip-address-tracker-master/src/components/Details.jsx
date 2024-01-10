import React, { useContext } from "react";
import { FetchContext } from "../Context/FetchContext";

const Details = () => {
  const { data, loading, error } = useContext(FetchContext);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="absolute z-10 text-center rounded-[0.625rem] py-[1.5rem] md:py-[3rem] px-[3rem] bg-white left-[0px] md:m-[auto] top-[162px] md:top-[195px] right-[0px] max-w-[1024px] mx-[1.2rem]">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex gap-[1.2rem] flex-col justify-center min-[900px]:flex-row md:justify-between items-center">
          <div className="md:px-10 md:text-left">
            <p className="text-[0.625rem] tracking-[0.1rem] font-bold text-DG">
              IP ADDRESS
            </p>
            <span className="text-[1.37rem] font-medium text-VDG">
              {data?.ip}
            </span>
          </div>
          <div className="md:px-10 md:text-left text-center lg:border-l-[1px]">
            <p className="text-[0.625rem] tracking-[0.1rem] font-bold text-DG">
              LOCATION
            </p>
            <span className="text-[1.37rem] font-medium text-VDG">
              {`${data.location?.city}, ${data.location.country}, ${data.location.postalCode}`}
            </span>
          </div>
          <div className="md:px-10 md:text-left text-center lg:border-l-[1px]">
            <p className="text-[0.625rem] tracking-[0.1rem] font-bold text-DG">
              TIMEZONE
            </p>
            <span className="text-[1.37rem] font-medium text-VDG">
              UTC {data.location?.timezone}
            </span>
          </div>
          <div className="md:px-10 md:text-left text-center lg:border-l-[1px]">
            <p className="text-[0.625rem] tracking-[0.1rem] font-bold text-DG">
              ISP
            </p>
            <span className="text-[1.37rem] font-medium text-VDG">
              {data?.isp}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
