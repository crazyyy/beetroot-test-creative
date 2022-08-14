<?php
/**
 * Class Admin_Login
 */
class Axio_Core_Admin_Login extends Axio_Core_Sub_Feature {

  public function setup() {

    // var: key
    $this->set('key', 'axio_core_admin_login');

    // var: name
    $this->set('name', 'Login logo title and link');

    // var: is_active
    $this->set('is_active', true);

  }

  /**
   * Run feature
   */
  public function run() {
    add_filter('login_headertext', array($this, 'axio_core_login_logo_url_title'));
    add_filter('login_headerurl', array($this, 'axio_core_login_logo_url'));
  }

  /**
   * Logo title
   *
   * @param string $title login header title
   *
   * @return string site name
   */
  public static function axio_core_login_logo_url_title($title) {
    return get_bloginfo('name');
  }

  /**
   * Logo link
   *
   * @param string $url the url for logo link
   *
   * @return string site url
   */
  public static function axio_core_login_logo_url($url) {
    return get_site_url();
  }

}
