import moment from 'moment';

export function generateTimeSlots(startDay, endDay, startTime, endTime, interval) {
    const dates = [];
    // Set the timezone at the beginning and keep using these moment objects
    const startDate = moment(startDay, "YYYY-MM-DD").utcOffset(60, true); // Using 'true' to keep the existing time of day
    const endDate = moment(endDay, "YYYY-MM-DD").utcOffset(60, true).add(1, 'days'); // Ensure inclusive end date

    console.log("Starting generation from:", startDate.format("YYYY-MM-DD"), "to", endDate.format("YYYY-MM-DD"));

    for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
        console.log("Generating for day:", m.format("YYYY-MM-DD"));
        let dayStart = m.clone().set({ hour: parseInt(startTime.split(':')[0]), minute: parseInt(startTime.split(':')[1]) });
        let dayEnd = m.clone().set({ hour: parseInt(endTime.split(':')[0]), minute: parseInt(endTime.split(':')[1]) });

        for (let hour = dayStart; hour.isBefore(dayEnd); hour.add(interval, 'minutes')) {
            console.log("Time slot:", hour.format("YYYY-MM-DDTHH:mm:ss"));
            dates.push({
                date: m.startOf('day').toDate(),  // Use m to get the start of the day
                timeSlot: hour.toDate(),
                available: true   // The exact hour for the time slot
            });
        }
    }
    console.log("Generated", dates.length, "time slots.");
    return dates;
}

// Example usage to generate time slots for June 2024
//const timeSlots = generateTimeSlots("2024-06-01", "2024-06-30", "09:00", "17:00", 60);
