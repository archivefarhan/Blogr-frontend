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
      <p className="text-black">Welcome User!</p>
      <a href="/" onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}
