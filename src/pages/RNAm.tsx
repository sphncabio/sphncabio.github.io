import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <h1>RNAm: O Jornal do CABio</h1>
        </Layout>
    );
}

export default IndexPage;

export const Head: HeadFC = () => <title>RNA mensageiro: O Jornal do CABio</title>;
