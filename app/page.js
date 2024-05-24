import React from 'react'
import dynamic from 'next/dynamic'
// import Map from '@/components/Map'

const Map = dynamic(()=>import('@/components/Map'),{
    ssr: false
})

export default function Page() {
  return (
    <div>
      <Map position={[13.8117514,100.5050584,19]} />
    </div>
  )
}
