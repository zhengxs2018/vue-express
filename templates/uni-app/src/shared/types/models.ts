export interface Post {
  /**
   * 主键
   */
  id: string
  /**
   * 内容
   */
  desc: string
  /**
   * 创建时间
   */
  createTime: number

  /**
   * 作者
   */
  author: Author

  /**
   * 视频
   */
  video?: Video

  /**
   * 音乐
   */
  music?: Music

  /**
   * 挑战者
   */
  challenges: Author[]
}

export type User = {
  /**
   * 主键
   */
  id: string
  /**
   * 抖音号
   */
  uniqueId?: string
  /**
   * 昵称
   */
  nickname: string
  /**
   * 签名
   */
  signature?: string
  /**
   * 头像
   */
  avatarLarger?: string
  /**
   * 账号是否验证
   */
  verified: boolean
}

export interface Video {
  /**
   * 主键
   */
  id: string
  /**
   * 默认封面
   */
  cover: string
  /**
   * 原始图
   */
  originCover: string
  /**
   * 动态图
   */
  dynamicCover: string
  /**
   * 视频下载地址
   */
  downloadAddr: string
  /**
   * 宽度啊
   */
  width: number
  /**
   * 高度
   */
  height: number
  /**
   * 时长
   */
  duration: number
}

export interface Music {
  /**
   * 主键
   */
  id: string
  /**
   * 标题
   */
  title: string
  /**
   * 作者姓名
   */
  authorName: string
  original?: unknown
  album?: unknown
  /**
   * 封面小图
   */
  coverThumb: string
  /**
   * 封面中图
   */
  coverMedium: string
  /**
   * 封面大图
   */
  coverLarge: string
  /**
   * 播放地址
   */
  playUrl: string
  /**
   * 时长
   */
  duration: number
}

export type Stats = {
  /**
   * 播放数量
   */
  playCount: number
  /**
   * 分享数量
   */
  shareCount: number
  /**
   *
   */
  diggCount: number
  /**
   * 评论数量
   */
  commentCount: number
}

export type Author = User
