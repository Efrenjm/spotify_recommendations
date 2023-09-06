
import { generateCodeVerifier } from "@api/authFunctions"
// import { generateCodeVerifier } from "@api/AuthFunctions"
import { Title } from "@atoms/Text/Text"

const Landing = ()=>{
  return (
    <div style={{
      display : 'flex',
      flexDirection : 'column',
      gap : '50px'
    }}>
      <Title> Spotify Recommendations </Title>
      <button onClick={ generateCodeVerifier }> button to redirect</button>
      
    </div>
  )
}

export default Landing