import React from "react";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";

const Choose = () => {
  return (
    <>
      <div className="px-5 py-20">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#0C0C0C] text-center text-2xl md:text-4xl tracking-tight font-semibold">
            Why Choose <span className="text-[#00bbf0]">Us</span>
          </h1>
        </div>
        {/* CONTENT 1 */}
        <div className="w-full flex flex-col gap-5 justify-center items-center mt-16">
          {/* IMAGE */}
          <img
            src={w1}
            width={"120px"}
            className="border-4 border-blue-950 rounded-full p-6"
            alt=""
          />
          {/* TITLE */}
          <p className="font-semibold text-2xl text-center">
            Expert Management
          </p>
          {/* TEXT */}
          <p className=" lg:px-36 text-center">
            Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
            doloribus aperiam numquam! Eligendi corrupti, molestias laborum
            dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
            officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam,
            nemo officia ullam repudiandae repellat veritatis unde reiciendis
            possimus animi autem natus
          </p>
        </div>
        {/* CONTENT 2 */}
        <div className="w-full flex flex-col gap-5 justify-center items-center mt-16">
          {/* IMAGE */}
          <img
            src={w2}
            width={"120px"}
            className="border-4 border-blue-950 rounded-full p-6"
            alt=""
          />
          {/* TITLE */}
          <p className="font-semibold text-2xl text-center">
            Secure Investment
          </p>
          {/* TEXT */}
          <p className=" lg:px-36 text-center">
            Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
            doloribus aperiam numquam! Eligendi corrupti, molestias laborum
            dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
            officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam,
            nemo officia ullam repudiandae repellat veritatis unde reiciendis
            possimus animi autem natus
          </p>
        </div>
        {/* CONTENT 3 */}
        <div className="w-full flex flex-col gap-5 justify-center items-center mt-16">
          {/* IMAGE */}
          <img
            src={w3}
            width={"120px"}
            className="border-4 border-blue-950 rounded-full p-6"
            alt=""
          />
          {/* TITLE */}
          <p className="font-semibold text-2xl text-center">Instant Trading</p>
          {/* TEXT */}
          <p className=" lg:px-36 text-center">
            Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
            doloribus aperiam numquam! Eligendi corrupti, molestias laborum
            dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
            officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam,
            nemo officia ullam repudiandae repellat veritatis unde reiciendis
            possimus animi autem natus
          </p>
        </div>
        {/* CONTENT 4 */}
        <div className="w-full flex flex-col gap-5 justify-center items-center mt-16">
          {/* IMAGE */}
          <img
            src={w4}
            width={"120px"}
            className="border-4 border-blue-950 rounded-full p-6"
            alt=""
          />
          {/* TITLE */}
          <p className="font-semibold text-2xl text-center">Happy Customers</p>
          {/* TEXT */}
          <p className=" lg:px-36 text-center">
            Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
            doloribus aperiam numquam! Eligendi corrupti, molestias laborum
            dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
            officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam,
            nemo officia ullam repudiandae repellat veritatis unde reiciendis
            possimus animi autem natus
          </p>
        </div>
        {/* READ MORE BUTTON */}
        <div className="text-center mt-16">
          <button className="bg-[#00bbf0] text-[#FFFFFF] w-max py-3 px-12 text-md">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default Choose;
