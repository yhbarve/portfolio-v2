"use client"
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RESUME_URL } from './data'
import { useTheme } from 'next-themes'

export const CommandMenu = () => {
    const [open, setOpen] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const { theme, setTheme } = useTheme();
    const listRef = React.useRef<HTMLDivElement>(null);
    const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    const router = useRouter();

    const commandGroups = {
        'Quick Navigation': [
            { text: '🏠 Go Home', shortcut: 'H', action: () => router.push('/') },
            { text: '🧑🏻‍💻 Go to Projects', shortcut: 'P', action: () => router.push('/projects') },
            { text: '✍️ Go to Writings', shortcut: 'W', action: () => router.push('/writings') },
            { text: '📄 Go to Resume*', shortcut: 'R', action: () => router.push(RESUME_URL) },
            { text: '📚 Go to Bookshelf', shortcut: 'B', action: () => router.push('/reading') },   
            { text: '📸 Go to Gallery', shortcut: 'A', action: () => router.push('/gallery') },
            { text: '🎵 Go to Music', shortcut: 'U', action: () => router.push('/music') },
        ],
        'Actions': [
            { text: '🎨 Switch to Neon Theme', shortcut: 'N', action: () => setTimeout(() => setTheme('neon'), 0) },
            { text: '🎨 Switch to Quartz Theme', shortcut: 'Q', action: () => setTimeout(() => setTheme('quartz'), 0) },
            { text: '🎨 Switch to Ferrari HP Theme', shortcut: 'F', action: () => setTimeout(() => setTheme('ferrari-hp'), 0) },
            { text: '✉️ Copy Email Address', shortcut: 'M', action: () => {
                navigator.clipboard.writeText('yhbarve@uwaterloo.ca');
                alert('Email address copied to clipboard!'); // Provide feedback to the user
            } },
        ],
        'Navigation': [
            { text: '💻 See Projects', shortcut: 'K', action: () => router.push('/#projects') },
            { text: '💼 See Experience', shortcut: 'E', action: () => router.push('/#experiences') },
            { text: '💡 See Skills', shortcut: 'S', action: () => router.push('/#skills') },
            { text: '🎓 See Education', shortcut: 'D', action: () => router.push('/#education') },
            { text: '✍🏻 See Writings', shortcut: 'T', action: () => router.push('/#writings') },
            { text: '♥️ See Interests', shortcut: 'I', action: () => router.push('/#interests') },
        ],
        'Socials': [
            { text: '🔗 Visit GitHub*', shortcut: 'G', action: () => window.open('https://github.com/yhbarve', '_blank') },
            { text: '🔗 Visit LinkedIn*', shortcut: 'L', action: () => window.open('https://www.linkedin.com/in/yhbarve/', '_blank') },
            { text: '🔗 Visit X (Twitter)*', shortcut: 'X', action: () => window.open('https://x.com/yhbarve', '_blank') },
            // { text: '🔗 Visit Instagram*', shortcut: 'I', action: () => window.open('https://www.instagram.com/yhbarve/', '_blank') },
            { text: '🔗 Visit LeetCode*', shortcut: 'C', action: () => window.open('https://leetcode.com/u/yhbarve/', '_blank') },
        ]
    };

    const commandItems = Object.values(commandGroups).flat();

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!open) return;

            // Handle navigation and Enter
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prevIndex) => (prevIndex + 1) % commandItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prevIndex) => (prevIndex - 1 + commandItems.length) % commandItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                commandItems[selectedIndex].action();
                setOpen(false);
            } else {
                // Handle shortcuts
                const shortcut = e.key.toUpperCase();
                const item = commandItems.find(item => 'shortcut' in item && item.shortcut === shortcut);
                if (item) {
                    e.preventDefault();
                    item.action();
                    setOpen(false);
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, selectedIndex, commandItems]);

    React.useEffect(() => {
        if (open && itemRefs.current[selectedIndex]) {
            itemRefs.current[selectedIndex]?.scrollIntoView({ block: 'nearest' });
        }
    }, [selectedIndex, open]);

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

    if (!open || !mounted) {
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
                    className="bg-surface-3 border-2 border-border shadow-2xl rounded-2xl"
                >
                        <div className='mx-5 py-5 border-b border-border mb-5'>
                            <p className='text-text-1 font-semibold text-xl'>⌘ Command Centre</p>
                            <div className='flex justify-between'>
                                <p className='text-sm text-text-1/50 font-bold '>Use ↑ & ↓ keys to navigate or shortcuts</p>
                                <p className='text-sm text-text-1/50 font-bold italic'>* external link</p>
                            </div>
                        </div>
                    <Command.List ref={listRef} className="px-2 pb-2 max-h-[500px] overflow-y-auto">
                        {Object.entries(commandGroups).map(([groupName, items]) => (
                            <Command.Group key={groupName} heading={groupName} className="text-accent-soft font-semibold mx-2 py-1">
                                {items.map((item) => {
                                    const itemIndex = commandItems.findIndex(ci => ci.text === item.text);
                                    return (
                                        <Command.Item
                                            ref={(el) => {
                                                if (el) itemRefs.current[itemIndex] = el;
                                            }}
                                            key={item.text}
                                            className={`font-normal p-2 my-1 text-text-1 rounded-md cursor-pointer hover:bg-accent/5 hover:text-accent-soft transition duration-200 ease-in-outext-text-1 flex justify-between items-center ${selectedIndex === itemIndex ? 'bg-accent/5 text-accent-soft' : ''}`}
                                            onSelect={() => {
                                                item.action();
                                                setOpen(false);
                                            }}
                                        >
                                            <span>{item.text}</span>
                                            {item.shortcut && <div cmdk-shortcuts="" className='text-sm font-bold text-text-1/50'><span className='font-normal'>Type </span> {item.shortcut}</div>}
                                        </Command.Item>
                                    )
                                })}
                            </Command.Group>
                        ))}
                    </Command.List>
                </Command>
            </div>
        </div>
    )
}
