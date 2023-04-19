import { useGetOne } from '@kickass-coderz/data-service'
import { useRouter } from 'next/router'

type Beer = {
    id: number
    name: string
}

const Page = () => {
    const router = useRouter()
    const { data: beer } = useGetOne<Beer>({
        resource: 'beers',
        params: {
            id: router.query.id as string
        }
    })

    if (!beer) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1>Beers</h1>#{beer?.id}
            {beer?.name}
        </>
    )
}

export default Page
