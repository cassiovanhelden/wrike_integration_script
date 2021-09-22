// Libs
let moment = library.load("moment-timezone");

// Integration Params
const pageSize = 1000

// Integration Definition
integration.define({
    "synchronizations": [
        {
            "name": "Contacts",
            "fullSyncFunction": contacts,
        },
        {
            "name": "Projects",
            "fullSyncFunction": projects
        },
        {
            "name": "Workflows",
            "fullSyncFunction": workflows,
        },
        {
            "name": "Timelogs",
            "fullSyncFunction": timelogs,
        },
    ],
    "model": {
        "tables": [
            {
                "name": "Contacts",
                "columns": [
                    {
                        "name": "id",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "firstName",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "lastName",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "profiles_accountId",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "profiles_email",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "profiles_role",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "profile_admin",
                        "type": "BOOLEAN"
                    },
                    {
                        "name": "avatarUrl",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "title",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "companyName",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "phone",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "owner",
                        "type": "BOOLEAN"
                    },
                ]
            },
            {
                "name": "Projects",
                "columns": [
                    {
                        "name": "id",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "title",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "scope",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "author",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "owner",
                        "type": "STRING",
                        "length": 100
                    },
                ]
            },
            {
                "name": "AssignedTasks",
                "columns": [
                    {
                        "name": "id",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "assignee",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "project",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "title",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "description",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "status",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "custom_status_id",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "permalink",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "scope",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "importance",
                        "type": "STRING",
                        "length": 100
                    },
                ]
            },
            {
                "name": "UnassignedTasks",
                "columns": [
                    {
                        "name": "id",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "project",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "title",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "status",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "custom_status_id",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "permalink",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "scope",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "importance",
                        "type": "STRING",
                        "length": 100
                    },
                ]
            },
            {
                "name": "Workflows",
                "columns": [
                    {
                        "name": "id",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "name",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "custom_status_id",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "custom_status_name",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "custom_status_group",
                        "type": "STRING",
                        "length": 100
                    },
                ]
            },
            {
                "name": "Timelogs",
                "columns": [
                    {
                        "name": "id",
                        "type": "STRING",
                        "length": 100,
                        "primaryKey": true
                    },
                    {
                        "name": "taskId",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "userId",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "hours",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "comment",
                        "type": "STRING",
                        "length": 100
                    },
                    {
                        "name": "trackedDate",
                        "type": "DATE"
                    },
                ]
            },
        ],
        "relationships": [
            {
                "name": "AssignedTasks_to_Contacs",
                "primaryTable": "AssignedTasks",
                "foreignTable": "Contacts",
                "columnPairs": [
                    {
                        "primaryKey": "assignee",
                        "foreignKey": "id",
                    },
                ],
            },
            {
                "name": "Timelogs_to_Contacs",
                "primaryTable": "Timelogs",
                "foreignTable": "Contacts",
                "columnPairs": [
                    {
                        "primaryKey": "userId",
                        "foreignKey": "id",
                    },
                ],
            },
            {
                "name": "Timelogs_to_AssignedTasks",
                "primaryTable": "Timelogs",
                "foreignTable": "AssignedTasks",
                "columnPairs": [
                    {
                        "primaryKey": "taskId",
                        "foreignKey": "id",
                    },
                ],
            },
            {
                "name": "AssignedTasks_to_project",
                "primaryTable": "AssignedTasks",
                "foreignTable": "Projects",
                "columnPairs": [
                    {
                        "primaryKey": "project",
                        "foreignKey": "id",
                    },
                ],
            },
            {
                "name": "UnassignedTasks_to_Project",
                "primaryTable": "UnassignedTasks",
                "foreignTable": "Projects",
                "columnPairs": [
                    {
                        "primaryKey": "project",
                        "foreignKey": "id",
                    },
                ],
            },
            {
                "name": "AssignedTasks_to_Workflows",
                "primaryTable": "AssignedTasks",
                "foreignTable": "Workflows",
                "columnPairs": [
                    {
                        "primaryKey": "custom_status_id",
                        "foreignKey": "custom_status_id",
                    },
                ],
            },
            {
                "name": "UnassignedTasks_to_Workflows",
                "primaryTable": "UnassignedTasks",
                "foreignTable": "Workflows",
                "columnPairs": [
                    {
                        "primaryKey": "custom_status_id",
                        "foreignKey": "custom_status_id",
                    },
                ],
            },
        ],
    },
    "actions": [
        {
            name: 'createTimeEntry',
            parameters: [
                {
                    name: 'TaskId',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'TrackedDate',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Hours',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Minutes',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Comment',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'UserId',
                    type: 'STRING',
                    required: true
                }
            ],
            "function": createTimeEntry
        },
        {
            name: 'addAssigneeToTask',
            parameters: [
                {
                    name: 'TaskId',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'AssigneeId',
                    type: 'STRING'
                },
                {
                    name: 'ProjectId',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Unassigned',
                    type: 'BOOLEAN',
                    required: true
                },
                {
                    name: 'IsManager',
                    type: 'BOOLEAN',
                    required: true
                },
                {
                    name: 'AssigneeArray',
                    type: 'ARRAY',
                    items: {
                        type: "STRING",
                    },
                },

            ],
            "function": addAssigneeToTask
        },
        {
            name: 'changeTaskStatus',
            parameters: [
                {
                    name: 'TaskId',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Status',
                    type: 'STRING',
                    required: true
                }
            ],
            "function": changeTaskStatus
        },
        {
            name: 'createUnassignedTask',
            parameters: [
                {
                    name: 'ProjectId',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Title',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Description',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Status',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Importance',
                    type: 'STRING',
                    required: true
                }
            ],
            "function": createUnassignedTask
        },
        {
            name: 'createTask',
            parameters: [
                {
                    name: 'ProjectId',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Title',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Description',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Status',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'Importance',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'AssigneeArray',
                    type: 'ARRAY',
                    items: {
                        type: "STRING",
                    },
                }
            ],
            "function": createTask
        },

    ]
})

