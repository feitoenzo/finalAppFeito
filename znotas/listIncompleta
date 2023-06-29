import { useState } from "react";

export default function App( ) {
  const [textItem,setTextItem] = useState ("");
  const [list, setList] = useState ([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState (false);

  const onHandleChangeText = text => {
    setTextItem(text);
  };
  const addItem = () => {
    setList (prevState => [
      ...prevState,
      {name: textItem, id: Math.Random().toString()},
    ]);
  };
  const onHandleModal = item =>{
    setItemSelected(item)
    setModalVisible(true)
  };
  const onHandleDelete = id => {
    console.log ("delete item");
    setList(prevsState.filter(element => element !== id));
    setModalVisible(false);
  }
  const renderItem = ({item})=> (
    <View style={style.renderItemStyle}>
      <Text style={style.inputContainer}></Text>
    </View>
  )
}