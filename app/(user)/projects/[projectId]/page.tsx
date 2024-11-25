import { db } from "@/db"
import { projects as dbProjects, projects } from "@/db/schema"
import { eq } from "drizzle-orm"
import Link from "next/link"
import { Globe, ChevronLeft } from "lucide-react"
import Table from "@/components/table"

const Page  = async ({ params }: {
    params: {
        projectId: string
    }
}) => {
    if(!params.projectId) return (<div>Invalid Project ID</div>)
    const projects = await db.query.projects.findMany({
        where: (eq(dbProjects.id, parseInt(params.projectId))),
        with: {
            feedbacks: true
        },
    })

    const project = projects[0]
    
  return (
    <div>
      <div>
        <Link href={"/dashboard"} className="flex items-center text-indigo-700 mb-5 w-fit" >
        <ChevronLeft className="h-5 w-5 mr-1"/>
        <span>Back to Projects</span>
        </Link>

      </div>
        <div className="flex justify-between items-center">
        <div className="">
        <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
        <h2 className="text-primary-background text-xl mb-2">{project.description}</h2>
        </div>
        {project.url ? (
  <Link href={project.url} className="flex items-center text-indigo-700 underline hover:text-indigo-500 transition-colors mr-10">
    <Globe className="h-5 w-5 mr-2" />
    <span className="">Visit site</span>
  </Link>
) : null}
  <Link href={`/projects/${params.projectId}/instructions`} className=" text-indigo-700 flex items-center justify-center mt-2">
  <span className="text-lg underline gap-2">
  {"</>"}
  Embed Code
  </span>
  </Link>
</div>
<Table data={project.feedbacks}/>
    </div>
  )
}

export default Page
