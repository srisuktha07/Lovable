function App() {
  const servers = [
    { name: "Frontend", status: "Running" },
    { name: "Backend API", status: "Healthy" },
    { name: "Docker Engine", status: "Active" },
    { name: "Kubernetes", status: "Connected" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Cloud DevOps Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servers.map((server, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {server.name}
            </h2>

            <p className="text-green-400 font-medium">
              {server.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;