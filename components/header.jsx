// import React from "react";
// import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
// import  Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, FileText, GraduationCap, LayoutDashboard, Menu, PenBox, Route, StarsIcon } from "lucide-react";
// import { Button } from "./ui/button";
// import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem} from "./ui/dropdown-menu"
// import { checkUser } from "@/lib/checkUser";

// const Header = async()=> {
//   await checkUser();
//     return (
//         <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-background/60 ">
//             <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/career_logo2.png"
//             alt="CareerAI"
//             width={140}
//             height={140}
//             className="h-10 w-auto md:h-14 object-contain"
//           />
//           <span className="font-bold text-xl md:text-2xl text-muted-foreground">
//             CareerCraft
//           </span>
//         </Link>
                

//                 <div className="flex items-center space-x-4">
//                     <SignedIn>
//                     {/* If the user is loged in then show these links  */}
//             <Link
//               href="/about_us"
//               className="hidden md:block px-3 py-2 rounded-md transition nav-hover-bg"
//             >
//               About Us
//             </Link>

//             <Link
//               href="/contact_us"
//               className="hidden md:block px-3 py-2 rounded-md transition nav-hover-bg"
//             >
//               Contact Us
//             </Link>

//             <Link
//               href="/feedback"
//               className="hidden md:block px-3 py-2 rounded-md transition nav-hover-bg"
//             >
//               Feedback
//             </Link>



//                         {/* <Link href={'/dashboard'}>
//                             <Button variant="outline">
//                                 <LayoutDashboard className="h-4 w-4"/>
//                                     <span className="hidden md:block">Industry Insights</span>
//                             </Button>
//                         </Link> */}
//                         {/* Desktop view */}
// <Link href={'/dashboard'} className="hidden md:block">
//   <Button variant="outline">
//     <LayoutDashboard className="h-4 w-4"/>
//     <span className="hidden md:block">Industry Insights</span>
//   </Button>
// </Link>

// {/* Mobile view: add inside your dropdown menu, do NOT put a Link with responsive classes */}

                    


//                         <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                                 <Button>
//                                     <StarsIcon className="h-4 w-4"/>
//                                         <span className="hidden md:block">Growth Tool</span>
//                                         <ChevronDown className="h-4 w-4" />
//                                 </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent>
//                             <DropdownMenuItem>
//                                 <Link href={"/resume"} className="flex items-center gap-2">
//                                         <FileText className="h-4 w-4"/>
//                                         <span>Resume Builder</span>
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem>
//                                 <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
//                                         <PenBox className="h-4 w-4"/>
//                                         <span>Cover Letter</span>
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem>
//                                 <Link href={"/interview"} className="flex items-center gap-2">
//                                         <GraduationCap className="h-4 w-4"/>
//                                         <span>Interview Prep</span>
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem>
//                                 <Link href={"/career_guide"} className="flex items-center gap-2">
//                                         <Route className="h-4 w-4"/>
//                                         <span>Career RoadMap</span>
//                                 </Link>
//                             </DropdownMenuItem>

//                             </DropdownMenuContent>
//                         </DropdownMenu>



//                                     {/* Mobile Menu */}
//             <DropdownMenu>
//               <DropdownMenuTrigger className="md:hidden">
//                 <Menu className="h-7 w-7" />
//               </DropdownMenuTrigger>

//               <DropdownMenuContent className="w-48 md:hidden">
//                 <DropdownMenuItem>
//                   <Link href="/about_us">About Us</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/contact_us">Contact Us</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/feedback">Feedback</Link>
//                 </DropdownMenuItem>
//                                 <DropdownMenuItem>
//                   <Link href="/dashboard">Industry Insights</Link>
//                 </DropdownMenuItem>

//               </DropdownMenuContent>
//             </DropdownMenu>
//                     </SignedIn>
//                 <SignedOut>  
//                     <SignInButton>
//                         <Button variant="outline">Sign In</Button>
//                     </SignInButton>
//                 </SignedOut>
//                 <SignedIn>
//                     <UserButton 
//                         appearance={{
//                             elements: {
//                                 avatarBox: "w-10 h-10",
//                                 userButtonPopoverCard: "shadow-xl",
//                                 userPreviewMainIdentifier: "font-semibold",
//                             },
//                         }}

//                         afterSignOutUrl="/"
//                     />
//                 </SignedIn>
//                 </div>
//             </nav>




//         </header>
//     )
// }

// export default Header;





import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, Menu, PenBox, Route, StarsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-background/60">
      <nav className=" mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Image
            src="/career_logo2.png"
            alt="CareerAI"
            width={140}
            height={140}
            className="h-8 w-auto sm:h-10 md:h-12 object-contain"
          />
          <span className="font-bold text-base sm:text-xl md:text-2xl text-muted-foreground whitespace-nowrap">
            CareerCraft
          </span>
        </Link>

        {/* Navigation Links & Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <SignedIn>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/about_us"
                className="px-3 py-2 rounded-md transition nav-hover-bg text-sm"
              >
                About Us
              </Link>

              <Link
                href="/contact_us"
                className="px-3 py-2 rounded-md transition nav-hover-bg text-sm"
              >
                Contact Us
              </Link>

              <Link
                href="/feedback"
                className="px-3 py-2 rounded-md transition nav-hover-bg text-sm"
              >
                Feedback
              </Link>
            </div>

            {/* Industry Insights Button - Desktop */}
            <Link href="/dashboard" className="hidden md:block">
              <Button variant="outline" size="sm" className="gap-1.5">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden lg:inline">Industry Insights</span>
              </Button>
            </Link>

            {/* Growth Tool Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="gap-1">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden sm:inline text-sm">Growth Tool</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2 w-full">
                    <FileText className="h-4 w-4" />
                    <span>Resume Builder</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2 w-full">
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/interview" className="flex items-center gap-2 w-full">
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/career_guide" className="flex items-center gap-2 w-full">
                    <Route className="h-4 w-4" />
                    <span>Career RoadMap</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu - Hamburger */}
            <DropdownMenu>
              <DropdownMenuTrigger className="lg:hidden p-1.5">
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/about_us" className="w-full">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact_us" className="w-full">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/feedback" className="w-full">
                    Feedback
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="md:hidden">
                  <Link href="/dashboard" className="flex items-center gap-2 w-full">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Industry Insights</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Button */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>

          {/* Signed Out State */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline" size="sm" className="text-sm">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;