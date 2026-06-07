import { SidebarState } from "@/types/types";
import { create } from "zustand";

export const useSidebarStore = create<SidebarState>((set) => ({
  activeId: "all",
  setActiveId: (id) => set({ activeId: id }),
}));