// Common Functions
function timeToDecimal(timeStr) {
    const [hours, minutes] = timeStr.split(':')
    return parseInt(hours, 10) + parseInt(minutes, 10) / 60;
}

async function requestWrike(client, url, method, errorMessage) {
    const resp = await client.fetch(url, {method: method});

    if (!resp.ok) {
        throw new Error(`${errorMessage} -> Status: ${resp.status} / Response: ${JSON.stringify(resp)})`);
    }

    const jsonData = await resp.json()

    return jsonData.data[0]
}

// Dataloadings
async function contacts({dataStore, client}) {

    let contactsList = [];

    const url = '/contacts'

    const contactsGET = await client.fetch(url, {
        method: 'GET'
    });

    if (!contactsGET.ok) {
        throw new Error(`Could not Retrieve Contacs (${contactsGET.status}: ${contactsGET.statusText})`);
    }

    const contactsJson = await contactsGET.json()
    const contacts = await contactsJson.data

    contacts.forEach((contact) => {
        if (contact.type === "Person") {
            contactsList.push({
                id: contact.id,
                firstName: contact.firstName,
                lastName: contact.lastName,
                profiles_accountId: contact.profiles[0].accountId,
                profiles_email: contact.profiles[0].email,
                profiles_role: contact.profiles[0].role,
                profile_admin: contact.profiles[0].admin,
                avatarUrl: contact.avatarUrl,
                title: contact.title,
                companyName: contact.companyName,
                phone: contact.phone,
                owner: contact.owner,
            })
        }
    });
    dataStore.save("Contacts", contactsList);
}

