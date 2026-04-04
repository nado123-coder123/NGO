// ============================================================================
// Student Data Module (Array-based CRUD)
// ============================================================================
const initialStudents = [
  { id: 1, name: "Amira K.", major: "Computer Engineering", university: "Stanford", gpa: 3.8, need: 15000, status: "Approved", createdAt: new Date("2026-01-15") },
  { id: 2, name: "Omar H.", major: "Medicine", university: "Harvard", gpa: 3.9, need: 25000, status: "Pending", createdAt: new Date("2026-01-20") },
  { id: 3, name: "Sarah L.", major: "Literature", university: "Cambridge", gpa: 3.5, need: 8000, status: "Approved", createdAt: new Date("2026-02-05") },
  { id: 4, name: "David M.", major: "Physics", university: "MIT", gpa: 3.7, need: 12000, status: "Rejected", createdAt: new Date("2026-02-18") },
  { id: 5, name: "Zainab T.", major: "Business", university: "Stanford", gpa: 3.2, need: 10000, status: "Pending", createdAt: new Date("2026-03-01") }
];

export const recentDonors = [
  { name: "Ali R.", amount: 5000, project: "General Fund" },
  { name: "Global Tech Inc.", amount: 20000, project: "Engineering Scholarships" },
  { name: "Fatima A.", amount: 1500, project: "Medical Grants" },
  { name: "Dr. Smith", amount: 3000, project: "Women in STEM" }
];

export const getInitialStudents = () =>
  initialStudents.map(s => ({ ...s }));

// ============================================================================
// Object-based CRUD helpers (O(1) lookups)
// ============================================================================
export const arrayToObject = (arr) => {
  const obj = {};
  arr.forEach(s => { obj[s.id] = { ...s }; });
  return obj;
};

export const objectToArray = (obj) => Object.values(obj);

export const STATUSES = ["Pending", "Approved", "Rejected"];
export const MAJORS = ["Computer Engineering", "Medicine", "Literature", "Physics", "Business"];
export const UNIVERSITIES = ["Stanford", "MIT", "Harvard", "Cambridge"];
export const SORT_OPTIONS = [
  { value: "name", label: "Name" },
  { value: "gpa", label: "GPA" },
  { value: "need", label: "Need Amount" },
  { value: "createdAt", label: "Date Added" }
];
