import React from "react";

// components

import CardStats from "../Cards/CardStats";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-primary md:pt-20 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Số liều tiêm"
                  statTitle="350,897"
                  statIconName="fas fa-syringe"
                  statIconColor="bg-green"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Người tiêm"
                  statTitle="2,356"
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Người đăng ký"
                  statTitle="924"
                  statIconName="fas fa-hospital-user"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Tỷ lệ / cả nước"
                  statTitle="49,65%"
                  statIconName="fas fa-percent"
                  statIconColor="bg-grey"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
