import React from "react";
import styles from "./itemtable.module.css";

function ItemTableRender({}) {

  function ItemCount() {
    /*
    count items in the item table
    after counting set the number as a global value 
    "i=itemcount"
    when done RenderItems(i)*/
  }

  function RenderItems(i) {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.comment}</td>
        <td>{item.amount}</td>
        <td>
          <button id="delbutton" onClick={() => DeleteItem()} />
        </td>
      </tr>
    );
  }

  function DeleteItem() {
    /*
    on press delbutton delete itemtable
    delete item in datastorage
    reload item count*/
  }
}

function DeleteAllItems() {
    /*
    on press open pop up with question "are you sure"
    on popup button press delete all items in data storage
    relaod item count*/
}

if (itemcount === 0) {
  return (
    <button id="delallbutton" onClick={() => DeleteAllItems()}/>
  );
}

export default ItemTableRender;
