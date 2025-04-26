'use client'
import React from 'react'
import Text from '@/shared/components/citrica-ui/atoms/text';
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site';

function Content() {
  const searchParams = useSearchParams();
  const typeApp = searchParams.get(siteConfig.subItemSearchParam); 
  return <div><Text variant="headline">{`Config App ${typeApp}`}</Text></div>
}

const TitleConfigApp = () => {
  return (
    <Suspense>
      <Content />
    </Suspense>
  )
}

export default TitleConfigApp