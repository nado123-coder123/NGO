import { useState } from "react";
import {
  getInitialStudents,
  arrayToObject,
  objectToArray,
  MAJORS,
  UNIVERSITIES,
  STATUSES,
  SORT_OPTIONS
} from "../../../data/studentsData";

const StudentCRUDSection = () => {
  const [students, setStudents] = useState(getInitialStudents());
  const [dataSource, setDataSource] = useState("array");
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", major: "Computer Engineering", university: "Stanford", gpa: "", need: "", status: "Pending" });

  const [filterName, setFilterName] = useState("");
  const [filterMajor, setFilterMajor] = useState("");
  const [filterUniversity, setFilterUniversity] = useState("");
  const [filterMinGpa, setFilterMinGpa] = useState("");
  const [filterMaxNeed, setFilterMaxNeed] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const addStudentArray = (student) => {
    const newStudent = { ...student, id: Date.now(), createdAt: new Date() };
    setStudents(prev => [...prev, newStudent]);
  };

  const updateStudentArray = (id, data) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...data, id } : s));
  };

  const deleteStudentArray = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const addStudentObject = (student) => {
    const id = Date.now();
    const newStudent = { ...student, id, createdAt: new Date() };
    const obj = arrayToObject(students);
    obj[id] = newStudent;
    setStudents(objectToArray(obj));
  };

  const updateStudentObject = (id, data) => {
    const obj = arrayToObject(students);
    if (obj[id]) {
      obj[id] = { ...obj[id], ...data, id };
    }
    setStudents(objectToArray(obj));
  };

  const deleteStudentObject = (id) => {
    const obj = arrayToObject(students);
    delete obj[id];
    setStudents(objectToArray(obj));
  };

  const testArrayCRUD = () => {
    console.group("--- Testing Array CRUD ---");
    let dummyStudents = [...students];
    const id = Date.now();
    const newStudent = { id, name: "Test Array", major: "Other", university: "Other", gpa: 3.5, need: 1000, status: "Pending", createdAt: new Date() };

    console.log("1. CREATE (Array): Adding new student");
    dummyStudents.push(newStudent);
    console.log("Current Array:", dummyStudents);

    console.log("2. READ (Array): Listing all students");
    console.table(dummyStudents);

    console.log("3. UPDATE (Array): Updating student name");
    dummyStudents = dummyStudents.map(s => s.id === id ? { ...s, name: "Updated Array Name" } : s);
    console.log("Current Array:", dummyStudents);

    console.log("4. DELETE (Array): Deleting student");
    dummyStudents = dummyStudents.filter(s => s.id !== id);
    console.log("Final Array:", dummyStudents);
    console.groupEnd();

    alert("Array CRUD test complete! Check your browser's Developer Console (F12) for the output logs.");
  };

  const testObjectCRUD = () => {
    console.group("--- Testing Object CRUD ---");
    let obj = arrayToObject(students);
    const id = Date.now();
    const newStudent = { id, name: "Test Object", major: "Other", university: "Other", gpa: 3.5, need: 1000, status: "Pending", createdAt: new Date() };

    console.log("1. CREATE (Object): Adding new student");
    obj[id] = newStudent;
    console.log("Current Object:", obj);

    console.log("2. READ (Object): Listing all students");
    console.table(Object.values(obj));

    console.log("3. UPDATE (Object): Updating student name");
    if (obj[id]) obj[id] = { ...obj[id], name: "Updated Object Name" };
    console.log("Current Object:", obj);

    console.log("4. DELETE (Object): Deleting student");
    delete obj[id];
    console.log("Final Object:", obj);
    console.groupEnd();

    alert("Object CRUD test complete! Check your browser's Developer Console (F12) for the output logs.");
  };

  const addStudent = dataSource === "array" ? addStudentArray : addStudentObject;
  const updateStudent = dataSource === "array" ? updateStudentArray : updateStudentObject;
  const deleteStudentFn = dataSource === "array" ? deleteStudentArray : deleteStudentObject;

  const getFiltered = () => {
    let filtered = students.filter(s => {
      const matchName = s.name.toLowerCase().includes(filterName.toLowerCase());
      const matchMajor = filterMajor ? s.major === filterMajor : true;
      const matchUni = filterUniversity ? s.university === filterUniversity : true;
      const matchGpa = filterMinGpa ? s.gpa >= parseFloat(filterMinGpa) : true;
      const matchNeed = filterMaxNeed ? s.need <= parseFloat(filterMaxNeed) : true;
      const matchStatus = filterStatus ? s.status === filterStatus : true;
      return matchName && matchMajor && matchUni && matchGpa && matchNeed && matchStatus;
    });

    filtered.sort((a, b) => {
      let cmp = 0;
      if (sortBy === "name") cmp = a.name.localeCompare(b.name);
      else if (sortBy === "gpa") cmp = a.gpa - b.gpa;
      else if (sortBy === "need") cmp = a.need - b.need;
      else if (sortBy === "createdAt") cmp = new Date(a.createdAt) - new Date(b.createdAt);
      return sortOrder === "desc" ? -cmp : cmp;
    });

    return filtered;
  };

  const openAdd = () => {
    setEditId(null);
    setForm({ name: "", major: "Computer Engineering", university: "Stanford", gpa: "", need: "", status: "Pending" });
    setModalOpen(true);
  };

  const openEdit = (id) => {
    const s = students.find(st => st.id === id);
    if (!s) return;
    setEditId(id);
    setForm({ name: s.name, major: s.major, university: s.university, gpa: s.gpa, need: s.need, status: s.status });
    setModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = { ...form, gpa: parseFloat(form.gpa), need: parseInt(form.need) };
    if (editId) {
      updateStudent(editId, data);
    } else {
      addStudent(data);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      deleteStudentFn(id);
    }
  };

  const filtered = getFiltered();

  const statusColor = (status) => {
    if (status === "Approved") return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300";
    if (status === "Rejected") return "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300";
    return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";
  };

  return (
    <section id="interactive-features" className="py-24 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-800 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-slate-800 dark:text-white">Data Source:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${dataSource === "array" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"}`}>
              {dataSource === "array" ? "Array [ ]" : "Object { }"}
            </span>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button onClick={() => setDataSource("array")} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${dataSource === "array" ? "bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-sm" : "text-slate-500 dark:text-slate-400"}`}>📋 Array</button>
            <button onClick={() => setDataSource("object")} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${dataSource === "object" ? "bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-sm" : "text-slate-500 dark:text-slate-400"}`}>🗂️ Object</button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-800 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white">Student Applications</h4>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${dataSource === "array" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"}`}>
                via {dataSource === "array" ? "Array [ ]" : "Object { }"}
              </span>
            </div>
            <button
              id="add-student-btn"
              onClick={openAdd}
              className={`group relative px-8 py-3 rounded-2xl text-white font-bold shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap overflow-hidden ${dataSource === "array" ? "bg-gradient-to-r from-indigo-600 to-violet-600 shadow-indigo-600/30 hover:shadow-indigo-600/50" : "bg-gradient-to-r from-emerald-600 to-teal-600 shadow-emerald-600/30 hover:shadow-emerald-600/50"}`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                Add Student
                <span className={`ml-1 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${dataSource === "array" ? "bg-white/20" : "bg-white/20"}`}>
                  {dataSource === "array" ? "Array" : "Object"}
                </span>
              </span>
              <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${dataSource === "array" ? "bg-gradient-to-r from-violet-600 to-indigo-600" : "bg-gradient-to-r from-teal-600 to-emerald-600"}`}></span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-4 bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <input type="text" value={filterName} onChange={e => setFilterName(e.target.value)} placeholder="Search by Name..." className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full" />
            <select value={filterMajor} onChange={e => setFilterMajor(e.target.value)} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full">
              <option value="">All Majors</option>
              {MAJORS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <select value={filterUniversity} onChange={e => setFilterUniversity(e.target.value)} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full">
              <option value="">All Universities</option>
              {UNIVERSITIES.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
            <input type="number" value={filterMinGpa} onChange={e => setFilterMinGpa(e.target.value)} min="0" max="4.0" step="0.1" placeholder="Min GPA" className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full" />
            <input type="number" value={filterMaxNeed} onChange={e => setFilterMaxNeed(e.target.value)} min="0" placeholder="Max Need ($)" className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full" />
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full">
              <option value="">All Statuses</option>
              {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
            <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Sort By:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm">
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <button onClick={() => setSortOrder(p => p === "asc" ? "desc" : "asc")} className="p-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 transition">
              {sortOrder === "asc" ? "↑" : "↓"}
            </button>
            <button onClick={() => { setFilterName(""); setFilterMajor(""); setFilterUniversity(""); setFilterMinGpa(""); setFilterMaxNeed(""); setFilterStatus(""); setSortBy("name"); setSortOrder("asc"); }} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 transition">↻ Reset</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <p className="col-span-full text-center text-slate-500 dark:text-slate-400 py-8">No students found matching your criteria.</p>
            ) : filtered.map(student => (
              <div key={student.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition relative">
                <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${statusColor(student.status)}`}>{student.status}</span>
                <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{student.name}</h5>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-4">{student.major} @ {student.university}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">GPA</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{student.gpa}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Need Amount</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">${student.need.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex space-x-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <button onClick={() => openEdit(student.id)} className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                    Edit {dataSource === "array" ? "(Array)" : "(Object)"}
                  </button>
                  <button onClick={() => handleDelete(student.id)} className="flex-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 py-2 rounded-xl text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-900/50 transition">
                    Delete {dataSource === "array" ? "(Array)" : "(Object)"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 max-w-lg w-full shadow-2xl relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-6 right-6 text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{editId ? "Edit Student" : "Add New Student"}</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Major</label>
                  <select value={form.major} onChange={e => setForm({ ...form, major: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none">
                    {MAJORS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">University</label>
                  <select value={form.university} onChange={e => setForm({ ...form, university: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none">
                    {UNIVERSITIES.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">GPA</label>
                  <input type="number" required min="0" max="4.0" step="0.1" value={form.gpa} onChange={e => setForm({ ...form, gpa: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Need ($)</label>
                  <input type="number" required min="1000" value={form.need} onChange={e => setForm({ ...form, need: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Status</label>
                <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none">
                  {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="pt-4 flex justify-end space-x-3">
                <button type="button" onClick={() => setModalOpen(false)} className="px-6 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition font-bold">Cancel</button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition font-bold shadow-lg shadow-indigo-600/30">Save Student</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentCRUDSection;
