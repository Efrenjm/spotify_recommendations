import PropTypes from 'prop-types';

const CardText = ({children}) => {
  return (
    <p //className={className}
    style={{
      fontSize : '12px',
      margin : '0',
      WebkitOverflowStyle : 'none',
      whiteSpace: 'nowrap',
    }}>{children}</p>
  )
}
CardText.propTypes={ children: PropTypes.string.isRequired }

const CardTitle = ({children})=>{
  return (
    <h2 //className={className}
    style={{
      fontSize : '16px',
      margin : '0',
      WebkitOverflowStyle : 'none',
      whiteSpace: 'nowrap',
    }}>{children}</h2>
  )
}
CardTitle.propTypes={ children: PropTypes.string.isRequired }

// CardTitle.defaultProps ={ children : null }
// Button.defaultProps
const Title = ({children})=>{
  return (
      <h1 style={{
        // position:'aboslute',
        fontSize:'46px',
        padding: '0',
        marginBottom: '0'
      }}>{children}</h1>
  )
}
Title.propTypes={ children: PropTypes.string.isRequired }

// Title.defaultProps ={ children : null }

const Subtitle = ({children})=>{
  return(
    <h2>{children}</h2>
  )
}
Subtitle.propTypes={ children: PropTypes.string.isRequired }

// export default Text
export { CardText, CardTitle, Subtitle, Title }

