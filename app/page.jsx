import TopicList from '@/components/TopicList'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (!session) {
    redirect('/signIn')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Recent News</h1>
      <TopicList />
    </div>
  )
}
