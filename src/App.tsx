import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import AppLayout from "./components/layout/AppLayout";
function App() {
  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  );
}
export default App;
