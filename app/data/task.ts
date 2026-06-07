import { Task } from "@/types/types";

export const allTasks: Task[] = [
  // ─── Body & Training ──────────────────────────────────────────────
  {
    id: 1,
    category: "body",
    title: "Morning movement warm-up",
    description:
      "5–10 min of arm circles, hip rotations, and bodyweight squats. Wakes joints, elevates morning testosterone before training.",
    duration: "10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 2,
    category: "body",
    title: "Resistance training session",
    description:
      "Compound lifts: squat, deadlift, bench, or rows. 3–5 sets × 5–10 reps at 75–85% effort. The #1 natural testosterone booster.",
    duration: "45–60 min",
    timeOfDay: "morning",
    difficulty: "hard",
  },
  {
    id: 3,
    category: "body",
    title: "Post-workout mobility work",
    description:
      "Static stretching and foam rolling targeting trained muscles. Reduces soreness, improves flexibility, and speeds up recovery.",
    duration: "10–15 min",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 4,
    category: "body",
    title: "Daily step goal",
    description:
      "Aim for 7,000–10,000 steps throughout the day. Low-intensity movement keeps cortisol balanced and supports fat metabolism.",
    duration: "Throughout day",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },

  // ─── Mind & Mental ────────────────────────────────────────────────
  {
    id: 5,
    category: "mind",
    title: "Morning mindfulness meditation",
    description:
      "10 min of focused breathing or body scan meditation right after waking. Lowers baseline cortisol and sharpens mental clarity for the day.",
    duration: "10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 6,
    category: "mind",
    title: "Journaling & intention setting",
    description:
      "Write 3 priorities for the day and one thing you're grateful for. Activates prefrontal cortex, reduces anxiety, and builds executive focus.",
    duration: "5–10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 7,
    category: "mind",
    title: "Deep work block",
    description:
      "90-minute distraction-free focus session on your highest-leverage task.",
    duration: "90 min",
    timeOfDay: "afternoon",
    difficulty: "hard",
  },
  {
    id: 8,
    category: "mind",
    title: "Digital detox window",
    description:
      "No screens or social media for at least 60 minutes before bed.",
    duration: "60 min",
    timeOfDay: "night",
    difficulty: "medium",
  },

  // ─── Hormonal Health ──────────────────────────────────────────────
  {
    id: 9,
    category: "hormonal",
    title: "Morning sunlight exposure",
    description: "Get 5–10 min of direct sunlight within 30 minutes of waking.",
    duration: "10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 10,
    category: "hormonal",
    title: "Cold exposure therapy",
    description: "End your shower with 1–3 min of cold water.",
    duration: "3–5 min",
    timeOfDay: "morning",
    difficulty: "medium",
  },
  {
    id: 11,
    category: "hormonal",
    title: "Avoid endocrine disruptors",
    description:
      "Use glass containers, avoid plastic heating, choose natural products.",
    duration: "Daily habit",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },
  {
    id: 12,
    category: "hormonal",
    title: "Stress management check-in",
    description: "Identify one stressor and reduce it.",
    duration: "5 min",
    timeOfDay: "evening",
    difficulty: "easy",
  },

  // ─── Nutrition & Fuel ─────────────────────────────────────────────
  {
    id: 13,
    category: "nutrition",
    title: "High-protein breakfast",
    description: "Eat 30–50g of protein early.",
    duration: "15–20 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 14,
    category: "nutrition",
    title: "Hydration protocol",
    description: "Drink 500ml water upon waking.",
    duration: "Throughout day",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 15,
    category: "nutrition",
    title: "Micronutrient-rich lunch",
    description: "Include greens, zinc, and healthy fats.",
    duration: "20–30 min",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },
  {
    id: 16,
    category: "nutrition",
    title: "Limit alcohol & sugar",
    description: "Reduce processed food and alcohol intake.",
    duration: "Daily habit",
    timeOfDay: "evening",
    difficulty: "medium",
  },

  // ─── Rest & Recovery ──────────────────────────────────────────────
  {
    id: 17,
    category: "rest",
    title: "Consistent sleep schedule",
    description: "Sleep 7–9 hours daily.",
    duration: "7–9 hrs",
    timeOfDay: "night",
    difficulty: "medium",
  },
  {
    id: 18,
    category: "rest",
    title: "Cool & dark sleep environment",
    description: "Optimize room temperature and darkness.",
    duration: "Nightly setup",
    timeOfDay: "night",
    difficulty: "easy",
  },
  {
    id: 19,
    category: "rest",
    title: "Evening wind-down routine",
    description: "Relax before sleep.",
    duration: "20–30 min",
    timeOfDay: "night",
    difficulty: "easy",
  },
  {
    id: 20,
    category: "rest",
    title: "Strategic rest day",
    description: "Full recovery day from training.",
    duration: "Full day",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
];
