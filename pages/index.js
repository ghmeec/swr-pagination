import {useState} from 'react'
import fetch from '../libs/fetch'
import Link from 'next/link'

import useSWR, { useSWRPages } from 'swr'

export default () => {
  const [pageIn,setPageIn]=useState(2)
  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useSWRPages(
    // page key
    'demo-page',

    // page component
    ({ offset, withSWR }) => {
      const link='https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/the-ocean-app-ycpma/service/API/incoming_webhook/getNewsFeedsInPages?page=' + (offset || 1);
      console.log("Link : ",link )
      const { data: projects } = withSWR(
        // use the wrapper to wrap the *pagination API SWR*
        useSWR(link, fetch)
      )
      // you can still use other SWRs outside

      if (!projects) {
        return <p>loading</p>
      }

      console.log(projects)
      return projects.map((project,index) => 
        <div key={index+"_"+(Date.now().toString)} style={{
  
        }}>
          <img src={project.image} alt="Image" style={{width:"100%",sheight:"auto"}}/>
          <p key={project.id} style={{fontSize:18}}>{project.title}</p>
        </div>
      )
    },

    // one page's SWR => offset of next page
    ({ data: projects }) => {
      setPageIn(pageIn+1)
      const page=pageIn

      // return the last element id here
      return projects && projects.length
        ? page
        : null
    },

    // deps of the page component
    []
  )
  
  return <div style={{
          paddingRight:8,
          paddingLeft:8
         }}>
    <h1>Church App Pagination Tests</h1>
    {pages}
    <button onClick={loadMore} disabled={isReachingEnd || isLoadingMore}>
      {isLoadingMore ? '. . .' : isReachingEnd ? 'You have reached the end' : 'Load more'}
    </button>
    
  </div>
}
