import React from 'react';
import { generateTimeSlots } from '../utils/generateTimeSlots';
import { app } from '../firebaseInit';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';

const db = getFirestore(app);

function AdminPanel() {
    const handleGenerateSlots = async () => {
        const slots = generateTimeSlots("2024-07-01", "2024-07-30", "09:00", "17:00", 60);
        console.log(slots);

        // Prepare a batch write operation
        const batch = writeBatch(db);

        // Reference to the collection where the time slots will be stored
        const slotsCollection = collection(db, 'availableTimeSlots');

        // Add each time slot to the batch
        slots.forEach(slot => {
            const slotRef = doc(slotsCollection);  // Correctly creating a new document reference
            batch.set(slotRef, slot);
        });

        // Commit the batch
        try {
            await batch.commit();
            console.log("Time slots added successfully!");
        } catch (error) {
            console.error("Error adding time slots: ", error);
        }
    };

    return (
        <div>
            <button onClick={handleGenerateSlots}>Generate and Save Time Slots</button>
        </div>
    );
}

export default AdminPanel;
