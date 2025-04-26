"use client";

import { Container, Col } from "@citrica/objects";
import React, { useRef, useEffect } from "react";

type ModalProps = {
  imageUrl?: string | null;
  title?: string | null;
  description?: string | null;
  url2?: string | null;
  price?:string | null;
  onClose: () => void;
};

const Modal = ({ imageUrl, title, description, url2, onClose, price }: ModalProps) => {

  const modalContentRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);


  return (
    <div className="modal-bg flex-col items-center modal-open">
      <button className="fixed top-3 right-3  flex justify-end w-full " onClick={onClose} >
        <img className="w-[40px] h-[40px] z-9 " src="/img/icons/Menuclose.svg" alt="menuclose"/>
      </button>

      <div className="modal-content p-16 gap-10 box-border" ref={modalContentRef}>
        <Container>
          <Col cols={{lg:6, md:3, sm:4}}>
            {imageUrl && (
              <div className="flex justify-center items-center">
                <img className=" w-[400px] rounded-2xl" src={imageUrl} alt=""/>
              </div>
            )}
          </Col>
          <Col cols={{lg:6, md:3, sm:4}}>
            <div className="modal-content-second">
              <div className="modal-content-tex">
                {title && (
                  <h2 className="modal-title">{title}</h2>
                )}
                {description && (
                  <p className="modal-description ">{description}</p>
                )}
                {price && !isNaN(parseFloat(price)) && (
                <p className="text-default-500">{`$${parseFloat(price).toFixed(2)}`}</p>
                )}
              </div>
              <div className="modal-content-second-img">
                
                {url2 && (
                  <picture className="flex-[2]">
                    <img src={url2} alt="" />
                  </picture>
                )}
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Modal;
