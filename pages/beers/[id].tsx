import { createGetOneQueryKey, useGetOne } from '@kickass-coderz/data-service'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { beerService } from '../../BeerService'

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const queryClient = new QueryClient()
    const parameters = { id: params?.id as string }

    await queryClient.prefetchQuery(createGetOneQueryKey('beers', parameters), () =>
        beerService.getOne('beers', parameters)
    )

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export default Page
