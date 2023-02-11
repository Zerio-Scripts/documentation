# Developer Documentation

## Exports List

### **GetJobs**

```lua
exports["zerio-multijobs"]:GetJobs(citizenid<string>, callback<function>)
```

This export takes 2 parameters which are the citizenid of the player to get the jobs from and also a callback which returns an array with the job(s) data.

### AddJob

```lua
exports["zerio-multijobs"]:AddJob(citizenid<string>, jobname<string>, jobgrade<int>) 
```

This export takes 3 parameters. The  citizen id of the player to add the job to, the job name and also the job grade **in number form, not the name or label of the job grade**

### UpdateJobRank

```lua
exports["zerio-multijobs"]:UpdateJobRank(citizenid<string>, jobname<string>, newjobgrade<int>)
```

This export takes 3 parameters, the citizen id of the player to update the job for, the job name and also the new job grade to assign to the players job.

### RemoveJob

```lua
exports["zerio-multijobs"]:RemoveJob(citizenid<string>, jobname<string>)
```

This export takes 2 parameters, the citizen id of the player to remove the job for and also the actual job name to remove from them.
