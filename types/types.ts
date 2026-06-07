export type SidebarItem = {
  id: string;
  icon: string;
  label: string;
};

export type SidebarState = {
  activeId: string;
  setActiveId: (id: string) => void;
};

export interface Task {
  id: number;
  category: string;
  title: string;
  description: string;
  duration: string;
  timeOfDay: "morning" | "afternoon" | "evening" | "night";
  difficulty: "easy" | "medium" | "hard";
}

export type TaskState = {
  checkedTasks: number[];

  markTaskDone: (id: number) => void;
  unmarkTaskDone: (id: number) => void;
  toggleTask: (id: number) => void;
};
