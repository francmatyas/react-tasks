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
