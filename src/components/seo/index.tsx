import Head from "next/head";

interface seo {
    title: string;
    description: string;
    icon?: string;
}

const Seo = ({title, description, icon}: seo) => {
     return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={icon} />
        </Head>
     )
}
export default Seo