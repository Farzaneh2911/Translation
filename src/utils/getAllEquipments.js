import { db } from "../firebaseInit";
import { doc, getDocs, collection } from "firebase/firestore";

export default function getAllEquipments() {
  return new Promise(async (resolved, rejected) => {
    const collectionRef = collection(db, "equipments");
    const collectionSnap = await getDocs(collectionRef);
    let allEquipments = [];
    collectionSnap.forEach((equipment) => {
      allEquipments.push({ id: equipment.id, ...equipment.data() });
    });
    resolved(allEquipments);
  });
}
