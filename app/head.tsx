const Head = async () => {
    const title = 'Next.js'
    const description = 'Simple barebones Next.js template'

    return (
        <>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content="TODO" /> */}
        </>
    )
}

export default Head
