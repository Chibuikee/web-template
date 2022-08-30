import React from "react";
function ServiceBuilder({ services }) {
  return (
    <>
      {(services || []).map((service, key) => (
        <div key={key} className="services-box text-center flex hover-effect">
          <i className={service.icon + " text-primary"}></i>
          <h4 className="pt-3">{service.title}</h4>
          <p className="pt-3 text-muted">{service.desc}</p>
        </div>
      ))}
    </>
  );
}

export default ServiceBuilder;
