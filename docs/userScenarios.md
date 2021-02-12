# User Scenarios

## Title: Starting to use the app

```
When I open the app
I want to see my tasks
So I can update my tasks
```

### Scenario: I have no tasks in the app

```
Given I have no open tasks,
 When I open the app,
 Then I should see a message that says I have no tasks.
```

### Scenario: I have at least one task

```
Given I have at least one open task,
 When I open the app,
 Then I should see the list of tasks.
```

### Scenario: I have at least one task and have set a filter

```
Given I have open tasks
  And I set up a filter the last time I used the app
 When I open the app,
 Then I should only see the tasks that meet the filter criteria.
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

---

# Template

## Title: <What this user story is about>

```
When      [event]
I want to [motivation]
So I can  [outcome]
```

### Scenario A: <What should happen>

```
Given <some context>,
 When <some action is done>,
 Then <such outcomes are expected to occur>.
```

### Notes

Priority: <Highest, High, Medium, Low, Lowest, Unprioritized>

Story Points: <1, 3, 5, 8, 13, 21, ... >
