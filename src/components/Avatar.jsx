import styles from './Avatar.module.css'

const Avatar = ({ src, hasBorder = false }) => {
  return (
    <img
      src={src}
      alt='Profile picture'
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}

export default Avatar
