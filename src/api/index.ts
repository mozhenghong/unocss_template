import http from './request';
/**
 * 
 * @param params 用户模块
 * @returns 
 */

// student teacher administrator
export const login = (params:any)=>{
  return  http("post",'/prefix/api/login', params)
}

export const logout = ()=>{
  return  http("delete",'/prefix/api/logout', null)
}
