import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Skolkovo residents · IT-Park graduates · 250+ products shipped · Backed
        by US investors
      </h5>
      <ul className="flex">
        {companyLogos.map((logo) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={logo}
          >
            <img src={logo} width={134} height={28} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
