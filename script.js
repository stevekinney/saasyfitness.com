!(function(t, o) {
  function a(t) {
    return function() {
      return (
        sendgrid.push({ m: t, args: Array.prototype.slice.call(arguments) }),
        sendgrid
      );
    };
  }
  var sendgrid = (t.sendgrid = t.sendgrid || []);
  if (!sendgrid.initialize) {
    if (sendgrid.invoked)
      return void (
        t.console &&
        console.error &&
        console.error('sendgrid snippet included twice.')
      );
    sendgrid.invoked = !0;
    for (
      var c = [
          'trackSubmit',
          'trackClick',
          'trackLink',
          'trackForm',
          'pageview',
          'identify',
          'group',
          'track',
          'ready',
          'alias',
          'page',
          'once',
          'off',
          'on'
        ],
        i = 0;
      i < c.length;
      i++
    ) {
      var p = c[i];
      sendgrid[p] = a(p);
    }
    (sendgrid.load = function(id) {
      var t = o.createElement('script'),
        a = 'https:' === o.location.protocol ? 'https://' : 'http://';
      (t.type = 'text/javascript'),
        (t.async = !0),
        (t.src =
          a + 'js.labs.sendgrid.com/analytics/' + id + '/sendgrid.min.js');
      var c = o.getElementsByTagName('script')[0];
      c.parentNode.insertBefore(t, c);
    }),
      (sendgrid.SNIPPET_VERSION = '1.0.0'),
      sendgrid.load('f4b3f193-e1aa-43cb-a7f1-1f2c3f8d7258'),
      sendgrid.page();
  }
})(window, document);
