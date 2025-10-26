import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem('employees');
    if (raw) {
      try {
        setEmployees(JSON.parse(raw));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (emp) => {
    setEmployees((prev) => [{ ...emp, id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) }, ...prev]);
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const handleToggleStatus = (id) => {
    setEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, status: e.status === 'Active' ? 'Inactive' : 'Active' } : e)));
  };

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return employees;
    return employees.filter((e) =>
      [e.fullName, e.email, e.department, e.role, e.status]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [employees, query]);

  const stats = useMemo(() => {
    const total = employees.length;
    const active = employees.filter((e) => e.status === 'Active').length;
    return { total, active };
  }, [employees]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header stats={stats} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-6">
          <Hero />
        </section>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <EmployeeForm onAdd={handleAddEmployee} />
          </div>
          <div className="lg:col-span-2">
            <EmployeeTable
              employees={filtered}
              query={query}
              onQueryChange={setQuery}
              onDelete={handleDelete}
              onToggleStatus={handleToggleStatus}
            />
          </div>
        </section>
      </main>
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400">
        Built with React, Tailwind, and a holographic Spline scene.
      </footer>
    </div>
  );
}
