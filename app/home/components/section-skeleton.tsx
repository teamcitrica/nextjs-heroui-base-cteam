import React from 'react'
import { Col, Container } from '@citrica/objects'
import { Skeleton } from "@heroui/skeleton";

const SectionSkeleton = () => {
  return (
    <Container>
      <Col cols={{ lg: 6, md: 6, sm: 4 }} className="my-4">
        <div className="mb-4">
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </Col>
      <Col cols={{ lg: 6, md: 6, sm: 4 }} className="my-4">
        <div className="mb-4">
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </Col>
    </Container>
  )
}

export default SectionSkeleton