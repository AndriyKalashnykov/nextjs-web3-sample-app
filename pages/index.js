import styles from '../styles/Home.module.css'

import getConfig from 'next/config';

const Version = 'v0.0.1'

// https://www.topcoder.com/thrive/articles/api-routes-for-next-js
// https://www.thisdot.co/blog/building-full-stack-react-apps-with-next-js-api-routes
// https://dev.to/codymjarrett/understanding-how-api-routes-work-in-next-js-50fm
// https://www.makeuseof.com/next-js-apis-build-consume/
export const {
    publicRuntimeConfig: {processEnv},
} = getConfig();

async function ClientClick(e) {
    console.log("ClientClick");
    if (e && e.target) {
        var clickedId = e.target.getAttribute('data-id');
        // DOM Manipulation
    }
    const response = await fetch('/api/eth-balance')
    const data = await response.json()
    console.log(data)
}

export default function Home() {
    const {NEXT_PUBLIC_RPCENDPOINT} = processEnv;
    const rpcendpoint = NEXT_PUBLIC_RPCENDPOINT;

    return (
        <div className={styles.container}>

            <main className={styles.main}>
                RPCENDPOINT&nbsp;{rpcendpoint ? rpcendpoint : '$RPCENDPOINT'}<br/>

                {/*<p className={styles.description}>*/}
                {/*    Get started by editing{' '}*/}
                {/*    <code className={styles.code}>pages/index.js</code>*/}
                {/*</p>*/}

                <div className={styles.grid}>
                    <h2>Balance &rarr;</h2>
                    <p>
                        <button key="1" data-id="1" onClick={()=>ClientClick(1)} className="slider-button active">Submit</button>
                    </p>
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`http://localhost:3000/api/hello`)
//     const { data, errors } = await res.json()
//     if (errors || !data) {
//         return { notFound: true };
//     }
//     // Pass data to the page via props
//     return { props: { data } }
// }