import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const MYaccordion = () => {
    return (
        <div><div className="bg-color-primary m--1 position-relative " id="FAQs">
            <Container className="pt-100 ">
                <p className="font-family fs-4xl fw-lg color-seacandary text-center mb-0 ">FAQs</p>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className='mt-4'>
                        <Accordion.Header className='fs-lg fw-md font-family'> What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='font-family fs-sm fw-sm color-tertiary w-800'>
                            Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='mt-4'>
                        <Accordion.Header className='fs-lg fw-md font-family'>What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='font-family fs-sm fw-sm color-tertiary w-800'>
                            Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='mt-4'>
                        <Accordion.Header className='fs-lg fw-md font-family'> What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='font-family fs-sm fw-sm color-tertiary w-800'>
                            Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='mt-4'>
                        <Accordion.Header className='fs-lg fw-md font-family'>What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='font-family fs-sm fw-sm color-tertiary w-800'>
                            Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div></div>
    )
}

export default MYaccordion