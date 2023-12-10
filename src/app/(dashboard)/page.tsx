import { GetFormStats } from '@/actions/form'
import CreateFormBtn from '@/components/shared/CreateFormBtn'
import FormCardSkeleton from '@/components/shared/FormCardSkeleton'
import FormCards from '@/components/shared/FormCards'
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  )
}

const CardStatsWrapper = async () => {
  const stats = await GetFormStats()
  return <StatsCards loading={false} data={stats} />
}
