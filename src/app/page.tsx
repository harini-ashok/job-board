
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenuButton, SidebarTrigger, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarGroup } from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSIdebarClient";
import { Link, LogInIcon } from "lucide-react";
import { SignedOut } from "@/services/SignInStatus";
import { Suspense } from "react";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import { SignedIn } from "@/services/SignInStatus";

export default function HomePage(){
  return (<AppSidebarClient> <SidebarProvider className="overflow-y-hidden">
    
      <Sidebar collapsible="icon" className="overflow-hidden">
<SidebarHeader className="flex-row">
  <SidebarTrigger/>
  <span className="text-xl text-nowrap">WDS Jobs</span>
</SidebarHeader>
<SidebarContent>
  <SidebarGroup>
    <SidebarMenu>
      <SignedOut>
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
      <Link href="/sign-in">
        <LogInIcon/>
        <span> Log In </span>
      </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
    </SignedOut>

  </SidebarMenu>
  </SidebarGroup>
</SidebarContent>
<SignedIn>
<SidebarFooter>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarUserButton/>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarFooter>
</SignedIn>
    </Sidebar>
   
    
    <main className="flex-1">afncelrkc</main>
  </SidebarProvider>  </AppSidebarClient>)
}