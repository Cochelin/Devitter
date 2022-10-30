import { atom } from 'recoil'
import bookmarkList from '../static/BookmarkDummy'

export const BookMarkList = atom({
    key: 'bookmarkList',
    default: bookmarkList
})