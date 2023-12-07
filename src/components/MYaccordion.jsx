import React from 'react'

const MYaccordion = () => {
  return (
    <div><div className="bg-color-primary m--1 position-relative " id="FAQs">
        <div className="container pt-100 ">
            <p className="font-family fs-4xl fw-lg color-seacandary text-center mb-0 ">FAQs</p>
            <div className="accordion accordion-flush pt-5 w-accordion mx-auto" id="accordionFlushExample">
                <div className="accordion-item pt-4">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed fs-lg fw-md font-family" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            What’s the blockchain the buddybullies call home ?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body font-family fs-sm fw-sm color-tertiary w-800">Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.</div>
                    </div>
                </div>
                <div className="accordion-item pt-4">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed fs-lg fw-md font-family" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            What’s the blockchain the buddybullies call home ?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body font-family fs-sm fw-sm color-tertiary w-800">Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.</div>
                    </div>
                </div>
                <div className="accordion-item pt-4">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed fs-lg fw-md font-family" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            What’s the blockchain the buddybullies call home ?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body font-family fs-sm fw-sm color-tertiary w-800">Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.</div>
                    </div>
                </div>
                <div className="accordion-item pt-4">
                    <h2 className="accordion-header" id="flush-headingfour">
                        <button className="accordion-button collapsed fs-lg fw-md font-family" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false"
                            aria-controls="flush-collapsefour">
                            What’s the blockchain the buddybullies call home ?
                        </button>
                    </h2>
                    <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body font-family fs-sm fw-sm color-tertiary w-800 ">Hac varius turpis
                            sit
                            pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                            turpis
                            enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
                            vitae non, integer. Non.</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <img src="./assets/image/shadow4.png" alt="shadow4" className="shadow4"> */}
    </div></div>
  )
}

export default MYaccordion