import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Music Events 2022</p>
      <Link href='/about'>About this Project</Link>
    </footer>
  )
}

export default Footer
