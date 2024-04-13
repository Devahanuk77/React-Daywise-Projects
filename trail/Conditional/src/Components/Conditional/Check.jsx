import React from 'react'
import style from './Check.module.css'

const Check = () => {
    let isFollowing=false;
  return (
    <>
    {isFollowing ? <h2 className={style.follow}>User is Following</h2>: <h2 className={style.follow}>User is not Following</h2>}
    </>
  )
}

export default Check