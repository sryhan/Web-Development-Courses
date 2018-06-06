<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'cSpBcbDc0V/EiDJGipV9kWevbPpnCUncYa5IIezmi6T5kAaFSU5D9ukUqp3y/0vHBYkvX1LxqHmpEnzQMslK2g==');
define('SECURE_AUTH_KEY',  'XNHdu1LaVqLCXm4iiKC87JKk2mqZ/TfZFp7/63sxyIFKn4j364Mvi7DMC1USCM4nz3neOsWRI4erezpdSGLxXg==');
define('LOGGED_IN_KEY',    'ZG3CgSm+wbxHP3ND1VgCDMx5G4HoiQctz0t3klo5wv9WMs9voF774Zn3yEmU/WML1oG39Ta760s/uX70PzQPCw==');
define('NONCE_KEY',        'JXTS+NL7tN1XmPasA1C+GZxC94MdljAUDA3+/pSAmUiMSkM2lhJ9hqMKG75v5Nm/hoPHoKTQNiHNRlcvCWhZuw==');
define('AUTH_SALT',        'JGIGB1JiOsjJmnQNNzP4UktaLJNPK7l7uO05f8xDyVAvGM1z0Mz1WaI5TJ3DnSav3xuzmU5NGBcVyNEL352+PQ==');
define('SECURE_AUTH_SALT', 'KahDAqRep2SPweowvSlZrTOn2tC1HY729areP2w6+xIPKl67pBKGfn/6OqDssS7qYrINL8v46SY7XBA4mdAdng==');
define('LOGGED_IN_SALT',   'SF/TBXQOY41pFXNNurhmcPkuvCxUQg9lBxuxlHaW3N0kHIYNftUfz9UWzYuYAINJ1UPUt+/76TRmcrKCw9Rj8w==');
define('NONCE_SALT',       'dQngim9hw6i/t69s65uCr/yQsMvjwW3HCNENQNJbJ/+2pRSLgR5YduLDoY1ygmcqdNRo2dcUrGQtukCGWtVrcQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';





/* Inserted by Local by Flywheel. See: http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy */
if ( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ) {
	$_SERVER['HTTPS'] = 'on';
}

/* Inserted by Local by Flywheel. Fixes $is_nginx global for rewrites. */
if ( ! empty( $_SERVER['SERVER_SOFTWARE'] ) && strpos( $_SERVER['SERVER_SOFTWARE'], 'Flywheel/' ) !== false ) {
	$_SERVER['SERVER_SOFTWARE'] = 'nginx/1.10.1';
}
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
