import { SettingAccount } from './AccountSettings'
import { SettingApi } from './Api'
import { SettingNotification } from './Notification'
import { TeamAccount } from './Team'
export enum EMsgType {
  message,
  opened_email,
  invoice_send,
  product_sold,
  call,
}

export enum ESettingOpt {
  ACCOUNT,
  TEAM,
  NOTIFICATION,
  API,
}

export const BuildSettingOpt: React.ElementType = ({ opt, settingAccount, teamAccount, notification, apiSetting }) => {
  switch (opt) {
    case ESettingOpt.ACCOUNT:
      return <SettingAccount {...settingAccount} />
    case ESettingOpt.TEAM:
      return <TeamAccount team={teamAccount} />
    case ESettingOpt.NOTIFICATION:
      return <SettingNotification setting={notification} />
    case ESettingOpt.API:
      return <SettingApi keys={apiSetting} />
    default:
      return <SettingAccount {...settingAccount} />
  }
}