async function projects({dataStore, client, latestSynchronizationTime}) {
    const assignedTasksArray = []
    const unassignedTasksArray = []
    const projectArray = []
    const projectsUrl = '/folders'
    const isProject = project => "project" in project

    let nextPageToken = ''
    let hasPages = false

    const projectsGET = await client.fetch(projectsUrl, {
        method: 'GET'
    });

    if (!projectsGET.ok) {
        throw new Error(`Could not Retrieve Projects (${projectsGET.status}: ${projectsGET.statusText})`);
    }

    const projectsJson = await projectsGET.json()
    const projectsData = await projectsJson.data
    const projects = projectsData.filter(isProject)

    // Project and ProjectOwners
    for (let p = 0; p < projects.length; p++) {
        let projectObject = projects[p]
        let projectData = projectObject.project

        // Stores ownerId
        if ("ownerIds" in projectData && projectData.ownerIds.length > 0) {
            projectData.ownerIds.map(value => {
                projectArray.push({
                    id: projectObject.id,
                    title: projectObject.title,
                    scope: projectObject.scope,
                    author: projectData.authorId,
                    owner: value,
                })
            })
        }
    }

    // Replace ownerId for ownerEmail
    for (const project of projectArray) {
        let contactUrl = `/contacts/${project.owner}`
        let contactGET = await client.fetch(contactUrl, {method: 'GET'});

        if (!contactGET.ok) {
            throw new Error(`Could not Retrieve Contacts from Project: ${project.id} ->
            (${contactGET.status}: ${contactGET.statusText})`);
        }
        let contactJson = await contactGET.json()
        let contactData = await contactJson.data
        project.owner = contactData[0].profiles[0].email
    }

    // Tasks of a project
    for (const project of projectArray) {

        // Do/While is for pagination
        do {
            let tasksUrl = `/folders/${project.id}/tasks?pageSize=${pageSize}&fields=[description, responsibleIds]&nextPageToken=${nextPageToken}`
            let tasksGET = await client.fetch((tasksUrl), {method: 'GET'});
            if (!tasksGET.ok) {
                throw new Error(`Could not Retrieve Tasks from Project: ${project.id} ->
            (${tasksGET.status}: ${tasksGET.statusText})`);
            }
            let tasksJson = await tasksGET.json()
            let tasksData = await tasksJson.data

            console.log("##aa: " + tasksJson.nextPageToken)

            // Pagination check
            hasPages = 'nextPageToken' in tasksJson
            nextPageToken = hasPages ? tasksJson.nextPageToken : ''

            for (let t = 0; t < tasksData.length; t++) {
                let task = tasksData[t]

                // Tasks with at least one Assignee
                if (task.responsibleIds.length > 0) {
                    let assignees = task.responsibleIds

                    // Creates one record per Assignee (pk = task_id+assignee)
                    assignees.map(value => {
                        assignedTasksArray.push({
                            id: task.id,
                            project: project.id,
                            title: task.title,
                            description: task.description,
                            scope: task.scope,
                            status: task.status,
                            custom_status_id: task.customStatusId,
                            permalink: task.permalink,
                            importance: task.importance,
                            assignee: value,
                        })
                    })
                } else {
                    // Tasks with no Assignee
                    unassignedTasksArray.push({
                        id: task.id,
                        project: project.id,
                        title: task.title,
                        description: task.description,
                        scope: task.scope,
                        status: task.status,
                        custom_status_id: task.customStatusId,
                        permalink: task.permalink,
                        importance: task.importance,
                    })
                }
            }

        }
        while (hasPages);
    }

    dataStore.save("Projects", projectArray);
    dataStore.save("AssignedTasks", assignedTasksArray);
    dataStore.save("UnassignedTasks", unassignedTasksArray);

}

