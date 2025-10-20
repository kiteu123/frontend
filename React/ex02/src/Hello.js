import React from 'react'

export default function Hello({color, name ='이름없음',isSpecial}) {
  return (
    <div style={{color}}>
        {isSpecial ? <b>*</b>:null}
     안녕하세요 {name}
    </div>
  )
}

