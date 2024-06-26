import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <img src="./src/assets/flag.jpeg" alt="" width={1489} />
<div>
  <NavLink to={"/Aholisi"}>
  <div className="Card1">
<h1>Agar hamma davlatlarni aholisini kormoqchi bosez shuni bosing</h1>
  </div>
  </NavLink>
  <NavLink to={"/Maydoni"}>
  <div className="Card2">
<h1>Agar hamma davlatlarni maydonini kormoqchi bosez shuni bosing</h1>
  </div>
  </NavLink>
</div>
    </div>
  )
}

export default Home
