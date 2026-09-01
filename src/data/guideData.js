export const GUIDE_QUESTIONS = [
  // ─── Phase 1: Houselisting & Housing Census ─────────────────────────────
  {
    id: "q_material",
    topic: "Building Material (Phase 1)",
    question: "What is the predominant material of the roof of your census house?",
    simpleExplanation: "Select the material that covers the largest area of your roof.",
    example: "If your roof is half concrete and half tin sheets, but the concrete part is slightly larger, select 'Concrete'.",
    commonMistake: "Don't select a material just because it's the most expensive part; focus on what covers the most area."
  },
  {
    id: "q_water",
    topic: "Drinking Water (Phase 1)",
    question: "What is the main source of drinking water for your household?",
    simpleExplanation: "Choose the source from where your household gets the majority of its drinking water for most of the year.",
    example: "If you get tap water in the summer but use a handpump in the winter, select the one you use for the longest time during the year.",
    commonMistake: "Do not select the source you only use occasionally or during emergencies."
  },
  {
    id: "q_toilet",
    topic: "Toilet Facility (Phase 1)",
    question: "What type of latrine facility does your household have access to?",
    simpleExplanation: "Record the type of toilet your household members actually use on a daily basis.",
    example: "If you have a flush toilet inside your house, select 'Flush/Pour flush to piped sewer system' or 'to septic tank', depending on your connection.",
    commonMistake: "Do not mark 'No latrine' if you share a community toilet — mark the type of that shared facility."
  },
  {
    id: "q_assets",
    topic: "Household Assets (Phase 1)",
    question: "Which of the following assets does your household own?",
    simpleExplanation: "List assets that belong to your household, including TV, radio, internet, mobile phones, bicycles, cars, etc.",
    example: "If the family owns one smartphone and a bicycle, mark both. Do not count items belonging to guests or relatives staying temporarily.",
    commonMistake: "Do not include assets that you rent or borrow. Only owned assets should be listed."
  },
  // ─── Phase 2: Population Enumeration ──────────────────────────────────────
  {
    id: "q_members",
    topic: "Household Members (Phase 2)",
    question: "Who should be listed as members of your household?",
    simpleExplanation: "List everyone who normally lives and eats in your household, even if they are temporarily away.",
    example: "A son studying in another city but who returns home during vacations should be listed under your household. A live-in domestic worker who eats and sleeps in your house should also be listed.",
    commonMistake: "Do not miss infants and newborns. Every person of every age must be counted."
  },
  {
    id: "q_occupation",
    topic: "Economic Activity (Phase 2)",
    question: "What was the main economic activity of this person during the last one year?",
    simpleExplanation: "Select the type of work this person spent the most time doing over the past 12 months.",
    example: "If a person worked as a farmer for 7 months and a construction worker for 5 months, their main activity is 'Cultivator/Farmer'.",
    commonMistake: "Do not list a secondary part-time job as the main activity if it took less time than their primary work."
  },
  {
    id: "q_education",
    topic: "Education (Phase 2)",
    question: "What is the highest level of education attained by this person?",
    simpleExplanation: "Select the highest class or degree this person successfully completed, not the level they are currently attending.",
    example: "If a person completed Class 10 (Matric/SSC) but is currently in Class 11, they should be listed as 'Matriculate/Secondary'.",
    commonMistake: "Do not mark the level a person is currently studying at. Only mark what they have fully completed."
  },
  {
    id: "q_migration",
    topic: "Migration (Phase 2)",
    question: "Is this person a migrant? If so, where did they migrate from?",
    simpleExplanation: "A migrant is someone who has moved from their place of birth or last residence to their current place. Note the reason and the origin.",
    example: "If a person was born in Bihar but now lives in Mumbai for work, they should be marked as a migrant from Bihar with reason 'Work/Employment'.",
    commonMistake: "Moving within the same city or town generally does not count as migration for census purposes — the move must be across a defined administrative boundary."
  }
];
