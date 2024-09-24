import { useQuery } from "@apollo/client";
import { Event } from "./dto";
// import { GET_ALL_EVENTS } from "./resolver";
import { useEffect, useState } from "react";

export default function useEventsPlug(){
    return [
        {
            "id": 1,
            "title": "Name1",
            "description": "Descr1",
            "dateBegin": "01.01.2024",
            "dateEnd": "02.01.2024",
        },
        {
            "id": 1,
            "title": "Name2",
            "description": "Descr2",
            "dateBegin": "05.02.2024",
            "dateEnd": "08.02.2024",
        },
        {
            "id": 1,
            "title": "Name3",
            "description": "Descr3",
            "dateBegin": "10.01.2024",
            "dateEnd": "12.01.2024",
        },
        {
            "id": 4,
            "title": "Name4",
            "description": "Descr4",
            "dateBegin": "01.04.2024",
            "dateEnd": "02.04.2024",
        },
    ]
}

// export function useEvents(){
//     const {data: events} = useQuery<{getAllEvents: Event[]}>(GET_ALL_EVENTS)
//     const [Events, setEvents] = useState<Event[] | undefined>(events?.getAllEvents)
//     useEffect(
//         () => {
//             setEvents(events?.getAllEvents)
//         }, [events]
//     )
//     return Events
// }