import { ContainerSB, Li, Input, DButton } from "../UI";
import Delete from "../assets/images/red-x-delete.png"

const ItemTodo = ({ task, deleteATask, updateATask }) => {
  const { _id, title, completed } = task;
  return (
    <ContainerSB>
      <Li><Input onChange={()=>updateATask(_id)} type="checkbox" checked={completed} /> {title}</Li>
      <DButton onClick={()=> deleteATask(_id)}><img src={Delete} alt="Delete TODO"/></DButton>
    </ContainerSB>
  );
};

export default ItemTodo;
