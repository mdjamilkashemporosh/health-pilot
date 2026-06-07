"use client";

import { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import DashboardOverview from "./components/dashboard/overview";
import { allTasks } from "./data/task";
import { sidebarData } from "./components/sidebar";
import { useSidebarStore } from "./store/sidebar-store";
import { useTaskStore } from "./store/task-store";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const checkedTasks = useTaskStore((state) => state.checkedTasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const activeId = useSidebarStore((state) => state.activeId);
  const filteredTasks =
    activeId === "all"
      ? allTasks
      : allTasks.filter((task) => task.category === activeId);
  return (
    <div className="min-h-screen flex">
      <aside className="hidden  p-4 lg:block w-80 ">
        <DashboardOverview />
      </aside>

      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />

          <aside className="fixed left-0 top-0 h-full w-80  p-4  z-50 lg:hidden bg-white">
            <DashboardOverview />
          </aside>
        </>
      )}

      <main className="flex-1">
        <header className="flex items-center  p-4 lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <BsLayoutSidebarInset className="text-gray-700" size={24} />
          </button>
        </header>

        <div
          className="
          max-h-screen overflow-scroll
           scrollbar-hide"
        >
          {filteredTasks.map((task) => {
            const categoryLabel = sidebarData.find(
              (item) => item.id === task.category,
            )?.label;

            const isChecked = checkedTasks.includes(task.id);

            return (
              <div
                key={task.id}
                className="group p-5 m-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                {/* TOP ROW */}
                <div className="flex items-start justify-between">
                  <span className="inline-block text-[11px] font-semibold tracking-widest text-lime-700 bg-lime-50 px-2 py-1 rounded-md">
                    {categoryLabel}
                  </span>

                  {/* CLICKABLE CHECKBOX */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition
                      ${
                        isChecked
                          ? "bg-lime-500 border-lime-500 text-white"
                          : "border-gray-300"
                      }
                    `}
                  >
                    {isChecked && "✓"}
                  </button>
                </div>

                {/* TITLE */}
                <h3
                  className={`font-semibold mt-2 transition
                    ${
                      isChecked
                        ? "line-through text-gray-400"
                        : "text-gray-900 group-hover:text-lime-700"
                    }
                  `}
                >
                  {task.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {task.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    ⏱ {task.duration}
                  </span>

                  <span className="text-xs text-gray-400 capitalize">
                    {task.difficulty}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
