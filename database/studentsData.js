const StudentsDB = (() => {
  let students = [
    { id: 1, name: "Amira K.", major: "Computer Engineering", university: "Stanford", gpa: 3.8, need: 15000, status: "Approved", createdAt: new Date("2026-01-15") },
    { id: 2, name: "Omar H.", major: "Medicine", university: "Harvard", gpa: 3.9, need: 25000, status: "Pending", createdAt: new Date("2026-01-20") },
    { id: 3, name: "Sarah L.", major: "Literature", university: "Cambridge", gpa: 3.5, need: 8000, status: "Approved", createdAt: new Date("2026-02-05") },
    { id: 4, name: "David M.", major: "Physics", university: "MIT", gpa: 3.7, need: 12000, status: "Rejected", createdAt: new Date("2026-02-18") },
    { id: 5, name: "Zainab T.", major: "Business", university: "Stanford", gpa: 3.2, need: 10000, status: "Pending", createdAt: new Date("2026-03-01") }
  ];

  const recentDonors = [
    { name: "Ali R.", amount: 5000, project: "General Fund" },
    { name: "Global Tech Inc.", amount: 20000, project: "Engineering Scholarships" },
    { name: "Fatima A.", amount: 1500, project: "Medical Grants" },
    { name: "Dr. Smith", amount: 3000, project: "Women in STEM" }
  ];

  const getStudents = () => students;
  const setStudents = (newStudents) => { students = newStudents; };
  const getDonors = () => recentDonors;

  const addStudent = (student) => {
    student.id = Date.now();
    student.createdAt = new Date();
    students.push(student);
  };

  const updateStudent = (id, updatedData) => {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
      students[index] = { ...students[index], ...updatedData, id };
    }
  };

  const deleteStudent = (id) => {
    students = students.filter(student => student.id !== id);
  };

  const findById = (id) => students.find(s => s.id === id);

  return { getStudents, setStudents, getDonors, addStudent, updateStudent, deleteStudent, findById };
})();

// ============================================================================
// ALTERNATIVE: CRUD using an Object (Key-Value map)
// O(1) lookups, updates, and deletes by ID instead of O(n) array scans.
// ============================================================================
const StudentsObjectDB = (() => {
  let students = {
    1: { id: 1, name: "Amira K.", major: "Computer Engineering", university: "Stanford", gpa: 3.8, need: 15000, status: "Approved", createdAt: new Date("2026-01-15") },
    2: { id: 2, name: "Omar H.", major: "Medicine", university: "Harvard", gpa: 3.9, need: 25000, status: "Pending", createdAt: new Date("2026-01-20") },
    3: { id: 3, name: "Sarah L.", major: "Literature", university: "Cambridge", gpa: 3.5, need: 8000, status: "Approved", createdAt: new Date("2026-02-05") },
    4: { id: 4, name: "David M.", major: "Physics", university: "MIT", gpa: 3.7, need: 12000, status: "Rejected", createdAt: new Date("2026-02-18") },
    5: { id: 5, name: "Zainab T.", major: "Business", university: "Stanford", gpa: 3.2, need: 10000, status: "Pending", createdAt: new Date("2026-03-01") }
  };

  // READ all (returns an array so it can still be mapped/filtered easily)
  const getStudents = () => Object.values(students);
  
  // OVERWRITE all
  const setStudents = (newStudentsObj) => { students = newStudentsObj; };

  // CREATE (O(1))
  const addStudent = (student) => {
    const id = Date.now();
    student.id = id;
    student.createdAt = new Date();
    students[id] = student;
  };

  // UPDATE (O(1))
  const updateStudent = (id, updatedData) => {
    if (students[id]) {
        // Spread operator merges existing object properties with updated ones
        students[id] = { ...students[id], ...updatedData, id }; 
    }
  };

  // DELETE (O(1))
  const deleteStudent = (id) => {
    delete students[id];
  };

  // READ one (O(1) direct lookup!)
  const findById = (id) => students[id];

  return { getStudents, setStudents, addStudent, updateStudent, deleteStudent, findById };
})();

// ============================================================================
// PROXY: Unified interface that delegates to either Array or Object DB
// Lets the UI hot-swap data sources at runtime.
// ============================================================================
const DataSourceProxy = (() => {
  let activeSource = 'array'; // 'array' | 'object'

  const getActiveDB = () => activeSource === 'array' ? StudentsDB : StudentsObjectDB;

  const syncToTarget = () => {
    if (activeSource === 'array') {
      const arr = StudentsDB.getStudents();
      const obj = {};
      arr.forEach(s => { obj[s.id] = { ...s }; });
      StudentsObjectDB.setStudents(obj);
    } else {
      const arr = StudentsObjectDB.getStudents();
      StudentsDB.setStudents([...arr]);
    }
  };

  const switchSource = (source) => {
    if (source === activeSource) return;
    // Sync current data INTO the new source before switching
    if (activeSource === 'array') {
      const arr = StudentsDB.getStudents();
      const obj = {};
      arr.forEach(s => { obj[s.id] = { ...s }; });
      StudentsObjectDB.setStudents(obj);
    } else {
      const arr = StudentsObjectDB.getStudents();
      StudentsDB.setStudents([...arr]);
    }
    activeSource = source;
  };

  return {
    getActiveSource: () => activeSource,
    switchSource,
    getStudents:    ()           => getActiveDB().getStudents(),
    getDonors:      ()           => StudentsDB.getDonors(),
    addStudent:     (s)          => { getActiveDB().addStudent(s); syncToTarget(); },
    updateStudent:  (id, data)   => { getActiveDB().updateStudent(id, data); syncToTarget(); },
    deleteStudent:  (id)         => { getActiveDB().deleteStudent(id); syncToTarget(); },
    findById:       (id)         => getActiveDB().findById(id),
    setStudents:    (data)       => getActiveDB().setStudents(data),
  };
})();
