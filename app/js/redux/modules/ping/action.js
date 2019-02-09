import * as type from './type'
import { makeActionCreator } from '../../utils'

export const doPing = makeActionCreator(type.PING)

export const doPong = makeActionCreator(type.PONG)
