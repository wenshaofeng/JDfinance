import Mock from 'mockjs'
import data from '../api/login.json'

//注册接口

Mock.mock('/api/login', {
    code: 0,
    data: data
})