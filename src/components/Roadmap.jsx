import React from 'react'
import { Container } from 'react-bootstrap'

const Roadmap = () => {
  return (
      <div>
          <section className="bg-color-primary m--1 position-relative " id="Roadmap">
        <Container className="pt-156">
            <p className="font-family fs-4xl fw-lg color-seacandary text-center mb-0">Roadmap</p>
            <div className="timeline">
                <div className="my-timeline left-50">
                    <div className="my-content">
                        <h2 className="font-family fs-3xl fw-xl color-seacandary">Q-4, 2021</h2>
                        <p className="font-family fs-sm fw-sm color-tertiary w-404">Blandit sed penatibus elit tortor
                            fermentum
                            velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor
                            non in commodo, felis viverra risus tristique.</p>
                    </div>
                </div>
                <div className="my-timeline left">
                    <div className="my-content">
                        <h2 className="font-family fs-3xl fw-xl color-seacandary  text-left text-lg-end">Q-1, 2022</h2>
                        <p className="font-family fs-sm fw-sm color-tertiary ms-auto w-404 text-left text-lg-end">Blandit sed penatibus
                            elit tortor fermentum
                            velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor
                            non in commodo, felis viverra risus tristique.</p>
                    </div>
                </div>
                <div className="my-timeline left-50">
                    <div className="my-content">
                        <h2 className="font-family fs-3xl fw-xl color-seacandary">Q-2, 2022</h2>
                        <p className="font-family fs-sm fw-sm color-tertiary w-404">Blandit sed penatibus elit tortor
                            fermentum
                            velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor
                            non in commodo, felis viverra risus tristique.</p>
                    </div>
                </div>
            </div>
            <p className="fs-3xl fw-md font-family color-seacandary w-786 mx-auto text-center mb-0">And
                this just the
                begining , the team is working on more suprises for our community. Buddybullies stronger together !!</p>
        </Container>
    </section>
    </div>
  )
}

export default Roadmap