import DialogMUI from '@mui/material/Dialog';
import { useQueryParam, BooleanParam } from 'use-query-params';

const Dialog = () => {
    const [modal, setModal] = useQueryParam('modal', BooleanParam);

    const toggleModal = () => {
        setModal(prevState => !prevState || undefined)
    }

    return (
        <>
            <button onClick={toggleModal}>
                Open dialog
            </button>

            <DialogMUI open={modal} onClose={toggleModal}>
                Hello world
            </DialogMUI>
        </>
    )
}

export default Dialog;