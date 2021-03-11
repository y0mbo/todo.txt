# Test data

```
This is a task.
This is a task with a valid context @work
@work this is a task with a valid context
@work this is a task with a valid context @work
This is not a valid context john@uhri.com
This is a multiple work @contexts @task
2019-01-02 This is a task @work +home
2020-01-02 This is another task +phone @work
2019-01-01 +project Task @context
+priority is a priority
(A) THis is a valid priority
(AB) This is not a priority
Not a valid priority Really gotta call Mom (A) @phone @someday
(b) Not a valid priority Get back to the boss
(B)->Submit TPS report Not a valid priority
2011-03-02 Valid create date Document +TodoTxt task format
(A) 2011-03-02 Valid create date Call Mom
(A) Not a create date 2011-03-02
Learn how to add 2+2 not a valid project
x 2011-03-03 Call Mom Complete task
xylophone lesson not a complete task
X 2012-01-01 Make resolutions not a complete task
(A) x Find ticket prices not a complete task
x 2011-03-02 2011-03-01 Review Tim's pull request valid closed task
Valid key:value pair
Valid key value pair due:2019-02-02
Valid key value pair abc1:293
Valid key value pair phone:920-540-5490
Valid key value pair phone:920.540.5490
Not a valid key value pair? 1a:234
Not a valid key value pair http://uhri.com/ but it should be a hyperlink
Also not a key value pair https://uhri.com/
```

# Regex

```
contexts
\B@[A-Za-z]+

projects
\B\+[A-Za-z]+

priorities
^\([A-Z]\)\s

closed task
^x\s

dates
[0-9]{4}-[0-9]{2}-[0-9]{2}\s

kvp
\w[A-Za-z0-9]*:(([A-Za-z0-9.-]*|))\b
```
