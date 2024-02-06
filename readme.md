# Task Manager API 📝
#### About the API
In this project, we created a RESTful API using Node.js, Express.js, and NPM packages. The API will allow users to perform CRUD operations (Create, Read, Update, and Delete) on tasks. The tasks have a title, description, and a flag for completion status
> #### Steps to start the application
> 1. Clone this Project and Navigate to root directory
> 2.  Do **npm install** for Installing dependencies
> 3. After Installation open the terminal at root directory 
> 4. Run **npm run start** for starting the application

**App is ready to explore please use the below endpoints for using the app** 
> - **GET /tasks**: Retrieve all tasks. 
> - **GET /tasks/:id**: Retrieve a single task by its ID.
> - **POST /tasks**: Create a new task.
> - **PUT /tasks/:id**: Update an existing task by its ID.
> - **DELETE /tasks/:id**: Delete a task by its ID.
#### Extensions Added
Allowing users to assign a priority level (e.g., low, medium, high) to each task. Updated the API to support this new attribute in task creation, updates, and retrieval.
> - **GET /tasks/priority/:level.**: now user can retrieve tasks based on priority level <br>

Implemented filtering and sorting for the GET /tasks endpoint. For example, users can be able to filter tasks based on completion status and sort them by creation date. 
> - **GET tasks?sort=ASC** will return the tasks in ascending order based on the creation date **sort=DESC** for descending order
> - **GET tasks?completed=true**  will filter tasks based on completion status
> - **GET tasks?completed=true&sort=ASC** will filter tasks based on completion status and sort them in ascending order or vice versa
