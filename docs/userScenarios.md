# User Scenarios

## Title: Starting to use the app

```
When      I open the app
I want to see my tasks
So I can  update my tasks
```

### Scenario A: I have no tasks in the app

```
Given I have no open tasks,
 When I open the app,
 Then I should see a message that says I have no tasks.
```

### Notes

Priority: <Highest, High, Medium, Low, Lowest, Unprioritized>

Story Points: <1, 3, 5, 8, 13, 21, ... >

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
