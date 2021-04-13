import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import {formatDistanceToNow} from "date-fns"
import { getPostSlugs, getPost } from "../utils/api"
import "prism-themes/themes/prism-nord.css"

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

    const post = JSON.stringify( await getPost(slug as string, ["title", "date", "html", "description", "author", "github"]));
    
    return {
        props: {
            post
        }
    }
}

type TPost = {
    title: string,
    date: string,
    html: string,
    description: string,
    author: string,
    github: string
}

const Post: React.FC<{ post: string }> = ({ post }) => {
    
    const { title, date, html, description, author, github }: TPost = JSON.parse(post);

    return (
        <React.Fragment>
            <main style={{ margin: "4rem auto"}}>
                <header>
                    <Head>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                    </Head>
                    
                    <h1><Link href="/"><a>&#8592;</a></Link>  {title}</h1>
                    <p>{formatDistanceToNow(new Date(date), {
                        addSuffix: true
                    })} - <a href={github} target="blank">{author}</a></p>
                </header>

                <article dangerouslySetInnerHTML={{ __html: html }} />
            </main>
            <footer>
                <p>Competitive programming blog. &copy; 2021</p>
            </footer>
        </React.Fragment>
    )
}

export default Post