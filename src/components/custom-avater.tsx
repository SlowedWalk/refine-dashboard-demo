import { getNameInitials } from '@/utils/get-name-initials'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
  name?: string
}

const CustomAvater = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
      alt={'Hidetora Technology'}
      size={'small'}
      style={{
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style
      }}
      {...rest}
    >
      {getNameInitials(name || '')}
    </AntdAvatar>
  )
}

export default CustomAvater