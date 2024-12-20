import InterestCard from "../InterestCard";

export default function Interest({interests}:{interests:Array<string>}){
    return (
        <div id="interests" className="mt-24">
            <div className="text-sm font-bold pb-4 pl-2 cursor-default">INTERESTS</div>
            <div className="flex flex-col gap-4 dark:hover:text-zinc-400 hover:text-zinc-500">
                <div className="grid grid-cols-5 border border-transparent hover:border hover:bg-zinc-50 transition ease-in-out hover:border-zinc-300 rounded-md p-2 cursor-default dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-800 hover:backdrop-blur-2xl">
                    <div className="col-span-1 flex flex-col">
                        <div className="font-light max-w-[90%]">01</div>
                    </div>
                    <div className="col-span-4 flex flex-col">
                        <div>Reading</div>
                        <div className="font-light text-sm"><div className="font-normal inline">Description: </div>I have been reading regularly since 2023. I try to read at least one book every month. Initially, I primarily used Audible to listen to audiobooks. Eventually, I transitioned to reading on my iPad. Usually I read non-fiction. Take a look at what I have read so far <a href="/reading" className="underline font-medium">here.</a></div>                   
                    </div>
                </div>
                <InterestCard index="02" title="Formula 1" desc="I have been an F1 since 2018. I am a die-hard Ferrari and Charles Leclerc fan, despite the stress and frustration it gives. I understand the technical side of F1 - tracks, tyres, strategies, car upgrades. I also play F1 games on PS5 (with the pro sim setup). So, I actually know all the tracks and this makes my experience watching F1 even better." />

                <div className="grid grid-cols-5 border border-transparent hover:border hover:bg-zinc-50 transition ease-in-out hover:border-zinc-300 rounded-md p-2 cursor-default dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-800 hover:backdrop-blur-2xl">
                    <div className="col-span-1 flex flex-col">
                        <div className="font-light max-w-[90%]">03</div>
                    </div>
                    <div className="col-span-4 flex flex-col">
                        <div>Graphic Design</div>
                        <div className="font-light text-sm"><div className="font-normal inline">Description: </div>I have a strong attention to detail. I also managed an F1 Instagram page called <a href="https://www.instagram.com/onef1_official/" className="underline font-medium">OneF1</a> for a year in 2022. The page has around 100 followers. I designed posts about race weeks, driver standings, track stats, and F1 news using Canva. I constantly experimented with new layouts and kept improving the quality of the posts. Eventually, I decided to take a break because I found myself spending too much time on designing posts.
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}