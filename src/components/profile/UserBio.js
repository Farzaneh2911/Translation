/*const UserBio = ({user}) => {
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');

  // Handler for form submission
    const handleSubmit = (e) => {
      e.preventDefault();
    // Here, implement your logic to update the user profile
      console.log('Updated Email:', email);
      console.log('Updated Phone Number:', phoneNumber);
    // You might call an API to update the user details
    };
    return (
      <>
        <div className="flex md:mt-6 rounded items-center justify-center from-red via-white to-gray-900 bg-gradient-to-br">
          <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border  rounded-xl">
            <div className="pb-6 bg-black">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full">
                  <div className="relative">
                    <img
                      src="assets\icons\user.png"
                      className="dark:shadow-xl border-black dark:border-red rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 mt-20 text-center">
                <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
                  {user.displayName}
                </h3>
                <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                  {}
                  
                  <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">
                    {user.email}
                  </div>
                  
                </div>
                {}
              </div>
              <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-6">
                    <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                    {user.displayName} belongs to Solent University and is able to use this service to book the available equipments need .
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                <div className="absolute flex -space-x-12 rounded-b-2xl">
                  <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-red/90 group-hover:bg-amber-600/90 z-10"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-red/90 group-hover:bg-amber-500/90 z-20"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-red/90 group-hover:bg-amber-400/90 z-30"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-red/90 group-hover:bg-amber-300/90 z-40"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-red/90 group-hover:bg-amber-200/90 z-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  
  export default UserBio;*/
  import React, { useState } from 'react';

  const UserBio = ({ user }) => {
    // Initial state for the form, based on the user prop
    const [formData, setFormData] = useState({
      email: user.email || '', // Fallback to empty string if user.email is undefined
      phoneNumber: user.phoneNumber || '', // Fallback to empty string if user.phoneNumber is undefined
    });
  
    // Handle changes in form fields
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Implement your update logic here. For example, you might call an API to update the user profile.
      console.log('Form Data:', formData);
      alert('Profile updated successfully!');
    };
  
    return (
      <div className="flex flex-col items-center justify-center mt-6 from-red via-white to-gray-900 bg-gradient-to-br">
        <div className="w-full max-w-md px-6 py-4 bg-white rounded shadow-md">
          {/* Displaying user's current information */}
          <div className="pb-6">
            <div className="flex justify-center">
              <img
                src={user.imageUrl || "assets/icons/user.png"} // Fallback to a default image if user.imageUrl is undefined
                alt="User"
                className="border-black rounded-full border-8 align-middle max-w-[150px]"
              />
            </div>
            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold text-gray-700">{user.displayName}</h3>
              <div className="mt-1 text-xl font-bold text-gray-600">{user.email}</div>
            </div>
            <div className="px-6 mt-6 text-center font-light text-gray-600">
              {user.displayName} belongs to Solent University and is able to use this service to book the available equipment needed.
            </div>
          </div>
  
          {/* Form for updating user details */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default UserBio;
  