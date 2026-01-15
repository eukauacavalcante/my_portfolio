'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './button';
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant='ghost' size='icon' className="text-primary">
                <i className="bi bi-circle text-lg"></i>
            </Button>
        )
    }

    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-primary hover:text-chart-1 transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
            {theme === 'dark' ? (
            <FaSun className="text-lg" />
            ) : (
            <FaMoon className="text-lg" />
            )}
        </Button>
    )
}
