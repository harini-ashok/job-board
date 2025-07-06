import { Suspense } from "react";
import { SidebarUserButtonClient } from "./_SidebarUserButton";
import { auth } from "@clerk/nextjs/server";

export function SidebarUserButton(){
    return <Suspense>
        <SidebarUserSuspense />
    </Suspense>
}

async function SidebarUserSuspense() {
    const {userId} = await auth()
    return <SidebarUserButtonClient user={{email: "ah@gmail.com", imageUrl: "", name: "hurry knee"}} />
}