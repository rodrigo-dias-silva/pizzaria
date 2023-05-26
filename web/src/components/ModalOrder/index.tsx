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
        className='react-modal-close absolute right-4 top-4'
      >
        <X size={40} color='#f34748' />
      </button>

      <div className='max-sm:w-96 max-[500px]:w-80 w-[580px] mt-10 bg-dark-700 text-zinc-400'>
        <h2 className='my-4 text-2xl font-bold text-white'>Detalhes do pedido</h2>
        <span className='text-lg'>Mesa: <strong className='text-white'>{order[0].order.table}</strong></span>

        {order.map(item => (
          <section
            key={item.id}
            className='flex flex-col my-4'
          >
            <span className='text-white'>{item.amount} - <strong>{item.product.name}</strong></span>
            <span className='break-all'>{item.product.description}</span>
          </section>
        ))}

        <button
          className='mt-6 bg-dark-900 py-2 px-4 rounded text-green-theme font-semibold'
        >
          Concluir pedido
        </button>
      </div>

    </Modal>
  )
}