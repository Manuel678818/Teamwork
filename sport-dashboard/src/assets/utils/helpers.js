// ===== LEVELS =====
export const Level = [
  {
    LevelId: 1,
    name: "L1",
    description: "First year",
  },
  {
    LevelId: 2,
    name: "L2",
    description: "Second year",
  },
  {
    LevelId: 3,
    name: "L3",
    description: "Third year",
  },
];

// ===== SPECIALTIES =====
export const Specialty = [
  {
    SpecialtyId: 1,
    name: "Software Engineering",
    description: "Study of computers and computational systems",
  },
  {
    SpecialtyId: 2,
    name: "Web, Digital and IT",
    description: "Study of web technologies and digital systems",
  },
  {
    SpecialtyId: 3,
    name: "Logistics",
    description: "Study of supply chain and transport systems",
  },
  {
    SpecialtyId: 4,
    name: "Accounting",
    description: "Study of financial records and reporting",
  },
  {
    SpecialtyId: 5,
    name: "Banking and Finance",
    description: "Study of banking systems and financial markets",
  },
];

// ===== SPORTS =====
export const sports = [
  {
    sportId: 1,
    name: "Basketball",
    description:
      "Team sport where two teams score by throwing a ball through a hoop",
    individual: false,
  },
  {
    sportId: 2,
    name: "Tennis",
    description:
      "Racket sport played individually or in doubles",
    individual: true,
  },
  {
    sportId: 3,
    name: "Swimming",
    description:
      "Sport involving movement through water",
    individual: true,
  },
  {
    sportId: 4,
    name: "Football",
    description:
      "Team sport played with a spherical ball",
    individual: false,
  },
  {
    sportId: 5,
    name: "Volleyball",
    description:
      "Team sport where players hit a ball over a net",
    individual: false,
  },
  {
    sportId: 6,
    name: "Athletics",
    description:
      "Sport involving running, jumping, and throwing events",
    individual: true,
  },
];

// ===== USERS (OPTIONAL, BUT KEPT CLEAN) =====
export const users = [
  {
    id: 1,
    name: "Alice",
    role: "admin",
    language: "English",
    password: "password123",
    defaultTeam: "Lakers",
  },
  {
    id: 2,
    name: "Bob",
    role: "user",
    language: "French",
    password: "password456",
    defaultTeam: "Warriors",
  },
  {
    id: 3,
    name: "Charlie",
    role: "user",
    language: "Spanish",
    password: "password789",
    defaultTeam: "Bulls",
  },
];

// ===== ATHLETES (ENTRY POINT DATA) =====
export const athletes = [
  {
    id: 1,
    name: "Michael Jordan",
    gender: "Male",
    age: 30,
    LevelId: 1,
    SpecialtyId: 1,
    enrolledSports: [1, 2],
  },
  {
    id: 2,
    name: "Serena Williams",
    gender: "Female",
    age: 35,
    LevelId: 2,
    SpecialtyId: 2,
    enrolledSports: [2],
  },
  {
    id: 3,
    name: "Usain Bolt",
    gender: "Male",
    age: 32,
    LevelId: 3,
    SpecialtyId: 3,
    enrolledSports: [6],
  },
  {
    id: 4,
    name: "Lionel Messi",
    gender: "Male",
    age: 35,
    LevelId: 2,
    SpecialtyId: 4,
    enrolledSports: [4],
  },
  {
    id: 5,
    name: "Simone Biles",
    gender: "Female",
    age: 24,
    LevelId: 1,
    SpecialtyId: 5,
    enrolledSports: [6],
  },
];
