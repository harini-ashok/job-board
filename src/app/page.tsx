import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

export default function HomePage(){
  return <SidebarProvider className="overflow-y-hidden">
    <Sidebar collapsible="icon" className="overflow-hidden">
<SidebarHeader className="flex-row">
  <SidebarTrigger/>
  <span className="text-xl text-nowrap">WDS Jobs</span>
</SidebarHeader>
    </Sidebar>
  </SidebarProvider>
}