async function workflows({dataStore, client}) {
    const workflowsCustomStatusArray = []

    const workflowsUrl = '/workflows'

    const workflowsGET = await client.fetch(workflowsUrl, {
        method: 'GET'
    });

    if (!workflowsGET.ok) {
        throw new Error(`Could not Retrieve Workflows (${workflowsGET.status}: ${workflowsGET.statusText})`);
    }

    const workflowsJson = await workflowsGET.json()
    const workflowsData = await workflowsJson.data


    for (let w = 0; w < workflowsData.length; w++) {
        let workflow = workflowsData[w]
        let customStatuses = workflow.customStatuses

        customStatuses.map(cs => {
            workflowsCustomStatusArray.push({
                id: workflow.id,
                name: workflow.name,
                custom_status_id: cs.id,
                custom_status_name: cs.name,
                custom_status_group: cs.group,
            })
        })
    }

    dataStore.save("Workflows", workflowsCustomStatusArray);

}

async function timelogs({dataStore, client}) {
    const timelogsArray = []

    const timelogsUrl = '/timelogs'

    const timelogsGET = await client.fetch(timelogsUrl, {
        method: 'GET'
    });

    if (!timelogsGET.ok) {
        throw new Error(`Could not Retrieve Timelogs (${timelogsGET.status}: ${timelogsGET.statusText})`);
    }

    const timelogsJson = await timelogsGET.json()
    const timelogsData = await timelogsJson.data

    timelogsData.forEach((timelog) => {
        // To convert float into HH:MM:SS -> 1.3 into 01:20:00
        let date = new Date(0, 0);
        date.setSeconds(+timelog.hours * 60 * 60);
        let hours = date.toTimeString().slice(0, 8)

        timelogsArray.push({
            id: timelog.id,
            taskId: timelog.taskId,
            userId: timelog.userId,
            hours: hours,
            comment: timelog.comment,
            trackedDate: timelog.trackedDate,
        })
    })

    dataStore.save("Timelogs", timelogsArray);

}

// Service Actions

async function createTimeEntry({dataStore, client, actionParameters}) {
    const hour = actionParameters.Hours, minute = actionParameters.Minutes, date = actionParameters.TrackedDate,
        taskId = actionParameters.TaskId, comment = actionParameters.Comment, userId = actionParameters.userId

    const trackedTime = await timeToDecimal(`${hour}:${minute}`)

    const createTimeEntrysUrl = `/tasks/${taskId}/timelogs?comment=${comment}&hours=${trackedTime}&trackedDate=${date}`

    console.log("url: " + createTimeEntrysUrl)

    const respPOST = await client.fetch(createTimeEntrysUrl, {method: 'POST'});

    if (!respPOST.ok) {
        throw new Error(`Could not create time entry -> Status: ${respPOST.status} / Response: ${JSON.stringify(respPOST)})`);
    }

    const jsonData = await respPOST.json()

    const timelogObject = jsonData.data[0]

    const timelog = {
        "id": timelogObject.id,
        "taskId": timelogObject.taskId,
        "userId": userId,
        "hours": timelogObject.hours.toString(),
        "comment": timelogObject.comment,
        "trackedDate": timelogObject.trackedDate,
    }

    dataStore.save("Timelogs", timelog);
}

async function addAssigneeToTask({dataStore, client, actionParameters}) {
    const taskArray = []
    const taskId = actionParameters.TaskId, assigneeArray = actionParameters.AssigneeArray,
        project = actionParameters.ProjectId,
        unassigned = actionParameters.Unassigned, assigneeId = actionParameters.AssigneeId,
        isManager = actionParameters.IsManager
    const errorMessage = `Could not add assignee ${assigneeId} to task ${taskId}`
    const method = `PUT`
    const responsable = isManager ? assigneeArray : assigneeId
    const url = `/tasks/${taskId}?addResponsibles=[${responsable}]`
    const taskObject = await requestWrike(client, url, method, errorMessage)

    if (isManager) {
        assigneeArray.forEach((assignee) => {
            taskArray.push({
                "id": taskObject.id,
                "title": taskObject.title,
                "description": taskObject.description.replace(/(<([^>]+)>)/ig, ''),
                "project": project,
                "scope": taskObject.scope,
                "status": taskObject.status,
                "custom_status_id": taskObject.customStatusId,
                "permalink": taskObject.permalink,
                "importance": taskObject.importance,
                "assignee": assignee,
            })
        });
    } else {
        taskArray.push({
            "id": taskObject.id,
            "title": taskObject.title,
            "description": taskObject.description.replace(/(<([^>]+)>)/ig, ''),
            "project": project,
            "scope": taskObject.scope,
            "status": taskObject.status,
            "custom_status_id": taskObject.customStatusId,
            "permalink": taskObject.permalink,
            "importance": taskObject.importance,
            "assignee": assigneeId,
        })
    }

    dataStore.save("AssignedTasks", taskArray);

    if (unassigned) {
        dataStore.deleteById("UnassignedTasks", actionParameters.TaskId)
    }

}

