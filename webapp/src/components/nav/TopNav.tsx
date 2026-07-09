'use client'

import Link from "next/link";
import {AcademicCapIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {Input} from "@heroui/react";
import ThemeToggle from "@/components/nav/ThemeToggle";
import {Button} from "@heroui/button";


export default function TopNav() {
    return (
        //padding 2, toda la anchura de la pagina fixed top-0 = la barra se queda arriba de la pagina siempre aunque haga scroll hacia abajo 
        <header className='p-2 w-full fixed top-0 z-50 border-b bg-white dark:bg-black'>
            {
                // px=padding, mx=margin
            }
            <div className='flex px-10 mx-auto'>
                <div className='flex items-center gap-6'>
                    <Link href='/' className='flex items-center gap-3 max-h-16'>
                        <AcademicCapIcon className='size-10 text-secondary' />
                        <h3 className='text-xl font-semibold uppercase text-auto'>Overflow</h3>
                    </Link>
                    {
                        //my = margin-y --> margen arriba y abajo
                    }
                    <nav className='flex gap-3 my-2 text-md text-neutral-500'>
                        <Link href='/'>About</Link>
                        <Link href='/'>Products</Link>
                        <Link href='/'>Contact</Link>
                    </nav>
                </div>

                {/* px=padding, mx=margin, ml=margin left */}
                <Input 
                    startContent={<MagnifyingGlassIcon className='size-6'/>}
                    className='ml-6'
                    type='search'
                    placeholder='Search'
                />
                
                {/*shrink-0: Evita que los botones se deformen si la pantalla se hace más pequeña*/}
                <div className='flex basis-1/4 shrink-0 justify-end gap-3'>
                    <ThemeToggle/>
                    <Button color='secondary' variant='bordered'>Login</Button>
                    <Button color='secondary' >Register</Button>
                </div>
            </div>
        </header>
    );
}