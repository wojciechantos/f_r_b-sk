import Layout from 'src/layouts/DefaultLayout';

const IndexPageTemplate = () => {
    return (
        <>
            <h1>INDEX PAGE</h1>
        </>
    );
};

const IndexPage = () => {
    return (
        <Layout>
            <IndexPageTemplate />
        </Layout>
    );
};

export default IndexPage;
