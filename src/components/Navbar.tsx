export default function Navbar() {
  return (
    <div className="navbar bg-base-100 p-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">weather</a>
      </div>
      <div className="flex-none gap-2">
        <button className="btn btn-ghost normal-case">
            Light/Dark
        </button>
      </div>
    </div>
  );
}
