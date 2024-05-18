import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row } from 'reactstrap'
import BlogList from '../components/UI/BlogList'

const Blog = () => {
  return (
    <Helmet title='Blogs'>
        <CommonSection title='Blogs' />
        <section>
            <Container>
                <Row>
                    <BlogList />
                    <BlogList />
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Blog