// sample data to get things started

const sampleTasks = {
  task1: {
    tid: 1,
    priority: "A",
    createDate: "2021-03-12",
    projects: "+banana",
    description: "Create sample data. +banana",
    raw: "(A) 2021-03-12 Create sample data. +banana tid:1",
  },
  task2: {
    tid: 2,
    priority: "B",
    createDate: "2021-03-12",
    projects: "+project",
    description: "Another task with a +project",
    raw: "(B) 2021-03-12 Another task with a +project tid:2",
  },
  task3: {
    tid: 3,
    contexts: "@spiritual",
    createDate: "2021-03-12",
    description: "Task with @context",
    raw: "2021-03-12 Task with @context tid:3",
    dueDate: "2021-03-13",
  },
  task4: {
    tid: 4,
    contexts: "@personal",
    createDate: "2021-03-12",
    projects: "+meeting",
    description: "Task with a @context inside the sentence +banana split.",
    raw: "2021-03-12 Task with a @context inside the sentence +banana split. tid:a",
    status: "completed",
    completedDate: "2021-03-13",
  },
  task5: {
    tid: 5,
    contexts: "@work",
    createDate: "2021-03-12",
    dueDate: "2021-03-12",
    projects: "+newProject",
    description: "New Project requirements document",
    priority: "A",
    raw:
      "2021-03-12 Requirements document @work +newProject tid:5",
  },
};

export default sampleTasks;
