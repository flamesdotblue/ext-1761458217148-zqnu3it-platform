import { useState } from 'react';
import { UserPlus } from 'lucide-react';

const departments = ['Engineering', 'Design', 'Human Resources', 'Sales', 'Finance', 'Operations', 'Support'];

export default function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    department: departments[0],
    role: '',
    startDate: '',
    status: 'Active',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    onAdd({ ...form });
    setForm({ fullName: '', email: '', department: departments[0], role: '', startDate: '', status: 'Active' });
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500 flex items-center justify-center">
          <UserPlus className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-medium">Register Employee</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={`w-full rounded-lg bg-neutral-950 border ${errors.fullName ? 'border-rose-500/60' : 'border-neutral-800'} px-3 py-2.5 outline-none focus:ring-2 focus:ring-cyan-500/50`}
              placeholder="Jane Doe"
            />
            {errors.fullName && <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full rounded-lg bg-neutral-950 border ${errors.email ? 'border-rose-500/60' : 'border-neutral-800'} px-3 py-2.5 outline-none focus:ring-2 focus:ring-cyan-500/50`}
              placeholder="jane@company.com"
            />
            {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Department</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2.5 outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              {departments.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Role</label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2.5 outline-none focus:ring-2 focus:ring-cyan-500/50"
              placeholder="Product Designer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2.5 outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2.5 outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
        >
          <UserPlus className="h-4 w-4" />
          Add Employee
        </button>
      </form>
    </div>
  );
}
