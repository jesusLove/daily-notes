import React from 'react'
import { atom, selector, selectorFamily, useRecoilValue } from 'recoil'

// 模拟异步数据查询
function myDBQuery({ userID }) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle({
        name: userID + Math.random(),
        error: userID <= 0 ? 'userId error' : ''
      })
    }, 1000)
  })
}
const currentUserIDState = atom({
  key: 'currentUserIDState',
  default: 1
})
const currentUserNameQuery = selector({
  key: 'currentUserName',
  get: async ({ get }) => {
    const response = await myDBQuery({
      userID: get(currentUserIDState)
    })
    if (response.error) {
      return response.error
    }
    return response.name
  }
})

// 带参数的 selector
const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userID) => async () => {
    const response = await myDBQuery({ userID })
    if (response.error) {
      return response.error
    }
    return response.name
  }
})

function UserInfo({ userID }) {
  const userName = useRecoilValue(userNameQuery(userID))
  return <div>{userName}</div>
}

function AsyncData() {
  const userName = useRecoilValue(currentUserNameQuery)
  return (
    <>
      <div>测试：{userName}</div>
      <div>
        <UserInfo userID={2} />
        <UserInfo userID={19} />
        <UserInfo userID={20} />
      </div>
    </>
  )
}

export default AsyncData
