import { GetStaticPaths, GetStaticProps } from "next"

const Home = () => {

    return (
        <main>
            <h1>Hello world</h1>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false
    }
}



export default Home