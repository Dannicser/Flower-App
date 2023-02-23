import NotFound from "../components/gui/NotFound/NotFound";
import imgNotFound from "../images/not_found.png";
const Page404 = () => {
  return (
    <NotFound
      img={imgNotFound}
      title={"Ничего не найдено"}
      descr={"Данной страницы не существует"}
    />
  );
};

export default Page404;
