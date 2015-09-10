'use strict';

var React = require('react');

var defaultTheme = require('./DefaultTheme.css');

var Menu = React.createClass({
  propTypes: {
    themeName: React.PropTypes.string,
    id: React.PropTypes.string
  },
  getDefaultProps: () => {
    return {
      themeName: 'default',
      id: '0',
      items: [{
        textContent: 'Home',
        href: '#home'
      }, {
        textContent: 'About ￬',
        href: '#',
        items: [{
          textContent: 'Who We Area',
          href: '#who-we-are'
        }, {
          textContent: 'Who We Area',
          href: '#who-we-are'
        }]
      }, {
        textContent: 'Portfolio ￬',
        href: '#',
        items: [{
          textContent: 'Photography',
          href: '#photography'
        }, {
          textContent: 'Web & User Interface Design',
          href: '#web-and-ui-design'
        }, {
          textContent: 'Illustration',
          href: '#illustration'
        }]
      }, {
        textContent: 'News',
        href: '#news'
      }, {
        textContent: 'Contact',
        href: '#contact'
      }]
    };
  },
  render: function() {
    var theme = defaultTheme,
    checkboxId = 'show-menu-' + this.props.id;
    return (
      <div className={theme.menuContainer}>
        <label htmlFor={ checkboxId } className={theme.showMenuButton}>Show Menu</label>
        <input type="checkbox" id={checkboxId} role="button" className={theme.showMenuCheckbox}/>
        <ul className={theme.menu}>
          {
            this.props.items.map((item) => {
              var subMenu;

              if (item.items && item.items.length > 0) {
                subMenu = (
                  <ul className={theme.subMenu}>
                    {
                      item.items.map((subItem) => {
                        return (<li>
                          <a href={subItem.href}>{subItem.textContent}</a>
                        </li>);
                      }) }
                    </ul>
                  );
                }

                return (
                  <li className={theme.menuItem}>
                    <a href={item.href}>{item.textContent}</a>
                    {subMenu}
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    }
  });

  module.exports = Menu;
