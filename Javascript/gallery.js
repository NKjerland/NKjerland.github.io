function GalleryResize() {
  var frame = document.getElementsByTagName('galleryFrame');
  var collums = document.getElementsByClassName('galleryColumn');
  var imageContainer = document.getElementsByClassName('galleryImage');

  var viewportwidth;
  var viewportheight;

  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

  if (typeof window.innerWidth != 'undefined')
  {
       viewportwidth = window.innerWidth,
       viewportheight = window.innerHeight
  }

  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

  else if (typeof document.documentElement != 'undefined'
      && typeof document.documentElement.clientWidth !=
      'undefined' && document.documentElement.clientWidth != 0)
  {
        viewportwidth = document.documentElement.clientWidth,
        viewportheight = document.documentElement.clientHeight
  }

  // older versions of IE

  else
  {
        viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
        viewportheight = document.getElementsByTagName('body')[0].clientHeight
  }

  if (viewportwidth <= 640) {
    frame.display = "block";
    collums.width = "98%";
    imageContainer.height = "89vw";
  }
  else {
    frame.display = "inline-flex";
    collums.width = "29.3%";
    imageContainer.height = "18vw";
  }

}
