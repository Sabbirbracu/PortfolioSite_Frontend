// src/layout/AdminLayout.jsx

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[var(--color-dark)] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--color-secondary)] p-6">
        <h2 className="text-lg font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="/admin/dashboard" className="block hover:text-[var(--color-blue)]">Dashboard</a>
          <a href="/admin/projects" className="block hover:text-[var(--color-blue)]">Projects</a>
          <a href="/admin/settings" className="block hover:text-[var(--color-blue)]">Settings</a>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
