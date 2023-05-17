import Switcher from '../ui/Switcher/Switcher';

function FeedSwitcher({ feedOptions, activeFeedOption, changeFeedOption }) {
  return (<Switcher options={feedOptions} active={activeFeedOption} onChange={changeFeedOption} />);
}

export default FeedSwitcher;
