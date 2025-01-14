(function(k, m) {
    var g = "3.7.0";
    var d = k.html5 || {};
    var h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
    var c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
    var q;
    var i = "_html5shiv";
    var a = 0;
    var o = {};
    var e;
    (function() {
        try {
            var t = m.createElement("a");
            t.innerHTML = "<xyz></xyz>";
            q = ("hidden" in t);
            e = t.childNodes.length == 1 || (function() {
                (m.createElement)("a");
                var v = m.createDocumentFragment();
                return (typeof v.cloneNode == "undefined" || typeof v.createDocumentFragment == "undefined" || typeof v.createElement == "undefined") }()) } catch (u) { q = true;
            e = true } }());

    function f(t, v) {
        var w = t.createElement("p"),
            u = t.getElementsByTagName("head")[0] || t.documentElement;
        w.innerHTML = "x<style>" + v + "</style>";
        return u.insertBefore(w.lastChild, u.firstChild) }

    function l() {
        var t = j.elements;
        return typeof t == "string" ? t.split(" ") : t }

    function p(t) {
        var u = o[t[i]];
        if (!u) { u = {};
            a++;
            t[i] = a;
            o[a] = u }
        return u }

    function n(w, t, v) {
        if (!t) { t = m }
        if (e) {
            return t.createElement(w) }
        if (!v) { v = p(t) }
        var u;
        if (v.cache[w]) { u = v.cache[w].cloneNode() } else {
            if (c.test(w)) { u = (v.cache[w] = v.createElem(w)).cloneNode() } else { u = v.createElem(w) } }
        return u.canHaveChildren && !h.test(w) ? v.frag.appendChild(u) : u }

    function r(v, x) {
        if (!v) { v = m }
        if (e) {
            return v.createDocumentFragment() }
        x = x || p(v);
        var y = x.frag.cloneNode(),
            w = 0,
            u = l(),
            t = u.length;
        for (; w < t; w++) { y.createElement(u[w]) }
        return y }

    function s(t, u) {
        if (!u.cache) { u.cache = {};
            u.createElem = t.createElement;
            u.createFrag = t.createDocumentFragment;
            u.frag = u.createFrag() }
        t.createElement = function(v) {
            if (!j.shivMethods) {
                return u.createElem(v) }
            return n(v, t, u) };
        t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/[\w\-]+/g, function(v) { u.createElem(v);
            u.frag.createElement(v);
            return 'c("' + v + '")' }) + ");return n}")(j, u.frag) }

    function b(t) {
        if (!t) { t = m }
        var u = p(t);
        if (j.shivCSS && !q && !u.hasCSS) { u.hasCSS = !!f(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}") }
        if (!e) { s(t, u) }
        return t }
    var j = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: g, shivCSS: (d.shivCSS !== false), supportsUnknownElements: e, shivMethods: (d.shivMethods !== false), type: "default", shivDocument: b, createElement: n, createDocumentFragment: r };
    k.html5 = j;
    b(m) }(this, document));
