import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div className="text-sky-600 text-sm">
      <a href="/" onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}
