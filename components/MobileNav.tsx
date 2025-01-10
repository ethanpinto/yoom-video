import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'


/**
* MobileNav component renders a navigation menu for mobile devices.
* It includes a trigger button with a hamburger icon that opens a sheet.
* The sheet contains a header with a title and description.
 *
 * @returns {JSX.Element} The rendered MobileNav component.
 */
const MobileNav = () => {
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={36}
                        height={36}
                        alt="Hamburger icon"
                        className='cursor-pointer sm:hidden'
                    />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav