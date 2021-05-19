import HomeSectionOne from '../../components/sections/homeSectionOne';
import HomeSectionTwo from '../../components/sections/homeSectionTwo';
import floatImage from '../../components/float/floatImage';

let Home = {
  is_private: false,

  render: async () => {
    let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${floatImage}
          </div>
      `;

    return view
  },

  after_render: async () => { }
}

export default Home;