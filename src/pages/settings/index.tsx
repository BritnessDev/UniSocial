import { useSession } from 'next-auth/react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { PrimaryLayout } from '../../components/layouts/primary/PrimaryLayout';
import { BuildSettingOpt, ESettingOpt } from '../../components/setting';
import { SettingPanel } from '../../components/setting/SettingPanel';
import { trpc } from '../../utils/trpc';
const Setting = () => {
  const [settingOpt, setSettingOpt] = useState(ESettingOpt.ACCOUNT)
  const { data: session, status } = useSession()

  const { data: settingData, isLoading: loading1 } = trpc.user.getUserProfile.useQuery({
    id: session?.user?.id ? session?.user?.id : ''
  })
  const profile = settingData?.profile


  const settingAccount = {

    userName: profile?.name ? profile?.name : 'John Carter',
    photoUrl: profile?.image ? profile?.image : '../../assets/img/photos/jhon.png',
    email: profile?.email ? profile?.email : 'unknown@gmail.com',
    location: profile?.Profile?.location ? profile?.Profile?.location : 'not mentioned',
    univy: profile?.Profile?.university ? profile?.Profile?.university : 'Harvard University',
    inst: profile?.Profile?.instagram ? profile?.Profile?.instagram : 'John Carter',
    face: profile?.Profile?.facebook ? profile?.Profile?.facebook : 'John Carter',
    basicInfo: profile?.Profile?.bio ? profile?.Profile?.bio : 'John Carter',
    detailInfo: profile?.Profile?.description ? profile?.Profile?.description : 'John Carter',
  }
  const teamAccount = settingData?.teamAccount ? settingData?.teamAccount : [];
  const notification = settingData?.notification ? settingData?.notification : []
  const apiSetting = settingData?.apiSetting ? settingData?.apiSetting : []

  return (
    <div className="flex flex-col justify-between gap-12 py-6 px-4 md:p-12 xl:flex-row">
      <SettingPanel settingOpt={settingOpt} setSettingOpt={setSettingOpt} />
      <BuildSettingOpt opt={settingOpt} settingAccount={settingAccount} apiSetting={apiSetting} notification={notification} teamAccount={teamAccount} />
    </div>
  )
}

Setting.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Groups">{page}</PrimaryLayout>
}

export default Setting
