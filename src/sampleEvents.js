// sample data to get things started

const sampleEvents = {
    event1: {
        tid: "1",
        summary: "This is an event",
        description: "I am the very model of a modern major general. __________________________________________________________________________",
        dtstart: "2021-10-04T223000",
        dtend: "2021-10-04T233000",
        location: "My house",
        projects: "+project1",
        contexts: "@context",
    },
    event2: {
        tid: "2",
        summary: "A second event.",
        description: "I am the very model of a modern major general.",
        dtstart: "2021-10-04T103000",
        dtend: "2021-10-04T113000",
        location: "At work",
        projects: "+someProject, +anotherProject",
        contexts: "@work",
    },
};

export default sampleEvents;