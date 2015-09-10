var Menu = require('./Menu');
var React = require('react');

var menuItems = [{
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
}];

var Demo = React.createClass({
  render: function() {
    return (
      <div>
        <Menu items={menuItems} />
      </div>
    );
  }
});

module.exports = Demo;
