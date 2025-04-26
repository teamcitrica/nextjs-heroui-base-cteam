import { Container, Col } from "@citrica/objects";
import Link from "next/link";

const FooterCUI = () => {
  return (
    <>
      <footer
        className="h-[204px] pt-20"
        style={{
          background: 'linear-gradient(91.06deg, #0D1321 -2.64%, #302967 107.97%)',
        }}
      >
        <Container noPadding className="flex items-center justify-around">
          <Col noPadding
            cols={{ lg: 3, md: 6, sm: 2 }}
            className="flex items-center justify-around  mb-3 only-lg"
          >
            <picture>
              <img src=" /img/home/Logo-galiz.png" alt="" />
            </picture>
          </Col>
          <Col noPadding cols={{ lg: 5, md: 3, sm: 2 }}>
            <h2 className=" letra-citrica mb-3">Gáliz Perú 2024</h2>
            <div className="letra-citrica-1 flex items-center gap-2">
              <h2 className="letra-citrica-2">Desarrollado por</h2>
              <img src="/img/icons/citrica-logo-col.png" alt="Logo Cítrica" className="h-6 relative bottom-[7px]" />
            </div>
          </Col>
          <Col
            cols={{ lg: 3, md: 3, sm: 2 }}
            className="flex  mb-3 only-lg-md-sm"
          >
            <div className="icon-footer-container ">
              <Link target="_blank" href="https://www.instagram.com/galizperu/">
                <picture>
                  <img
                    className="h-11"
                    src="/img/icons/Instagram.png"

                    alt="inde icon"
                  />
                </picture>
              </Link>
              <Link target="_blank" href="https://www.facebook.com/galizperu">
                <picture>
                  <img
                    className="h-11"
                    src="/img/icons/Facebook.png"

                    alt="inde icon"
                  />
                </picture>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/company/galizperu/">
                <picture>
                  <img
                    className="h-11"
                    src="/img/icons/LinkedIn.png"
                    alt="face icon"
                  />
                </picture>
              </Link>
            </div>
          </Col>
        </Container>
      </footer>
    </>
  );
};

export default FooterCUI;






