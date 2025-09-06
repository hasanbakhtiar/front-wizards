import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import configureStore from "./tool/store/configureStore";
import { getProduct } from "./tool/actions/productAction";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import supabase from "./utils/supabase";
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

async function getLaptop() {
  const { data } = await supabase.from("laptops").select();
  data.map((item) =>
    store.dispatch(
      getProduct({
        id: item.id,
        image: item.image,
        title: item.title,
        price: item.price,
        description: item.description,
      }),
    ),
  );
}
getLaptop();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
);
