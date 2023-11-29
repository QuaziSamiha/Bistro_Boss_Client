import FoodCart from "../../../components/FoodCart/FoodCart";

//TODO: implement pagination here on this page
function OrderTab({ items }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCart key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}

export default OrderTab;
