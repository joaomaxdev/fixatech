import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="bg-gray-200 p-4 w-64 min-h-screen">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/admin" className="block hover:bg-gray-300 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="block hover:bg-gray-300 p-2 rounded">
              User Management
            </Link>
          </li>
          <li>
            <Link to="/admin/reports" className="block hover:bg-gray-300 p-2 rounded">
              Reports
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className="block hover:bg-gray-300 p-2 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

