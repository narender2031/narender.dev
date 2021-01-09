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
        <h1>Hi people</h1>
      </Col>
      <Col>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, alignSelf: 'flex-end' }}>
          <Image src={WorkingManImage}/>
        </div>
      </Col>
    </Row>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage












