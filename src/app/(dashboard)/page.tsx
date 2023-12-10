import { GetFormStats } from '@/actions/form'
import StatsCards from '@/components/shared/StatsCards'
import { Suspense } from 'react'

export default function DashboardPage() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
    </div>
  )
}

async function CardStatsWrapper() {
  const stats = await GetFormStats()
  return <StatsCards loading={false} data={stats} />
}
