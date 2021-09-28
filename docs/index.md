# Todo.txt implementation

This is the documentation for y0mbo's todo.txt (codename: Duet).

## Research

(Meet the user)

- User Demographics
- User Goals
- User Challenges
- Metrics and Hypothesis

## Empathize

(Be the users)

- User Personas
  - [Todo.txt-Persona-John-Uhri](https://www.figma.com/file/7SbPTGll19ZyFVb9zW5KGJ/Todo.txt-Persona-John-Uhri?node-id=0%3A1) (Figma)
- [User Scenarios](userScenarios.md)
- User Testing
- User Experience Map

## Create

- Wireframes
- Moodboard
- Mock-ups
- Style Guide

## Test

- Usability Tests
- Review Metrics
- Track Usage
- Inform Next Iteration

## Develop

(Stick to the design)

- [Test data and Regex](regex.md)

## Architectural Decisions

- [000 - Use React](adr/000-UseReact.md)
- [001 - Use the todo.txt file format](adr/001-UseTodoTxtFormat.md)


## Uncategorized Feature List
- Double click an item to edit.
- Alt+Up increases the priority for all selected items.
- Alt+Down decreases the priority for all selected items.
- Setting to allow the user to choose "z" or last letter as the lowest priority for Alt+Up adding of a priority to an item that does not have one.
- x completes the task.
- a or i creates a task
- I creates tasks in multiple mode
- Clicking an item in the list selects the time.
- Shift clicking  selects all the items between the first item and the last item.
- Ctrl clicking items selects those.
- Filter for is:due for anything due today or already past due.
- There should be a way to start a timer to track time against a specific task in the todo list.
- Allow double booking of activities in the future.
- Drag an event and assign a context, then display todo items with that context to assign to that block.
- AI that figures out that you always have an event at a given time (e.g. commute) and will ghost block it into the schedule at that time. Create official tracked event by clicking on the ghost.
* Add automation for different systems to create a daily journal entry for notes to go with the day's tasks.