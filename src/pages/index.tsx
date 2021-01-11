import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/Seo"
import WorkingManImage from '../assets/svgs/character 18.svg';
import { Image, Row, Col } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col className="justify-content-center align-items-center text-center align-items-sm-start align-self-center">
        <h1 className="font-weight-bold">Hi, I'm Narender Singh</h1>
        <h3><span className="text-primary font-weight-bold">[Web/Mobile]</span> <span className="font-weight-light">developer</span></h3>
      </Col>
      <Col>
        <div className="m-auto d-block w-50">
          <Image src={WorkingManImage}/>
        </div>
      </Col>
    </Row>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage






















