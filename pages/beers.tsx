import { useGetList } from '@kickass-coderz/data-service'
import Link from 'next/link'

type Beer = {
    id: number
    name: string
}

const Page = () => {
    const { data: beers, isLoading } = useGetList<Beer>({
        resource: 'beers'
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1>Beers</h1>
            {beers?.data.map(item => (
                <Link key={item.id} href={`/beers/${item.id}`}>
                    <div>{item.name}</div>
                </Link>
            ))}
        </>
    )
}

export default Page
