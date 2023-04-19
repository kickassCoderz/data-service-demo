import { DataServiceProvider } from '@kickass-coderz/data-service'
import { AppProps } from 'next/app'

import { beerService } from '../BeerService'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <DataServiceProvider dataService={beerService}>
            <Component {...pageProps} />
        </DataServiceProvider>
    )
}

export default App
