
const CardText = ({className, width, children}) => {
  return (
    <p className={className}
    style={{
      "font-size" : "12px",
      "margin" : "0",
    }}>{children}</p>
  )
}

const CardTitle = ({className, width, children})=>{
  return (
    <h2 className={className}
    style={{
      "font-size" : "16px",
      "margin" : "0",
      "webkit-overflow-style" : "none",
      "white-space": "nowrap",
    }}>{children}</h2>
  )
}

const Title = ({children})=>{
  return (
      <h1>
        {children}
      </h1>
  )
}

// export default Text
export { CardText, CardTitle, Title }
