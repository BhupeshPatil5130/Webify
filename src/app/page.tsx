//  "use client";
 import { useTRPC } from '@/trpc/client';
import { caller, getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary, useQuery } from '@tanstack/react-query';
import { Client } from './client';
import { Suspense } from 'react';
const Home= async()=> {

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: 'Bhupesh' }));

  // const data = await caller.createAI({ text: 'Bhupesh Server' });
  // const trpc = useTRPC();
  // const {data}= useQuery(trpc.createAI.queryOptions({ text: 'Bhupesh' }));
  // // trpc.createAI.queryOptions({ text: 'Hello World' });

  console.log("Server Component");
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
      <Client/>
      </Suspense>
    </HydrationBoundary>
  );
}
 
export default Home; 