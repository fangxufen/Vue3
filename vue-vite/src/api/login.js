import { mytget, mytpost } from "./_httpmyt";

import { ylsget } from "./_httpyls";
// 加密
export const mytShaGet=mytget('/auth/login_check')
export const mytTokenPost=mytpost('/auth/login')

export const ylsgetUserInfo=ylsget('/user/info')
// export const getUUCSuserInfo=get()

