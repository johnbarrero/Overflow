'use client';

import {Button} from "@heroui/button";
import {useTheme} from "next-themes";
import {MoonIcon} from "@heroicons/react/16/solid";
import {SunIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true) // eslint-disable-line react-hooks/set-state-in-effect
    }, []);
    
    if (!mounted) return null;
    return (
        <Button
            color='primary'
            variant='light'
            isIconOnly
            aria-label='Toggle theme'
            onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? (
                <MoonIcon className='h-8'/>
            ) : (
                <SunIcon className='h-8 text-yellow-300'/>
            )}
        </Button>
    );
}