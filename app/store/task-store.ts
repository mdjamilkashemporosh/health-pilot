import { create } from "zustand";
import { persist } from "zustand/middleware";

type TaskState = {
  checkedTasks: number[];
  lastReset: string;

  toggleTask: (id: number) => void;
  resetIfNewDay: () => void;
};

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      checkedTasks: [],
      lastReset: new Date().toDateString(),

      toggleTask: (id) => {
        const { checkedTasks } = get();

        set({
          checkedTasks: checkedTasks.includes(id)
            ? checkedTasks.filter((t) => t !== id)
            : [...checkedTasks, id],
        });
      },

      resetIfNewDay: () => {
        const today = new Date().toDateString();
        const { lastReset } = get();

        if (today !== lastReset) {
          set({
            checkedTasks: [],
            lastReset: today,
          });
        }
      },
    }),
    {
      name: "task-storage",
    },
  ),
);
