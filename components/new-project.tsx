import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Plus } from "lucide-react"
import { createProject } from "@/actions/createProject"
import SubmitButton from "./submit-project-button"

const NewProjectBtn = () => {
  return (
    <div>
        <Dialog>
  <DialogTrigger asChild>
    <Button>
        <Plus/>  Create Project
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px] rounded">
    <DialogHeader>
      <DialogTitle>New Project</DialogTitle>
      <DialogDescription>
        Create a new project to get started
      </DialogDescription>
    </DialogHeader>
    <form className="flex gap-4 flex-col" action={createProject}>
        
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Project Name" />
        <Label htmlFor="description">URL</Label>
        <Input id="url" name="url" placeholder="https//example.com" />
        
        <Label htmlFor="description">
            Description
        </Label>
        <Textarea name="description" id="description" placeholder="description (optional)" />
        <div className="flex items-center justify-center">
        <SubmitButton/>
        </div>
    </form>
    <DialogFooter>
    </DialogFooter>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default NewProjectBtn
