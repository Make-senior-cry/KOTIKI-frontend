import FeedSwitcherButton from './FeedSwitcherButton';

export default function FeedSwitcher({ active, options, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="btn-group" role="group">
      {options.map((buttonName) => (
        <FeedSwitcherButton
          key={buttonName}
          value={buttonName}
          checked={active === buttonName}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
