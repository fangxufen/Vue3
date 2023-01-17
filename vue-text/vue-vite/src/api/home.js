import { get,post } from "./http";

// 获取头部分类
export const gethead=get('_server/v1.0/4399gamecase.php?ac=get_gametype')
// 获取游戏列表
export const getgamelist=get('_server/v1.0/4399gamecase.php?ac=get_gamelist_by_typeid')


