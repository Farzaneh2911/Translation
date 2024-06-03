
import getAllEquipments from "../../utils/getAllEquipments";
import ServiceCard from "../ServiceCard";
import { useEffect, useState } from "react";
import LoadingEquipmentCard from "../LoadingEquipmentCard";
import { auth } from "../../firebaseInit";
import { onAuthStateChanged } from "firebase/auth";
import UserBio from "./UserBio";
import ProfileUpdateForm from "./ProfileUpdateForm";
import SignOut from "../SignOut";
import { Navigate } from "react-router-dom";
const MainContent = ({ activeMenu }) => {
  const [equipments, setEquipments] = useState(undefined);
  const [user, setUser] = useState(auth.currentUser.uid);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getAllEquipments().then((equipments) => {
          //filter equipments where equipment user_id === user.uid
          const filteredEquipments = equipments.filter(
            (equipment) => equipment.user_id === user.uid
          );
          setEquipments(filteredEquipments);
        });
      }
    });
  }, []);

  if (activeMenu === "Profile") {
    if (activeMenu === "Profile") {
      return (
        <>
          <UserBio user={user} />
          
        </>
      );
      
    }
    
  } else if (activeMenu === "Setting") {
    return <div>Setting Content</div>;
  } else if (activeMenu === "Logout") {
    window.location.replace("/logout");
  } else {
    return (
      <>
        <div className=" text-xl mt-4">Your Personal Bookings </div>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mt-4 flex flex-col justify-center items-center gap-4 md:flex-row md:flex-wrap">
            {equipments ? (
              equipments.map((equipment) => {
                return (
                  <ServiceCard
                    key={equipment.id}
                    equipmentId={equipment.id}
                    img_url={equipment.equipment_pic}
                    title={equipment.title}
                    description={equipment.description}
                    rating={equipment.rating}
                    availability={equipment.Availability}
                    nextBookingIn={equipment.nextBookingIn}
                  />
                );
              })
            ) : (
              <>
                
              </>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default MainContent;
