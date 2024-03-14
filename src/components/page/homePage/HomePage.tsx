import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
  usePostProductMutation,
} from "../../../redux/api/request/product";
import scss from "./Home.module.scss";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
  const { data, isLoading } = useGetProductQuery();
  const [createProduct] = usePostProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  console.log(data);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (name === "" || quantity === "" || price === "" || image === "") {
      notifyError();
      return null;
    } else {
      const newProduct = {
        id: Math.random(),
        productName: name,
        quantity: quantity,
        price: price,
        photoUrl: image,
      };
      await createProduct(newProduct);
      console.log(newProduct);
    }
    setImage("");
    setName("");
    setPrice("");
    setQuantity("");
  };

  const deleteProductItem = async (id: number) => {
    await deleteProduct(id);
  };
  console.log(isLoading);

  const deleteLocalStorage = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsCompleted(false);
  };
  const UserChange = () => {
    setIsCompleted(true);
  };
  const notifyError = () => toast.error("Заполните все поля!");

  return (
    <div className={scss.Homepage}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.section}>
            <div className={scss.form}>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <input
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <button onClick={handleAddProduct}>добавить</button>
            </div>
            <div className={scss.userImg}>
              {isCompleted ? (
                <>
                  <button onClick={deleteLocalStorage}>log out</button>
                </>
              ) : (
                <>
                  <img
                    onClick={UserChange}
                    src="https://cdn.icon-icons.com/icons2/2248/PNG/512/account_multiple_icon_135993.png"
                    alt="image"
                  />
                </>
              )}
            </div>
          </div>
          <div className={scss.Items}>
            {data?.map((item) => (
              <div className={scss.aside} key={item._id}>
                <h1>{item.productName}</h1>
                <h3>{item.quantity}</h3>
                <img className={scss.img} src={item.photoUrl} alt="image" />
                <p>{item.price}</p>
                <button onClick={() => deleteProductItem(item._id!)}>
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
