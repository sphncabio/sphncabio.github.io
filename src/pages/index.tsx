import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import styled from "@emotion/styled";
import Layout from "../layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <h1>Hello, World!</h1>
        </Layout>
    );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
