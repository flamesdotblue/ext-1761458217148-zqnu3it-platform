import { Users } from 'lucide-react';

export default function Header({ stats }) {
  return (
    <header className="border-b border-neutral-800/60 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Employee Register</h1>
            <p className="text-xs text-neutral-400">Add, track, and manage your team</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            Active: <span className="font-medium text-white">{stats.active}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-400"></span>
            Total: <span className="font-medium text-white">{stats.total}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
