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
- [002 - Use iCalendar](adr/002-UseiCalendar.md)


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


## Reference
* [A History of iCalendar](https://devguide.calconnect.org/iCalendar-Topics/History/)



## iCalendar format 

```
BEGIN:VCALENDAR
METHOD:PUBLISH
PRODID:Microsoft Exchange Server 2010
VERSION:2.0
X-WR-CALNAME:Calendar
BEGIN:VTIMEZONE
TZID:Central Standard Time
BEGIN:STANDARD
DTSTART:16010101T020000
TZOFFSETFROM:-0500
TZOFFSETTO:-0600
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=1SU;BYMONTH=11
END:STANDARD
BEGIN:DAYLIGHT
DTSTART:16010101T020000
TZOFFSETFROM:-0600
TZOFFSETTO:-0500
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=2SU;BYMONTH=3
END:DAYLIGHT
END:VTIMEZONE
BEGIN:VEVENT
DESCRIPTION:I am the very model of a modern major general.\n
 __________________________________________________________________________
UID:123
SUMMARY:Hi Mom
DTSTART;TZID=Central Standard Time:20210928T223000
DTEND;TZID=Central Standard Time:20210928T233000
CLASS:PUBLIC
PRIORITY:5
DTSTAMP:20210928T031250Z
TRANSP:OPAQUE
STATUS:CONFIRMED
SEQUENCE:9
LOCATION:My House
END:VEVENT
END:VCALENDAR
```