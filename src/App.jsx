import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        " https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = response?.data;
      setUserData(data.results);
      // console.log("Products successfully fetched: ", sortedProducts);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  console.log("Your data ", userData);

  useEffect(() => {
    fetchData();
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
        Loading...
      </div>
    );
  }
  return (
    <>
      {userData.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-screen bg-gray-800"
        >
          <div className="group infocard-container flex items-center justify-center h-52 w-52 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 transition-all  hover:w-[500px] hover:rounded-[100px_10px_100px_100px] hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 duration-1000">
            <div
              id="main"
              className="flex-shrink-0 h-42 w-42  overflow-hidden "
            >
              <img
                src={user.picture.large}
                
                className="h-44 w-48 rounded-full object-cover border-4 border-white hover:rounded-[100px_10px_100px_100px] duration-500"
              />
            </div>

            <div
              id="textbois"
              className="hidden group-hover:flex flex-col duration-1000 ml-6 text-white"
            >
              <h2 className="font-semibold italic text-2xl">{user.name.title} {user.name.first} {user.name.last}</h2>
              <h4 className="text-xl">{user.gender}</h4>
              <a
                href="mailto:laura.woods@example.com"
                className="text-blue-300 hover:underline"
              >
               {user.email}
              </a>
              <h4 className="text-xl">{user.phone}</h4>
              {/* <div
                id="hotlinks"
                className="flex mt-2 bg-white p-2 rounded-lg justify-between w-3/4"
              ></div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
