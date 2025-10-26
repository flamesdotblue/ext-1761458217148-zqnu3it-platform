import { useMemo } from 'react';
import { CheckCircle2, Edit3, Search, Trash2 } from 'lucide-react';

export default function EmployeeTable({ employees, query, onQueryChange, onDelete, onToggleStatus }) {
  const empty = useMemo(() => employees.length === 0, [employees]);

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-lg font-medium">Team Directory</h3>
        <div className="relative w-full sm:w-80">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <Search className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search name, email, role..."
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 outline-none focus:ring-2 focus:ring-cyan-500/50"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-300 border-b border-neutral-800">
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Email</th>
              <th className="py-3 pr-4">Department</th>
              <th className="py-3 pr-4">Role</th>
              <th className="py-3 pr-4">Start</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id} className="border-b border-neutral-900/60 hover:bg-neutral-900/40">
                <td className="py-3 pr-4 font-medium">{e.fullName}</td>
                <td className="py-3 pr-4 text-neutral-300">{e.email}</td>
                <td className="py-3 pr-4">{e.department}</td>
                <td className="py-3 pr-4">{e.role || '—'}</td>
                <td className="py-3 pr-4">{e.startDate || '—'}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ring-1 ${
                      e.status === 'Active'
                        ? 'bg-emerald-500/10 text-emerald-300 ring-emerald-500/30'
                        : 'bg-neutral-700/20 text-neutral-300 ring-neutral-500/30'
                    }`}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {e.status}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onToggleStatus(e.id)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs"
                      title="Toggle status"
                    >
                      <Edit3 className="h-3.5 w-3.5" /> Toggle
                    </button>
                    <button
                      onClick={() => onDelete(e.id)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-rose-600/80 hover:bg-rose-600 text-white text-xs"
                      title="Remove"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {empty && (
              <tr>
                <td colSpan="7" className="py-10 text-center text-neutral-400">
                  No employees yet. Add your first team member using the form.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
