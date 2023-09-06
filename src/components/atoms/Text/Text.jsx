
const CardText = ({className, width, children}) => {
  return (
    <p className={className}
    style={{
      fontSize : '12px',
      margin : '0',
    }}>{children}</p>
  )
}

const CardTitle = ({className, width, children})=>{
  return (
    <h2 className={className}
    style={{
      fontSize : '16px',
      margin : '0',
      webkitOverflowStyle : 'none',
      whiteSpace: 'nowrap',
    }}>{children}</h2>
  )
}

const Title = ({children})=>{
  return (
      <h1>{children}</h1>
  )
}
const Subtitle = ({children})=>{
  return(
    <h2>{children}</h2>
  )
}

// export default Text
export { CardText, CardTitle, Subtitle, Title }

