import InterestCard from "../InterestCard";

export default function Interest({interests}:{interests:Array<string>}){
    return (
        <div id="interests" className="mt-12">
            <div className="text-sm font-bold pb-2 cursor-default text-accent">INTERESTS</div>
            <div className="flex flex-col gap-4 text-text-1">
                <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                    <div className="hidden lg:col-span-1 lg:flex flex-col">
                        <div className="font-light max-w-[90%]">01</div>
                    </div>
                    <div className="col-span-4 flex flex-col">
                        <div className="text-text-1 font-medium">Reading</div>
                        <div className="font-light text-sm"><div className="font-normal inline">Description: </div>Since 2023, I&apos;ve been trying to read as many books. However, I&apos;ve been on and off. Recently, I got a Kindle to make reading more fun and convenient. I usually read fiction, with an occasional non-fiction read. Here&apos;s my <a href="/reading" className="underline hover:text-accent-foreground">reading collection</a>. Book recommendations are welcome!</div>                   
                    </div>
                </div>
                <InterestCard index="02" title="Formula 1" desc="I have been an avid Formula 1 fan since 2018. The first race I watched live on TV was the 2018 Belgian Grand Prix, and since then I haven't missed a single one. I also watched several older races and watched a lot of documentaries. So now I know about F1 history right from the 70s and 80s. My all-time favorite driver is Sebastian Vettel. Since his retirement, I've been supporting Charles Leclerc and Scuderia Ferrari, despite the constant stress and heartbreaks that come with it. Next year for sure is our year! Beyond just watching, I love understanding the technical side of F1, like tyre choices, race strategies, and car setups. I've also been playing F1 games on PS5 with a professional sim setup, so I also know all the track layouts which makes the races even more immersive and exciting for me!" />

                <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                    <div className="hidden lg:col-span-1 lg:flex flex-col">
                        <div className="font-light max-w-[90%]">03</div>
                    </div>
                    <div className="col-span-4 flex flex-col">
                        <div className="text-text-1 font-medium">Graphic Design</div>
                        <div className="font-light text-sm"><div className="font-normal inline">Description: </div>I think I have strong attention to detail. I managed an F1 Instagram page called <a href="https://www.instagram.com/onef1_official/" className="underline hover:text-accent-foreground">OneF1</a> in 2022 and 2023. The page grew to nearly 100 followers. I used Canva to make posts covering race weeks, driver standings, track stats, and F1 news. I constantly experimented with layouts, templates, and colors, and refined the quality over time. Eventually, I found it difficult to manage OneF1 along with my studies and internships. So, I decided to call it a day ahead of the 2024 season. I had fun during the 2 years, and definitely learnt more about social media content creation.
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}