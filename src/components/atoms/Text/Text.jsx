import PropTypes from 'prop-types';

const CardText = ({children}) => {
  return (
    <p style={{
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
    <h2 style={{
      fontSize : '16px',
      margin : '0',
      WebkitOverflowStyle : 'none',
      whiteSpace: 'nowrap',
    }}>{children}</h2>
  )
}
CardTitle.propTypes={ children: PropTypes.string.isRequired }

const Title = ({children})=>{
  return (
      <h1 style={{
        fontSize:'46px',
        padding: '0',
        marginBottom: '0'
      }}>{children}</h1>
  )
}
Title.propTypes={ children: PropTypes.string.isRequired }

const Subtitle = ({children})=>{
  return(
    <h2>{children}</h2>
  )
}
Subtitle.propTypes={ children: PropTypes.string.isRequired }

export { CardText, CardTitle, Subtitle, Title }

