import type { Post, Stats } from '../models'

export interface PostSchema extends Post {
  /**
   * 提及
   */
  mentions: string[]
  /**
   * 标签
   */
  hashtags: string[]
  /**
   * 数据统计
   */
  stats: Stats
}
