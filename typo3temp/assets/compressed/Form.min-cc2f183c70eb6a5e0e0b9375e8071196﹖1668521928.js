!(function () {
  "use strict";
  function e(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function n(e, n, i) {
    return (
      n && t(e.prototype, n),
      i && t(e, i),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function i(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function r(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return a(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return a(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function s(e, t) {
    return (function (e, t) {
      if (t.get) return t.get.call(e);
      return t.value;
    })(e, l(e, t, "get"));
  }
  function o(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError("attempted to set read only private field");
          t.value = n;
        }
      })(e, l(e, t, "set"), n),
      n
    );
  }
  function l(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        "attempted to " + n + " private field on non-instance"
      );
    return t.get(e);
  }
  function u(e, t, n) {
    if (!t.has(e))
      throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  function h(e, t) {
    if (t.has(e))
      throw new TypeError(
        "Cannot initialize the same private elements twice on an object"
      );
  }
  function c(e, t, n) {
    h(e, t), t.set(e, n);
  }
  function d(e, t) {
    h(e, t), t.add(e);
  }
  var f = (function () {
    function t() {
      e(this, t);
    }
    return (
      n(t, null, [
        {
          key: "getLargestFileSize",
          value: function (e) {
            for (var t = 0, n = 0; n < e.files.length; n++) {
              var i = e.files[n];
              i.size > t && (t = i.size);
            }
            return t;
          },
        },
        {
          key: "isFileExtensionInList",
          value: function (e, t) {
            return -1 !== t.indexOf("." + e);
          },
        },
        {
          key: "getExtensionFromFileName",
          value: function (e) {
            return e.split(".").pop().toLowerCase();
          },
        },
        {
          key: "getUriWithoutGetParam",
          value: function (e) {
            return e.split("?")[0];
          },
        },
        {
          key: "getRandomString",
          value: function (e) {
            for (
              var t = "",
                n =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                i = 0;
              i < e;
              i++
            )
              t += n.charAt(Math.floor(Math.random() * n.length));
            return t;
          },
        },
        {
          key: "redirectToUri",
          value: function (e) {
            -1 !== e.indexOf("http")
              ? (window.location = e)
              : (window.location.pathname = e);
          },
        },
        {
          key: "hideElement",
          value: function (e) {
            null !== e && (e.style.display = "none");
          },
        },
        {
          key: "showElement",
          value: function (e) {
            null !== e && (e.style.display = "block");
          },
        },
        {
          key: "isElementVisible",
          value: function (e) {
            return null !== e.offsetParent;
          },
        },
      ]),
      t
    );
  })();
  function m() {
    var e = "powermail_morestep",
      t = "btn-primary",
      n = this;
    (this.initialize = function () {
      a(), i();
    }),
      (this.showFieldset = function (t, n) {
        if (n.classList.contains(e)) {
          s(n);
          var i = u(n);
          f.showElement(i[t]), o(n);
        }
      });
    var i = function () {
        for (
          var t = document.querySelectorAll("form." + e), n = 0;
          n < t.length;
          n++
        )
          r(t[n]);
      },
      r = function (e) {
        n.showFieldset(0, e);
      },
      a = function () {
        for (
          var e = document.querySelectorAll("[data-powermail-morestep-show]"),
            t = 0;
          t < e.length;
          t++
        )
          e[t].addEventListener("click", function (e) {
            var t = e.target.getAttribute("data-powermail-morestep-show"),
              i = e.target.closest("form");
            n.showFieldset(t, i);
          });
      },
      s = function (e) {
        for (var t = u(e), n = 0; n < t.length; n++) f.hideElement(t[n]);
      },
      o = function (e) {
        for (
          var n = e.querySelectorAll("[data-powermail-morestep-current]"),
            i = l(e),
            r = 0;
          r < n.length;
          r++
        )
          n[r].classList.remove(t), r === i && n[r].classList.add(t);
      },
      l = function (e) {
        for (var t = u(e), n = 0; n < t.length; n++)
          if ("none" !== t[n].style.display) return n;
      },
      u = function (e) {
        return e.querySelectorAll(".powermail_fieldset");
      };
  }
  var _ = new WeakMap(),
    y = (function () {
      function t() {
        e(this, t),
          c(this, _, { writable: !0, value: "[data-powermail-validate]" });
      }
      return (
        n(t, [
          {
            key: "validate",
            value: function () {
              document.querySelectorAll(s(this, _)).forEach(function (e) {
                (e = new me(e)).validate();
              });
            },
          },
        ]),
        t
      );
    })(),
    p = new WeakMap(),
    w = new WeakMap(),
    g = new WeakMap(),
    v = new WeakMap(),
    k = new WeakMap(),
    S = new WeakMap(),
    b = new WeakMap(),
    M = new WeakMap(),
    D = new WeakMap(),
    Y = new WeakMap(),
    O = new WeakSet(),
    x = new WeakSet(),
    W = new WeakSet(),
    T = new WeakSet(),
    N = new WeakSet(),
    A = new WeakSet(),
    P = new WeakSet(),
    C = new WeakSet(),
    R = new WeakSet(),
    E = new WeakSet(),
    L = new WeakSet(),
    F = new WeakSet(),
    U = new WeakSet(),
    H = new WeakSet(),
    V = new WeakSet(),
    I = new WeakSet(),
    G = new WeakSet(),
    j = new WeakSet(),
    q = new WeakSet(),
    z = new WeakSet(),
    Z = new WeakSet(),
    $ = new WeakSet(),
    B = new WeakSet(),
    J = new WeakSet(),
    Q = new WeakSet(),
    X = new WeakSet(),
    K = new WeakSet(),
    ee = new WeakSet(),
    te = new WeakSet(),
    ne = new WeakSet(),
    ie = new WeakSet(),
    re = new WeakSet(),
    ae = new WeakSet(),
    se = new WeakSet(),
    oe = new WeakSet(),
    le = new WeakSet(),
    ue = new WeakSet(),
    he = new WeakSet(),
    ce = new WeakSet(),
    de = new WeakSet(),
    fe = new WeakSet(),
    me = (function () {
      function t(n) {
        var a = this;
        e(this, t),
          d(this, fe),
          d(this, de),
          d(this, ce),
          d(this, he),
          d(this, ue),
          d(this, le),
          d(this, oe),
          d(this, se),
          d(this, ae),
          d(this, re),
          d(this, ie),
          d(this, ne),
          d(this, te),
          d(this, ee),
          d(this, K),
          d(this, X),
          d(this, Q),
          d(this, J),
          d(this, B),
          d(this, $),
          d(this, Z),
          d(this, z),
          d(this, q),
          d(this, j),
          d(this, G),
          d(this, I),
          d(this, V),
          d(this, H),
          d(this, U),
          d(this, F),
          d(this, L),
          d(this, E),
          d(this, R),
          d(this, C),
          d(this, P),
          d(this, A),
          d(this, N),
          d(this, T),
          d(this, W),
          d(this, x),
          d(this, O),
          i(this, "use strict", void 0),
          c(this, p, { writable: !0, value: void 0 }),
          c(this, w, { writable: !0, value: !1 }),
          c(this, g, { writable: !0, value: {} }),
          c(this, v, { writable: !0, value: "powermail_form_error" }),
          c(this, k, { writable: !0, value: "powermail_fieldset_error" }),
          c(this, S, { writable: !0, value: "powermail_field_error" }),
          c(this, b, { writable: !0, value: "data-powermail-class-handler" }),
          c(this, M, { writable: !0, value: "powermail-errors-list" }),
          c(this, D, {
            writable: !0,
            value: {
              required: function (e) {
                return u(a, P, ke).call(a, e) && !1 === u(a, G, Ne).call(a, e);
              },
              email: function (e) {
                return u(a, C, Se).call(a, e) && !1 === u(a, j, Ae).call(a, e);
              },
              url: function (e) {
                return u(a, R, be).call(a, e) && !1 === u(a, q, Pe).call(a, e);
              },
              pattern: function (e) {
                return u(a, E, Me).call(a, e) && !1 === u(a, z, Ce).call(a, e);
              },
              number: function (e) {
                return u(a, L, De).call(a, e) && !1 === u(a, Z, Re).call(a, e);
              },
              minimum: function (e) {
                return u(a, F, Ye).call(a, e) && !1 === u(a, $, Ee).call(a, e);
              },
              maximum: function (e) {
                return u(a, U, Oe).call(a, e) && !1 === u(a, B, Le).call(a, e);
              },
              length: function (e) {
                return u(a, H, xe).call(a, e) && !1 === u(a, J, Fe).call(a, e);
              },
              equalto: function (e) {
                return u(a, V, We).call(a, e) && !1 === u(a, Q, Ue).call(a, e);
              },
              powermailfilesize: function (e) {
                return u(a, I, Te).call(a, e) && !1 === u(a, X, He).call(a, e);
              },
              powermailfileextensions: function (e) {
                return u(a, I, Te).call(a, e) && !1 === u(a, K, Ve).call(a, e);
              },
            },
          }),
          c(this, Y, {
            writable: !0,
            value: {
              openTabWithError: function () {
                var e = s(a, p).querySelector(".powermail_field_error");
                if (null !== e) {
                  var t = e.closest(".powermail_fieldset"),
                    n = r(
                      s(a, p).querySelectorAll(".powermail_fieldset")
                    ).indexOf(t);
                  new m().showFieldset(n, s(a, p));
                }
              },
              scrollToFirstError: function () {
                try {
                  s(a, p)
                    .querySelectorAll(".powermail_field_error")
                    .forEach(function (e) {
                      if (f.isElementVisible(e))
                        throw (
                          (e.scrollIntoView({ behavior: "smooth" }),
                          "StopException")
                        );
                    });
                } catch (e) {}
              },
            },
          }),
          o(this, p, n),
          (s(this, p).powermailFormValidation = this);
      }
      return (
        n(t, [
          {
            key: "validate",
            value: function () {
              u(this, O, _e).call(this), u(this, x, ye).call(this);
            },
          },
          {
            key: "addValidator",
            value: function (e, t) {
              s(this, D)[e] = t;
            },
          },
          {
            key: "addSubmitErrorCallback",
            value: function (e, t) {
              s(this, Y)[e] = t;
            },
          },
        ]),
        t
      );
    })();
  function _e() {
    var e = this;
    s(this, p).setAttribute("novalidate", "novalidate"),
      s(this, p).addEventListener("submit", function (t) {
        u(e, W, pe).call(e),
          !0 === u(e, he, Xe).call(e) &&
            (u(e, A, ve).call(e), t.preventDefault());
      });
  }
  function ye() {
    var e = this;
    u(this, le, Je)
      .call(this)
      .forEach(function (t) {
        t.addEventListener("input", function () {
          u(e, T, we).call(e, t);
        }),
          t.addEventListener("blur", function () {
            u(e, T, we).call(e, t);
          }),
          t.addEventListener("change", function () {
            u(e, T, we).call(e, t);
          });
      });
  }
  function pe() {
    for (var e = u(this, le, Je).call(this), t = 0; t < e.length; t++)
      u(this, T, we).call(this, e[t]);
  }
  function we(e) {
    var t = !1;
    for (var n in ((e = u(this, ue, Qe).call(this, e)), s(this, D)))
      !1 !== s(this, D).hasOwnProperty(n) &&
        (t = u(this, N, ge).call(this, n, s(this, D)[n], e, t));
    u(this, ce, Ke).call(this, e, t),
      u(this, de, et).call(this),
      u(this, fe, tt).call(this, e);
  }
  function ge(e, t, n, i) {
    return (
      !0 === i ||
        ((i = t(n))
          ? u(this, ee, Ie).call(this, e, n)
          : u(this, te, Ge).call(this, e, n)),
      i
    );
  }
  function ve() {
    for (var e in s(this, Y))
      !1 !== s(this, Y).hasOwnProperty(e) && s(this, Y)[e]();
  }
  function ke(e) {
    return (
      e.hasAttribute("required") ||
      "true" === e.getAttribute("data-powermail-required")
    );
  }
  function Se(e) {
    return (
      "email" === e.getAttribute("type") ||
      "email" === e.getAttribute("data-powermail-type")
    );
  }
  function be(e) {
    return (
      "url" === e.getAttribute("type") ||
      "url" === e.getAttribute("data-powermail-type")
    );
  }
  function Me(e) {
    return (
      e.hasAttribute("pattern") || e.hasAttribute("data-powermail-pattern")
    );
  }
  function De(e) {
    return (
      "number" === e.getAttribute("type") ||
      "integer" === e.getAttribute("data-powermail-type")
    );
  }
  function Ye(e) {
    return e.hasAttribute("min") || e.hasAttribute("data-powermail-min");
  }
  function Oe(e) {
    return e.hasAttribute("max") || e.hasAttribute("data-powermail-max");
  }
  function xe(e) {
    return e.hasAttribute("data-powermail-length");
  }
  function We(e) {
    return e.hasAttribute("data-powermail-equalto");
  }
  function Te(e) {
    return "file" === e.getAttribute("type");
  }
  function Ne(e) {
    return "" !== u(this, se, $e).call(this, e);
  }
  function Ae(e) {
    if ("" === e.value) return !0;
    return new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      ""
    ).test(u(this, se, $e).call(this, e));
  }
  function Pe(e) {
    if ("" === e.value) return !0;
    return new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      ""
    ).test(u(this, se, $e).call(this, e));
  }
  function Ce(e) {
    if ("" === e.value) return !0;
    var t =
      e.getAttribute("data-powermail-pattern") || e.getAttribute("pattern");
    return new RegExp(t, "").test(u(this, se, $e).call(this, e));
  }
  function Re(e) {
    return "" === e.value || !1 === isNaN(e.value);
  }
  function Ee(e) {
    if ("" === e.value) return !0;
    var t = e.getAttribute("min") || e.getAttribute("data-powermail-min");
    return parseInt(e.value) >= parseInt(t);
  }
  function Le(e) {
    if ("" === e.value) return !0;
    var t = e.getAttribute("max") || e.getAttribute("data-powermail-max");
    return parseInt(e.value) <= parseInt(t);
  }
  function Fe(e) {
    if ("" === e.value) return !0;
    var t = e
        .getAttribute("data-powermail-length")
        .replace("[", "")
        .replace("]", "")
        .split(","),
      n = t[0].trim(),
      i = t[1].trim();
    return (
      parseInt(e.value.length) >= parseInt(n) &&
      parseInt(e.value.length) <= parseInt(i)
    );
  }
  function Ue(e) {
    var t = e.getAttribute("data-powermail-equalto"),
      n = s(this, p).querySelector(t);
    return null !== n && n.value === e.value;
  }
  function He(e) {
    if ("" === e.value) return !0;
    var t = f.getLargestFileSize(e),
      n = e.getAttribute("data-powermail-powermailfilesize").split(",");
    return t <= parseInt(n[0]);
  }
  function Ve(e) {
    return (
      "" === e.value ||
      f.isFileExtensionInList(
        f.getExtensionFromFileName(e.value),
        e.getAttribute("accept")
      )
    );
  }
  function Ie(e, t) {
    u(this, te, Ge).call(this, e, t), u(this, ne, je).call(this, t);
    var n =
      t.getAttribute("data-powermail-" + e + "-message") ||
      t.getAttribute("data-powermail-error-message") ||
      "Validation error";
    u(this, re, ze).call(this, n, t);
  }
  function Ge(e, t) {
    u(this, ie, qe).call(this, t), u(this, ae, Ze).call(this, t);
  }
  function je(e) {
    if (e.getAttribute(s(this, b)))
      for (
        var t = document.querySelectorAll(e.getAttribute(s(this, b))), n = 0;
        n < t.length;
        n++
      )
        t[n].classList.add(s(this, S));
    else e.classList.add(s(this, S));
  }
  function qe(e) {
    if (e.getAttribute(s(this, b)))
      for (
        var t = document.querySelectorAll(e.getAttribute(s(this, b))), n = 0;
        n < t.length;
        n++
      )
        t[n].classList.remove(s(this, S));
    else e.classList.remove(s(this, S));
  }
  function ze(e, t) {
    var n = document.createElement("ul");
    n.classList.add(s(this, M)),
      n.classList.add("filled"),
      n.setAttribute("data-powermail-error", u(this, oe, Be).call(this, t));
    var i = document.createElement("li");
    n.appendChild(i);
    var r = document.createTextNode(e);
    if (
      (i.appendChild(r),
      null !== t.getAttribute("data-powermail-errors-container"))
    ) {
      var a = document.querySelector(
        t.getAttribute("data-powermail-errors-container")
      );
      null !== a && a.appendChild(n);
    } else t.parentNode.appendChild(n);
  }
  function Ze(e) {
    var t = document.querySelector(
      '[data-powermail-error="' + u(this, oe, Be).call(this, e) + '"]'
    );
    null !== t && t.remove();
  }
  function $e(e) {
    var t = e.value;
    if (
      "radio" === e.getAttribute("type") ||
      "checkbox" === e.getAttribute("type")
    ) {
      t = "";
      var n = e.getAttribute("name"),
        i = e.closest("form").querySelector('input[name="' + n + '"]:checked');
      null !== i && (t = i.value);
    }
    return t;
  }
  function Be(e) {
    return e.getAttribute("name").replace(/[^\w\s]/gi, "");
  }
  function Je() {
    return s(this, p).querySelectorAll(
      'input:not([data-powermail-validation="disabled"]):not([type="hidden"]):not([type="reset"]):not([type="submit"]), textarea:not([data-powermail-validation="disabled"]), select:not([data-powermail-validation="disabled"])'
    );
  }
  function Qe(e) {
    if (
      "radio" === e.getAttribute("type") ||
      "checkbox" === e.getAttribute("type")
    ) {
      var t = e.getAttribute("name"),
        n = e.closest("form");
      e = n.querySelectorAll('[name="' + t + '"]')[0];
    }
    return e;
  }
  function Xe() {
    return s(this, w);
  }
  function Ke(e, t) {
    s(this, g)[e.getAttribute("name")] = t;
  }
  function et() {
    var e = !1;
    for (var t in s(this, g))
      !1 !== s(this, g).hasOwnProperty(t) && !0 === s(this, g)[t] && (e = !0);
    o(this, w, e);
  }
  function tt(e) {
    var t = e.closest("fieldset.powermail_fieldset");
    u(this, he, Xe).call(this)
      ? (s(this, p).classList.add(s(this, v)),
        null !== t && t.classList.add(s(this, k)))
      : (s(this, p).classList.remove(s(this, v)),
        null !== t && t.classList.remove(s(this, k)));
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function nt(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var it,
    rt = { exports: {} };
  (it = rt).exports = (function () {
    var e, t;
    function n() {
      return e.apply(null, arguments);
    }
    function i(t) {
      e = t;
    }
    function r(e) {
      return (
        e instanceof Array ||
        "[object Array]" === Object.prototype.toString.call(e)
      );
    }
    function a(e) {
      return (
        null != e && "[object Object]" === Object.prototype.toString.call(e)
      );
    }
    function s(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function o(e) {
      if (Object.getOwnPropertyNames)
        return 0 === Object.getOwnPropertyNames(e).length;
      var t;
      for (t in e) if (s(e, t)) return !1;
      return !0;
    }
    function l(e) {
      return void 0 === e;
    }
    function u(e) {
      return (
        "number" == typeof e ||
        "[object Number]" === Object.prototype.toString.call(e)
      );
    }
    function h(e) {
      return (
        e instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(e)
      );
    }
    function c(e, t) {
      var n,
        i = [],
        r = e.length;
      for (n = 0; n < r; ++n) i.push(t(e[n], n));
      return i;
    }
    function d(e, t) {
      for (var n in t) s(t, n) && (e[n] = t[n]);
      return (
        s(t, "toString") && (e.toString = t.toString),
        s(t, "valueOf") && (e.valueOf = t.valueOf),
        e
      );
    }
    function f(e, t, n, i) {
      return Bn(e, t, n, i, !0).utc();
    }
    function m() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1,
      };
    }
    function _(e) {
      return null == e._pf && (e._pf = m()), e._pf;
    }
    function y(e) {
      if (null == e._isValid) {
        var n = _(e),
          i = t.call(n.parsedDateParts, function (e) {
            return null != e;
          }),
          r =
            !isNaN(e._d.getTime()) &&
            n.overflow < 0 &&
            !n.empty &&
            !n.invalidEra &&
            !n.invalidMonth &&
            !n.invalidWeekday &&
            !n.weekdayMismatch &&
            !n.nullInput &&
            !n.invalidFormat &&
            !n.userInvalidated &&
            (!n.meridiem || (n.meridiem && i));
        if (
          (e._strict &&
            (r =
              r &&
              0 === n.charsLeftOver &&
              0 === n.unusedTokens.length &&
              void 0 === n.bigHour),
          null != Object.isFrozen && Object.isFrozen(e))
        )
          return r;
        e._isValid = r;
      }
      return e._isValid;
    }
    function p(e) {
      var t = f(NaN);
      return null != e ? d(_(t), e) : (_(t).userInvalidated = !0), t;
    }
    t = Array.prototype.some
      ? Array.prototype.some
      : function (e) {
          var t,
            n = Object(this),
            i = n.length >>> 0;
          for (t = 0; t < i; t++)
            if (t in n && e.call(this, n[t], t, n)) return !0;
          return !1;
        };
    var w = (n.momentProperties = []),
      g = !1;
    function v(e, t) {
      var n,
        i,
        r,
        a = w.length;
      if (
        (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        l(t._i) || (e._i = t._i),
        l(t._f) || (e._f = t._f),
        l(t._l) || (e._l = t._l),
        l(t._strict) || (e._strict = t._strict),
        l(t._tzm) || (e._tzm = t._tzm),
        l(t._isUTC) || (e._isUTC = t._isUTC),
        l(t._offset) || (e._offset = t._offset),
        l(t._pf) || (e._pf = _(t)),
        l(t._locale) || (e._locale = t._locale),
        a > 0)
      )
        for (n = 0; n < a; n++) l((r = t[(i = w[n])])) || (e[i] = r);
      return e;
    }
    function k(e) {
      v(this, e),
        (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === g && ((g = !0), n.updateOffset(this), (g = !1));
    }
    function S(e) {
      return e instanceof k || (null != e && null != e._isAMomentObject);
    }
    function b(e) {
      !1 === n.suppressDeprecationWarnings &&
        "undefined" != typeof console &&
        console.warn &&
        console.warn("Deprecation warning: " + e);
    }
    function M(e, t) {
      var i = !0;
      return d(function () {
        if (
          (null != n.deprecationHandler && n.deprecationHandler(null, e), i)
        ) {
          var r,
            a,
            o,
            l = [],
            u = arguments.length;
          for (a = 0; a < u; a++) {
            if (((r = ""), "object" == typeof arguments[a])) {
              for (o in ((r += "\n[" + a + "] "), arguments[0]))
                s(arguments[0], o) && (r += o + ": " + arguments[0][o] + ", ");
              r = r.slice(0, -2);
            } else r = arguments[a];
            l.push(r);
          }
          b(
            e +
              "\nArguments: " +
              Array.prototype.slice.call(l).join("") +
              "\n" +
              new Error().stack
          ),
            (i = !1);
        }
        return t.apply(this, arguments);
      }, t);
    }
    var D,
      Y = {};
    function O(e, t) {
      null != n.deprecationHandler && n.deprecationHandler(e, t),
        Y[e] || (b(t), (Y[e] = !0));
    }
    function x(e) {
      return (
        ("undefined" != typeof Function && e instanceof Function) ||
        "[object Function]" === Object.prototype.toString.call(e)
      );
    }
    function W(e) {
      var t, n;
      for (n in e)
        s(e, n) && (x((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            "|" +
            /\d{1,2}/.source
        ));
    }
    function T(e, t) {
      var n,
        i = d({}, e);
      for (n in t)
        s(t, n) &&
          (a(e[n]) && a(t[n])
            ? ((i[n] = {}), d(i[n], e[n]), d(i[n], t[n]))
            : null != t[n]
            ? (i[n] = t[n])
            : delete i[n]);
      for (n in e) s(e, n) && !s(t, n) && a(e[n]) && (i[n] = d({}, i[n]));
      return i;
    }
    function N(e) {
      null != e && this.set(e);
    }
    (n.suppressDeprecationWarnings = !1),
      (n.deprecationHandler = null),
      (D = Object.keys
        ? Object.keys
        : function (e) {
            var t,
              n = [];
            for (t in e) s(e, t) && n.push(t);
            return n;
          });
    var A = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    };
    function P(e, t, n) {
      var i = this._calendar[e] || this._calendar.sameElse;
      return x(i) ? i.call(t, n) : i;
    }
    function C(e, t, n) {
      var i = "" + Math.abs(e),
        r = t - i.length;
      return (
        (e >= 0 ? (n ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, r)).toString().substr(1) +
        i
      );
    }
    var R =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      L = {},
      F = {};
    function U(e, t, n, i) {
      var r = i;
      "string" == typeof i &&
        (r = function () {
          return this[i]();
        }),
        e && (F[e] = r),
        t &&
          (F[t[0]] = function () {
            return C(r.apply(this, arguments), t[1], t[2]);
          }),
        n &&
          (F[n] = function () {
            return this.localeData().ordinal(r.apply(this, arguments), e);
          });
    }
    function H(e) {
      return e.match(/\[[\s\S]/)
        ? e.replace(/^\[|\]$/g, "")
        : e.replace(/\\/g, "");
    }
    function V(e) {
      var t,
        n,
        i = e.match(R);
      for (t = 0, n = i.length; t < n; t++)
        F[i[t]] ? (i[t] = F[i[t]]) : (i[t] = H(i[t]));
      return function (t) {
        var r,
          a = "";
        for (r = 0; r < n; r++) a += x(i[r]) ? i[r].call(t, e) : i[r];
        return a;
      };
    }
    function I(e, t) {
      return e.isValid()
        ? ((t = G(t, e.localeData())), (L[t] = L[t] || V(t)), L[t](e))
        : e.localeData().invalidDate();
    }
    function G(e, t) {
      var n = 5;
      function i(e) {
        return t.longDateFormat(e) || e;
      }
      for (E.lastIndex = 0; n >= 0 && E.test(e); )
        (e = e.replace(E, i)), (E.lastIndex = 0), (n -= 1);
      return e;
    }
    var j = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    };
    function q(e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n
            .match(R)
            .map(function (e) {
              return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                ? e.slice(1)
                : e;
            })
            .join("")),
          this._longDateFormat[e]);
    }
    var z = "Invalid date";
    function Z() {
      return this._invalidDate;
    }
    var $ = "%d",
      B = /\d{1,2}/;
    function J(e) {
      return this._ordinal.replace("%d", e);
    }
    var Q = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    };
    function X(e, t, n, i) {
      var r = this._relativeTime[n];
      return x(r) ? r(e, t, n, i) : r.replace(/%d/i, e);
    }
    function K(e, t) {
      var n = this._relativeTime[e > 0 ? "future" : "past"];
      return x(n) ? n(t) : n.replace(/%s/i, t);
    }
    var ee = {};
    function te(e, t) {
      var n = e.toLowerCase();
      ee[n] = ee[n + "s"] = ee[t] = e;
    }
    function ne(e) {
      return "string" == typeof e ? ee[e] || ee[e.toLowerCase()] : void 0;
    }
    function ie(e) {
      var t,
        n,
        i = {};
      for (n in e) s(e, n) && (t = ne(n)) && (i[t] = e[n]);
      return i;
    }
    var re = {};
    function ae(e, t) {
      re[e] = t;
    }
    function se(e) {
      var t,
        n = [];
      for (t in e) s(e, t) && n.push({ unit: t, priority: re[t] });
      return (
        n.sort(function (e, t) {
          return e.priority - t.priority;
        }),
        n
      );
    }
    function oe(e) {
      return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }
    function le(e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function ue(e) {
      var t = +e,
        n = 0;
      return 0 !== t && isFinite(t) && (n = le(t)), n;
    }
    function he(e, t) {
      return function (i) {
        return null != i
          ? (de(this, e, i), n.updateOffset(this, t), this)
          : ce(this, e);
      };
    }
    function ce(e, t) {
      return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
    }
    function de(e, t, n) {
      e.isValid() &&
        !isNaN(n) &&
        ("FullYear" === t && oe(e.year()) && 1 === e.month() && 29 === e.date()
          ? ((n = ue(n)),
            e._d["set" + (e._isUTC ? "UTC" : "") + t](
              n,
              e.month(),
              Xe(n, e.month())
            ))
          : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
    }
    function fe(e) {
      return x(this[(e = ne(e))]) ? this[e]() : this;
    }
    function me(e, t) {
      if ("object" == typeof e) {
        var n,
          i = se((e = ie(e))),
          r = i.length;
        for (n = 0; n < r; n++) this[i[n].unit](e[i[n].unit]);
      } else if (x(this[(e = ne(e))])) return this[e](t);
      return this;
    }
    var _e,
      ye = /\d/,
      pe = /\d\d/,
      we = /\d{3}/,
      ge = /\d{4}/,
      ve = /[+-]?\d{6}/,
      ke = /\d\d?/,
      Se = /\d\d\d\d?/,
      be = /\d\d\d\d\d\d?/,
      Me = /\d{1,3}/,
      De = /\d{1,4}/,
      Ye = /[+-]?\d{1,6}/,
      Oe = /\d+/,
      xe = /[+-]?\d+/,
      We = /Z|[+-]\d\d:?\d\d/gi,
      Te = /Z|[+-]\d\d(?::?\d\d)?/gi,
      Ne = /[+-]?\d+(\.\d{1,3})?/,
      Ae =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    function Pe(e, t, n) {
      _e[e] = x(t)
        ? t
        : function (e, i) {
            return e && n ? n : t;
          };
    }
    function Ce(e, t) {
      return s(_e, e) ? _e[e](t._strict, t._locale) : new RegExp(Re(e));
    }
    function Re(e) {
      return Ee(
        e
          .replace("\\", "")
          .replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function (e, t, n, i, r) {
              return t || n || i || r;
            }
          )
      );
    }
    function Ee(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    _e = {};
    var Le = {};
    function Fe(e, t) {
      var n,
        i,
        r = t;
      for (
        "string" == typeof e && (e = [e]),
          u(t) &&
            (r = function (e, n) {
              n[t] = ue(e);
            }),
          i = e.length,
          n = 0;
        n < i;
        n++
      )
        Le[e[n]] = r;
    }
    function Ue(e, t) {
      Fe(e, function (e, n, i, r) {
        (i._w = i._w || {}), t(e, i._w, i, r);
      });
    }
    function He(e, t, n) {
      null != t && s(Le, e) && Le[e](t, n._a, n, e);
    }
    var Ve,
      Ie = 0,
      Ge = 1,
      je = 2,
      qe = 3,
      ze = 4,
      Ze = 5,
      $e = 6,
      Be = 7,
      Je = 8;
    function Qe(e, t) {
      return ((e % t) + t) % t;
    }
    function Xe(e, t) {
      if (isNaN(e) || isNaN(t)) return NaN;
      var n = Qe(t, 12);
      return (
        (e += (t - n) / 12), 1 === n ? (oe(e) ? 29 : 28) : 31 - ((n % 7) % 2)
      );
    }
    (Ve = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (e) {
          var t;
          for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1;
        }),
      U("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
      }),
      U("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e);
      }),
      U("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e);
      }),
      te("month", "M"),
      ae("month", 8),
      Pe("M", ke),
      Pe("MM", ke, pe),
      Pe("MMM", function (e, t) {
        return t.monthsShortRegex(e);
      }),
      Pe("MMMM", function (e, t) {
        return t.monthsRegex(e);
      }),
      Fe(["M", "MM"], function (e, t) {
        t[Ge] = ue(e) - 1;
      }),
      Fe(["MMM", "MMMM"], function (e, t, n, i) {
        var r = n._locale.monthsParse(e, i, n._strict);
        null != r ? (t[Ge] = r) : (_(n).invalidMonth = e);
      });
    var Ke =
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      et = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      tt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      rt = Ae,
      at = Ae;
    function st(e, t) {
      return e
        ? r(this._months)
          ? this._months[e.month()]
          : this._months[
              (this._months.isFormat || tt).test(t) ? "format" : "standalone"
            ][e.month()]
        : r(this._months)
        ? this._months
        : this._months.standalone;
    }
    function ot(e, t) {
      return e
        ? r(this._monthsShort)
          ? this._monthsShort[e.month()]
          : this._monthsShort[tt.test(t) ? "format" : "standalone"][e.month()]
        : r(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }
    function lt(e, t, n) {
      var i,
        r,
        a,
        s = e.toLocaleLowerCase();
      if (!this._monthsParse)
        for (
          this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            i = 0;
          i < 12;
          ++i
        )
          (a = f([2e3, i])),
            (this._shortMonthsParse[i] = this.monthsShort(
              a,
              ""
            ).toLocaleLowerCase()),
            (this._longMonthsParse[i] = this.months(a, "").toLocaleLowerCase());
      return n
        ? "MMM" === t
          ? -1 !== (r = Ve.call(this._shortMonthsParse, s))
            ? r
            : null
          : -1 !== (r = Ve.call(this._longMonthsParse, s))
          ? r
          : null
        : "MMM" === t
        ? -1 !== (r = Ve.call(this._shortMonthsParse, s)) ||
          -1 !== (r = Ve.call(this._longMonthsParse, s))
          ? r
          : null
        : -1 !== (r = Ve.call(this._longMonthsParse, s)) ||
          -1 !== (r = Ve.call(this._shortMonthsParse, s))
        ? r
        : null;
    }
    function ut(e, t, n) {
      var i, r, a;
      if (this._monthsParseExact) return lt.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          i = 0;
        i < 12;
        i++
      ) {
        if (
          ((r = f([2e3, i])),
          n &&
            !this._longMonthsParse[i] &&
            ((this._longMonthsParse[i] = new RegExp(
              "^" + this.months(r, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[i] = new RegExp(
              "^" + this.monthsShort(r, "").replace(".", "") + "$",
              "i"
            ))),
          n ||
            this._monthsParse[i] ||
            ((a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
            (this._monthsParse[i] = new RegExp(a.replace(".", ""), "i"))),
          n && "MMMM" === t && this._longMonthsParse[i].test(e))
        )
          return i;
        if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
        if (!n && this._monthsParse[i].test(e)) return i;
      }
    }
    function ht(e, t) {
      var n;
      if (!e.isValid()) return e;
      if ("string" == typeof t)
        if (/^\d+$/.test(t)) t = ue(t);
        else if (!u((t = e.localeData().monthsParse(t)))) return e;
      return (
        (n = Math.min(e.date(), Xe(e.year(), t))),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
      );
    }
    function ct(e) {
      return null != e
        ? (ht(this, e), n.updateOffset(this, !0), this)
        : ce(this, "Month");
    }
    function dt() {
      return Xe(this.year(), this.month());
    }
    function ft(e) {
      return this._monthsParseExact
        ? (s(this, "_monthsRegex") || _t.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = rt),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }
    function mt(e) {
      return this._monthsParseExact
        ? (s(this, "_monthsRegex") || _t.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (s(this, "_monthsRegex") || (this._monthsRegex = at),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }
    function _t() {
      function e(e, t) {
        return t.length - e.length;
      }
      var t,
        n,
        i = [],
        r = [],
        a = [];
      for (t = 0; t < 12; t++)
        (n = f([2e3, t])),
          i.push(this.monthsShort(n, "")),
          r.push(this.months(n, "")),
          a.push(this.months(n, "")),
          a.push(this.monthsShort(n, ""));
      for (i.sort(e), r.sort(e), a.sort(e), t = 0; t < 12; t++)
        (i[t] = Ee(i[t])), (r[t] = Ee(r[t]));
      for (t = 0; t < 24; t++) a[t] = Ee(a[t]);
      (this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
        (this._monthsShortStrictRegex = new RegExp(
          "^(" + i.join("|") + ")",
          "i"
        ));
    }
    function yt(e) {
      return oe(e) ? 366 : 365;
    }
    U("Y", 0, 0, function () {
      var e = this.year();
      return e <= 9999 ? C(e, 4) : "+" + e;
    }),
      U(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }),
      U(0, ["YYYY", 4], 0, "year"),
      U(0, ["YYYYY", 5], 0, "year"),
      U(0, ["YYYYYY", 6, !0], 0, "year"),
      te("year", "y"),
      ae("year", 1),
      Pe("Y", xe),
      Pe("YY", ke, pe),
      Pe("YYYY", De, ge),
      Pe("YYYYY", Ye, ve),
      Pe("YYYYYY", Ye, ve),
      Fe(["YYYYY", "YYYYYY"], Ie),
      Fe("YYYY", function (e, t) {
        t[Ie] = 2 === e.length ? n.parseTwoDigitYear(e) : ue(e);
      }),
      Fe("YY", function (e, t) {
        t[Ie] = n.parseTwoDigitYear(e);
      }),
      Fe("Y", function (e, t) {
        t[Ie] = parseInt(e, 10);
      }),
      (n.parseTwoDigitYear = function (e) {
        return ue(e) + (ue(e) > 68 ? 1900 : 2e3);
      });
    var pt = he("FullYear", !0);
    function wt() {
      return oe(this.year());
    }
    function gt(e, t, n, i, r, a, s) {
      var o;
      return (
        e < 100 && e >= 0
          ? ((o = new Date(e + 400, t, n, i, r, a, s)),
            isFinite(o.getFullYear()) && o.setFullYear(e))
          : (o = new Date(e, t, n, i, r, a, s)),
        o
      );
    }
    function vt(e) {
      var t, n;
      return (
        e < 100 && e >= 0
          ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
            (t = new Date(Date.UTC.apply(null, n))),
            isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
          : (t = new Date(Date.UTC.apply(null, arguments))),
        t
      );
    }
    function kt(e, t, n) {
      var i = 7 + t - n;
      return (-(7 + vt(e, 0, i).getUTCDay() - t) % 7) + i - 1;
    }
    function St(e, t, n, i, r) {
      var a,
        s,
        o = 1 + 7 * (t - 1) + ((7 + n - i) % 7) + kt(e, i, r);
      return (
        o <= 0
          ? (s = yt((a = e - 1)) + o)
          : o > yt(e)
          ? ((a = e + 1), (s = o - yt(e)))
          : ((a = e), (s = o)),
        { year: a, dayOfYear: s }
      );
    }
    function bt(e, t, n) {
      var i,
        r,
        a = kt(e.year(), t, n),
        s = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
      return (
        s < 1
          ? (i = s + Mt((r = e.year() - 1), t, n))
          : s > Mt(e.year(), t, n)
          ? ((i = s - Mt(e.year(), t, n)), (r = e.year() + 1))
          : ((r = e.year()), (i = s)),
        { week: i, year: r }
      );
    }
    function Mt(e, t, n) {
      var i = kt(e, t, n),
        r = kt(e + 1, t, n);
      return (yt(e) - i + r) / 7;
    }
    function Dt(e) {
      return bt(e, this._week.dow, this._week.doy).week;
    }
    U("w", ["ww", 2], "wo", "week"),
      U("W", ["WW", 2], "Wo", "isoWeek"),
      te("week", "w"),
      te("isoWeek", "W"),
      ae("week", 5),
      ae("isoWeek", 5),
      Pe("w", ke),
      Pe("ww", ke, pe),
      Pe("W", ke),
      Pe("WW", ke, pe),
      Ue(["w", "ww", "W", "WW"], function (e, t, n, i) {
        t[i.substr(0, 1)] = ue(e);
      });
    var Yt = { dow: 0, doy: 6 };
    function Ot() {
      return this._week.dow;
    }
    function xt() {
      return this._week.doy;
    }
    function Wt(e) {
      var t = this.localeData().week(this);
      return null == e ? t : this.add(7 * (e - t), "d");
    }
    function Tt(e) {
      var t = bt(this, 1, 4).week;
      return null == e ? t : this.add(7 * (e - t), "d");
    }
    function Nt(e, t) {
      return "string" != typeof e
        ? e
        : isNaN(e)
        ? "number" == typeof (e = t.weekdaysParse(e))
          ? e
          : null
        : parseInt(e, 10);
    }
    function At(e, t) {
      return "string" == typeof e
        ? t.weekdaysParse(e) % 7 || 7
        : isNaN(e)
        ? null
        : e;
    }
    function Pt(e, t) {
      return e.slice(t, 7).concat(e.slice(0, t));
    }
    U("d", 0, "do", "day"),
      U("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e);
      }),
      U("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e);
      }),
      U("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e);
      }),
      U("e", 0, 0, "weekday"),
      U("E", 0, 0, "isoWeekday"),
      te("day", "d"),
      te("weekday", "e"),
      te("isoWeekday", "E"),
      ae("day", 11),
      ae("weekday", 11),
      ae("isoWeekday", 11),
      Pe("d", ke),
      Pe("e", ke),
      Pe("E", ke),
      Pe("dd", function (e, t) {
        return t.weekdaysMinRegex(e);
      }),
      Pe("ddd", function (e, t) {
        return t.weekdaysShortRegex(e);
      }),
      Pe("dddd", function (e, t) {
        return t.weekdaysRegex(e);
      }),
      Ue(["dd", "ddd", "dddd"], function (e, t, n, i) {
        var r = n._locale.weekdaysParse(e, i, n._strict);
        null != r ? (t.d = r) : (_(n).invalidWeekday = e);
      }),
      Ue(["d", "e", "E"], function (e, t, n, i) {
        t[i] = ue(e);
      });
    var Ct = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      Rt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Et = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      Lt = Ae,
      Ft = Ae,
      Ut = Ae;
    function Ht(e, t) {
      var n = r(this._weekdays)
        ? this._weekdays
        : this._weekdays[
            e && !0 !== e && this._weekdays.isFormat.test(t)
              ? "format"
              : "standalone"
          ];
      return !0 === e ? Pt(n, this._week.dow) : e ? n[e.day()] : n;
    }
    function Vt(e) {
      return !0 === e
        ? Pt(this._weekdaysShort, this._week.dow)
        : e
        ? this._weekdaysShort[e.day()]
        : this._weekdaysShort;
    }
    function It(e) {
      return !0 === e
        ? Pt(this._weekdaysMin, this._week.dow)
        : e
        ? this._weekdaysMin[e.day()]
        : this._weekdaysMin;
    }
    function Gt(e, t, n) {
      var i,
        r,
        a,
        s = e.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (
          this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            i = 0;
          i < 7;
          ++i
        )
          (a = f([2e3, 1]).day(i)),
            (this._minWeekdaysParse[i] = this.weekdaysMin(
              a,
              ""
            ).toLocaleLowerCase()),
            (this._shortWeekdaysParse[i] = this.weekdaysShort(
              a,
              ""
            ).toLocaleLowerCase()),
            (this._weekdaysParse[i] = this.weekdays(a, "").toLocaleLowerCase());
      return n
        ? "dddd" === t
          ? -1 !== (r = Ve.call(this._weekdaysParse, s))
            ? r
            : null
          : "ddd" === t
          ? -1 !== (r = Ve.call(this._shortWeekdaysParse, s))
            ? r
            : null
          : -1 !== (r = Ve.call(this._minWeekdaysParse, s))
          ? r
          : null
        : "dddd" === t
        ? -1 !== (r = Ve.call(this._weekdaysParse, s)) ||
          -1 !== (r = Ve.call(this._shortWeekdaysParse, s)) ||
          -1 !== (r = Ve.call(this._minWeekdaysParse, s))
          ? r
          : null
        : "ddd" === t
        ? -1 !== (r = Ve.call(this._shortWeekdaysParse, s)) ||
          -1 !== (r = Ve.call(this._weekdaysParse, s)) ||
          -1 !== (r = Ve.call(this._minWeekdaysParse, s))
          ? r
          : null
        : -1 !== (r = Ve.call(this._minWeekdaysParse, s)) ||
          -1 !== (r = Ve.call(this._weekdaysParse, s)) ||
          -1 !== (r = Ve.call(this._shortWeekdaysParse, s))
        ? r
        : null;
    }
    function jt(e, t, n) {
      var i, r, a;
      if (this._weekdaysParseExact) return Gt.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          i = 0;
        i < 7;
        i++
      ) {
        if (
          ((r = f([2e3, 1]).day(i)),
          n &&
            !this._fullWeekdaysParse[i] &&
            ((this._fullWeekdaysParse[i] = new RegExp(
              "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
              "i"
            ))),
          this._weekdaysParse[i] ||
            ((a =
              "^" +
              this.weekdays(r, "") +
              "|^" +
              this.weekdaysShort(r, "") +
              "|^" +
              this.weekdaysMin(r, "")),
            (this._weekdaysParse[i] = new RegExp(a.replace(".", ""), "i"))),
          n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
        )
          return i;
        if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
        if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
        if (!n && this._weekdaysParse[i].test(e)) return i;
      }
    }
    function qt(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != e
        ? ((e = Nt(e, this.localeData())), this.add(e - t, "d"))
        : t;
    }
    function zt(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, "d");
    }
    function Zt(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        var t = At(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7);
      }
      return this.day() || 7;
    }
    function $t(e) {
      return this._weekdaysParseExact
        ? (s(this, "_weekdaysRegex") || Qt.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Lt),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }
    function Bt(e) {
      return this._weekdaysParseExact
        ? (s(this, "_weekdaysRegex") || Qt.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ft),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }
    function Jt(e) {
      return this._weekdaysParseExact
        ? (s(this, "_weekdaysRegex") || Qt.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ut),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }
    function Qt() {
      function e(e, t) {
        return t.length - e.length;
      }
      var t,
        n,
        i,
        r,
        a,
        s = [],
        o = [],
        l = [],
        u = [];
      for (t = 0; t < 7; t++)
        (n = f([2e3, 1]).day(t)),
          (i = Ee(this.weekdaysMin(n, ""))),
          (r = Ee(this.weekdaysShort(n, ""))),
          (a = Ee(this.weekdays(n, ""))),
          s.push(i),
          o.push(r),
          l.push(a),
          u.push(i),
          u.push(r),
          u.push(a);
      s.sort(e),
        o.sort(e),
        l.sort(e),
        u.sort(e),
        (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i")),
        (this._weekdaysShortStrictRegex = new RegExp(
          "^(" + o.join("|") + ")",
          "i"
        )),
        (this._weekdaysMinStrictRegex = new RegExp(
          "^(" + s.join("|") + ")",
          "i"
        ));
    }
    function Xt() {
      return this.hours() % 12 || 12;
    }
    function Kt() {
      return this.hours() || 24;
    }
    function en(e, t) {
      U(e, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), t);
      });
    }
    function tn(e, t) {
      return t._meridiemParse;
    }
    function nn(e) {
      return "p" === (e + "").toLowerCase().charAt(0);
    }
    U("H", ["HH", 2], 0, "hour"),
      U("h", ["hh", 2], 0, Xt),
      U("k", ["kk", 2], 0, Kt),
      U("hmm", 0, 0, function () {
        return "" + Xt.apply(this) + C(this.minutes(), 2);
      }),
      U("hmmss", 0, 0, function () {
        return (
          "" + Xt.apply(this) + C(this.minutes(), 2) + C(this.seconds(), 2)
        );
      }),
      U("Hmm", 0, 0, function () {
        return "" + this.hours() + C(this.minutes(), 2);
      }),
      U("Hmmss", 0, 0, function () {
        return "" + this.hours() + C(this.minutes(), 2) + C(this.seconds(), 2);
      }),
      en("a", !0),
      en("A", !1),
      te("hour", "h"),
      ae("hour", 13),
      Pe("a", tn),
      Pe("A", tn),
      Pe("H", ke),
      Pe("h", ke),
      Pe("k", ke),
      Pe("HH", ke, pe),
      Pe("hh", ke, pe),
      Pe("kk", ke, pe),
      Pe("hmm", Se),
      Pe("hmmss", be),
      Pe("Hmm", Se),
      Pe("Hmmss", be),
      Fe(["H", "HH"], qe),
      Fe(["k", "kk"], function (e, t, n) {
        var i = ue(e);
        t[qe] = 24 === i ? 0 : i;
      }),
      Fe(["a", "A"], function (e, t, n) {
        (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
      }),
      Fe(["h", "hh"], function (e, t, n) {
        (t[qe] = ue(e)), (_(n).bigHour = !0);
      }),
      Fe("hmm", function (e, t, n) {
        var i = e.length - 2;
        (t[qe] = ue(e.substr(0, i))),
          (t[ze] = ue(e.substr(i))),
          (_(n).bigHour = !0);
      }),
      Fe("hmmss", function (e, t, n) {
        var i = e.length - 4,
          r = e.length - 2;
        (t[qe] = ue(e.substr(0, i))),
          (t[ze] = ue(e.substr(i, 2))),
          (t[Ze] = ue(e.substr(r))),
          (_(n).bigHour = !0);
      }),
      Fe("Hmm", function (e, t, n) {
        var i = e.length - 2;
        (t[qe] = ue(e.substr(0, i))), (t[ze] = ue(e.substr(i)));
      }),
      Fe("Hmmss", function (e, t, n) {
        var i = e.length - 4,
          r = e.length - 2;
        (t[qe] = ue(e.substr(0, i))),
          (t[ze] = ue(e.substr(i, 2))),
          (t[Ze] = ue(e.substr(r)));
      });
    var rn = /[ap]\.?m?\.?/i,
      an = he("Hours", !0);
    function sn(e, t, n) {
      return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }
    var on,
      ln = {
        calendar: A,
        longDateFormat: j,
        invalidDate: z,
        ordinal: $,
        dayOfMonthOrdinalParse: B,
        relativeTime: Q,
        months: Ke,
        monthsShort: et,
        week: Yt,
        weekdays: Ct,
        weekdaysMin: Et,
        weekdaysShort: Rt,
        meridiemParse: rn,
      },
      un = {},
      hn = {};
    function cn(e, t) {
      var n,
        i = Math.min(e.length, t.length);
      for (n = 0; n < i; n += 1) if (e[n] !== t[n]) return n;
      return i;
    }
    function dn(e) {
      return e ? e.toLowerCase().replace("_", "-") : e;
    }
    function fn(e) {
      for (var t, n, i, r, a = 0; a < e.length; ) {
        for (
          t = (r = dn(e[a]).split("-")).length,
            n = (n = dn(e[a + 1])) ? n.split("-") : null;
          t > 0;

        ) {
          if ((i = _n(r.slice(0, t).join("-")))) return i;
          if (n && n.length >= t && cn(r, n) >= t - 1) break;
          t--;
        }
        a++;
      }
      return on;
    }
    function mn(e) {
      return null != e.match("^[^/\\\\]*$");
    }
    function _n(e) {
      var t = null;
      if (void 0 === un[e] && it && it.exports && mn(e))
        try {
          (t = on._abbr), nt("./locale/" + e), yn(t);
        } catch (t) {
          un[e] = null;
        }
      return un[e];
    }
    function yn(e, t) {
      var n;
      return (
        e &&
          ((n = l(t) ? gn(e) : pn(e, t))
            ? (on = n)
            : "undefined" != typeof console &&
              console.warn &&
              console.warn(
                "Locale " + e + " not found. Did you forget to load it?"
              )),
        on._abbr
      );
    }
    function pn(e, t) {
      if (null !== t) {
        var n,
          i = ln;
        if (((t.abbr = e), null != un[e]))
          O(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          ),
            (i = un[e]._config);
        else if (null != t.parentLocale)
          if (null != un[t.parentLocale]) i = un[t.parentLocale]._config;
          else {
            if (null == (n = _n(t.parentLocale)))
              return (
                hn[t.parentLocale] || (hn[t.parentLocale] = []),
                hn[t.parentLocale].push({ name: e, config: t }),
                null
              );
            i = n._config;
          }
        return (
          (un[e] = new N(T(i, t))),
          hn[e] &&
            hn[e].forEach(function (e) {
              pn(e.name, e.config);
            }),
          yn(e),
          un[e]
        );
      }
      return delete un[e], null;
    }
    function wn(e, t) {
      if (null != t) {
        var n,
          i,
          r = ln;
        null != un[e] && null != un[e].parentLocale
          ? un[e].set(T(un[e]._config, t))
          : (null != (i = _n(e)) && (r = i._config),
            (t = T(r, t)),
            null == i && (t.abbr = e),
            ((n = new N(t)).parentLocale = un[e]),
            (un[e] = n)),
          yn(e);
      } else
        null != un[e] &&
          (null != un[e].parentLocale
            ? ((un[e] = un[e].parentLocale), e === yn() && yn(e))
            : null != un[e] && delete un[e]);
      return un[e];
    }
    function gn(e) {
      var t;
      if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
        return on;
      if (!r(e)) {
        if ((t = _n(e))) return t;
        e = [e];
      }
      return fn(e);
    }
    function vn() {
      return D(un);
    }
    function kn(e) {
      var t,
        n = e._a;
      return (
        n &&
          -2 === _(e).overflow &&
          ((t =
            n[Ge] < 0 || n[Ge] > 11
              ? Ge
              : n[je] < 1 || n[je] > Xe(n[Ie], n[Ge])
              ? je
              : n[qe] < 0 ||
                n[qe] > 24 ||
                (24 === n[qe] && (0 !== n[ze] || 0 !== n[Ze] || 0 !== n[$e]))
              ? qe
              : n[ze] < 0 || n[ze] > 59
              ? ze
              : n[Ze] < 0 || n[Ze] > 59
              ? Ze
              : n[$e] < 0 || n[$e] > 999
              ? $e
              : -1),
          _(e)._overflowDayOfYear && (t < Ie || t > je) && (t = je),
          _(e)._overflowWeeks && -1 === t && (t = Be),
          _(e)._overflowWeekday && -1 === t && (t = Je),
          (_(e).overflow = t)),
        e
      );
    }
    var Sn =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      bn =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Mn = /Z|[+-]\d\d(?::?\d\d)?/,
      Dn = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1],
      ],
      Yn = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      On = /^\/?Date\((-?\d+)/i,
      xn =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      Wn = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
    function Tn(e) {
      var t,
        n,
        i,
        r,
        a,
        s,
        o = e._i,
        l = Sn.exec(o) || bn.exec(o),
        u = Dn.length,
        h = Yn.length;
      if (l) {
        for (_(e).iso = !0, t = 0, n = u; t < n; t++)
          if (Dn[t][1].exec(l[1])) {
            (r = Dn[t][0]), (i = !1 !== Dn[t][2]);
            break;
          }
        if (null == r) return void (e._isValid = !1);
        if (l[3]) {
          for (t = 0, n = h; t < n; t++)
            if (Yn[t][1].exec(l[3])) {
              a = (l[2] || " ") + Yn[t][0];
              break;
            }
          if (null == a) return void (e._isValid = !1);
        }
        if (!i && null != a) return void (e._isValid = !1);
        if (l[4]) {
          if (!Mn.exec(l[4])) return void (e._isValid = !1);
          s = "Z";
        }
        (e._f = r + (a || "") + (s || "")), In(e);
      } else e._isValid = !1;
    }
    function Nn(e, t, n, i, r, a) {
      var s = [
        An(e),
        et.indexOf(t),
        parseInt(n, 10),
        parseInt(i, 10),
        parseInt(r, 10),
      ];
      return a && s.push(parseInt(a, 10)), s;
    }
    function An(e) {
      var t = parseInt(e, 10);
      return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
    }
    function Pn(e) {
      return e
        .replace(/\([^)]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "");
    }
    function Cn(e, t, n) {
      return (
        !e ||
        Rt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
        ((_(n).weekdayMismatch = !0), (n._isValid = !1), !1)
      );
    }
    function Rn(e, t, n) {
      if (e) return Wn[e];
      if (t) return 0;
      var i = parseInt(n, 10),
        r = i % 100;
      return ((i - r) / 100) * 60 + r;
    }
    function En(e) {
      var t,
        n = xn.exec(Pn(e._i));
      if (n) {
        if (((t = Nn(n[4], n[3], n[2], n[5], n[6], n[7])), !Cn(n[1], t, e)))
          return;
        (e._a = t),
          (e._tzm = Rn(n[8], n[9], n[10])),
          (e._d = vt.apply(null, e._a)),
          e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          (_(e).rfc2822 = !0);
      } else e._isValid = !1;
    }
    function Ln(e) {
      var t = On.exec(e._i);
      null === t
        ? (Tn(e),
          !1 === e._isValid &&
            (delete e._isValid,
            En(e),
            !1 === e._isValid &&
              (delete e._isValid,
              e._strict ? (e._isValid = !1) : n.createFromInputFallback(e))))
        : (e._d = new Date(+t[1]));
    }
    function Fn(e, t, n) {
      return null != e ? e : null != t ? t : n;
    }
    function Un(e) {
      var t = new Date(n.now());
      return e._useUTC
        ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
        : [t.getFullYear(), t.getMonth(), t.getDate()];
    }
    function Hn(e) {
      var t,
        n,
        i,
        r,
        a,
        s = [];
      if (!e._d) {
        for (
          i = Un(e),
            e._w && null == e._a[je] && null == e._a[Ge] && Vn(e),
            null != e._dayOfYear &&
              ((a = Fn(e._a[Ie], i[Ie])),
              (e._dayOfYear > yt(a) || 0 === e._dayOfYear) &&
                (_(e)._overflowDayOfYear = !0),
              (n = vt(a, 0, e._dayOfYear)),
              (e._a[Ge] = n.getUTCMonth()),
              (e._a[je] = n.getUTCDate())),
            t = 0;
          t < 3 && null == e._a[t];
          ++t
        )
          e._a[t] = s[t] = i[t];
        for (; t < 7; t++)
          e._a[t] = s[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
        24 === e._a[qe] &&
          0 === e._a[ze] &&
          0 === e._a[Ze] &&
          0 === e._a[$e] &&
          ((e._nextDay = !0), (e._a[qe] = 0)),
          (e._d = (e._useUTC ? vt : gt).apply(null, s)),
          (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
          null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          e._nextDay && (e._a[qe] = 24),
          e._w &&
            void 0 !== e._w.d &&
            e._w.d !== r &&
            (_(e).weekdayMismatch = !0);
      }
    }
    function Vn(e) {
      var t, n, i, r, a, s, o, l, u;
      null != (t = e._w).GG || null != t.W || null != t.E
        ? ((a = 1),
          (s = 4),
          (n = Fn(t.GG, e._a[Ie], bt(Jn(), 1, 4).year)),
          (i = Fn(t.W, 1)),
          ((r = Fn(t.E, 1)) < 1 || r > 7) && (l = !0))
        : ((a = e._locale._week.dow),
          (s = e._locale._week.doy),
          (u = bt(Jn(), a, s)),
          (n = Fn(t.gg, e._a[Ie], u.year)),
          (i = Fn(t.w, u.week)),
          null != t.d
            ? ((r = t.d) < 0 || r > 6) && (l = !0)
            : null != t.e
            ? ((r = t.e + a), (t.e < 0 || t.e > 6) && (l = !0))
            : (r = a)),
        i < 1 || i > Mt(n, a, s)
          ? (_(e)._overflowWeeks = !0)
          : null != l
          ? (_(e)._overflowWeekday = !0)
          : ((o = St(n, i, r, a, s)),
            (e._a[Ie] = o.year),
            (e._dayOfYear = o.dayOfYear));
    }
    function In(e) {
      if (e._f !== n.ISO_8601)
        if (e._f !== n.RFC_2822) {
          (e._a = []), (_(e).empty = !0);
          var t,
            i,
            r,
            a,
            s,
            o,
            l,
            u = "" + e._i,
            h = u.length,
            c = 0;
          for (
            l = (r = G(e._f, e._locale).match(R) || []).length, t = 0;
            t < l;
            t++
          )
            (a = r[t]),
              (i = (u.match(Ce(a, e)) || [])[0]) &&
                ((s = u.substr(0, u.indexOf(i))).length > 0 &&
                  _(e).unusedInput.push(s),
                (u = u.slice(u.indexOf(i) + i.length)),
                (c += i.length)),
              F[a]
                ? (i ? (_(e).empty = !1) : _(e).unusedTokens.push(a),
                  He(a, i, e))
                : e._strict && !i && _(e).unusedTokens.push(a);
          (_(e).charsLeftOver = h - c),
            u.length > 0 && _(e).unusedInput.push(u),
            e._a[qe] <= 12 &&
              !0 === _(e).bigHour &&
              e._a[qe] > 0 &&
              (_(e).bigHour = void 0),
            (_(e).parsedDateParts = e._a.slice(0)),
            (_(e).meridiem = e._meridiem),
            (e._a[qe] = Gn(e._locale, e._a[qe], e._meridiem)),
            null !== (o = _(e).era) &&
              (e._a[Ie] = e._locale.erasConvertYear(o, e._a[Ie])),
            Hn(e),
            kn(e);
        } else En(e);
      else Tn(e);
    }
    function Gn(e, t, n) {
      var i;
      return null == n
        ? t
        : null != e.meridiemHour
        ? e.meridiemHour(t, n)
        : null != e.isPM
        ? ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0), t)
        : t;
    }
    function jn(e) {
      var t,
        n,
        i,
        r,
        a,
        s,
        o = !1,
        l = e._f.length;
      if (0 === l)
        return (_(e).invalidFormat = !0), void (e._d = new Date(NaN));
      for (r = 0; r < l; r++)
        (a = 0),
          (s = !1),
          (t = v({}, e)),
          null != e._useUTC && (t._useUTC = e._useUTC),
          (t._f = e._f[r]),
          In(t),
          y(t) && (s = !0),
          (a += _(t).charsLeftOver),
          (a += 10 * _(t).unusedTokens.length),
          (_(t).score = a),
          o
            ? a < i && ((i = a), (n = t))
            : (null == i || a < i || s) && ((i = a), (n = t), s && (o = !0));
      d(e, n || t);
    }
    function qn(e) {
      if (!e._d) {
        var t = ie(e._i),
          n = void 0 === t.day ? t.date : t.day;
        (e._a = c(
          [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
          function (e) {
            return e && parseInt(e, 10);
          }
        )),
          Hn(e);
      }
    }
    function zn(e) {
      var t = new k(kn(Zn(e)));
      return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
    }
    function Zn(e) {
      var t = e._i,
        n = e._f;
      return (
        (e._locale = e._locale || gn(e._l)),
        null === t || (void 0 === n && "" === t)
          ? p({ nullInput: !0 })
          : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
            S(t)
              ? new k(kn(t))
              : (h(t) ? (e._d = t) : r(n) ? jn(e) : n ? In(e) : $n(e),
                y(e) || (e._d = null),
                e))
      );
    }
    function $n(e) {
      var t = e._i;
      l(t)
        ? (e._d = new Date(n.now()))
        : h(t)
        ? (e._d = new Date(t.valueOf()))
        : "string" == typeof t
        ? Ln(e)
        : r(t)
        ? ((e._a = c(t.slice(0), function (e) {
            return parseInt(e, 10);
          })),
          Hn(e))
        : a(t)
        ? qn(e)
        : u(t)
        ? (e._d = new Date(t))
        : n.createFromInputFallback(e);
    }
    function Bn(e, t, n, i, s) {
      var l = {};
      return (
        (!0 !== t && !1 !== t) || ((i = t), (t = void 0)),
        (!0 !== n && !1 !== n) || ((i = n), (n = void 0)),
        ((a(e) && o(e)) || (r(e) && 0 === e.length)) && (e = void 0),
        (l._isAMomentObject = !0),
        (l._useUTC = l._isUTC = s),
        (l._l = n),
        (l._i = e),
        (l._f = t),
        (l._strict = i),
        zn(l)
      );
    }
    function Jn(e, t, n, i) {
      return Bn(e, t, n, i, !1);
    }
    (n.createFromInputFallback = M(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
      }
    )),
      (n.ISO_8601 = function () {}),
      (n.RFC_2822 = function () {});
    var Qn = M(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var e = Jn.apply(null, arguments);
          return this.isValid() && e.isValid() ? (e < this ? this : e) : p();
        }
      ),
      Xn = M(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var e = Jn.apply(null, arguments);
          return this.isValid() && e.isValid() ? (e > this ? this : e) : p();
        }
      );
    function Kn(e, t) {
      var n, i;
      if ((1 === t.length && r(t[0]) && (t = t[0]), !t.length)) return Jn();
      for (n = t[0], i = 1; i < t.length; ++i)
        (t[i].isValid() && !t[i][e](n)) || (n = t[i]);
      return n;
    }
    function ei() {
      return Kn("isBefore", [].slice.call(arguments, 0));
    }
    function ti() {
      return Kn("isAfter", [].slice.call(arguments, 0));
    }
    var ni = function () {
        return Date.now ? Date.now() : +new Date();
      },
      ii = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond",
      ];
    function ri(e) {
      var t,
        n,
        i = !1,
        r = ii.length;
      for (t in e)
        if (s(e, t) && (-1 === Ve.call(ii, t) || (null != e[t] && isNaN(e[t]))))
          return !1;
      for (n = 0; n < r; ++n)
        if (e[ii[n]]) {
          if (i) return !1;
          parseFloat(e[ii[n]]) !== ue(e[ii[n]]) && (i = !0);
        }
      return !0;
    }
    function ai() {
      return this._isValid;
    }
    function si() {
      return Wi(NaN);
    }
    function oi(e) {
      var t = ie(e),
        n = t.year || 0,
        i = t.quarter || 0,
        r = t.month || 0,
        a = t.week || t.isoWeek || 0,
        s = t.day || 0,
        o = t.hour || 0,
        l = t.minute || 0,
        u = t.second || 0,
        h = t.millisecond || 0;
      (this._isValid = ri(t)),
        (this._milliseconds = +h + 1e3 * u + 6e4 * l + 1e3 * o * 60 * 60),
        (this._days = +s + 7 * a),
        (this._months = +r + 3 * i + 12 * n),
        (this._data = {}),
        (this._locale = gn()),
        this._bubble();
    }
    function li(e) {
      return e instanceof oi;
    }
    function ui(e) {
      return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function hi(e, t, n) {
      var i,
        r = Math.min(e.length, t.length),
        a = Math.abs(e.length - t.length),
        s = 0;
      for (i = 0; i < r; i++)
        ((n && e[i] !== t[i]) || (!n && ue(e[i]) !== ue(t[i]))) && s++;
      return s + a;
    }
    function ci(e, t) {
      U(e, 0, 0, function () {
        var e = this.utcOffset(),
          n = "+";
        return (
          e < 0 && ((e = -e), (n = "-")),
          n + C(~~(e / 60), 2) + t + C(~~e % 60, 2)
        );
      });
    }
    ci("Z", ":"),
      ci("ZZ", ""),
      Pe("Z", Te),
      Pe("ZZ", Te),
      Fe(["Z", "ZZ"], function (e, t, n) {
        (n._useUTC = !0), (n._tzm = fi(Te, e));
      });
    var di = /([\+\-]|\d\d)/gi;
    function fi(e, t) {
      var n,
        i,
        r = (t || "").match(e);
      return null === r
        ? null
        : 0 ===
          (i =
            60 *
              (n = ((r[r.length - 1] || []) + "").match(di) || ["-", 0, 0])[1] +
            ue(n[2]))
        ? 0
        : "+" === n[0]
        ? i
        : -i;
    }
    function mi(e, t) {
      var i, r;
      return t._isUTC
        ? ((i = t.clone()),
          (r = (S(e) || h(e) ? e.valueOf() : Jn(e).valueOf()) - i.valueOf()),
          i._d.setTime(i._d.valueOf() + r),
          n.updateOffset(i, !1),
          i)
        : Jn(e).local();
    }
    function _i(e) {
      return -Math.round(e._d.getTimezoneOffset());
    }
    function yi(e, t, i) {
      var r,
        a = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        if ("string" == typeof e) {
          if (null === (e = fi(Te, e))) return this;
        } else Math.abs(e) < 16 && !i && (e *= 60);
        return (
          !this._isUTC && t && (r = _i(this)),
          (this._offset = e),
          (this._isUTC = !0),
          null != r && this.add(r, "m"),
          a !== e &&
            (!t || this._changeInProgress
              ? Ci(this, Wi(e - a, "m"), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                n.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this
        );
      }
      return this._isUTC ? a : _i(this);
    }
    function pi(e, t) {
      return null != e
        ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
        : -this.utcOffset();
    }
    function wi(e) {
      return this.utcOffset(0, e);
    }
    function gi(e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(_i(this), "m")),
        this
      );
    }
    function vi() {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
        var e = fi(We, this._i);
        null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
      }
      return this;
    }
    function ki(e) {
      return (
        !!this.isValid() &&
        ((e = e ? Jn(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }
    function Si() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }
    function bi() {
      if (!l(this._isDSTShifted)) return this._isDSTShifted;
      var e,
        t = {};
      return (
        v(t, this),
        (t = Zn(t))._a
          ? ((e = t._isUTC ? f(t._a) : Jn(t._a)),
            (this._isDSTShifted = this.isValid() && hi(t._a, e.toArray()) > 0))
          : (this._isDSTShifted = !1),
        this._isDSTShifted
      );
    }
    function Mi() {
      return !!this.isValid() && !this._isUTC;
    }
    function Di() {
      return !!this.isValid() && this._isUTC;
    }
    function Yi() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    n.updateOffset = function () {};
    var Oi = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
      xi =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Wi(e, t) {
      var n,
        i,
        r,
        a = e,
        o = null;
      return (
        li(e)
          ? (a = { ms: e._milliseconds, d: e._days, M: e._months })
          : u(e) || !isNaN(+e)
          ? ((a = {}), t ? (a[t] = +e) : (a.milliseconds = +e))
          : (o = Oi.exec(e))
          ? ((n = "-" === o[1] ? -1 : 1),
            (a = {
              y: 0,
              d: ue(o[je]) * n,
              h: ue(o[qe]) * n,
              m: ue(o[ze]) * n,
              s: ue(o[Ze]) * n,
              ms: ue(ui(1e3 * o[$e])) * n,
            }))
          : (o = xi.exec(e))
          ? ((n = "-" === o[1] ? -1 : 1),
            (a = {
              y: Ti(o[2], n),
              M: Ti(o[3], n),
              w: Ti(o[4], n),
              d: Ti(o[5], n),
              h: Ti(o[6], n),
              m: Ti(o[7], n),
              s: Ti(o[8], n),
            }))
          : null == a
          ? (a = {})
          : "object" == typeof a &&
            ("from" in a || "to" in a) &&
            ((r = Ai(Jn(a.from), Jn(a.to))),
            ((a = {}).ms = r.milliseconds),
            (a.M = r.months)),
        (i = new oi(a)),
        li(e) && s(e, "_locale") && (i._locale = e._locale),
        li(e) && s(e, "_isValid") && (i._isValid = e._isValid),
        i
      );
    }
    function Ti(e, t) {
      var n = e && parseFloat(e.replace(",", "."));
      return (isNaN(n) ? 0 : n) * t;
    }
    function Ni(e, t) {
      var n = {};
      return (
        (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        (n.milliseconds = +t - +e.clone().add(n.months, "M")),
        n
      );
    }
    function Ai(e, t) {
      var n;
      return e.isValid() && t.isValid()
        ? ((t = mi(t, e)),
          e.isBefore(t)
            ? (n = Ni(e, t))
            : (((n = Ni(t, e)).milliseconds = -n.milliseconds),
              (n.months = -n.months)),
          n)
        : { milliseconds: 0, months: 0 };
    }
    function Pi(e, t) {
      return function (n, i) {
        var r;
        return (
          null === i ||
            isNaN(+i) ||
            (O(
              t,
              "moment()." +
                t +
                "(period, number) is deprecated. Please use moment()." +
                t +
                "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            ),
            (r = n),
            (n = i),
            (i = r)),
          Ci(this, Wi(n, i), e),
          this
        );
      };
    }
    function Ci(e, t, i, r) {
      var a = t._milliseconds,
        s = ui(t._days),
        o = ui(t._months);
      e.isValid() &&
        ((r = null == r || r),
        o && ht(e, ce(e, "Month") + o * i),
        s && de(e, "Date", ce(e, "Date") + s * i),
        a && e._d.setTime(e._d.valueOf() + a * i),
        r && n.updateOffset(e, s || o));
    }
    (Wi.fn = oi.prototype), (Wi.invalid = si);
    var Ri = Pi(1, "add"),
      Ei = Pi(-1, "subtract");
    function Li(e) {
      return "string" == typeof e || e instanceof String;
    }
    function Fi(e) {
      return S(e) || h(e) || Li(e) || u(e) || Hi(e) || Ui(e) || null == e;
    }
    function Ui(e) {
      var t,
        n,
        i = a(e) && !o(e),
        r = !1,
        l = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms",
        ],
        u = l.length;
      for (t = 0; t < u; t += 1) (n = l[t]), (r = r || s(e, n));
      return i && r;
    }
    function Hi(e) {
      var t = r(e),
        n = !1;
      return (
        t &&
          (n =
            0 ===
            e.filter(function (t) {
              return !u(t) && Li(e);
            }).length),
        t && n
      );
    }
    function Vi(e) {
      var t,
        n,
        i = a(e) && !o(e),
        r = !1,
        l = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse",
        ];
      for (t = 0; t < l.length; t += 1) (n = l[t]), (r = r || s(e, n));
      return i && r;
    }
    function Ii(e, t) {
      var n = e.diff(t, "days", !0);
      return n < -6
        ? "sameElse"
        : n < -1
        ? "lastWeek"
        : n < 0
        ? "lastDay"
        : n < 1
        ? "sameDay"
        : n < 2
        ? "nextDay"
        : n < 7
        ? "nextWeek"
        : "sameElse";
    }
    function Gi(e, t) {
      1 === arguments.length &&
        (arguments[0]
          ? Fi(arguments[0])
            ? ((e = arguments[0]), (t = void 0))
            : Vi(arguments[0]) && ((t = arguments[0]), (e = void 0))
          : ((e = void 0), (t = void 0)));
      var i = e || Jn(),
        r = mi(i, this).startOf("day"),
        a = n.calendarFormat(this, r) || "sameElse",
        s = t && (x(t[a]) ? t[a].call(this, i) : t[a]);
      return this.format(s || this.localeData().calendar(a, this, Jn(i)));
    }
    function ji() {
      return new k(this);
    }
    function qi(e, t) {
      var n = S(e) ? e : Jn(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = ne(t) || "millisecond")
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      );
    }
    function zi(e, t) {
      var n = S(e) ? e : Jn(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = ne(t) || "millisecond")
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      );
    }
    function Zi(e, t, n, i) {
      var r = S(e) ? e : Jn(e),
        a = S(t) ? t : Jn(t);
      return (
        !!(this.isValid() && r.isValid() && a.isValid()) &&
        ("(" === (i = i || "()")[0]
          ? this.isAfter(r, n)
          : !this.isBefore(r, n)) &&
        (")" === i[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
      );
    }
    function $i(e, t) {
      var n,
        i = S(e) ? e : Jn(e);
      return (
        !(!this.isValid() || !i.isValid()) &&
        ("millisecond" === (t = ne(t) || "millisecond")
          ? this.valueOf() === i.valueOf()
          : ((n = i.valueOf()),
            this.clone().startOf(t).valueOf() <= n &&
              n <= this.clone().endOf(t).valueOf()))
      );
    }
    function Bi(e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }
    function Ji(e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }
    function Qi(e, t, n) {
      var i, r, a;
      if (!this.isValid()) return NaN;
      if (!(i = mi(e, this)).isValid()) return NaN;
      switch (((r = 6e4 * (i.utcOffset() - this.utcOffset())), (t = ne(t)))) {
        case "year":
          a = Xi(this, i) / 12;
          break;
        case "month":
          a = Xi(this, i);
          break;
        case "quarter":
          a = Xi(this, i) / 3;
          break;
        case "second":
          a = (this - i) / 1e3;
          break;
        case "minute":
          a = (this - i) / 6e4;
          break;
        case "hour":
          a = (this - i) / 36e5;
          break;
        case "day":
          a = (this - i - r) / 864e5;
          break;
        case "week":
          a = (this - i - r) / 6048e5;
          break;
        default:
          a = this - i;
      }
      return n ? a : le(a);
    }
    function Xi(e, t) {
      if (e.date() < t.date()) return -Xi(t, e);
      var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        i = e.clone().add(n, "months");
      return (
        -(
          n +
          (t - i < 0
            ? (t - i) / (i - e.clone().add(n - 1, "months"))
            : (t - i) / (e.clone().add(n + 1, "months") - i))
        ) || 0
      );
    }
    function Ki() {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function er(e) {
      if (!this.isValid()) return null;
      var t = !0 !== e,
        n = t ? this.clone().utc() : this;
      return n.year() < 0 || n.year() > 9999
        ? I(
            n,
            t
              ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
              : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          )
        : x(Date.prototype.toISOString)
        ? t
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
              .toISOString()
              .replace("Z", I(n, "Z"))
        : I(
            n,
            t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
    }
    function tr() {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var e,
        t,
        n,
        i,
        r = "moment",
        a = "";
      return (
        this.isLocal() ||
          ((r = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
          (a = "Z")),
        (e = "[" + r + '("]'),
        (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
        (n = "-MM-DD[T]HH:mm:ss.SSS"),
        (i = a + '[")]'),
        this.format(e + t + n + i)
      );
    }
    function nr(e) {
      e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
      var t = I(this, e);
      return this.localeData().postformat(t);
    }
    function ir(e, t) {
      return this.isValid() && ((S(e) && e.isValid()) || Jn(e).isValid())
        ? Wi({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function rr(e) {
      return this.from(Jn(), e);
    }
    function ar(e, t) {
      return this.isValid() && ((S(e) && e.isValid()) || Jn(e).isValid())
        ? Wi({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function sr(e) {
      return this.to(Jn(), e);
    }
    function or(e) {
      var t;
      return void 0 === e
        ? this._locale._abbr
        : (null != (t = gn(e)) && (this._locale = t), this);
    }
    (n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
      (n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var lr = M(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (e) {
        return void 0 === e ? this.localeData() : this.locale(e);
      }
    );
    function ur() {
      return this._locale;
    }
    var hr = 1e3,
      cr = 60 * hr,
      dr = 60 * cr,
      fr = 3506328 * dr;
    function mr(e, t) {
      return ((e % t) + t) % t;
    }
    function _r(e, t, n) {
      return e < 100 && e >= 0
        ? new Date(e + 400, t, n) - fr
        : new Date(e, t, n).valueOf();
    }
    function yr(e, t, n) {
      return e < 100 && e >= 0
        ? Date.UTC(e + 400, t, n) - fr
        : Date.UTC(e, t, n);
    }
    function pr(e) {
      var t, i;
      if (void 0 === (e = ne(e)) || "millisecond" === e || !this.isValid())
        return this;
      switch (((i = this._isUTC ? yr : _r), e)) {
        case "year":
          t = i(this.year(), 0, 1);
          break;
        case "quarter":
          t = i(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case "month":
          t = i(this.year(), this.month(), 1);
          break;
        case "week":
          t = i(this.year(), this.month(), this.date() - this.weekday());
          break;
        case "isoWeek":
          t = i(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          t = i(this.year(), this.month(), this.date());
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t -= mr(t + (this._isUTC ? 0 : this.utcOffset() * cr), dr));
          break;
        case "minute":
          (t = this._d.valueOf()), (t -= mr(t, cr));
          break;
        case "second":
          (t = this._d.valueOf()), (t -= mr(t, hr));
      }
      return this._d.setTime(t), n.updateOffset(this, !0), this;
    }
    function wr(e) {
      var t, i;
      if (void 0 === (e = ne(e)) || "millisecond" === e || !this.isValid())
        return this;
      switch (((i = this._isUTC ? yr : _r), e)) {
        case "year":
          t = i(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          t = i(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
          break;
        case "month":
          t = i(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          t =
            i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case "isoWeek":
          t =
            i(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
          break;
        case "day":
        case "date":
          t = i(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t +=
              dr - mr(t + (this._isUTC ? 0 : this.utcOffset() * cr), dr) - 1);
          break;
        case "minute":
          (t = this._d.valueOf()), (t += cr - mr(t, cr) - 1);
          break;
        case "second":
          (t = this._d.valueOf()), (t += hr - mr(t, hr) - 1);
      }
      return this._d.setTime(t), n.updateOffset(this, !0), this;
    }
    function gr() {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }
    function vr() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function kr() {
      return new Date(this.valueOf());
    }
    function Sr() {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }
    function br() {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }
    function Mr() {
      return this.isValid() ? this.toISOString() : null;
    }
    function Dr() {
      return y(this);
    }
    function Yr() {
      return d({}, _(this));
    }
    function Or() {
      return _(this).overflow;
    }
    function xr() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }
    function Wr(e, t) {
      var i,
        r,
        a,
        s = this._eras || gn("en")._eras;
      for (i = 0, r = s.length; i < r; ++i)
        switch (
          ("string" == typeof s[i].since &&
            ((a = n(s[i].since).startOf("day")), (s[i].since = a.valueOf())),
          typeof s[i].until)
        ) {
          case "undefined":
            s[i].until = 1 / 0;
            break;
          case "string":
            (a = n(s[i].until).startOf("day").valueOf()),
              (s[i].until = a.valueOf());
        }
      return s;
    }
    function Tr(e, t, n) {
      var i,
        r,
        a,
        s,
        o,
        l = this.eras();
      for (e = e.toUpperCase(), i = 0, r = l.length; i < r; ++i)
        if (
          ((a = l[i].name.toUpperCase()),
          (s = l[i].abbr.toUpperCase()),
          (o = l[i].narrow.toUpperCase()),
          n)
        )
          switch (t) {
            case "N":
            case "NN":
            case "NNN":
              if (s === e) return l[i];
              break;
            case "NNNN":
              if (a === e) return l[i];
              break;
            case "NNNNN":
              if (o === e) return l[i];
          }
        else if ([a, s, o].indexOf(e) >= 0) return l[i];
    }
    function Nr(e, t) {
      var i = e.since <= e.until ? 1 : -1;
      return void 0 === t
        ? n(e.since).year()
        : n(e.since).year() + (t - e.offset) * i;
    }
    function Ar() {
      var e,
        t,
        n,
        i = this.localeData().eras();
      for (e = 0, t = i.length; e < t; ++e) {
        if (
          ((n = this.clone().startOf("day").valueOf()),
          i[e].since <= n && n <= i[e].until)
        )
          return i[e].name;
        if (i[e].until <= n && n <= i[e].since) return i[e].name;
      }
      return "";
    }
    function Pr() {
      var e,
        t,
        n,
        i = this.localeData().eras();
      for (e = 0, t = i.length; e < t; ++e) {
        if (
          ((n = this.clone().startOf("day").valueOf()),
          i[e].since <= n && n <= i[e].until)
        )
          return i[e].narrow;
        if (i[e].until <= n && n <= i[e].since) return i[e].narrow;
      }
      return "";
    }
    function Cr() {
      var e,
        t,
        n,
        i = this.localeData().eras();
      for (e = 0, t = i.length; e < t; ++e) {
        if (
          ((n = this.clone().startOf("day").valueOf()),
          i[e].since <= n && n <= i[e].until)
        )
          return i[e].abbr;
        if (i[e].until <= n && n <= i[e].since) return i[e].abbr;
      }
      return "";
    }
    function Rr() {
      var e,
        t,
        i,
        r,
        a = this.localeData().eras();
      for (e = 0, t = a.length; e < t; ++e)
        if (
          ((i = a[e].since <= a[e].until ? 1 : -1),
          (r = this.clone().startOf("day").valueOf()),
          (a[e].since <= r && r <= a[e].until) ||
            (a[e].until <= r && r <= a[e].since))
        )
          return (this.year() - n(a[e].since).year()) * i + a[e].offset;
      return this.year();
    }
    function Er(e) {
      return (
        s(this, "_erasNameRegex") || Gr.call(this),
        e ? this._erasNameRegex : this._erasRegex
      );
    }
    function Lr(e) {
      return (
        s(this, "_erasAbbrRegex") || Gr.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
      );
    }
    function Fr(e) {
      return (
        s(this, "_erasNarrowRegex") || Gr.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
      );
    }
    function Ur(e, t) {
      return t.erasAbbrRegex(e);
    }
    function Hr(e, t) {
      return t.erasNameRegex(e);
    }
    function Vr(e, t) {
      return t.erasNarrowRegex(e);
    }
    function Ir(e, t) {
      return t._eraYearOrdinalRegex || Oe;
    }
    function Gr() {
      var e,
        t,
        n = [],
        i = [],
        r = [],
        a = [],
        s = this.eras();
      for (e = 0, t = s.length; e < t; ++e)
        i.push(Ee(s[e].name)),
          n.push(Ee(s[e].abbr)),
          r.push(Ee(s[e].narrow)),
          a.push(Ee(s[e].name)),
          a.push(Ee(s[e].abbr)),
          a.push(Ee(s[e].narrow));
      (this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i")),
        (this._erasNameRegex = new RegExp("^(" + i.join("|") + ")", "i")),
        (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
        (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
    }
    function jr(e, t) {
      U(0, [e, e.length], 0, t);
    }
    function qr(e) {
      return Qr.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function zr(e) {
      return Qr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function Zr() {
      return Mt(this.year(), 1, 4);
    }
    function $r() {
      return Mt(this.isoWeekYear(), 1, 4);
    }
    function Br() {
      var e = this.localeData()._week;
      return Mt(this.year(), e.dow, e.doy);
    }
    function Jr() {
      var e = this.localeData()._week;
      return Mt(this.weekYear(), e.dow, e.doy);
    }
    function Qr(e, t, n, i, r) {
      var a;
      return null == e
        ? bt(this, i, r).year
        : (t > (a = Mt(e, i, r)) && (t = a), Xr.call(this, e, t, n, i, r));
    }
    function Xr(e, t, n, i, r) {
      var a = St(e, t, n, i, r),
        s = vt(a.year, 0, a.dayOfYear);
      return (
        this.year(s.getUTCFullYear()),
        this.month(s.getUTCMonth()),
        this.date(s.getUTCDate()),
        this
      );
    }
    function Kr(e) {
      return null == e
        ? Math.ceil((this.month() + 1) / 3)
        : this.month(3 * (e - 1) + (this.month() % 3));
    }
    U("N", 0, 0, "eraAbbr"),
      U("NN", 0, 0, "eraAbbr"),
      U("NNN", 0, 0, "eraAbbr"),
      U("NNNN", 0, 0, "eraName"),
      U("NNNNN", 0, 0, "eraNarrow"),
      U("y", ["y", 1], "yo", "eraYear"),
      U("y", ["yy", 2], 0, "eraYear"),
      U("y", ["yyy", 3], 0, "eraYear"),
      U("y", ["yyyy", 4], 0, "eraYear"),
      Pe("N", Ur),
      Pe("NN", Ur),
      Pe("NNN", Ur),
      Pe("NNNN", Hr),
      Pe("NNNNN", Vr),
      Fe(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, i) {
        var r = n._locale.erasParse(e, i, n._strict);
        r ? (_(n).era = r) : (_(n).invalidEra = e);
      }),
      Pe("y", Oe),
      Pe("yy", Oe),
      Pe("yyy", Oe),
      Pe("yyyy", Oe),
      Pe("yo", Ir),
      Fe(["y", "yy", "yyy", "yyyy"], Ie),
      Fe(["yo"], function (e, t, n, i) {
        var r;
        n._locale._eraYearOrdinalRegex &&
          (r = e.match(n._locale._eraYearOrdinalRegex)),
          n._locale.eraYearOrdinalParse
            ? (t[Ie] = n._locale.eraYearOrdinalParse(e, r))
            : (t[Ie] = parseInt(e, 10));
      }),
      U(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
      }),
      U(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }),
      jr("gggg", "weekYear"),
      jr("ggggg", "weekYear"),
      jr("GGGG", "isoWeekYear"),
      jr("GGGGG", "isoWeekYear"),
      te("weekYear", "gg"),
      te("isoWeekYear", "GG"),
      ae("weekYear", 1),
      ae("isoWeekYear", 1),
      Pe("G", xe),
      Pe("g", xe),
      Pe("GG", ke, pe),
      Pe("gg", ke, pe),
      Pe("GGGG", De, ge),
      Pe("gggg", De, ge),
      Pe("GGGGG", Ye, ve),
      Pe("ggggg", Ye, ve),
      Ue(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
        t[i.substr(0, 2)] = ue(e);
      }),
      Ue(["gg", "GG"], function (e, t, i, r) {
        t[r] = n.parseTwoDigitYear(e);
      }),
      U("Q", 0, "Qo", "quarter"),
      te("quarter", "Q"),
      ae("quarter", 7),
      Pe("Q", ye),
      Fe("Q", function (e, t) {
        t[Ge] = 3 * (ue(e) - 1);
      }),
      U("D", ["DD", 2], "Do", "date"),
      te("date", "D"),
      ae("date", 9),
      Pe("D", ke),
      Pe("DD", ke, pe),
      Pe("Do", function (e, t) {
        return e
          ? t._dayOfMonthOrdinalParse || t._ordinalParse
          : t._dayOfMonthOrdinalParseLenient;
      }),
      Fe(["D", "DD"], je),
      Fe("Do", function (e, t) {
        t[je] = ue(e.match(ke)[0]);
      });
    var ea = he("Date", !0);
    function ta(e) {
      var t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == e ? t : this.add(e - t, "d");
    }
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
      te("dayOfYear", "DDD"),
      ae("dayOfYear", 4),
      Pe("DDD", Me),
      Pe("DDDD", we),
      Fe(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = ue(e);
      }),
      U("m", ["mm", 2], 0, "minute"),
      te("minute", "m"),
      ae("minute", 14),
      Pe("m", ke),
      Pe("mm", ke, pe),
      Fe(["m", "mm"], ze);
    var na = he("Minutes", !1);
    U("s", ["ss", 2], 0, "second"),
      te("second", "s"),
      ae("second", 15),
      Pe("s", ke),
      Pe("ss", ke, pe),
      Fe(["s", "ss"], Ze);
    var ia,
      ra,
      aa = he("Seconds", !1);
    for (
      U("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
      }),
        U(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }),
        U(0, ["SSS", 3], 0, "millisecond"),
        U(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }),
        U(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }),
        U(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }),
        U(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }),
        U(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }),
        U(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }),
        te("millisecond", "ms"),
        ae("millisecond", 16),
        Pe("S", Me, ye),
        Pe("SS", Me, pe),
        Pe("SSS", Me, we),
        ia = "SSSS";
      ia.length <= 9;
      ia += "S"
    )
      Pe(ia, Oe);
    function sa(e, t) {
      t[$e] = ue(1e3 * ("0." + e));
    }
    for (ia = "S"; ia.length <= 9; ia += "S") Fe(ia, sa);
    function oa() {
      return this._isUTC ? "UTC" : "";
    }
    function la() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    (ra = he("Milliseconds", !1)),
      U("z", 0, 0, "zoneAbbr"),
      U("zz", 0, 0, "zoneName");
    var ua = k.prototype;
    function ha(e) {
      return Jn(1e3 * e);
    }
    function ca() {
      return Jn.apply(null, arguments).parseZone();
    }
    function da(e) {
      return e;
    }
    (ua.add = Ri),
      (ua.calendar = Gi),
      (ua.clone = ji),
      (ua.diff = Qi),
      (ua.endOf = wr),
      (ua.format = nr),
      (ua.from = ir),
      (ua.fromNow = rr),
      (ua.to = ar),
      (ua.toNow = sr),
      (ua.get = fe),
      (ua.invalidAt = Or),
      (ua.isAfter = qi),
      (ua.isBefore = zi),
      (ua.isBetween = Zi),
      (ua.isSame = $i),
      (ua.isSameOrAfter = Bi),
      (ua.isSameOrBefore = Ji),
      (ua.isValid = Dr),
      (ua.lang = lr),
      (ua.locale = or),
      (ua.localeData = ur),
      (ua.max = Xn),
      (ua.min = Qn),
      (ua.parsingFlags = Yr),
      (ua.set = me),
      (ua.startOf = pr),
      (ua.subtract = Ei),
      (ua.toArray = Sr),
      (ua.toObject = br),
      (ua.toDate = kr),
      (ua.toISOString = er),
      (ua.inspect = tr),
      "undefined" != typeof Symbol &&
        null != Symbol.for &&
        (ua[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return "Moment<" + this.format() + ">";
        }),
      (ua.toJSON = Mr),
      (ua.toString = Ki),
      (ua.unix = vr),
      (ua.valueOf = gr),
      (ua.creationData = xr),
      (ua.eraName = Ar),
      (ua.eraNarrow = Pr),
      (ua.eraAbbr = Cr),
      (ua.eraYear = Rr),
      (ua.year = pt),
      (ua.isLeapYear = wt),
      (ua.weekYear = qr),
      (ua.isoWeekYear = zr),
      (ua.quarter = ua.quarters = Kr),
      (ua.month = ct),
      (ua.daysInMonth = dt),
      (ua.week = ua.weeks = Wt),
      (ua.isoWeek = ua.isoWeeks = Tt),
      (ua.weeksInYear = Br),
      (ua.weeksInWeekYear = Jr),
      (ua.isoWeeksInYear = Zr),
      (ua.isoWeeksInISOWeekYear = $r),
      (ua.date = ea),
      (ua.day = ua.days = qt),
      (ua.weekday = zt),
      (ua.isoWeekday = Zt),
      (ua.dayOfYear = ta),
      (ua.hour = ua.hours = an),
      (ua.minute = ua.minutes = na),
      (ua.second = ua.seconds = aa),
      (ua.millisecond = ua.milliseconds = ra),
      (ua.utcOffset = yi),
      (ua.utc = wi),
      (ua.local = gi),
      (ua.parseZone = vi),
      (ua.hasAlignedHourOffset = ki),
      (ua.isDST = Si),
      (ua.isLocal = Mi),
      (ua.isUtcOffset = Di),
      (ua.isUtc = Yi),
      (ua.isUTC = Yi),
      (ua.zoneAbbr = oa),
      (ua.zoneName = la),
      (ua.dates = M("dates accessor is deprecated. Use date instead.", ea)),
      (ua.months = M("months accessor is deprecated. Use month instead", ct)),
      (ua.years = M("years accessor is deprecated. Use year instead", pt)),
      (ua.zone = M(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        pi
      )),
      (ua.isDSTShifted = M(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        bi
      ));
    var fa = N.prototype;
    function ma(e, t, n, i) {
      var r = gn(),
        a = f().set(i, t);
      return r[n](a, e);
    }
    function _a(e, t, n) {
      if ((u(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
        return ma(e, t, n, "month");
      var i,
        r = [];
      for (i = 0; i < 12; i++) r[i] = ma(e, i, n, "month");
      return r;
    }
    function ya(e, t, n, i) {
      "boolean" == typeof e
        ? (u(t) && ((n = t), (t = void 0)), (t = t || ""))
        : ((n = t = e),
          (e = !1),
          u(t) && ((n = t), (t = void 0)),
          (t = t || ""));
      var r,
        a = gn(),
        s = e ? a._week.dow : 0,
        o = [];
      if (null != n) return ma(t, (n + s) % 7, i, "day");
      for (r = 0; r < 7; r++) o[r] = ma(t, (r + s) % 7, i, "day");
      return o;
    }
    function pa(e, t) {
      return _a(e, t, "months");
    }
    function wa(e, t) {
      return _a(e, t, "monthsShort");
    }
    function ga(e, t, n) {
      return ya(e, t, n, "weekdays");
    }
    function va(e, t, n) {
      return ya(e, t, n, "weekdaysShort");
    }
    function ka(e, t, n) {
      return ya(e, t, n, "weekdaysMin");
    }
    (fa.calendar = P),
      (fa.longDateFormat = q),
      (fa.invalidDate = Z),
      (fa.ordinal = J),
      (fa.preparse = da),
      (fa.postformat = da),
      (fa.relativeTime = X),
      (fa.pastFuture = K),
      (fa.set = W),
      (fa.eras = Wr),
      (fa.erasParse = Tr),
      (fa.erasConvertYear = Nr),
      (fa.erasAbbrRegex = Lr),
      (fa.erasNameRegex = Er),
      (fa.erasNarrowRegex = Fr),
      (fa.months = st),
      (fa.monthsShort = ot),
      (fa.monthsParse = ut),
      (fa.monthsRegex = mt),
      (fa.monthsShortRegex = ft),
      (fa.week = Dt),
      (fa.firstDayOfYear = xt),
      (fa.firstDayOfWeek = Ot),
      (fa.weekdays = Ht),
      (fa.weekdaysMin = It),
      (fa.weekdaysShort = Vt),
      (fa.weekdaysParse = jt),
      (fa.weekdaysRegex = $t),
      (fa.weekdaysShortRegex = Bt),
      (fa.weekdaysMinRegex = Jt),
      (fa.isPM = nn),
      (fa.meridiem = sn),
      yn("en", {
        eras: [
          {
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD",
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC",
          },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 === ue((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
      }),
      (n.lang = M("moment.lang is deprecated. Use moment.locale instead.", yn)),
      (n.langData = M(
        "moment.langData is deprecated. Use moment.localeData instead.",
        gn
      ));
    var Sa = Math.abs;
    function ba() {
      var e = this._data;
      return (
        (this._milliseconds = Sa(this._milliseconds)),
        (this._days = Sa(this._days)),
        (this._months = Sa(this._months)),
        (e.milliseconds = Sa(e.milliseconds)),
        (e.seconds = Sa(e.seconds)),
        (e.minutes = Sa(e.minutes)),
        (e.hours = Sa(e.hours)),
        (e.months = Sa(e.months)),
        (e.years = Sa(e.years)),
        this
      );
    }
    function Ma(e, t, n, i) {
      var r = Wi(t, n);
      return (
        (e._milliseconds += i * r._milliseconds),
        (e._days += i * r._days),
        (e._months += i * r._months),
        e._bubble()
      );
    }
    function Da(e, t) {
      return Ma(this, e, t, 1);
    }
    function Ya(e, t) {
      return Ma(this, e, t, -1);
    }
    function Oa(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function xa() {
      var e,
        t,
        n,
        i,
        r,
        a = this._milliseconds,
        s = this._days,
        o = this._months,
        l = this._data;
      return (
        (a >= 0 && s >= 0 && o >= 0) ||
          (a <= 0 && s <= 0 && o <= 0) ||
          ((a += 864e5 * Oa(Ta(o) + s)), (s = 0), (o = 0)),
        (l.milliseconds = a % 1e3),
        (e = le(a / 1e3)),
        (l.seconds = e % 60),
        (t = le(e / 60)),
        (l.minutes = t % 60),
        (n = le(t / 60)),
        (l.hours = n % 24),
        (s += le(n / 24)),
        (o += r = le(Wa(s))),
        (s -= Oa(Ta(r))),
        (i = le(o / 12)),
        (o %= 12),
        (l.days = s),
        (l.months = o),
        (l.years = i),
        this
      );
    }
    function Wa(e) {
      return (4800 * e) / 146097;
    }
    function Ta(e) {
      return (146097 * e) / 4800;
    }
    function Na(e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        i = this._milliseconds;
      if ("month" === (e = ne(e)) || "quarter" === e || "year" === e)
        switch (((t = this._days + i / 864e5), (n = this._months + Wa(t)), e)) {
          case "month":
            return n;
          case "quarter":
            return n / 3;
          case "year":
            return n / 12;
        }
      else
        switch (((t = this._days + Math.round(Ta(this._months))), e)) {
          case "week":
            return t / 7 + i / 6048e5;
          case "day":
            return t + i / 864e5;
          case "hour":
            return 24 * t + i / 36e5;
          case "minute":
            return 1440 * t + i / 6e4;
          case "second":
            return 86400 * t + i / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + i;
          default:
            throw new Error("Unknown unit " + e);
        }
    }
    function Aa() {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * ue(this._months / 12)
        : NaN;
    }
    function Pa(e) {
      return function () {
        return this.as(e);
      };
    }
    var Ca = Pa("ms"),
      Ra = Pa("s"),
      Ea = Pa("m"),
      La = Pa("h"),
      Fa = Pa("d"),
      Ua = Pa("w"),
      Ha = Pa("M"),
      Va = Pa("Q"),
      Ia = Pa("y");
    function Ga() {
      return Wi(this);
    }
    function ja(e) {
      return (e = ne(e)), this.isValid() ? this[e + "s"]() : NaN;
    }
    function qa(e) {
      return function () {
        return this.isValid() ? this._data[e] : NaN;
      };
    }
    var za = qa("milliseconds"),
      Za = qa("seconds"),
      $a = qa("minutes"),
      Ba = qa("hours"),
      Ja = qa("days"),
      Qa = qa("months"),
      Xa = qa("years");
    function Ka() {
      return le(this.days() / 7);
    }
    var es = Math.round,
      ts = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
    function ns(e, t, n, i, r) {
      return r.relativeTime(t || 1, !!n, e, i);
    }
    function is(e, t, n, i) {
      var r = Wi(e).abs(),
        a = es(r.as("s")),
        s = es(r.as("m")),
        o = es(r.as("h")),
        l = es(r.as("d")),
        u = es(r.as("M")),
        h = es(r.as("w")),
        c = es(r.as("y")),
        d =
          (a <= n.ss && ["s", a]) ||
          (a < n.s && ["ss", a]) ||
          (s <= 1 && ["m"]) ||
          (s < n.m && ["mm", s]) ||
          (o <= 1 && ["h"]) ||
          (o < n.h && ["hh", o]) ||
          (l <= 1 && ["d"]) ||
          (l < n.d && ["dd", l]);
      return (
        null != n.w && (d = d || (h <= 1 && ["w"]) || (h < n.w && ["ww", h])),
        ((d = d ||
          (u <= 1 && ["M"]) ||
          (u < n.M && ["MM", u]) ||
          (c <= 1 && ["y"]) || ["yy", c])[2] = t),
        (d[3] = +e > 0),
        (d[4] = i),
        ns.apply(null, d)
      );
    }
    function rs(e) {
      return void 0 === e ? es : "function" == typeof e && ((es = e), !0);
    }
    function as(e, t) {
      return (
        void 0 !== ts[e] &&
        (void 0 === t ? ts[e] : ((ts[e] = t), "s" === e && (ts.ss = t - 1), !0))
      );
    }
    function ss(e, t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var n,
        i,
        r = !1,
        a = ts;
      return (
        "object" == typeof e && ((t = e), (e = !1)),
        "boolean" == typeof e && (r = e),
        "object" == typeof t &&
          ((a = Object.assign({}, ts, t)),
          null != t.s && null == t.ss && (a.ss = t.s - 1)),
        (i = is(this, !r, a, (n = this.localeData()))),
        r && (i = n.pastFuture(+this, i)),
        n.postformat(i)
      );
    }
    var os = Math.abs;
    function ls(e) {
      return (e > 0) - (e < 0) || +e;
    }
    function us() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var e,
        t,
        n,
        i,
        r,
        a,
        s,
        o,
        l = os(this._milliseconds) / 1e3,
        u = os(this._days),
        h = os(this._months),
        c = this.asSeconds();
      return c
        ? ((e = le(l / 60)),
          (t = le(e / 60)),
          (l %= 60),
          (e %= 60),
          (n = le(h / 12)),
          (h %= 12),
          (i = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
          (r = c < 0 ? "-" : ""),
          (a = ls(this._months) !== ls(c) ? "-" : ""),
          (s = ls(this._days) !== ls(c) ? "-" : ""),
          (o = ls(this._milliseconds) !== ls(c) ? "-" : ""),
          r +
            "P" +
            (n ? a + n + "Y" : "") +
            (h ? a + h + "M" : "") +
            (u ? s + u + "D" : "") +
            (t || e || l ? "T" : "") +
            (t ? o + t + "H" : "") +
            (e ? o + e + "M" : "") +
            (l ? o + i + "S" : ""))
        : "P0D";
    }
    var hs = oi.prototype;
    return (
      (hs.isValid = ai),
      (hs.abs = ba),
      (hs.add = Da),
      (hs.subtract = Ya),
      (hs.as = Na),
      (hs.asMilliseconds = Ca),
      (hs.asSeconds = Ra),
      (hs.asMinutes = Ea),
      (hs.asHours = La),
      (hs.asDays = Fa),
      (hs.asWeeks = Ua),
      (hs.asMonths = Ha),
      (hs.asQuarters = Va),
      (hs.asYears = Ia),
      (hs.valueOf = Aa),
      (hs._bubble = xa),
      (hs.clone = Ga),
      (hs.get = ja),
      (hs.milliseconds = za),
      (hs.seconds = Za),
      (hs.minutes = $a),
      (hs.hours = Ba),
      (hs.days = Ja),
      (hs.weeks = Ka),
      (hs.months = Qa),
      (hs.years = Xa),
      (hs.humanize = ss),
      (hs.toISOString = us),
      (hs.toString = us),
      (hs.toJSON = us),
      (hs.locale = or),
      (hs.localeData = ur),
      (hs.toIsoString = M(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        us
      )),
      (hs.lang = lr),
      U("X", 0, 0, "unix"),
      U("x", 0, 0, "valueOf"),
      Pe("x", xe),
      Pe("X", Ne),
      Fe("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e));
      }),
      Fe("x", function (e, t, n) {
        n._d = new Date(ue(e));
      }),
      //! moment.js
      (n.version = "2.29.2"),
      i(Jn),
      (n.fn = ua),
      (n.min = ei),
      (n.max = ti),
      (n.now = ni),
      (n.utc = f),
      (n.unix = ha),
      (n.months = pa),
      (n.isDate = h),
      (n.locale = yn),
      (n.invalid = p),
      (n.duration = Wi),
      (n.isMoment = S),
      (n.weekdays = ga),
      (n.parseZone = ca),
      (n.localeData = gn),
      (n.isDuration = li),
      (n.monthsShort = wa),
      (n.weekdaysMin = ka),
      (n.defineLocale = pn),
      (n.updateLocale = wn),
      (n.locales = vn),
      (n.weekdaysShort = va),
      (n.normalizeUnits = ne),
      (n.relativeTimeRounding = rs),
      (n.relativeTimeThreshold = as),
      (n.calendarFormat = Ii),
      (n.prototype = ua),
      (n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM",
      }),
      n
    );
  })();
  var at = rt.exports,
    st = new WeakSet(),
    ot = new WeakSet(),
    lt = new WeakSet(),
    ut = new WeakSet(),
    ht = new WeakSet(),
    ct = new WeakSet(),
    dt = new WeakSet(),
    ft = new WeakSet(),
    mt = new WeakSet(),
    _t = new WeakSet(),
    yt = new WeakSet(),
    pt = new WeakSet(),
    wt = new WeakSet();
  function gt() {
    new y().validate();
  }
  function vt() {
    new m().initialize();
  }
  function kt() {
    var e = this;
    document
      .querySelectorAll("form[data-powermail-ajax]")
      .forEach(function (t) {
        t.addEventListener("submit", function (n) {
          if (
            (n.preventDefault(),
            !1 === t.classList.contains("powermail_form_error"))
          ) {
            var i = t.getAttribute("action"),
              r = t.getAttribute("data-powermail-form"),
              a = t.getAttribute("data-powermail-ajax-uri");
            u(e, ht, bt).call(e, t),
              fetch(i, { body: new FormData(t), method: "post" })
                .then(function (e) {
                  return e.text();
                })
                .then(function (n) {
                  var i = new DOMParser()
                    .parseFromString(n, "text/html")
                    .documentElement.querySelector(
                      '[data-powermail-form="' + r + '"]'
                    );
                  if (null !== i) {
                    var s = document
                      .querySelector('[data-powermail-form="' + r + '"]')
                      .closest(".tx-powermail");
                    (s.innerHTML = ""), s.appendChild(i);
                  } else null !== a ? f.redirectToUri(a) : t.submit();
                  u(e, lt, kt).call(e),
                    u(e, st, gt).call(e),
                    u(e, ot, vt).call(e),
                    u(e, mt, Ot).call(e);
                })
                .catch(function (e) {
                  console.log(e);
                });
          }
        });
      });
  }
  function St() {
    null !== document.querySelector('[data-powermail-location="prefill"]') &&
      navigator.geolocation.getCurrentPosition(function (e) {
        var t = e.coords.latitude,
          n = e.coords.longitude,
          i = document
            .querySelector("[data-powermail-eidurl]")
            .getAttribute("data-powermail-eidurl");
        fetch(i + "?eID=powermailEidGetLocation&lat=" + t + "&lng=" + n)
          .then(function (e) {
            return e.text();
          })
          .then(function (e) {
            for (
              var t = document.querySelectorAll(
                  '[data-powermail-location="prefill"]'
                ),
                n = 0;
              n < t.length;
              n++
            )
              t[n].value = e;
          })
          .catch(function (e) {
            console.log(e);
          });
      });
  }
  function bt(e) {
    u(this, ct, Mt).call(this, e);
    var t = e.querySelector(".powermail_submit");
    if (null !== t) t.parentNode.appendChild(u(this, dt, Dt).call(this));
    else {
      var n = e.closest(".tx-powermail");
      null !== n && n.appendChild(u(this, dt, Dt).call(this));
    }
  }
  function Mt(e) {
    var t = e.closest(".tx-powermail");
    if (null !== t) {
      var n = t.querySelector(".powermail_progressbar");
      null !== n && n.remove();
    }
  }
  function Dt() {
    var e = document.createElement("div");
    e.classList.add("powermail_progressbar");
    var t = document.createElement("div");
    t.classList.add("powermail_progress");
    var n = document.createElement("div");
    return (
      n.classList.add("powermail_progress_inner"),
      e.appendChild(t),
      t.appendChild(n),
      e
    );
  }
  function Yt() {
    for (
      var e = document.querySelectorAll(
          ".powermail_all_type_password.powermail_all_value"
        ),
        t = 0;
      t < e.length;
      t++
    )
      e[t].innerText = "********";
  }
  function Ot() {
    document
      .querySelectorAll("img.powermail_captchaimage")
      .forEach(function (e) {
        var t = f.getUriWithoutGetParam(e.getAttribute("src"));
        e.setAttribute("src", t + "?hash=" + f.getRandomString(5));
      });
  }
  function xt() {
    var e = this;
    document.querySelectorAll(".deleteAllFiles").forEach(function (t) {
      var n = t.closest(".powermail_fieldwrap_file");
      if (null !== n) {
        var i = n.querySelector('input[type="file"]');
        u(e, pt, Tt).call(e, i);
      }
      t.addEventListener("click", function () {
        var n = t.closest(".powermail_fieldwrap_file");
        if (null !== n) {
          var i = n.querySelector('input[type="hidden"]');
          u(e, wt, Nt).call(e, i);
        }
        var r = t.closest("ul");
        null !== r && r.remove();
      });
    });
  }
  function Wt() {
    document.querySelectorAll("form.powermail_form").forEach(function (e) {
      e.querySelectorAll("input").forEach(function (e) {
        var t = e.getAttribute("type");
        if ("date" === t || "datetime-local" === t || "time" === t) {
          var n = "YYYY-MM-DD";
          "datetime-local" === t
            ? (n = "YYYY-MM-DDTHH:mm")
            : "time" === t && (n = "HH:mm");
          var i = e.getAttribute("data-date-value");
          if (null !== i) {
            var r = e.getAttribute("data-datepicker-format"),
              a = at(i, r);
            a.isValid && (e.value = a.format(n));
          }
        }
      });
    });
  }
  function Tt(e) {
    e.prop("disabled", "disabled").addClass("hide").prop("type", "hidden");
  }
  function Nt(e) {
    e.prop("disabled", !1).removeClass("hide").prop("type", "file");
  }
  new (n(function t() {
    e(this, t),
      d(this, wt),
      d(this, pt),
      d(this, yt),
      d(this, _t),
      d(this, mt),
      d(this, ft),
      d(this, dt),
      d(this, ct),
      d(this, ht),
      d(this, ut),
      d(this, lt),
      d(this, ot),
      d(this, st),
      i(this, "use strict", void 0),
      i(this, "initialize", function () {
        var e = this;
        u(e, st, gt).call(e),
          u(e, ot, vt).call(e),
          u(e, lt, kt).call(e),
          u(e, ut, St).call(e),
          u(e, ft, Yt).call(e),
          u(e, _t, xt).call(e),
          u(e, yt, Wt).call(e);
      });
  }))().initialize();
})();
