import "./Basket.scss";
import { Button, Form, Input, Modal } from "antd";
import Header from "../gui/Headers/Header/Header.js";
import NotFound from "../gui/NotFound/NotFound";
import bag from "./img/basket_empty.svg";
import { useEffect, useState } from "react";
import GoodsCard from "../Goods/GoodsCard/GoodsCard";
import MainButton from "../gui/Button/MainButton/MainButton";
import axios from "axios";

const title = "Empty basket";
const descr = `Buy for pleasure!`;

const Basket = () => {
  const [goods, setGoods] = useState([]);
  const [sum, setTotalSum] = useState(0);
  const [amount, setAmount] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const [form] = Form.useForm();

  function onOpenModal() {
    setIsModal(true);
  }

  async function onPay() {
    try {
      const res = await axios.post("http://37.1.213.208:8098/process_payment", form.getFieldsValue());

      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log("pay", form.getFieldsValue(), goods, { sum });
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    setGoods(data);
  }, []);

  const onGetSum = () => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    let cost = 0;
    let amount = 0;

    for (let item of data) {
      cost = item.price * item.count + cost;
      amount = item.count + amount;
    }

    setTotalSum(() => {
      return cost;
    });

    setAmount(() => {
      return amount;
    });
  };

  const onDeleteItemFromBasket = (id) => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];

    data.map((item) => {
      if (item.id === id) {
        data.splice(data.indexOf(item), 1);
        localStorage.setItem("basket", JSON.stringify(data));
      }
    });
    setGoods(data);

    onGetSum();
  };

  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  const content = (
    <>
      <div className="basket__total">
        <div className="total__container">
          <span>{amount}</span> goods for
          <span> {sum} $</span>
        </div>
      </div>
      <div className="basket__list">
        {goods.map((el) => {
          return (
            <li key={el.id}>
              <GoodsCard
                type={el.type}
                composition={el.composition}
                title={el.name}
                img={el.img}
                price={el.price}
                id={el.id}
                basket={true}
                goods={el}
                onDeleteItemFromBasket={onDeleteItemFromBasket}
                onGetSum={onGetSum}
              />
            </li>
          );
        })}
        <div onClick={onOpenModal} className="order__button">
          <MainButton text={`Make order for ${sum}$`} />
        </div>
      </div>
    </>
  );

  return (
    <div className="basket__wrapper">
      <Header title={"Basket"} />
      {isModal && (
        <Modal footer={false} title="Payment" open={isModal} onOk={handleOk} onCancel={handleCancel}>
          {/*  */}
          <Form onFinish={onPay} form={form}>
            <Form.Item
              label="Firstname"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Please input your firstName!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Lastname"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Please input your lastName!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Company"
              name="company"
              rules={[
                {
                  required: true,
                  message: "Please input your company!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please input your city!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="State"
              name="state"
              rules={[
                {
                  required: true,
                  message: "Please input your state!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Zip"
              name="zip_code"
              rules={[
                {
                  required: true,
                  message: "Please input zip address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Country"
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please input your country!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Card number"
              name="card_number"
              rules={[
                {
                  required: true,
                  message: "Please input your card!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Expiration date"
              name="expiration_date"
              rules={[
                {
                  required: true,
                  message: "Please input expiration date card!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Cvv"
              name="cvv"
              rules={[
                {
                  required: true,
                  message: "Please input your cvv card!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button onSubmit={onPay} type="primary" htmlType="submit">
                Pay
              </Button>
            </Form.Item>

            {/*  */}
          </Form>
        </Modal>
      )}
      {goods.length ? content : <NotFound img={bag} title={title} descr={descr} />}
    </div>
  );
};

export default Basket;
