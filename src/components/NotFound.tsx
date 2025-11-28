export default function NotFound() {
    return (
        <section className="relative">
            <div className="relative">
                <img
                    src="/images/border.png"
                    alt=""
                    className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="font-[family-name:var(--font-family-unkempt)] text-4xl md:text-6xl font-bold text-candy-red">
                        404 - Not Found
                    </h1>
                </div>
            </div>
        </section>
    )
}