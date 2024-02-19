import { makeAToast } from './toaster'

function sendToastToUser(resStatusCode, msg) {
  if (resStatusCode === 200) {
    makeAToast(msg, 'success')
  }
  if (resStatusCode !== 200) {
    makeAToast(msg, 'error')
  }
}

export { sendToastToUser }
