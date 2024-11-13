const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col pt-12'>
            <h1 className='head_text'>
                Summarize Articles with <br className='max-md:hidden'/>
                <span className='orange_gradient'>GPT-4</span>
            </h1>
            <h2 className='desc pb-10'>
                Article reading made easy.
            </h2>
            <button
                type='button'
                onClick={() => window.open('https://github.com/badew1/ai-summarizer.git')}
                className='black_btn -mb-10'
                >
                    GitHub
                </button>
        </header>
    )
}

export default Hero