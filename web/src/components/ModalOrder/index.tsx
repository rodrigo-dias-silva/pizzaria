import { OrderItemProps } from '@/src/pages/dashboard'
import { X } from '@phosphor-icons/react'
import Modal from 'react-modal'

type ModalOrderProps = {
  isOpen: boolean,
  onRequestClose: () => void,
  order: OrderItemProps[]
}

export default function ModalOrder({ isOpen, onRequestClose, order }: ModalOrderProps) {

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '30px',
      transform: 'translate(-50%,-50%)',
      backgroundColor: '#1d1d2e'
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <X size={40} color='#f34748' />
      </button>

      <div>
        <h2>Detalhes do pedido</h2>
        <span>Mesa:<strong>{order[0].order.table}</strong></span>

        {order.map(item => (
          <section
            key={item.id}
            className=''
          >
            <span>{item.amount} - <strong>{item.product.name}</strong></span>
            <span>{item.product.description}</span>
          </section>
        ))}
      </div>

    </Modal>
  )
}