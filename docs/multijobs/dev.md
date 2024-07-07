---
sidebar_position: 5
---

# Developer Documentation

## Exports List

### GetJobs

```lua
local jobs = exports["zerio-multijobs"]:GetJobs(identifier)
```

This export takes one parameter, which is the identifier of the player to get the jobs from.

### CountJobs

```lua
local count = exports["zerio-multijobs"]:CountJobs(identifier)
```

This export takes one singular parameter, which is the identifier of the player that you want to count the jobs of.

### AddJob

```lua
exports["zerio-multijobs"]:AddJob(identifier, jobname, jobgrade)
```

This export takes 3 parameters. The identifier of the player to add the job to, the job name and also the job grade **in number form, not the name or label of the job grade**

### UpdateJobRank

```lua
exports["zerio-multijobs"]:UpdateJobRank(identifier, jobname, newjobgrade)
```

This export takes 3 parameters, the identifier of the player to update the job for, the job name and also the new job grade to assign to the players job.

### DoesPlayerHaveJob

```lua
local hasJob = exports["zerio-multijobs"]:DoesPlayerHaveJob(identifier, jobname)
```

This export takes in the player identifier and a job name, and returns whether said player has that job in their multijobs list.

### GetPlayersWithJob

```lua
local players = exports["zerio-multijobs"]:GetPlayersWithJob(jobname)
```

This export returns a list of all player identifiers that has a specific job in their multijobs list.

### RemoveJob

```lua
exports["zerio-multijobs"]:RemoveJob(identifier, jobname)
```

This export takes 2 parameters, the identifier of the player to remove the job for and also the actual job name to remove from them.
