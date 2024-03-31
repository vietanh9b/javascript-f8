// modules: import, export
// khi sử dụng export default thì không cần phải thêm object còn khi ta export thì phải cho hàm hoặc biến ta import vào 1 object
import logger from './logger.js'
import * as log from './logger.js'

logger(log.TYPE_ERROR)
// console.log(logger2);