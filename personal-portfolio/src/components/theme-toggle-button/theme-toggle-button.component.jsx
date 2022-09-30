
import './theme-toggle-button.styles.css';

const ThemeToggleButton = ({ themeSwitch = f => f}) => {
  return (
    <button
      className="themeToggle"
      type="button"
      onClick={themeSwitch}
      aria-label="change theme color"
      >Switch Theme</button>
  )
}

export default ThemeToggleButton;