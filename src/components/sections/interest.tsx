import InterestCard from "../InterestCard";

export default function Interest({interests}:{interests:Array<string>}){
    return (
        <div id="interests" className="mt-12">
            <div className="text-sm font-bold pb-4 pl-2 cursor-default text-accent">INTERESTS</div>
            <div className="flex flex-col gap-4 text-text-1">
                <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                    <div className="hidden lg:col-span-1 lg:flex flex-col">
                        <div className="font-light max-w-[90%]">01</div>
                    </div>
                    <div className="col-span-4 flex flex-col">
                        <div className="text-text-1 font-medium">Reading</div>
                        <div className="font-light text-sm"><div className="font-normal inline">Description: </div>I have been reading regularly since 2023, aiming for at least one book every month. I started out with audiobooks on Audible, but eventually transitioned to reading on my iPad. While I usually read non-fiction, I have now moved on to more technical books and textbooks related to computer science and mathematics. Here is my <a href="/reading" className="underline hover:text-accent-foreground">reading collection</a>.</div>                   
                    </div>
                </div>
                <InterestCard index="02" title="Formula 1" desc="I have been an avid Formula 1 fan since 2018. The first race I ever watched live on TV was the 2018 Belgian Grand Prix, and since then I have not missed a single one. I have also gone back to rewatch all the key races since 2010 and dived into the past, so now I know F1 history all the way back to the 70s and 80s. I am a fan of Charles Leclerc and Scuderia Ferrari, despite all the stress and heartbreaks that come with it. Beyond just watching, I dive deep into the technical side of F1, like tyre strategies, race tactics, and car setups. I also play the official F1 games on PS5 with a full pro sim setup, which means I know every circuit inside out. That experience makes watching the races even more immersive and exciting for me." />

                <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                    <div className="hidden lg:col-span-1 lg:flex flex-col">
                        <div className="font-light max-w-[90%]">03</div>
                    </div>
                    <div className="col-span-4 flex flex-col">
                        <div className="text-text-1 font-medium">Graphic Design</div>
                        <div className="font-light text-sm"><div className="font-normal inline">Description: </div>I have a strong attention to detail. I managed an F1 Instagram page called <a href="https://www.instagram.com/onef1_official/" className="underline hover:text-accent-foreground">OneF1</a> for a in 2022 and 2023. The page grew to around 100 followers, and I designed posts covering race weeks, driver standings, track stats, and F1 news using Canva. I constantly experimented with layouts and refined the design quality over time. Eventually, I observed that I was spending too much time perfecting the design and layout of posts, while not adding much unique value since many larger F1 pages already existed. So, I decided to call it a day, though I still remain passionate about design.
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}