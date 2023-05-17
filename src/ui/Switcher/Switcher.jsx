import SwitcherButton from './SwitcherButton';

export default function Switcher({ active, options, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="btn-group" role="group">
        {options.map((buttonName) => (
          <SwitcherButton
            key={buttonName}
            value={buttonName}
            checked={active === buttonName}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>

  );
}
