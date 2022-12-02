import styles from '../styles/Home.module.css'

import getConfig from 'next/config';

const {
    publicRuntimeConfig: {processEnv},
} = getConfig();

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
                    <h2>Deploy &rarr;</h2>
                    <p>
                        Instantly deploy your Next.js site to a public URL with Vercel.
                    </p>
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
