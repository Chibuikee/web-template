import { OnlineWorld } from "../../assets/images/online-world.svg";
function Features() {
  return (
    <>
      <div>
        <h1>
          A digital web design studio creating modern & engaging online
          experiences
        </h1>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia.
        </p>
        <ul>
          <li>We put a lot of effort in design.</li>
          <li>The most important ingredient of successful website.</li>
          <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
          <li>Submit Your Organization.</li>
        </ul>
        <button>Learn More</button>
      </div>
      <div>Features</div>
      <image src={OnlineWorld} width="100" height="100" alt="Phone" />
    </>
  );
}

export default Features;
