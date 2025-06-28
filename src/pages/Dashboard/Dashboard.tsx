import Header from "../../components/header/Header";

const Dashboard = () => {
  return (
    <div className="dashboard">
              <Header
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard" },
          { label: "Contact", href: "/contact" },
          { label: "Blog", href: "/blog" },
        ]}
        logoImage=""
        logoText="Logo"
        logoUrl="/"
      />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}

export default Dashboard;