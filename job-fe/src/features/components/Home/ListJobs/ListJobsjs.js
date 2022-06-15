// const cutText = (text) => {
//     var newText = [];
//     var size;
//     var widthScreen = window.innerWidth
//     if (widthScreen >= 1125) {
//         size = 35
//     } else if (widthScreen >= 992 && widthScreen < 1125) {
//         size = 28
//     } else if (widthScreen >= 769 && widthScreen < 992) {
//         size = 50
//     } else if (widthScreen >= 576 && widthScreen < 769) {
//         size = 35
//     } else if (widthScreen >= 306 && widthScreen < 576) {
//         size = 22
//     } else {
//         size = 15
//     }
//     for (let i = 0; i < text.length; i++) {
//         if (i <= size) {
//             newText.push(text[i])
//         } else {
//             newText.push(" ...")
//             break;
//         }
//     }
//     return newText.join("");
// }
// window.addEventListener("DOMContentLoaded", () => {
//     const $ = document.querySelector.bind(document);
//     const $$ = document.querySelectorAll.bind(document);

//     const titleJobAll = $$(".jobTitle");
//     titleJobAll.forEach((item, index) => {
//         $$(".jobTitle")[index].innerText = cutText(item.innerText)
//     });

//     window.addEventListener("resize", () => {
//         titleJobAll.forEach((item, index) => {
//             console.log(item.innerText);
//             $$(".jobTitle")[index].innerText = cutText(item.innerText)
//         });
//     })
// })

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { byCategory } from "../../../admin/Slice/workSlice";
import { formatDateWork } from "../../../container/Functionjs";
import SpinLoad from "../../Spin/Spin";
const ListJobsjs = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const typework = useSelector((state) => state.works.workCategory);
  const loading = useSelector((state) => state.works.loading);
  //   console.log(typework);
  useEffect(() => dispatch(byCategory({ TypeOfWorkId: id })), [id]);
  return (
    <div className="ListJob">
      <div className="heading">
        <div className="heading__title">
          <h3>
            <Link to="/jobs">Công việc</Link>{" "}
            {typework?.data?.rows[0]?.TypeOfWork?.name}
          </h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <div className="container">
        <div className="row">
          {loading ? (
            <SpinLoad />
          ) : (
            typework?.data?.rows.map((ok, index) => (
              <div className="col-lg-6" key={index}>
                <Link to={`/jobs/work/${ok.id}`}>
                  <div className="job__box">
                    <div className="job__tag">hot</div>
                    <div className="job__logo">
                      <img src={ok.Company.avatar} alt="" />
                    </div>
                    <div className="job__content">
                      <div className="job__title">
                        <h4 className="jobTitle">{ok.name}</h4>
                      </div>
                      <div className="job__nameCompany">
                        <span>{ok.Company.name}</span>
                      </div>
                      <div className="job__detail">
                        <div className="job__detail--address">
                          <div className="job__icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <span>{ok.address}</span>
                        </div>
                        <div className="job__detail--deadline outSize outSize">
                          <div className="job__icon">
                            <i className="far fa-clock"></i>
                          </div>
                          <span>{formatDateWork(ok.createdAt)}</span>
                        </div>
                        <div className="job__detail--salary">
                          <div className="job__icon">
                            <i className="fas fa-dollar-sign"></i>
                          </div>
                          <span>
                            {ok.price1} - {ok.price2} Triệu VNĐ
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListJobsjs;
