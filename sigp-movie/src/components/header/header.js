import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import GrainIcon from '@material-ui/icons/Grain'
import SearchIcon from '@material-ui/icons/Search'
import styles from './header.module.scss'

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <header className={styles.header}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            href="/"
            // onClick={handleClick}
            className={classes.link}
          >
            <SearchIcon className={classes.icon} />
            Query Page
          </Link>
          <Link
            color="inherit"
            href="/favorite"
            // onClick={handleClick}
            className={classes.link}
          >
            <WhatshotIcon className={classes.icon} />
            My favorite films
          </Link>
        </Breadcrumbs>
      </header>
    </>
  )
}
export default Header
