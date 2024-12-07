import { WrapperWithStyles } from '@/utils/Interfaces'

function CardWrapper({ children, styles }: WrapperWithStyles) {
  return (
    <div
      style={{
        borderRadius: '2rem',
        boxShadow: '0 2px 18px 0 rgba(0, 0, 0, 0.3)',
        padding: '1.7rem',
        ...styles,
      }}
      className="relative bg-white min-w-[19rem] max-w-[19rem] xs:min-w-[21rem] xs:max-w-[21rem] sm:min-w-[23rem] sm:max-w-[23rem] md:min-w-[26rem] md:max-w-[26rem]"
    >
      {children}
    </div>
  )
}

export default CardWrapper
