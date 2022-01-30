import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
  <div className={s.content}>
    <div>
        <img src='https://rus-pic.ru/wp-content/uploads/2020/11/ampquotkorolivstvo_marokko_ampquot_-_prezentacija_z_geografii.jpg' />
      </div>
      <div>
        ava
        </div>
        <MyPosts />
        </div>

  )
}


export default Profile;