// sample data to get things started

const sampleEvents = {
    event1: {
        duid: "1",
        summary: "This is an event",
        description: "I am the very model of a modern major general. __________________________________________________________________________",
        dtstart: "2021-10-04T22:30:00",
        dtend: "2021-10-04T23:30:00",
        location: "My house",
        projects: "+project1",
        contexts: "@context",
    },
    event2: {
        duid: "2",
        summary: "A second event.",
        description: "I am the very model of a modern major general.",
        dtstart: "2021-10-04T10:00:00",
        dtend: "2021-10-04T11:15:00",
        location: "At work",
        projects: "+someProject, +anotherProject",
        contexts: "@work",
    },
    event3: {
        duid: "3",
        summary: "Lunch",
        description: "Naf Naf grill for lunch.",
        dtstart: "2021-10-04T12:00:00",
        dtend: "2021-10-04T12:45:00",
        location: "Naf Naf grill",
        projects: "",
        contexts: "@personal",
    },
    event4: {
        duid: "4",
        summary: "15 minute thing",
        description: "Sort thing ",
        dtstart: "2021-10-04T14:00:00",
        dtend: "2021-10-04T14:15:00",
        location: "At work",
        projects: "+someProject, +anotherProject",
        contexts: "@work",
    },
    event5: {
        duid: "5",
        summary: "A 30 minute event",
        description: "I am the very model of a modern major general.",
        dtstart: "2021-10-04T14:30:00",
        dtend: "2021-10-04T15:00:00",
        location: "At work",
        projects: "+someProject, +anotherProject",
        contexts: "@work",
    },
};

export default sampleEvents;