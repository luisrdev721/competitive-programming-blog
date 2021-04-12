import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import { getPostSlugs, getPost } from "../utils/api"

export const getStaticPaths: GetStaticPaths = async () => {

    const slugs = getPostSlugs();
    const paths = slugs.map(slug => ({
        params: {
            slug
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {

    const post = JSON.stringify(getPost(slug as string, ["title", "date", "html", "description"]));
    
    return {
        props: {
            post
        }
    }
}

type TPost = {
    title: string,
    date: number,
    html: string,
    description: string
}

const Post: React.FC<{ post: string }> = ({ post }) => {
    
    const { title, date, html, description }: TPost = JSON.parse(post);
    
    return (
        <React.Fragment>
            <header>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>
                <Link href="/"><a>Go back</a></Link>
                <h1>{title}</h1>
                <pre>{date}</pre>
            </header>
            <hr/>
            <main>
                <article dangerouslySetInnerHTML={{ __html: html }} />
            </main>
            <footer>
                <p>Competitive programming blog. &copy; 2021</p>
            </footer>
        </React.Fragment>
    )
}

export default Post