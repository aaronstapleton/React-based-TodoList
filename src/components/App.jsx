import React from "react";
import ToDoItem from "./ToDoItem";

const App = () => {
   const [items, setItems] = React.useState([]);
   const [newItem, setNewItem] = React.useState("");

   const handleItem = (event) => {
      setNewItem(event.target.value);
   };
   const updateList = (event) => {
      items.push(newItem);
      setItems(items);
      setNewItem("");
   };
   const deleteItem = (id) => {
      setItems((prevItems) => {
         return prevItems.filter((item, index) => {
            return index !== id;
         });
      });
   };

   return (
      <div className="container">
         <div className="heading">
            <h1>To-Do List</h1>
         </div>
         <div className="form">
            <input
               type="text"
               name="item"
               onChange={handleItem}
               value={newItem}
            />
            <button onClick={updateList}>
               <span>Add</span>
            </button>
         </div>
         <div>
            <ul>
               {items.map((item, index) => {
                  return (
                     <ToDoItem
                        item={item}
                        id={index}
                        key={index}
                        onChecked={deleteItem}
                     />
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default App;
