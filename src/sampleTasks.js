// sample data to get things started

const sampleTasks = {
  task1: {
    priority: "A",
    createDate: "2021-03-12",
    projects: "+banana",
    description: "Create sample data. +banana",
    raw: "(A) 2021-03-12 Create sample data. +banana",
  },
  task2: {
    priority: "B",
    createDate: "2021-03-12",
    projects: "+project",
    description: "Another task with a +project",
    raw: "(B) 2021-03-12 Another task with a +project",
  },
  task3: {
    context: "@context",
    createDate: "2021-03-12",
    description: "Task with @context",
    raw: "2021-03-12 Task with @context",
  },
  task4: {
    context: "@context",
    createDate: "2021-03-12",
    projects: "+banana",
    description: "Task with @context +banana",
    raw: "2021-03-12 Task with @context +banana",
  },
};

export default sampleTasks;
