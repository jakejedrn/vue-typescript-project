import { type App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string, fotmatString: string) {
      return formatUtcString(value, fotmatString)
    }
  }
}
