import React from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Register = () => {
  return (
    <div className="w-1/2 pr-4 pl-4 2xl:pl-10">
      <div className="text-lg mt-2 mb-3 2xl:text-xl">Signup a driver</div>
      <div className="flex text-xs 2xl:text-base justify-between">
        <div className="flex flex-col">
          <div className="2xl:text-xs">Enter Full Name</div>
          <input
            type="text"
            className="border p-1.5 w-48 2xl:w-56 rounded-sm"
            value={"Jonny Ive"}
          />
        </div>
        <div className="flex flex-col">
          <div className="2xl:text-xs"> Enter Contact Number</div>
          <div className="relative flex">
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 rounded-md justify-center text-lg bg-[#EBEBF4] text-gray-500 pr-1 my-1 mx-1.5">
              🇩🇪
              <div className="text-xs">
                <IoIosArrowDown />
              </div>
            </div>
            <input
              type="text"
              className="border p-1.5 rounded-sm 2xl:w-56 w-48 pl-14"
              value={"+91 2352 32665"}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="2xl:text-xs"> Enter Email Address</div>
          <input
            type="text"
            className="border p-1.5 w-48 2xl:w-56 rounded-sm"
            value={"Jonn@hotmail.com"}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-xs text-[#2A56FE]">
          An account already exists with these contact details, you need to
          merge the accounts. <br /> Or use different details.
        </div>
        <button className="bg-[#2A56FE] text-white rounded-md px-4 py-2">
          Yes
        </button>
      </div>
      {/* View Account */}
      <div>
        <div className="text-sm 2xl:text-lg border-b my-3 pb-1.5">
          View Account
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-xs">
            Accounting Ref
            <input
              type="text"
              className="border p-1.5 2xl:text-base rounded-sm w-24 2xl:w-32"
            />
          </div>
          <div className="flex flex-col text-xs">
            Nominal Code
            <input
              type="text"
              className="border p-1.5 2xl:text-base rounded-sm w-24 2xl:w-32"
            />
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center justify-between">
              Call Sign
              <RxQuestionMarkCircled />
            </div>
            <input
              type="text"
              value={"Jonny Ive"}
              className="border p-1.5 2xl:text-base rounded-sm w-24 2xl:w-32"
            />
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center justify-between">
              Commission
              <RxQuestionMarkCircled />
            </div>
            <div className="relative">
              <input
                type="text"
                className="border p-1.5 2xl:text-base rounded-sm w-24 2xl:w-32"
                value={"20"}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                %
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center justify-between">
              Weekly Charge
              <RxQuestionMarkCircled />
            </div>
            <div className="relative flex">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                £
              </div>
              <input
                type="text"
                className="border p-1.5 2xl:text-base rounded-sm w-24 2xl:w-32 pl-8"
                value={"20 . 00"}
              />
            </div>
          </div>
          <div className="flex flex-col text-xs">
            Driver Group
            <input
              type="text"
              className="border p-1.5 2xl:text-base rounded-sm w-24 2xl:w-32"
              placeholder="Select all that apply"
            />
          </div>
        </div>
      </div>
      <div className="border-b my-4"></div>
      <div className="text-xs">
        <div className="flex gap-7">
          Home Address
          <div className="text-gray-400 ">Click for manual entry</div>
        </div>
        <input
          type="text"
          className="border p-1.5 py-2.5 2xl:text-base rounded-sm w-full"
          value={"Jonny Ive"}
        />
      </div>
      <div className="border-b my-4"></div>
      {/* License Info */}

      <div>
        <div className="flex items-center gap-7">
          <div className="2xl:text-lg">License Information</div>
          <div className="text-gray-400 text-xs">Click for manual entry</div>
        </div>
        <div className="flex flex-col text-xs 2xl:text-sm mt-3">
          <div className="2xl:text-xs"> DVLA License</div>

          <div className="flex items-center gap-3 2xl:gap-7">
            <input
              type="text"
              className="border p-1.5 w-40 2xl:w-56 rounded-sm"
              value={"TCAEU610267N09EK"}
            />
            <div>Male</div>
            <div>1967-10-26</div>
            <div>Address Match</div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div>Type: Full</div>
            <div>Status: Valid</div>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-3">
          Endorsments <br /> LegalLiteral: Exceeding statutory speed limit on a
          public road <br />
          offence Date: 2018-04-28 <br /> penaltyPoints: 3
        </div>
        <div className="border-b my-3"></div>
      </div>
      {/* Taxi Information */}

      <div>
        <div className="2xl:text-lg">Taxi or PH Badge Information</div>
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col text-xs">
            Driver Type
            <input
              type="text"
              className="border p-1.5 w-44 2xl:w-56 2xl:text-sm rounded-sm"
              value={"Hackney Carriage Private Hire"}
            />
          </div>
          <div className="flex flex-col text-xs">
            Issued By
            <input
              type="text"
              className="border p-1.5 w-44 2xl:w-56 2xl:text-sm rounded-sm"
              value={"Council List"}
            />
          </div>
          <div className="flex flex-col text-xs">
            Badge Number
            <input
              type="text"
              className="border p-1.5 w-44 2xl:w-56 2xl:text-sm rounded-sm"
              value={"8540"}
            />
          </div>
        </div>
        <div className="flex gap-5 text-xs mt-2">
          <div className="p-2 shadow-md border border-gray-200">
            Sateguarding Certificate
          </div>
          <div className="p-2 shadow-md border border-gray-200">B-TECH</div>
          <div className="p-2 shadow-md border border-gray-200">
            Wheelchair Certif
          </div>
        </div>
        <div className="border-b my-3"></div>
      </div>

      {/* Vehicle Information */}

      <div>
        <div className="flex gap-7 items-center">
          <div className="2xl:text-lg">Vehicle Information</div>
          <div className="text-gray-400 text-xs">Click for manual entry</div>
        </div>
        <div className="flex flex-col text-xs mt-2">
          Registration
          <div className="flex items-center gap-4 2xl:gap-6 2xl:text-sm">
            <input
              type="text"
              className="border p-1.5 w-20 2xl:w-32 rounded-sm"
              value={"LB70ULJ"}
            />
            <div className="flex flex-col gap-1 2xl:text-xs">
              <div>Make: Rover</div>
              <div>Engine: 2494</div>
            </div>
            <div>Color: Blue</div>
            <div>Year: 2020</div>
            <div>Euro Status: Euro 6</div>
            <div>Fuel: Petrol</div>
          </div>
          <div>
            <div className="flex gap-4 mt-3">
              <div className="flex flex-col text-xs">
                Model
                <input
                  type="text"
                  className="border p-1.5 rounded-sm w-24 2xl:text-sm 2xl:w-28"
                  value={"F-Type"}
                />
              </div>
              <div className="flex flex-col text-xs">
                Passengers
                <input
                  type="text"
                  className="border p-1.5 rounded-sm w-24 2xl:text-sm 2xl:w-28"
                  value={"F-Type"}
                />
              </div>
              <div className="flex flex-col text-xs">
                Ride Type
                <input
                  type="text"
                  className="border p-1.5 rounded-sm w-24 2xl:text-sm 2xl:w-28"
                  value={"F-Type"}
                />
              </div>
              <div className="flex flex-col text-xs">
                Body Type
                <input
                  type="text"
                  className="border p-1.5 rounded-sm w-24 2xl:text-sm 2xl:w-28"
                  value={"F-Type"}
                />
              </div>
            </div>
            <div className="flex gap-10 mt-4 2xl:text-sm">
              <div>DVLA MOT: 09 / 10 / 2023</div>
              <div>DVLA TAX: 09 / 10 / 2023</div>
            </div>
          </div>
          <div className="flex gap-10 mt-3">
            <div className="flex flex-col text-xs">
              Plate Number
              <input
                type="text"
                className="border p-1.5 rounded-sm w-24 2xl:text-sm 2xl:w-28"
                value={"F-Type"}
              />
            </div>
            <div className="flex flex-col text-xs">
              Issued By
              <input
                type="text"
                className="border p-1.5 rounded-sm w-48 2xl:text-sm 2xl:w-52"
                value={"Council List"}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-1 2xl:text-sm">
            <div className="flex gap-11 2xl:gap-12">
              <div>PPE Barrier</div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div className="flex gap-5">
              <div>Disable Access</div>
              <div className="ml-1 2xl:ml-0.5">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div>Premium Vehicle</div>
            <div>Hackney Carriage</div>
            <div>Pets</div>
            <div>Wide Car</div>
            <div className="flex flex-col text-xs mt-6">
              Insurance Certificate Number
              <input
                type="text"
                className="border p-1.5 py-2.5 rounded-sm w-44 2xl:text-sm 2xl:w-48"
                value={"F-Type"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
