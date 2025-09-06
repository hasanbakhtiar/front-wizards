import supabase from "../../utils/supabase";

export const getProduct = ({ id, image, title, price, description }) => ({
  type: "GET_PRODUCT",
  product: {
    id: id,
    image,
    title,
    price,
    description,
  },
});

export const createProduct = async ({ image, title, price, descrition }) => {
  const { error } = await supabase.from("laptops").insert({
    image: image,
    title: title,
    price: price,
    descrition: descrition,
  });
  if (error) {
    console.log(error);
  } else {
    window.location.assign("/dashboard");
    console.log("Ok");
  }
};
export const deleteProduct = async ({ id }) => {
  const { error } = await supabase.from("laptops").delete().eq("id", id);
  if (error) {
    console.log(error);
  } else {
    window.location.reload();
    console.log("Ok");
  }
};

export const editProduct = async (id, update) => {
  const { error } = await supabase.from("laptops").update(update).eq("id", id);
  if (error) {
    console.log(error);
  } else {
    window.location.reload();
    console.log("Ok");
  }
};
