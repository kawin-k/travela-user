import { keys, pickBy } from 'lodash'
import pjson from '../../../../package.json'

class GlobalConfig {
  _config = {
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    APP_VERSION: pjson.version,
    ..._globalConfig,
  }

  getUnusedSource() {
    const sourceEnable = this.get('SOURCE_ENABLE')
    return keys(pickBy(sourceEnable, source => !source))
  }

  get(key = '') {
    if (key === '') {
      return this._config
    }
    return this._config[key]
  }
}

export default new GlobalConfig()