async function changeTaskStatus({dataStore, client, actionParameters}) {
    const taskArray = []
    const taskId = actionParameters.TaskId, status = actionParameters.Status
    const errorMessage = `Could not change task ${taskId} status`
    const url = `/tasks/${taskId}?status=${status}`
    const method = `PUT`
    const taskObject = await requestWrike(client, url, method, errorMessage)
    const assignees = taskObject.responsibleIds

    // Creates one record per Assignee (pk = task_id+assignee)
    assignees.map(value => {
        taskArray.push({
            id: taskObject.id,
            project: taskObject.id,
            title: taskObject.title,
            description: taskObject.description.replace(/(<([^>]+)>)/ig, ''),
            scope: taskObject.scope,
            status: taskObject.status,
            permalink: taskObject.permalink,
            importance: taskObject.importance,
            assignee: value,
        })
    })

    dataStore.save("AssignedTasks", taskArray);
}

async function createTask({dataStore, client, actionParameters}) {
    actionParameters.AssigneeArray === undefined ?
        await createUnassignedTask(dataStore, client, actionParameters) : await createAssignedTask(dataStore, client, actionParameters)

}

async function createUnassignedTask(dataStore, client, actionParameters) {
    const project = actionParameters.ProjectId,
        title = actionParameters.Title,
        description = actionParameters.Description,
        status = actionParameters.Status,
        importance = actionParameters.Importance

    const errorMessage = `Could not create task unassigned task`
    const url = `/folders/${project}/tasks?title=${title}&description=${description}&status=${status}&importance=${importance}`
    const method = `POST`
    const taskObject = await requestWrike(client, url, method, errorMessage)

    const task = {
        "id": taskObject.id,
        "title": taskObject.title,
        "description": taskObject.description.replace(/(<([^>]+)>)/ig, ''),
        "project": project,
        "scope": taskObject.scope,
        "status": taskObject.status,
        "permalink": taskObject.permalink,
        "importance": taskObject.importance,
    }

    dataStore.save('UnassignedTasks', task);
}

async function createAssignedTask(dataStore, client, actionParameters) {
    const taskArray = []
    const project = actionParameters.ProjectId,
        title = actionParameters.Title,
        description = actionParameters.Description,
        status = actionParameters.Status,
        importance = actionParameters.Importance,
        assigneeArray = actionParameters.AssigneeArray
    const errorMessage = `Could not create task to assignee ${assigneeArray}`
    const url = `/folders/${project}/tasks?title=${title}&description=${description}&status=${status}&importance=${importance}&responsibles=[${assigneeArray.join(",")}]`
    const method = `POST`
    const taskObject = await requestWrike(client, url, method, errorMessage)

    assigneeArray.forEach((assignee) => {
        taskArray.push({
            "id": taskObject.id,
            "title": taskObject.title,
            "description": taskObject.description.replace(/(<([^>]+)>)/ig, ''),
            "project": project,
            "scope": taskObject.scope,
            "status": taskObject.status,
            "permalink": taskObject.permalink,
            "importance": taskObject.importance,
            "assignee": assignee,
        })
    });

    dataStore.save('AssignedTasks', taskArray);
}


