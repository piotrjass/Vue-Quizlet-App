import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const $toast = useToast()
let instance = $toast.success('You did it!')

function makeAToast(msg, type) {
  $toast.open({
    message: msg,
    type: type,
    duration: 1000 * 10,
    dismissible: true
  })
}
// Force dismiss specific toast
instance.dismiss()

// Dismiss all opened toast immediately
$toast.clear()

export { makeAToast }
