import { Task } from "@/types/types";

export const allTasks: Task[] = [
  // ─── Body & Training ──────────────────────────────────────────────
  {
    id: 1,
    category: "body",
    title: "Morning movement warm-up",
    description:
      "5–10 min of arm circles, hip rotations, leg swings, and bodyweight squats. Lubricates joints, activates stabilizer muscles, and elevates morning testosterone before training. Consistency here prevents injury over years of training.",
    duration: "10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 2,
    category: "body",
    title: "Resistance training session",
    description:
      "Compound lifts: squat, deadlift, bench press, overhead press, or rows. 3–5 sets × 5–10 reps at 75–85% effort. The single most evidence-backed intervention for testosterone, bone density, metabolic health, and longevity. Prioritize progressive overload — add small weight or reps each week.",
    duration: "45–60 min",
    timeOfDay: "morning",
    difficulty: "hard",
  },
  {
    id: 3,
    category: "body",
    title: "Post-workout mobility work",
    description:
      "Hold each stretch 30–60 seconds targeting trained muscles. Include hip flexors, hamstrings, thoracic spine, and shoulders. Reduces DOMS, corrects postural imbalances caused by desk work, and keeps you training injury-free for decades.",
    duration: "10–15 min",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 4,
    category: "body",
    title: "Daily step goal",
    description:
      "Aim for 7,000–10,000 steps spread throughout the day. Low-intensity movement keeps cortisol balanced, improves insulin sensitivity, supports fat oxidation, and counteracts the metabolic damage of prolonged sitting. Use a wrist tracker or phone pedometer to stay accountable.",
    duration: "Throughout day",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 5,
    category: "body",
    title: "Zone 2 cardio session",
    description:
      "30–45 min of steady-state cardio at a pace where you can hold a conversation — brisk walk, cycling, light jog, or rowing. Builds mitochondrial density, improves VO2 max, enhances fat metabolism, and is strongly linked to reduced all-cause mortality. Aim for 3× per week.",
    duration: "30–45 min",
    timeOfDay: "morning",
    difficulty: "medium",
  },
  {
    id: 6,
    category: "body",
    title: "Core & posture activation",
    description:
      "Dead bugs, bird dogs, planks, and hollow holds — 3 sets each. A strong, stable core protects your spine during heavy lifts, eliminates chronic low-back pain, and improves athletic performance across every movement pattern. 10 min daily compounds massively over months.",
    duration: "10 min",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 7,
    category: "body",
    title: "Grip & forearm training",
    description:
      "Farmer carries, dead hangs, or a grip trainer for 5–10 min. Grip strength is one of the strongest predictors of all-cause mortality and cardiovascular health in long-term studies. It also directly improves performance in deadlifts, pull-ups, and carries.",
    duration: "10 min",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 8,
    category: "body",
    title: "Weekly sprint protocol",
    description:
      "6–8 all-out sprints of 15–20 seconds with 90 seconds rest. Once or twice a week. Sprinting triggers the most potent natural release of growth hormone, torches visceral fat, and conditions your fast-twitch muscle fibers that slow-cardio never touches. Walk for 5 min after.",
    duration: "20 min",
    timeOfDay: "morning",
    difficulty: "hard",
  },

  // ─── Mind & Mental ────────────────────────────────────────────────
  {
    id: 9,
    category: "mind",
    title: "Morning mindfulness meditation",
    description:
      "10 min of focused breathing or body scan right after waking — before checking your phone. Consistently lowers baseline cortisol, increases gray matter density in the prefrontal cortex over months, and builds the mental resilience to handle stress without reactivity.",
    duration: "10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 10,
    category: "mind",
    title: "Journaling & intention setting",
    description:
      "Write 3 priorities for the day, one thing you're grateful for, and one thing you'll let go of. Activates prefrontal cortex, reduces anxiety by externalizing worry, builds executive focus, and over months creates a written record of your growth and patterns.",
    duration: "5–10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 11,
    category: "mind",
    title: "Deep work block",
    description:
      "90-minute distraction-free focus session on your single highest-leverage task. Phone on airplane mode, notifications off, one tab open. Based on Cal Newport's research — this type of focused work compounded daily is the primary driver of career mastery and meaningful output.",
    duration: "90 min",
    timeOfDay: "afternoon",
    difficulty: "hard",
  },
  {
    id: 12,
    category: "mind",
    title: "Digital detox window",
    description:
      "No screens, social media, or news for at least 60 minutes before bed. Blue light suppresses melatonin by up to 50%, and doom-scrolling elevates cortisol. Replaced with reading, conversation, or light stretching — this habit alone dramatically improves sleep quality within weeks.",
    duration: "60 min",
    timeOfDay: "night",
    difficulty: "medium",
  },
  {
    id: 13,
    category: "mind",
    title: "Daily reading — non-fiction",
    description:
      "Read 20–30 pages of a book on biology, philosophy, psychology, finance, or history each day. 20 pages/day = 15–20 books per year. Builds vocabulary, expands your mental models, and directly improves problem-solving and decision-making quality over time.",
    duration: "20–30 min",
    timeOfDay: "evening",
    difficulty: "easy",
  },
  {
    id: 14,
    category: "mind",
    title: "Evening reflection & review",
    description:
      "Spend 5 minutes reviewing the day: what went well, what didn't, and what you'll do differently. This metacognitive habit accelerates skill acquisition, reduces repeated mistakes, and builds the self-awareness that underpins long-term personal growth.",
    duration: "5 min",
    timeOfDay: "night",
    difficulty: "easy",
  },
  {
    id: 15,
    category: "mind",
    title: "Cold cognitive challenge",
    description:
      "Spend 10 min on a mentally demanding task with no 'easy mode' — chess puzzles, a new language lesson, mental math, or a logic problem. Neuroplasticity peaks when the brain is challenged just past its comfort zone. Daily novelty builds cognitive reserve against age-related decline.",
    duration: "10–15 min",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },
  {
    id: 16,
    category: "mind",
    title: "Social connection time",
    description:
      "A real conversation — in person, phone call, or video — with someone you care about. Loneliness has the same mortality risk as smoking 15 cigarettes a day. Strong social bonds are consistently the #1 factor in Blue Zone longevity studies. Protect this time aggressively.",
    duration: "15–30 min",
    timeOfDay: "evening",
    difficulty: "easy",
  },

  // ─── Hormonal Health ──────────────────────────────────────────────
  {
    id: 17,
    category: "hormonal",
    title: "Morning sunlight exposure",
    description:
      "Get 5–10 min of direct outdoor sunlight within 30 minutes of waking — no sunglasses. This anchors your circadian clock, spikes cortisol at the right time (morning peak), and sets up melatonin production 12–14 hours later for deep sleep. One of the highest-leverage daily habits for hormonal rhythm.",
    duration: "10 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 18,
    category: "hormonal",
    title: "Cold exposure therapy",
    description:
      "End your shower with 1–3 min of cold water (ideally 15°C/60°F or colder). Increases norepinephrine by 200–300%, boosts dopamine, activates brown adipose tissue, and improves insulin sensitivity. Start with 15 seconds and build up weekly. Long-term practitioners report dramatically elevated mood and energy.",
    duration: "3–5 min",
    timeOfDay: "morning",
    difficulty: "medium",
  },
  {
    id: 19,
    category: "hormonal",
    title: "Avoid endocrine disruptors",
    description:
      "Use glass or stainless containers instead of plastic — especially when heating food. Choose natural deodorant, fluoride-free toothpaste, and fragrance-free personal care products. Chemicals like BPA, parabens, and phthalates mimic estrogen and suppress testosterone. Small daily swaps have significant long-term hormonal impact.",
    duration: "Daily habit",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },
  {
    id: 20,
    category: "hormonal",
    title: "Stress management check-in",
    description:
      "Take 5 minutes to identify your #1 current stressor and write one concrete action to reduce it. Chronic psychological stress elevates cortisol which directly suppresses testosterone, impairs thyroid function, and disrupts sleep. Addressing it systematically — not just tolerating it — is a hormonal intervention.",
    duration: "5 min",
    timeOfDay: "evening",
    difficulty: "easy",
  },
  {
    id: 21,
    category: "hormonal",
    title: "Limit caffeine after noon",
    description:
      "Cut all caffeine (coffee, tea, pre-workout, energy drinks) by 12–1 PM. Caffeine has a 5–7 hour half-life — an afternoon coffee still disrupts deep sleep architecture even if you fall asleep normally. Poor sleep crushes testosterone by 10–15% per night of disruption. This single habit protects your entire hormonal system.",
    duration: "Daily habit",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },
  {
    id: 22,
    category: "hormonal",
    title: "Zinc & magnesium optimization",
    description:
      "Ensure daily intake of zinc-rich foods (oysters, beef, pumpkin seeds) and magnesium (dark chocolate, spinach, almonds). Zinc is a direct cofactor in testosterone synthesis — deficiency is endemic in men. Magnesium improves sleep quality and free testosterone. Consider ZMA supplement if diet falls short.",
    duration: "Daily habit",
    timeOfDay: "evening",
    difficulty: "easy",
  },
  {
    id: 23,
    category: "hormonal",
    title: "Vitamin D protocol",
    description:
      "Get 20–30 min of midday sun on skin (arms, legs) or take 2,000–5,000 IU Vitamin D3 with K2. Vitamin D is a steroid hormone precursor — deficiency is directly linked to low testosterone, depression, poor immune function, and increased cancer risk. Test your levels annually and optimize to 50–80 ng/mL.",
    duration: "20–30 min",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 24,
    category: "hormonal",
    title: "Intermittent fasting window",
    description:
      "Eat within a 8–10 hour window (e.g., first meal at 10 AM, last by 7 PM). The fasting window increases insulin sensitivity, elevates growth hormone, triggers autophagy (cellular cleanup), and reduces chronic low-grade inflammation — a root driver of hormonal disruption and aging.",
    duration: "Daily habit",
    timeOfDay: "morning",
    difficulty: "medium",
  },

  // ─── Nutrition & Fuel ─────────────────────────────────────────────
  {
    id: 25,
    category: "nutrition",
    title: "High-protein breakfast",
    description:
      "Eat 30–50g of protein within 1–2 hours of waking — eggs, Greek yogurt, cottage cheese, smoked salmon, or a quality protein shake. High morning protein reduces hunger hormones for 6+ hours, preserves lean muscle, and stabilizes blood sugar compared to carb-heavy breakfasts. The single most impactful meal change for body composition.",
    duration: "15–20 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 26,
    category: "nutrition",
    title: "Hydration protocol",
    description:
      "Drink 500ml of water immediately upon waking — add a pinch of sea salt and squeeze of lemon for electrolytes. You wake up mildly dehydrated every morning. Rehydrating fast improves cognitive performance, reduces hunger, and kick-starts kidney function. Target 35ml per kg of bodyweight across the whole day.",
    duration: "Throughout day",
    timeOfDay: "morning",
    difficulty: "easy",
  },
  {
    id: 27,
    category: "nutrition",
    title: "Micronutrient-rich lunch",
    description:
      "Build lunch around leafy greens (spinach, arugula, kale), a palm of quality protein, and 1–2 tbsp of healthy fat (olive oil, avocado). Add zinc-rich foods like pumpkin seeds or red meat 3–4×/week. This combination fuels testosterone production, reduces inflammatory markers, and sustains afternoon cognitive output.",
    duration: "20–30 min",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },
  {
    id: 28,
    category: "nutrition",
    title: "Limit alcohol & sugar",
    description:
      "Eliminate or significantly reduce alcohol (directly suppresses testosterone for 24–48 hrs), processed sugar (spikes insulin and promotes visceral fat), and refined seed oils. These three items alone are responsible for the majority of hormonal disruption, chronic inflammation, and metabolic dysfunction in modern men.",
    duration: "Daily habit",
    timeOfDay: "evening",
    difficulty: "medium",
  },
  {
    id: 29,
    category: "nutrition",
    title: "Omega-3 & anti-inflammatory foods",
    description:
      "Include fatty fish (salmon, sardines, mackerel) 3–4×/week, or take 2–3g EPA/DHA fish oil daily. Omega-3s reduce systemic inflammation — the root of most chronic disease — improve brain function, lower triglycerides, and support testosterone production. Walnuts and flaxseed provide plant-based ALA as a daily complement.",
    duration: "Daily habit",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 30,
    category: "nutrition",
    title: "Pre-bed protein & casein",
    description:
      "Have 20–40g of slow-digesting protein 30–60 min before sleep — cottage cheese, Greek yogurt, or a casein shake. Casein protein digests over 7–8 hours, providing a sustained amino acid drip during sleep that maximizes muscle protein synthesis, reduces overnight muscle breakdown, and improves morning satiety.",
    duration: "5 min",
    timeOfDay: "night",
    difficulty: "easy",
  },
  {
    id: 31,
    category: "nutrition",
    title: "Whole food carb timing",
    description:
      "Reserve most of your carbohydrate intake (rice, oats, potatoes, fruit) for the meals around your training window — before and after workouts. This fuels performance, maximizes glycogen replenishment, and keeps insulin sensitivity high. Avoiding heavy carbs late at night improves sleep quality and fat oxidation during sleep.",
    duration: "Daily habit",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },
  {
    id: 32,
    category: "nutrition",
    title: "Gut health — fiber & fermented foods",
    description:
      "Eat 25–35g of fiber daily from vegetables, legumes, and whole grains. Add one serving of fermented food (kefir, kimchi, sauerkraut, plain yogurt) daily. A healthy gut microbiome produces key vitamins, regulates serotonin production, improves immune function, and reduces inflammatory markers — all foundational to long-term health.",
    duration: "Daily habit",
    timeOfDay: "afternoon",
    difficulty: "medium",
  },

  // ─── Rest & Recovery ──────────────────────────────────────────────
  {
    id: 33,
    category: "rest",
    title: "Consistent sleep schedule",
    description:
      "Go to bed and wake up at the same time every day — including weekends. Sleep consistency is more important than duration alone. It aligns your circadian rhythm, maximizes REM and deep sleep stages, and ensures testosterone peaks during the correct sleep phases. Every hour of regular sleep protects long-term cognitive and hormonal health.",
    duration: "7–9 hrs",
    timeOfDay: "night",
    difficulty: "medium",
  },
  {
    id: 34,
    category: "rest",
    title: "Cool & dark sleep environment",
    description:
      "Set your bedroom to 65–68°F (18–20°C) and make it completely dark — use blackout curtains and cover all LED lights. Core body temperature must drop 1–2°F to initiate deep sleep. Even small amounts of light exposure during sleep suppress melatonin and reduce sleep quality measurably. These are the two highest-ROI sleep environment changes.",
    duration: "Nightly setup",
    timeOfDay: "night",
    difficulty: "easy",
  },
  {
    id: 35,
    category: "rest",
    title: "Evening wind-down routine",
    description:
      "The 30–60 min before bed should be identical every night: dim lights, no screens, light stretching or reading, herbal tea (chamomile or ashwagandha). Repetition conditions your nervous system to recognize these cues as 'sleep time', triggering a parasympathetic response that lowers heart rate and body temperature naturally.",
    duration: "20–30 min",
    timeOfDay: "night",
    difficulty: "easy",
  },
  {
    id: 36,
    category: "rest",
    title: "Strategic rest day",
    description:
      "Take 1–2 full rest days from structured training each week. Active recovery — a slow walk, yoga, or swimming — is ideal. Muscle growth and strength gains happen during recovery, not during the workout. Chronically under-recovering elevates cortisol, suppresses testosterone, and leads to burnout. Rest is part of the program.",
    duration: "Full day",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 37,
    category: "rest",
    title: "Strategic napping",
    description:
      "A 10–20 min nap between 1–3 PM if sleep deprived — set an alarm and lie flat. NASA studies show a 26-minute nap improves alertness 54% and performance 34%. Keep it under 30 min to avoid sleep inertia. A well-timed short nap restores cognitive function, reaction time, and mood without disrupting nighttime sleep.",
    duration: "20 min",
    timeOfDay: "afternoon",
    difficulty: "easy",
  },
  {
    id: 38,
    category: "rest",
    title: "Sauna or heat therapy",
    description:
      "15–20 min in a sauna (ideally Finnish dry sauna at 80–100°C) 2–4×/week. Sauna use is associated with a 40% reduction in cardiovascular mortality and a 66% reduction in dementia risk in long-term studies. It also triggers growth hormone release, aids muscle recovery, and produces a powerful mood lift through endorphin and norepinephrine release.",
    duration: "20–30 min",
    timeOfDay: "evening",
    difficulty: "medium",
  },
  {
    id: 39,
    category: "rest",
    title: "Breathwork for recovery",
    description:
      "5 min of box breathing (4 sec in, 4 hold, 4 out, 4 hold) or 4-7-8 breathing before sleep or after high-stress events. Activates the parasympathetic nervous system within 2–3 minutes, measurably reducing heart rate and cortisol. Long-term breathwork practice improves HRV — one of the best objective markers of recovery and stress resilience.",
    duration: "5–10 min",
    timeOfDay: "night",
    difficulty: "easy",
  },
  {
    id: 40,
    category: "rest",
    title: "Weekly HRV & recovery check",
    description:
      "Use a wearable (Whoop, Garmin, Oura Ring) or free app (Elite HRV) to track your heart rate variability each morning. HRV gives you an objective daily readiness score. On low-HRV days, reduce training intensity and prioritize sleep — this prevents overtraining, guides recovery intelligently, and builds long-term athletic resilience.",
    duration: "2 min",
    timeOfDay: "morning",
    difficulty: "easy",
  },
];
