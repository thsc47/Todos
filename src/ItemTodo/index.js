import { ContainerSB, Li, Input, DButton } from "../UI";
import Delete from "../assets/images/red-x-delete.png"

const ItemTodo = ({ task, deleteATask }) => {
  const { _id, title } = task;
  return (
    <ContainerSB>
      <Li><Input type="checkbox" name="vehicle2" value="Car" /> {title}</Li>
      <DButton onClick={()=> deleteATask(_id)}><img src={Delete} alt="Delete TODO"/></DButton>
    </ContainerSB>
  );
};

export default ItemTodo;
