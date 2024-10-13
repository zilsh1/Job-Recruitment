import React from "react";
import { useState } from "react";
export default function Job_Seeker_Profile(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (<><section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card">
                        <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#007bff", height: "200px" }}>
                            <div className="ms-4 mt-5 d-flex flex-column">
                                <img src={props.user.image}  onClick={() => openModal(props.user.image)}
                                    alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                    style={{ width: "150px", zIndex: "1" }} />
                            </div>              <div className="ms-3" style={{ marginTop: "130px" }}>
                                <h5>{props.user.Name}</h5>

                            </div>

                        </div>
                        <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}></div>
                        <div className="card-body p-4 text-black">
                            <div className="mb-5">
                                <p className="lead fw-normal mb-1">About</p>
                                <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                    <p className="font-italic mb-1">Graduation- {props.user.qualification}</p>
                                    <p className="font-italic mb-1">Field- {props.user.Field}</p>
                                    <p className="font-italic mb-1">Experience- {props.user.Experience!="0"?props.user.Experience+" Year":"Fresher"}</p>


                                </div>
                                
                            </div>
                            <div className="mb-5">
                                <p className="lead fw-normal mb-1">Resume</p>
                                <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                <img src={props.user.resume} onClick={() => openModal(props.user.resume)} className="w-120 max-w-full h-auto cursor-pointer sm:w-auto"/>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
    
            </div>
            {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={closeModal}>
                        <div className="relative">
                            <img src={selectedImage} alt="Zoomed" className="rounded-3xl object-cover" style={{ maxHeight: "80vh", maxWidth: "80vw" }} />
                            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
                        </div>
                    </div>
                )}
    </section>
    
    
    </>)
}