import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import  Image from "next/image";
import Link from "next/link";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, Menu, PenBox, Route, StarsIcon } from "lucide-react";
import { Button } from "./ui/button";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem} from "./ui/dropdown-menu"
import { checkUser } from "@/lib/checkUser";

const Header = async()=> {
  await checkUser();
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-background/60 ">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/career_logo2.png"
            alt="CareerAI"
            width={140}
            height={140}
            className="h-10 w-auto md:h-14 object-contain"
          />
          <span className="font-bold text-xl md:text-2xl text-muted-foreground">
            CareerCraft
          </span>
        </Link>
                

                <div className="flex items-center space-x-4">
                    <SignedIn>
                    {/* If the user is loged in then show these links  */}
            <Link
              href="/about_us"
              className="hidden md:block px-3 py-2 rounded-md transition nav-hover-bg"
            >
              About Us
            </Link>

            <Link
              href="/contact_us"
              className="hidden md:block px-3 py-2 rounded-md transition nav-hover-bg"
            >
              Contact Us
            </Link>

            <Link
              href="/feedback"
              className="hidden md:block px-3 py-2 rounded-md transition nav-hover-bg"
            >
              Feedback
            </Link>



                        {/* <Link href={'/dashboard'}>
                            <Button variant="outline">
                                <LayoutDashboard className="h-4 w-4"/>
                                    <span className="hidden md:block">Industry Insights</span>
                            </Button>
                        </Link> */}
                        {/* Desktop view */}
<Link href={'/dashboard'} className="hidden md:block">
  <Button variant="outline">
    <LayoutDashboard className="h-4 w-4"/>
    <span className="hidden md:block">Industry Insights</span>
  </Button>
</Link>

{/* Mobile view: add inside your dropdown menu, do NOT put a Link with responsive classes */}

                    


                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>
                                    <StarsIcon className="h-4 w-4"/>
                                        <span className="hidden md:block">Growth Tool</span>
                                        <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className="flex items-center gap-2">
                                        <FileText className="h-4 w-4"/>
                                        <span>Resume Builder</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                                        <PenBox className="h-4 w-4"/>
                                        <span>Cover Letter</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/interview"} className="flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4"/>
                                        <span>Interview Prep</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/career_guide"} className="flex items-center gap-2">
                                        <Route className="h-4 w-4"/>
                                        <span>Career RoadMap</span>
                                </Link>
                            </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>



                                    {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="md:hidden">
                <Menu className="h-7 w-7" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48 md:hidden">
                <DropdownMenuItem>
                  <Link href="/about_us">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact_us">Contact Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/feedback">Feedback</Link>
                </DropdownMenuItem>
                                <DropdownMenuItem>
                  <Link href="/dashboard">Industry Insights</Link>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
                    </SignedIn>
                <SignedOut>  
                    <SignInButton>
                        <Button variant="outline">Sign In</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton 
                        appearance={{
                            elements: {
                                avatarBox: "w-10 h-10",
                                userButtonPopoverCard: "shadow-xl",
                                userPreviewMainIdentifier: "font-semibold",
                            },
                        }}

                        afterSignOutUrl="/"
                    />
                </SignedIn>
                </div>
            </nav>




        </header>
    )
}

export default Header;