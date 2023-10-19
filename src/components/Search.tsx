export default function Search() {
    return (
      <div className="flex flex-row form-control bg-base-100 justify-center">
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered md:w-1/5"
        />
        <button className="btn w-auto">Enter</button>
      </div>
    );
}