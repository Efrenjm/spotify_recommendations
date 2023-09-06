
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
const Subtitle = ({children})=>{
  return(
    <h2>{children}</h2>
  )
}

// export default Text
export { CardText, CardTitle, Subtitle, Title }

