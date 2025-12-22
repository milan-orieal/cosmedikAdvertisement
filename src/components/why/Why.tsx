import Icon1 from "../../assets/images/why_1.svg";
import Icon2 from "../../assets/images/why_2.svg";
import Icon3 from "../../assets/images/why_3.svg";

const whyData = [
  {
    icon: Icon1,
    title: "Permanent & Natural Results",
    description:
      "We deliver lasting hair restoration with transplanted hair that grows and styles naturally.",
  },
  {
    icon: Icon2,
    title: "Expert Hairline Design",
    description:
      "We create natural-looking hairlines designed by experienced doctors based on facial structure and age.",
  },
  {
    icon: Icon3,
    title: "Advanced Techniques",
    description:
      "We use modern, minimally invasive methods that reduce discomfort and shorten recovery time.",
  },
  {
    icon: Icon1,
    title: "Safe Medical Setup",
    description:
      "We operate in a sterile, medically compliant environment with strict safety and hygiene protocols.",
  },
  {
    icon: Icon2,
    title: "Confidence That Lasts",
    description:
      "We help restore not just hair, but long-term confidence and a more youthful appearance.",
  },
  {
    icon: Icon3,
    title: "Proven Patient Outcomes",
    description:
      "We deliver consistent, reliable results supported by real patient experiences and case studies.",
  },
];

const Why = () => {
  return (
    <section className="why section">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Why Us</span>
          <h3 className="section__title">
            Why Choose Our Hair
            <br />
            Transplant in Kochi?
          </h3>
          <p className="section__text">
            A hair transplant is a medical decision that requires clinical
            expertise, careful planning, and ethical care – not a cosmetic
            shortcut or quick fix. Here's why patients across Kochi place their
            trust in us:
          </p>
        </div>
        <div className="why__grid">
          {whyData.map((item, index) => (
            <div className="why__card" key={index}>
              <i>
                <img src={item.icon} alt={item.title} />
              </i>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
