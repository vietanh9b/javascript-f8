export const TYPE_LOG='log'
export const TYPE_WARN='warn'
export const TYPE_ERROR='error'
function logger(log,type='log'){
    console[type](log);
}
export function logger2(){
    console.log(2);
}
export default logger