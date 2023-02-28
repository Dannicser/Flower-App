import Header from "../../gui/Header/Header";
import NotFound from "../../gui/NotFound/NotFound";
import nothing from "../../../images/not__found_2.png";

const MyAddresses = () => {
  return <Nothing />;
};

const Nothing = () => {
  return (
    <>
      <Header title={"Мои адреса"} button={false} extension={true} />
      <NotFound
        title={"У вас пока нет адресов"}
        descr={"Они появятся после выполненных заказов или добавьте их сейчас"}
        img={nothing}
        button={true}
        textButton={"Добавить"}
      />
    </>
  );
};

export default MyAddresses;
