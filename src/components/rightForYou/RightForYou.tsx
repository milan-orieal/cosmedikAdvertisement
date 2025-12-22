import RightForYouImage from "../../assets/images/rightforyou.png";

const rightForYouData = [
  {
    number: 1,
    title: "Receding Hairline or Bald Patches",
    description:
      "Ideal for individuals noticing thinning areas, receding hairlines, or visible bald spots that continue to progress over time.",
  },
  {
    number: 2,
    title: "Male or Female Pattern Baldness",
    description:
      "Suitable for both men and women experiencing genetic hair loss patterns that do not respond to routine treatments.",
  },
  {
    number: 3,
    title: "Frustrated with Temporary Solutions",
    description:
      "Recommended for those who are tired of relying on oils, medicines, and short-term fixes with limited or no lasting results.",
  },
  {
    number: 4,
    title: "Seeking a Long Term Hair Loss Solution in Kochi",
    description:
      "Best for individuals looking for a permanent, medically proven hair restoration option close to home.",
  },
  {
    number: 5,
    title: "Adequate Donor Hair Availability",
    description:
      "Candidates with healthy donor hair at the back or sides of the scalp, confirmed through a professional medical consultation.",
  },
];

const RightForYou = () => {
  return (
    <section className="rightforyou section">
      <div className="container">
        <div className="rightforyou__wrapper">
          <div className="rightforyou__image">
            <img src={RightForYouImage} alt="Hair Transplant" />
          </div>
          <div className="rightforyou__content">
            <span className="section__subtitle">Right For You?</span>
            <h3 className="section__title">
              Who Is This Hair
              <br />
              Transplant Ideal For?
            </h3>
            <div className="rightforyou__list">
              {rightForYouData.map((item) => (
                <div className="rightforyou__item" key={item.number}>
                  <span className="rightforyou__number">{item.number}</span>
                  <div className="rightforyou__text">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightForYou;
