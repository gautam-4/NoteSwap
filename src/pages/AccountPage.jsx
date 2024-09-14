import { useNavigate } from "react-router-dom";
import NotesPage from "../components/common/NotesView";
import "../styles/AccountPage.css";
import { useState } from "react";
import NotesView from "../components/common/NotesView";
 
export default function AccountPage({}) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
 
  const handleChange = () => {
    navigate("/edit-account"); // Navigate to edit account page
  };
 
  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
 
  return (
    <>
      <div className={`w-full md:w-dvh ${theme}`}>
        {/* Edit and Darkmode button */}
        <div className="justify-end items-center flex">
          {/* Navigate to Edit Account Page button */}
          <button
            onClick={handleChange}
            className="text-white bg-[#A883C5] text-xl md:text-3xl h-max text-center cursor-pointer rounded-xl my-5 mx-5 px-8 md:px-16 font-semibold py-3"
          >
            Edit
          </button>
 
          {/* Change theme Button */}
          <div onClick={changeTheme}>
            {theme == "light" ? (
              <img
                src="/src/assets/images/lightModeButton.png"
                alt="lightmode btn"
                className="h-12 md:h-20 my-5 mr-5 cursor-pointer "
              />
            ) : (
              <img
                src="/src/assets/images/darkmodebutton.png"
                alt="darkmode btn"
                className="h-12 md:h-20 my-5 mr-5 cursor-pointer "
              />
            )}
          </div>
        </div>
 
        {/* Profile Photo and User Details */}
        <div className="text-white md:flex">
          {/* profile photo  */}
          <div className="max-w-3xl w-full md:w-1/2 flex justify-center">
            {theme == "light" ? (
              <img
                src="/src/assets/images/userProfilePhotoLightMode.png"
                alt="profilephoto"
                className="w-2/3 h-auto object-contain"
              />
            ) : (
              <img
                src="/src/assets/images/userProfilePhoto.png"
                alt="profilephoto"
                className="w-2/3 h-auto object-contain"
              />
            )}
          </div>
 
          {/* User Details */}
          <div
            className={`w-auto md:w-1/3 mx-10 my-5 ${
              theme == "dark" ? "text-white" : "text-black"
            }`}
          >
            <div className="py-5 flex md:block">
              <div className="pb-3 text-xl">Name: </div>
              <div className="md:border-b-2 ml-5 md:ml-0 text-xl">
                Your Name
              </div>
            </div>
            <div className="py-5 flex md:block">
              <div className="pb-3 text-xl">Room No: </div>
              <div className="md:border-b-2 ml-5 md:ml-0 text-xl">
                Your Room no
              </div>
            </div>
            <div className="py-5 flex md:block">
              <div className="pb-3 text-xl">Department: </div>
              <div className="md:border-b-2 ml-5 md:ml-0 text-xl">
                Your Department
              </div>
            </div>
            <div className="py-5 flex md:block">
              <div className="pb-3 text-xl">Specialization: </div>
              <div className="md:border-b-2 ml-5 md:ml-0 text-xl">
                Your Specialization
              </div>
            </div>
          </div>
        </div>
 
        {/* More User Details  */}
        <div
          className={`text-2xl mx-10 md:mx-40 ${
            theme == "dark" ? "text-white" : "text-black"
          }`}
        >
          <h1 className="py-5">Block : Block</h1>
          <h1 className="py-5">Room no : 1234</h1>
          <h1 className="py-5 md:w-max">
            Department and Specialization : B.Tech Computer Science Engineering
          </h1>
        </div>
 
        {/* Offers made: */}
        <div
          className={`text-4xl mt-20 mx-10 md:mx-40 ${
            theme == "dark" ? "text-white" : "text-black"
          }`}
        >
          <h1 className="mb-10 ml-8 md:ml-0">Offers Made</h1>
          
        </div>
        <NotesView/>
 
        {/* Notes rented: */}
        <div
          className={`text-4xl mt-20 mx-10 md:mx-40 ${
            theme == "dark" ? "text-white" : "text-black"
          }`}
        >
          <h1 className="mb-10 ml-8 md:ml-0">Notes Rented</h1>
          
        </div>
        <NotesView/>
      </div>
    </>
  );
}
