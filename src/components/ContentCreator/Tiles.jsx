import { Card, Image } from "antd";
import React, { useState } from "react";
import "./ContentCreator.scss";
import { v4 as uuidv4 } from "uuid";
import ModalProject from "../Projects/ModalProject";
import "../Projects/Projects.scss";

const data = [
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632279/DJI_0483_dg2aue.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632163/15826077_10207966938194508_322467302326309116_n.jpg_joxt6a.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632160/20622012_10209717024785579_5294044838149556568_n.jpg_hesssh.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631966/116372751_766498804177308_164581822846888024_n.jpg_islksw.jpg", //4//
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: " https://res.cloudinary.com/dqgagegt8/image/upload/v1685631971/21568950_274348319737429_4593806301502373888_n.jpg_lb7hr8.jpg", //5//
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631965/125838489_111464177446494_8543650719685977785_n.jpg_hdwsaz.jpg",
  },
  
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632163/15826046_10207966940394563_5400960219763928062_n.jpg_hydffo.jpg",
  },
 
  {
    name: "Stars in Oregon , USA",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631971/20582563_1457095094378865_542932828841574400_n.jpg_iwzr17.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631966/116343431_744976396045737_7042875153528911262_n.jpg_cxxoae.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632163/15826077_10207966938194508_322467302326309116_n.jpg_joxt6a.jpg", //10//
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632160/20526225_10209717021305492_5843430744459204652_n.jpg_okdetz.jpg",
  },
 
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632161/20707958_10209717020705477_5470794860626755554_n.jpg_kep8aw.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632160/20604417_10209717083947058_3397311658273178878_n.jpg_kzjxvk.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632162/15871973_10207966941634594_2266762452806444166_n.jpg_l5su5y.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631971/18888498_193406917851394_7244056278551494656_n.jpg_fv4h7s.jpg",
  },

  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631971/19227887_238701883291140_2873417869318684672_n.jpg_qilikm.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631972/19051498_902693726535656_594862951999995904_n.jpg_fz22tr.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631970/34922488_2087652171510348_46436052532985856_n.jpg_oj5czz.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631970/27579140_1445729412223232_6611023033068945408_n.jpg_ggxhwm.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631969/51928059_562850300864003_5796882804349234568_n.jpg_c5e7oh.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631969/35171270_190921788262325_1789933998634434560_n.jpg_uwwvd7.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631969/53470254_312330979634482_9009436658510910258_n.jpg_zfgwu4.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631962/155519792_345932233323053_7214025199739397809_n.jpg_hrqppo.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631968/53854029_1757581721055045_54639677841647095_n.jpg_wagwpg.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631968/53563188_711299072606024_2481254924088787509_n.jpg_bm84xc.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632161/15826441_10207966945074680_6797484988098683495_n.jpg_eunred.jpg",
  },

  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631967/97538662_574248163224438_4573197783451125889_n.jpg_cvxow2.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631968/54800774_2269010719830552_251329781803057102_n.jpg_j8miq5.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631967/100934374_271709934019892_1099417331164688536_n.jpg_aucbkl.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631967/120761161_372445070776844_520654562152920336_n.jpg_l8ejjn.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631970/32769162_2061267100756243_1931571218213765120_n.jpg_vklnja.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: " https://res.cloudinary.com/dqgagegt8/image/upload/v1685631969/53566473_1154654888069896_7020355778089633014_n.jpg_bco7ow.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631965/116431840_642642603011428_6574739433720558455_n.jpg_wh555d.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631964/149146904_692380001458627_420667558501662135_n.jpg_rszwo6.jpg",
  },
  {
    name: "Tikkal - Guatemala",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631963/152774724_791285354813373_3277651992894441068_n.jpg_melcbr.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632161/15895098_10207966946034704_8381959105732066750_n.jpg_nbmilk.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685632161/20597546_10209717020545473_111458907026661448_n.jpg_vh6004.jpg",
  },
  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631963/153618660_698880244112512_2501447719877978623_n.jpg_iaouuj.jpg",
  },

  {
    name: "lorem",
    id: uuidv4(),
    url: "https://res.cloudinary.com/dqgagegt8/image/upload/v1685631763/DJI_0100_prciyo.jpg",
  },
];

export const Tiles = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const _mouseEnter = (e, ele) => {
    e.preventDefault();
    if (!mouseOver) {
      console.log(ele?.name);
      setMouseOver(true);
    }
  };

  const _mouseLeave = (e) => {
    e.preventDefault();
    if (mouseOver) {
      setMouseOver(false);
    }
  };

  return (
    <>
      <div className='tiles'>
        {data?.map((ele) => {
          console.log("datito", ele.url);
          return (
            <div className='tile' key={ele.id}>
              <img
                className='img'
                onMouseEnter={_mouseEnter}
                onMouseLeave={_mouseLeave}
                src={ele.url}
                alt={ele.name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
