import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.png";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
function Menu() {
  return (
    <>
      <section>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title="Our Menu" />
        <PopularMenu />
      </section>
    </>
  );
}

export default Menu;