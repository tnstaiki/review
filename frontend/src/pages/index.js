import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Cinema Love Review</title>
                <meta name="description" content="Movie Review Platform" />
            </Head>
            <main>
                <h1>Welcome to Cinema Love Review</h1>
                <Link href="/dashboard">Go to Dashboard</Link>
            </main>
        </div>
    );
}