import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script
                    src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDdwQwsHi-_JmG1n62xVx2sonXav9oyfGU&libraries=places`}
                    async
                ></script>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
