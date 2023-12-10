import { GetFormStats } from '@/actions/form'
import CreateFormBtn from '@/components/shared/CreateFormBtn'
import StatsCards from '@/components/shared/StatsCards'
import { Separator } from '@/components/ui/separator'
import { Suspense } from 'react'

export default function DashboardPage() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="col-span-2 text-4xl font-bold">Your forms</h2>
      <Separator className="my-6" />
      <CreateFormBtn />
    </div>
  )
}

const CardStatsWrapper = async () => {
  const stats = await GetFormStats()
  return <StatsCards loading={false} data={stats} />
}
