import { atom } from 'recoil'
import bookmarkList from '../static/BookmarkDummy'

export const BookMarkList = atom({
    key: 'bookmarkList',
    default: bookmarkList
})

export const IsLogin = atom({
    key: 'IsLogin',
    default: true
})