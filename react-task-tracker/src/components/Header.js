
import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title, onAdd, showAdd}) => {

    const onClick = () => {
        onAdd()
    }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.prototypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'cyan',
// }

export default Header
