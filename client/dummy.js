import React from "react";

// interface ICardProps {
//     name: string;
//     id: string;
//     status: Number;
//     logo: string;
//     controls: {
//         qualified: Number;
//         failed: Number;
//         notAssessed: Number;
//         notApplicable: Number;
//     };
// }

const ComplianceCards: React.FC = () => {

  let complianceCards = [];
    const data = [
        {
            name: "SEBI",
            id: "COMP0001",
            status: 67,
            logo: "sebi",
            controls: {
                qualified: 10,
                failed: 2,
                notAssessed: 4,
                notApplicable: 7
            }
        },
        {
            name: "ISO",
            id: "COMP0002",
            status: 67,
            logo: "iso",
            controls: {
                qualified: 5,
                failed: 12,
                notAssessed: 4,
                notApplicable: 7
            }
        },
        {
            name: "NIST",
            id: "COMP0003",
            status: 83,
            logo: "nist",
            controls: {
                qualified: 5,
                failed: 12,
                notAssessed: 4,
                notApplicable: 7
            }
        }
    ];
    complianceCards = data.map((el, index) => (
            <div className="col-sm-4 col-md-3 text-center" key={el.id}>
                <div
                    className="individual-box color-10 able sebi-cont"
                    id={`complianceData${index}`}
                    data-id={el.id}
                    data-name={el.name}
                >
                    <div className="block">
                        <div className="logo-bg text-center">
                            <svg height="80" width="80">
                                <use
                                    xlinkHref={`../assets/sprites/icons-sprite/symbol/icons-sprite.svg#compliance--${el.logo}`}
                                ></use>
                            </svg>
                        </div>
                        <h3 className="text-center head-weight">{el.name}</h3>
                    </div>
                    <div className="controls-container text-center">
                        <span className="controls-span">
                            Qualified: {el.controls.qualified}
                        </span>
                        <span className="controls-span">
                            Failed: {el.controls.failed}
                        </span>
                        <span className="controls-span">
                            Not Assessed: {el.controls.notAssessed}
                        </span>
                        <span className="controls-span">
                            Not Applicable: {el.controls.notApplicable}
                        </span>
                    </div>
                </div>
            </div>
        ))
};

export default ComplianceCards;