"use client";

import { sidebarData } from "@/app/components/sidebar";
import { allTasks } from "@/app/data/task";
import { useSidebarStore } from "@/app/store/sidebar-store";
import { useTaskStore } from "@/app/store/task-store";
import { SidebarItem } from "@/types/types";
import { useEffect } from "react";

export default function DashboardOverview() {
  const activeId = useSidebarStore((state) => state.activeId);
  const setActiveId = useSidebarStore((state) => state.setActiveId);
  const checkedTasks = useTaskStore((state) => state.checkedTasks);
  const totalTasks = allTasks.length;
  const done = checkedTasks.length;
  const left = totalTasks - done;
  const percent = totalTasks === 0 ? 0 : Math.round((done / totalTasks) * 100);
  const resetIfNewDay = useTaskStore((state) => state.resetIfNewDay);
  useEffect(() => {
    resetIfNewDay();
  }, []);
  return (
    <section className="max-w-sm mx-auto px-4 py-6 space-y-6 max-h-screen overflow-y-scroll scrollbar-hide">
      {/* Progress */}
      <div className="flex flex-col items-center">
        <div className="relative h-32 w-32 rounded-full border-[6px] border-lime-200 flex items-center justify-center shadow-sm">
          <span className="text-3xl font-semibold text-lime-600">
            {percent}%
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white border border-gray-200 p-4 text-center">
          <p className="text-2xl font-semibold text-lime-600">{done}</p>
          <p className="mt-1 text-xs tracking-wider text-gray-700">DONE</p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 p-4 text-center">
          <p className="text-2xl font-semibold text-lime-600">{left}</p>
          <p className="mt-1 text-xs tracking-wider text-gray-700">LEFT</p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 p-4 text-center col-span-2">
          <p className="text-2xl font-semibold text-lime-600">{totalTasks}</p>
          <p className="mt-1 text-xs tracking-wider text-gray-700">TOTAL</p>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-2">
        <p className="text-xs tracking-widest text-gray-500">FILTER BY</p>

        {sidebarData.map((item: SidebarItem) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`cursor-pointer flex items-center justify-between rounded-xl px-4 py-3 transition-all border
                ${
                  isActive
                    ? "bg-linear-to-r from-lime-400 to-lime-500 border-lime-500 shadow-md"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <span
                  className={`text-lg ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                >
                  {item.icon}
                </span>

                {/* Label */}
                <span
                  className={`text-sm font-semibold ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-gray-400 mt-2">
        <a
          href="https://github.com/mdjamilkashemporosh/health-pilot"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          ⭐ Star us on GitHub
        </a>
      </p>
    </section>
  );
}
