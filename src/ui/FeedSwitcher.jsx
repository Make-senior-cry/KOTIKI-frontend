export default function FeedSwitcher({ active, options, onChange }) {
  return (
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group" id="btnGroup">
      {options.map((buttonName) => (
        <label className="btn btn-outline-primary" key={buttonName}>
          <input type="radio" className="btn-check" checked={active === buttonName} onChange={() => onChange(buttonName)} />
          {buttonName}
        </label>
      ))}
    </div>
  );
}
