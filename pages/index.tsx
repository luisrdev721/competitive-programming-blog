import { GetStaticProps } from "next"
import Link from "next/link"
import Head from "next/head"
import { getPosts } from "../utils/api"

interface IHomeProps {
    paths: { title: string, slug: string }[]
}

const Home: React.FC<IHomeProps> = ({ paths }) => {

    return (
        <main>
            <Head>
                <title>Competitive programming blog</title>
            </Head>
            <h1>Competitive programming blog</h1>
            <ul>
                {paths.map(({ title, slug }) => (
                    <li key={slug}>
                        <Link href={`/${slug}`}>
                            <a>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const paths = getPosts(["title", "slug"]);

    return {
        props: {
            paths
        }
    }
}

export default Home