type PageHeroSectionProps = {
    text?: string;
};

export default function PageHeroSection({ text }: PageHeroSectionProps) {
    return (
        <div className="animate-move-up min-h-full w-full flex flex-col lg:gap-0 justify-centre items-center mt-10 xl:mt-14 md:mt-14">
            <h1 className="gap-7 text-center pt-6 text-2xl lg:text-4xl font-bold bg-black/50 backdrop:blur-xl rounded-xl shadow-2xl shadow-black p-9">
                <span className="text-shadow-custom bg-gradient-to-r from-green-500 via-blue-600 to-violet-500 py-8 inline-block text-transparent bg-clip-text text-5xl lg:text-9xl">
                    {text}
                </span>
            </h1>
        </div>
    );
}