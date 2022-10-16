function mypost(a) {
    for (var t = a.feed.entry || [], e = ['<!-- POST Start -->'], i = 0; i < t.length; ++i) {
        for (var l = t[i],

                r = l.title.$t,

                n = l.media$thumbnail ? l.media$thumbnail.url : "http://2.bp.blogspot.com/-4fCf53FqYKM/Vccsy7apoZI/AAAAAAAAK4o/XJkv3RkC0pw/s1600/default%2Bimage.png", s = n.replace("s72-c", "s" + 0 + "-c"), h = l.link || [], c = 0; c < h.length && "alternate" != h[c].rel; ++c);
        var d = h[c].href,

            m = '<div class="image"><a href="' + d + '"><img src="' + s + '" /><span class="info"><span class="ion ion-document-text"></span></span></a></div>',


            g = '' + m + '<div class="desc"><a href="' + d + '" title="' + r + '" class="name">' + r + '</a></div>';

        e.push('<div class="col col-d-12 col-t-12 col-m-12 border-line-h"><div class="box-item">', g, "</div></div>")
    }
    e.push("<!-- POST End -->"), document.write(e.join(""))
}
