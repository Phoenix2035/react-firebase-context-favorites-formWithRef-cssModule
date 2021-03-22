import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetups() {
    const [isLoading, setLoading] = useState(true)
    const [meetupsData, setMeetupsData] = useState([])

    useEffect(() => {
        fetch("https://react-meetup-57bc7-default-rtdb.firebaseio.com/meetups.json")
            .then(res => res.json())
            .then(data => {
                const meetups = []

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
                setLoading(false)
                setMeetupsData(meetups)
            })
    }, [])


    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>AllMeetups Page</h1>
            <MeetupList meetups={meetupsData} />
        </section>
    )
}

export default AllMeetups
