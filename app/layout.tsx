import '../styles/globals.css'

import { get } from '@vercel/edge-config'
import Script from 'next/script'

import { ProvidersProvider } from './providers'

const GTAG = (id: string) => {
    return `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', '${id}');`
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const gtmId = await get<string>('TODO_GTM_ID')

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <ProvidersProvider>{children}</ProvidersProvider>
                {process.env.NODE_ENV === 'production' && (
                    <>
                        <Script
                            id="script-gtag"
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
                        />
                        <Script
                            id="script-gtag-init"
                            dangerouslySetInnerHTML={{
                                __html: GTAG(gtmId as string)
                            }}
                        />
                    </>
                )}
            </body>
        </html>
    )
}

export default RootLayout
