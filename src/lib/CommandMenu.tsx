"use client"
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RESUME_URL } from './data'

export const CommandMenu = () => {
    const [open, setOpen] = React.useState(false)

    const router = useRouter();

    // Toggle the menu when ⌘K is pressed
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
        }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    if (!open) {
        return null
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
            onClick={() => setOpen(false)}
        >
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                aria-hidden="true"
            />
            <div 
                className="relative z-10 w-full max-w-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <Command
                    className="bg-name-foreground border border-accent rounded-lg shadow-lg"
                >
                    <Command.List className="p-2 max-h-[300px] overflow-y-auto">
                        {/* <Command.Empty className="p-4 text-text-1 text-text-1 text-text-1">No results found.</Command.Empty> */}
                        <p className='mx-4 py-2 text-text-1 font-semibold border-accent'>⌘ Command Centre</p>
                        <Command.Group className="text-text-1 mx-2 py-1">
                            <Command.Item className="p-2 my-1 rounded-md cursor-pointer hover:bg-surface-1 text-text-1" onSelect={() => {
                                setOpen(false);
                                router.push('/');
                            }}>🏠 Go Home</Command.Item>

                            <Command.Item className="p-2 my-1 rounded-md cursor-pointer hover:bg-surface-1 text-text-1" onSelect={() => {
                                setOpen(false);
                                router.push('/projects');
                            }}>🧑🏻‍💻 See All Projects</Command.Item>

                            <Command.Item className="p-2 my-1 rounded-md cursor-pointer hover:bg-surface-1 text-text-1" onSelect={() => {
                                setOpen(false);
                                router.push('/writings');
                            }}>✍️ See All Writings</Command.Item>

                            <Command.Item className="p-2 my-1 rounded-md cursor-pointer hover:bg-surface-1 text-text-1" onSelect={() => {
                                setOpen(false);
                                router.push(RESUME_URL);
                            }}>📄 See Resume</Command.Item>

                            <Command.Item className="p-2 my-1 rounded-md cursor-pointer hover:bg-surface-1 text-text-1" onSelect={() => {
                                setOpen(false);
                                router.push('/reading');
                            }}>📚 See Reading List</Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    )
}
