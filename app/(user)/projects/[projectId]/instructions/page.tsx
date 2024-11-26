// import React from 'react'
// import  CopyPasteBtn  from '@/components/CopyPasteBtn'
// const Page = ({ params }: { params: {
//     projectId: string
// }}) => {
//     if(!params.projectId) return (<div>Invalid Project Id</div>)
//     // if(!process.env.WIDGET_URL) return (<div>Missing widget url</div>)
//   return (
//     <div>
//         <h1 className='text-xl font-bold mb-2'>
//             Start Collecting <strong>FeedBack</strong>
//         </h1>
//         <p className='text-lg text-secondary-foreground'>
//             Embed the code in your site
//         </p>
//         <div className='bg-blue-950 p-3 rounded-md mt-6 relative'>
//         <code className='text-white'>
//             {`<my-widget project-id="${params.projectId}"></my-widget>`}
//             <br />
//             {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
//         </code>
//         <CopyPasteBtn text={`<my-widget project="${params.projectId}"></my-widget> \n <script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}/>
//         </div>
//     </div>
//   )
// }

// export default Page
import  CopyPasteBtn  from '@/components/CopyPasteBtn'

const page = ({ params }: {
  params: {
    projectId: string
  }
}) => {
  if (!params.projectId) return (<div>Invalid Project ID</div>);
  if (!process.env.WIDGET_URL) return (<div>Missing WIDGET_URL</div>);

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">Embed the code in your site</p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className=" text-white">
          {`<my-widget project-id="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyPasteBtn text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
      </div>
    </div>
  )
}

export default page;
