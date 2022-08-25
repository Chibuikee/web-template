import React from "react";
import Image from "next/image";

const TestimonialsBox = ({ clients }) => {
  return (
    <>
      {(clients || []).map((client, key) => (
        <div lg={4} key={key}>
          <Image
            src={client.image}
            alt="client"
            className="img-fluid d-block img-thumbnail rounded-circle"
          />
          <div className="testimonial-decs">
            <p className="text-muted text-center mb-0">“{client.desc}” </p>
          </div>
          <h5 className="text-center text-uppercase pt-3">
            {client.title}
            <span className="text-muted text-capitalize">
              {client.subTitle}
            </span>
          </h5>
        </div>
      ))}
    </>
  );
};

export default TestimonialsBox;
