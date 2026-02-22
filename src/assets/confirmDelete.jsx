import { createConfirmation, confirmable } from 'react-confirm';
import DeleteContactModal from './ModalCustom';


const ConfirmableDeleteModal = confirmable(DeleteContactModal);

const confirmDelete = createConfirmation(ConfirmableDeleteModal);

export default confirmDelete;