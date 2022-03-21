import type { PostSchema } from '../../shared'

import homeFeeds from '../data/home_feeds.json'

export const feeds = async (): Promise<PostSchema[]> => {
  return homeFeeds
}

export default {
  feeds
}
