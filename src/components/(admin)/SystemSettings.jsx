import { useState } from "react"

function SystemSettings() {
  const [settings, setSettings] = useState({
    companyName: "FixaTech",
    emailNotifications: true,
    darkMode: false,
    language: "pt-BR",
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the settings to your backend
    console.log("Settings saved:", settings)
    alert("Configurações salvas com sucesso!")
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Configurações do Sistema</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Nome da Empresa
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            name="companyName"
            value={settings.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="text-sm">Ativar notificações por e-mail</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="text-sm">Modo escuro</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
            Idioma
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="language"
            name="language"
            value={settings.language}
            onChange={handleInputChange}
          >
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Salvar Configurações
          </button>
        </div>
      </form>
    </div>
  )
}

export default SystemSettings

