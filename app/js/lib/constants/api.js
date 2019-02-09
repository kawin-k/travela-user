import GlobalConfig from '../utils/GlobalConfig'

const twitterStreamEndpoint = GlobalConfig.get('TWITTER_STREAM_ENDPOINT')
const twitterStaticEndpoint = GlobalConfig.get('TWITTER_STATIC_ENDPOINT')
const chatStaticEndpoint = GlobalConfig.get('CHAT_STATIC_ENDPOINT')
const chatStreamEndpoint = GlobalConfig.get('CHAT_STREAM_ENDPOINT')

export const bindParams = (url, params = {}) => {
  return Object.keys(params).reduce((completeUrl, key) => {
    const value = params[key]
    return completeUrl.replace(`:${key}`, value)
  }, url)
}

// static API
export const staticAPI = {
  twitter: {
    wordSearch: {
      get: ['GET', `${twitterStaticEndpoint}/sentiments/schedule`],
      create: ['POST', `${twitterStaticEndpoint}/sentiments/schedule`],
      update: ['PUT', `${twitterStaticEndpoint}/sentiments/schedule/:id`],
      delete: ['DELETE', `${twitterStaticEndpoint}/sentiments/schedule/:id`],
    },
    rawData: ['GET', `${twitterStaticEndpoint}/sentiments/raw`],
    sentimentCount: ['POST', `${twitterStaticEndpoint}/sentiments/static`],
  },
  chatApp: {
    user: {
      get: ['GET', `${chatStaticEndpoint}/sentiments/chat/manage`],
      create: ['POST', `${chatStaticEndpoint}/sentiments/chat/manage`],
      delete: ['DELETE', `${chatStaticEndpoint}/sentiments/chat/manage/:id`],
    },
    advanceSearch: ['GET', `${chatStaticEndpoint}/sentiments/autocomplete`],
    rawData: ['GET', `${chatStaticEndpoint}/sentiments/chat/raw/static`],
    sentimentCount: ['GET', `${chatStaticEndpoint}/sentiments/chat/count/static`],
  }
}

// stream API
export const streamAPI = {
  twitter: {
    wordCloud: `${twitterStreamEndpoint}/sentiments/stream/wordcloud`,
    rawData: `${twitterStreamEndpoint}/sentiments/stream/raw`,
    sentimentCount: `${twitterStreamEndpoint}/sentiments/stream/count`,
    wordScore: `${twitterStreamEndpoint}/sentiments/stream/score`,
  },
  chatApp: {
    rawData: `${chatStreamEndpoint}/sentiments/chat/raw/streaming`,
    userScore: `${chatStreamEndpoint}/sentiments/chat/score/streaming`,
    sentimentCount: `${chatStreamEndpoint}/sentiments/chat/count/streaming`,
    wordCloud: `${chatStreamEndpoint}/sentiments/chat/wordcloud`,
  }
}
