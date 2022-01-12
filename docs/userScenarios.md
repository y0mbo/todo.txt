# User Scenarios

This document contains the job stories (user stories, but a little bit of a different format) for use in acceptance testing the project.
It is currently a dumping ground for random thoughts which have not been implemented.

I may move these all to Github Issues.

### Story 1: Default to today

```
When I open the application
I want the application to default to today
So I can work with today's obligations
```
### Acceptance Criteria 1-1
```
Given today is 2021-10-04
When the dashboard is opened
Then the date displayed on the calendar is Monday, 4 October 2021
```
----




----

## Title: Using a calendar-based todo list.
### Story: 1
```
When I have something I need to do
I want to put it on my calender
So I can get it done because its scheduled
```
### Acceptance Criteria:
```
```
## Story: First time
```
When I open the application for the first time
I want to understand how to use the application
So I can get the benefit of tracking my obligations
```

## Title: Default to today
```
When I open the application
I want to see today's calendar
So I can work with today's obligations
```

### Acceptance Criteria
```
Given I have logged in
When I go to the home page
Then I see the 
```



----

## Title: Creating a task list
```
When I have something I need to do
I want to create a task and put it on the calendar
So I can remember to do it.
```

---

## Title: Viewing a task list

```
When I open the application,
I want to see my task list,
So I can work on the things I need to do.
```

```
When I open the application,
I want to see my schedule,
So I can work on the things I need to do.
```

### Scenario: I have not created any tasks

```
Given I have not created any tasks,
 When I view my task list,
 Then I should see a message saying I have no tasks.
```

### Scenario: I have not scheduled any tasks

```
Given I have not scheduled any tasks,
 When I view my schedule,
 Then I should see a message saying I have no scheduled tasks.
```

### Scenario: I have open tasks

```
Given I have created at least one task,
 When I view my task list,
 Then I should see my tasks.
```

---

## Creating a task

```
When I need to do something
I want to create an item on the calendar
So I can do it at a specific time
```

### Scenario: If I hit a hot key, it opens a new event dialog

```
Given the focus on a calendar day
When I click "n", "a", or "i"
Then a dialog opens to create a new event
```

---

## Title: Creating tasks with priorities

```
When I create or edit a task,
I want to follow the todo.txt format
So I can something something
```

### Scenario: If a priority exists, it _always_ appears first

```
Given an open task,
 When the user adds a priority,
 Then the priority appears first in the task text.
```

### Scenario: If a priority exists, it is in the (A) format, followed by a space.

```
Given an open task,
 When the user adds a priority,
 Then the priority must be formatted as a single capital letter
  And the priority must have parenthesis around it
  And the priority must be followed by a space.
```


----
## Template
### Story {id}: {title}

```
Priority: {priority} | Estimate: {estimate}

When      {event}
I want to {motivation}
So I can  {outcome}
```
### Acceptance Criteria:
```
ID: {story id}-{criteria id}

Given {some context}
When  {some action is done}
Then  {such outcomes are expected}
```
----

### Notes

Priority: <Highest, High, Medium, Low, Lowest, Unprioritized>

Story Points: <1, 3, 5, 8, 13, 21, ... >
