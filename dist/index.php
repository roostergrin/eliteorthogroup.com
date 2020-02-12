<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en" role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
	    <!-- Global site tag (gtag.js) - Google Ads: 798900391 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-798900391"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-798900391');
    </script>
    <script>
      gtag('config', 'AW-798900391/1dohCMeahbYBEKeB-fwC', {
        'phone_conversion_number': '301.262.8500'
      });
    </script>

</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
	 <?php   if ( is_page(365) ) {
?>

	<!-- Event snippet for Form_Website conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-798900391/yw7BCPbw-rUBEKeB-fwC',
      'event_callback': callback
  });
  return false;
}
</script>

<!--- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '163867825031719');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1"
src="https://www.facebook.com/tr?id=163867825031719&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

<?php }
else {

}

?>


  <script type="text/javascript">
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
  <!-- Hotjar Tracking Code for http://eliteorthogroup.com -->
  <script>
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1354864,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script>
 
<!-- ZocDoc -->
<div style="position: fixed; bottom: 1em; right: 1em;"> 
  <a href=http://www.zocdoc.com/practice/elite-orthodontics-38681?lock=true&isNewPatient=true&referrerType=widget target="_target">
    <img src="//offsiteSchedule.zocdoc.com/images/remote/rb_BookAnAppt_White_214x74.png" style='border:0'>
  </a> 
</div>

</body>
</html>
