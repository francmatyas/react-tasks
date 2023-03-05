export class Task {
  title;
  completed;
  id;
  completion;
  favorite;

  static newTask(title) {
    const task = new Task();
    task.title = title;
    task.completed = false;
    task.favorite = false;
    task.id = Math.random();
    task.completion = new Date();

    return task;
  }

  static fromObject(obj) {
    const task = new Task();
    task.title = obj.title;
    task.completed = obj.completed;
    task.id = obj.id;
    task.favorite = obj.favorite;
    task.completion = new Date(obj.completion);

    return task;
  }
}

export class Tasks{
  tasks;

  static fromJSON(json){
    const tasks = new Tasks();
    tasks.tasks = json.map((t) => Task.fromObject(t));
    
    return tasks;
  }

  static fromClass(obj){
    const tasks = new Tasks();
    tasks.tasks = obj.tasks;

    return tasks;
  }

  addTask(task){
    this.tasks.push(task);
  }

  editTask(task){
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[taskIndex] = task;
  }

  getTaskById(id){
    return this.tasks.find((t) => t.id === id);
  }

  getTasks(){
    return [...this.tasks];
  }

  sortByFavorite(){
    const sortedTasks = [...this.tasks];
    return sortedTasks.sort((a, b) => b.favorite - a.favorite);
  }

  sortByDate(){
    const sortedTasks = [...this.tasks];
    return sortedTasks.sort((a, b) => a.completion - b.completion);
  }

  sortByTitle(){
    const sortedTasks = [...this.tasks];
    return sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}
