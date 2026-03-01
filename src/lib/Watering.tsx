export default function Watering() {
    return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a href='https://cs.uwatering.com/#https://yhbarve.me?nav=prev' className="text-accent-foreground pr-1">←</a>
        <a href='https://cs.uwatering.com/#https://yhbarve.me' target='_blank' className="text-text-1 block w-5 h-5 shrink-0" aria-label="CS Webring">
            <span
                className="block w-full h-full bg-current opacity-90"
                style={{
                    maskImage: "url('https://cs.uwatering.com/icon.white.svg')",
                    WebkitMaskImage: "url('https://cs.uwatering.com/icon.white.svg')",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                }}
                aria-hidden
            />
        </a>
        <a href='https://cs.uwatering.com/#https://yhbarve.me?nav=next' className="text-accent-foreground">→</a>
    </div>
    );
}