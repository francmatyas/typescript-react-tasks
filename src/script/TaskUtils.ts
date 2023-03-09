interface ITask {
  title: string;
  completed?: boolean;
  favorite?: boolean;
  id?: number;
  completion?: Date;
}

export class Task {
  public title: string;
  public completed: boolean;
  public favorite: boolean;
  public id: number;
  public completion: Date;

  constructor(obj: ITask);
  constructor(obj?: ITask) {
    this.title = obj?.title ?? "";
    this.completed = obj?.completed ?? false;
    this.favorite = obj?.favorite ?? false;
    this.id = obj?.id ?? Math.random();
    this.completion = obj?.completion ?? new Date();
  }
}

export class Tasks {
  public tasks: Task[];

  constructor(list: Task[]) {
    this.tasks = list.map((t) => new Task(t));
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  editTask(task: Task) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[taskIndex] = task;
  }

  getTaskById(id: number) {
    return this.tasks.find((t) => t.id === id);
  }

  getTasks() {
    return [...this.tasks];
  }

  sortByFavorite() {
    const sortedTasks: Task[] = [...this.tasks];
    return sortedTasks.sort((a: any, b: any) => b.favorite - a.favorite);
  }

  sortByDate() {
    const sortedTasks = [...this.tasks];
    return sortedTasks.sort((a: any, b: any) => a.completion - b.completion);
  }

  sortByTitle() {
    const sortedTasks = [...this.tasks];
    return sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}

export class JSONParser {
  public static Deserialize(data: string): any {
    return JSON.parse(data, JSONParser.ReviveDateTime);
  }

  private static ReviveDateTime(key: any, value: any): any {
    if (typeof value === "string") {
      let a =
        /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(
          value
        );
      if (a) {
        return new Date(value);
      }
    }
    return value;
  }
}
