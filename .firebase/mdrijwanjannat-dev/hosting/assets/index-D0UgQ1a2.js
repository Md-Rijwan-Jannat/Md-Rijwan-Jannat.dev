(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var rn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function fm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function w1(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var pm = { exports: {} },
  Gs = {},
  hm = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $i = Symbol.for("react.element"),
  x1 = Symbol.for("react.portal"),
  S1 = Symbol.for("react.fragment"),
  b1 = Symbol.for("react.strict_mode"),
  k1 = Symbol.for("react.profiler"),
  T1 = Symbol.for("react.provider"),
  P1 = Symbol.for("react.context"),
  C1 = Symbol.for("react.forward_ref"),
  j1 = Symbol.for("react.suspense"),
  E1 = Symbol.for("react.memo"),
  _1 = Symbol.for("react.lazy"),
  Kd = Symbol.iterator;
function O1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Kd && e[Kd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gm = Object.assign,
  vm = {};
function Ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vm),
    (this.updater = n || mm);
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ym() {}
ym.prototype = Ir.prototype;
function rc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vm),
    (this.updater = n || mm);
}
var ic = (rc.prototype = new ym());
ic.constructor = rc;
gm(ic, Ir.prototype);
ic.isPureReactComponent = !0;
var Gd = Array.isArray,
  wm = Object.prototype.hasOwnProperty,
  oc = { current: null },
  xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      wm.call(t, r) && !xm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: $i,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: oc.current,
  };
}
function M1(e, t) {
  return {
    $$typeof: $i,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function N1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yd = /\/+/g;
function Oa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? N1("" + e.key)
    : t.toString(36);
}
function zo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $i:
          case x1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Oa(s, 0) : r),
      Gd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Yd, "$&/") + "/"),
          zo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (sc(i) &&
            (i = M1(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Yd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Gd(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Oa(o, a);
      s += zo(o, t, n, l, i);
    }
  else if (((l = O1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Oa(o, a++)), (s += zo(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function lo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    zo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function L1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Ao = { transition: null },
  R1 = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Ao,
    ReactCurrentOwner: oc,
  };
function bm() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: lo,
  forEach: function (e, t, n) {
    lo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      lo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      lo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = Ir;
G.Fragment = S1;
G.Profiler = k1;
G.PureComponent = rc;
G.StrictMode = b1;
G.Suspense = j1;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R1;
G.act = bm;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = gm({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = oc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      wm.call(t, l) &&
        !xm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: $i, type: e.type, key: i, ref: o, props: r, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: P1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: T1, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Sm;
G.createFactory = function (e) {
  var t = Sm.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: C1, render: e };
};
G.isValidElement = sc;
G.lazy = function (e) {
  return { $$typeof: _1, _payload: { _status: -1, _result: e }, _init: L1 };
};
G.memo = function (e, t) {
  return { $$typeof: E1, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Ao.transition;
  Ao.transition = {};
  try {
    e();
  } finally {
    Ao.transition = t;
  }
};
G.unstable_act = bm;
G.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Fe.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
G.useId = function () {
  return Fe.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Fe.current.useRef(e);
};
G.useState = function (e) {
  return Fe.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Fe.current.useTransition();
};
G.version = "18.3.1";
hm.exports = G;
var _ = hm.exports;
const Ke = fm(_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D1 = _,
  z1 = Symbol.for("react.element"),
  A1 = Symbol.for("react.fragment"),
  I1 = Object.prototype.hasOwnProperty,
  V1 = D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  F1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function km(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) I1.call(t, r) && !F1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: z1,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: V1.current,
  };
}
Gs.Fragment = A1;
Gs.jsx = km;
Gs.jsxs = km;
pm.exports = Gs;
var f = pm.exports,
  Rl = {},
  Tm = { exports: {} },
  nt = {},
  Pm = { exports: {} },
  Cm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, z) {
    var B = N.length;
    N.push(z);
    e: for (; 0 < B; ) {
      var U = (B - 1) >>> 1,
        q = N[U];
      if (0 < i(q, z)) (N[U] = z), (N[B] = q), (B = U);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0],
      B = N.pop();
    if (B !== z) {
      N[0] = B;
      e: for (var U = 0, q = N.length, $e = q >>> 1; U < $e; ) {
        var ke = 2 * (U + 1) - 1,
          Xe = N[ke],
          _e = ke + 1,
          Cn = N[_e];
        if (0 > i(Xe, B))
          _e < q && 0 > i(Cn, Xe)
            ? ((N[U] = Cn), (N[_e] = B), (U = _e))
            : ((N[U] = Xe), (N[ke] = B), (U = ke));
        else if (_e < q && 0 > i(Cn, B)) (N[U] = Cn), (N[_e] = B), (U = _e);
        else break e;
      }
    }
    return z;
  }
  function i(N, z) {
    var B = N.sortIndex - z.sortIndex;
    return B !== 0 ? B : N.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    p = 3,
    v = !1,
    w = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= N)
        r(u), (z.sortIndex = z.expirationTime), t(l, z);
      else break;
      z = n(u);
    }
  }
  function x(N) {
    if (((y = !1), g(N), !w))
      if (n(l) !== null) (w = !0), $(b);
      else {
        var z = n(u);
        z !== null && Y(x, z.startTime - N);
      }
  }
  function b(N, z) {
    (w = !1), y && ((y = !1), m(C), (C = -1)), (v = !0);
    var B = p;
    try {
      for (
        g(z), d = n(l);
        d !== null && (!(d.expirationTime > z) || (N && !D()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var q = U(d.expirationTime <= z);
          (z = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(l) && r(l),
            g(z);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var $e = !0;
      else {
        var ke = n(u);
        ke !== null && Y(x, ke.startTime - z), ($e = !1);
      }
      return $e;
    } finally {
      (d = null), (p = B), (v = !1);
    }
  }
  var k = !1,
    j = null,
    C = -1,
    P = 5,
    T = -1;
  function D() {
    return !(e.unstable_now() - T < P);
  }
  function L() {
    if (j !== null) {
      var N = e.unstable_now();
      T = N;
      var z = !0;
      try {
        z = j(!0, N);
      } finally {
        z ? E() : ((k = !1), (j = null));
      }
    } else k = !1;
  }
  var E;
  if (typeof h == "function")
    E = function () {
      h(L);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      I = M.port2;
    (M.port1.onmessage = L),
      (E = function () {
        I.postMessage(null);
      });
  } else
    E = function () {
      S(L, 0);
    };
  function $(N) {
    (j = N), k || ((k = !0), E());
  }
  function Y(N, z) {
    C = S(function () {
      N(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), $(b));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var B = p;
      p = z;
      try {
        return N();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var B = p;
      p = N;
      try {
        return z();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (N, z, B) {
      var U = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? U + B : U))
          : (B = U),
        N)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = B + q),
        (N = {
          id: c++,
          callback: z,
          priorityLevel: N,
          startTime: B,
          expirationTime: q,
          sortIndex: -1,
        }),
        B > U
          ? ((N.sortIndex = B),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (y ? (m(C), (C = -1)) : (y = !0), Y(x, B - U)))
          : ((N.sortIndex = q), t(l, N), w || v || ((w = !0), $(b))),
        N
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (N) {
      var z = p;
      return function () {
        var B = p;
        p = z;
        try {
          return N.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(Cm);
Pm.exports = Cm;
var B1 = Pm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $1 = _,
  et = B1;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var jm = new Set(),
  xi = {};
function Yn(e, t) {
  Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
  for (xi[e] = t, e = 0; e < t.length; e++) jm.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Dl = Object.prototype.hasOwnProperty,
  H1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qd = {},
  Xd = {};
function U1(e) {
  return Dl.call(Xd, e)
    ? !0
    : Dl.call(Qd, e)
    ? !1
    : H1.test(e)
    ? (Xd[e] = !0)
    : ((Qd[e] = !0), !1);
}
function W1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function K1(e, t, n, r) {
  if (t === null || typeof t > "u" || W1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ac = /[\-:]([a-z])/g;
function lc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ac, lc);
    Ee[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ac, lc);
    Ee[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ac, lc);
  Ee[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uc(e, t, n, r) {
  var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (K1(t, n, i, r) && (n = null),
    r || i === null
      ? U1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = $1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  uo = Symbol.for("react.element"),
  Jn = Symbol.for("react.portal"),
  Zn = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  zl = Symbol.for("react.profiler"),
  Em = Symbol.for("react.provider"),
  _m = Symbol.for("react.context"),
  dc = Symbol.for("react.forward_ref"),
  Al = Symbol.for("react.suspense"),
  Il = Symbol.for("react.suspense_list"),
  fc = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  Om = Symbol.for("react.offscreen"),
  qd = Symbol.iterator;
function Ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qd && e[qd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  Ma;
function ti(e) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ma = (t && t[1]) || "";
    }
  return (
    `
` +
    Ma +
    e
  );
}
var Na = !1;
function La(e, t) {
  if (!e || Na) return "";
  Na = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ti(e) : "";
}
function G1(e) {
  switch (e.tag) {
    case 5:
      return ti(e.type);
    case 16:
      return ti("Lazy");
    case 13:
      return ti("Suspense");
    case 19:
      return ti("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = La(e.type, !1)), e;
    case 11:
      return (e = La(e.type.render, !1)), e;
    case 1:
      return (e = La(e.type, !0)), e;
    default:
      return "";
  }
}
function Vl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zn:
      return "Fragment";
    case Jn:
      return "Portal";
    case zl:
      return "Profiler";
    case cc:
      return "StrictMode";
    case Al:
      return "Suspense";
    case Il:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _m:
        return (e.displayName || "Context") + ".Consumer";
      case Em:
        return (e._context.displayName || "Context") + ".Provider";
      case dc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fc:
        return (
          (t = e.displayName || null), t !== null ? t : Vl(e.type) || "Memo"
        );
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return Vl(e(t));
        } catch {}
    }
  return null;
}
function Y1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Vl(t);
    case 8:
      return t === cc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Q1(e) {
  var t = Mm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function co(e) {
  e._valueTracker || (e._valueTracker = Q1(e));
}
function Nm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ts(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fl(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lm(e, t) {
  (t = t.checked), t != null && uc(e, "checked", t, !1);
}
function Bl(e, t) {
  Lm(e, t);
  var n = vn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $l(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $l(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function $l(e, t, n) {
  (t !== "number" || ts(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ni = Array.isArray;
function gr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ef(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (ni(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function Rm(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function tf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ul(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Dm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var fo,
  zm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        fo = fo || document.createElement("div"),
          fo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Si(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ai = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  X1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ai).forEach(function (e) {
  X1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ai[t] = ai[e]);
  });
});
function Am(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ai.hasOwnProperty(e) && ai[e])
    ? ("" + t).trim()
    : t + "px";
}
function Im(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Am(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var q1 = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Wl(e, t) {
  if (t) {
    if (q1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Kl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gl = null;
function pc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yl = null,
  vr = null,
  yr = null;
function nf(e) {
  if ((e = Wi(e))) {
    if (typeof Yl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Js(t)), Yl(e.stateNode, e.type, t));
  }
}
function Vm(e) {
  vr ? (yr ? yr.push(e) : (yr = [e])) : (vr = e);
}
function Fm() {
  if (vr) {
    var e = vr,
      t = yr;
    if (((yr = vr = null), nf(e), t)) for (e = 0; e < t.length; e++) nf(t[e]);
  }
}
function Bm(e, t) {
  return e(t);
}
function $m() {}
var Ra = !1;
function Hm(e, t, n) {
  if (Ra) return e(t, n);
  Ra = !0;
  try {
    return Bm(e, t, n);
  } finally {
    (Ra = !1), (vr !== null || yr !== null) && ($m(), Fm());
  }
}
function bi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Js(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Ql = !1;
if (Ft)
  try {
    var Wr = {};
    Object.defineProperty(Wr, "passive", {
      get: function () {
        Ql = !0;
      },
    }),
      window.addEventListener("test", Wr, Wr),
      window.removeEventListener("test", Wr, Wr);
  } catch {
    Ql = !1;
  }
function J1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var li = !1,
  ns = null,
  rs = !1,
  Xl = null,
  Z1 = {
    onError: function (e) {
      (li = !0), (ns = e);
    },
  };
function e2(e, t, n, r, i, o, s, a, l) {
  (li = !1), (ns = null), J1.apply(Z1, arguments);
}
function t2(e, t, n, r, i, o, s, a, l) {
  if ((e2.apply(this, arguments), li)) {
    if (li) {
      var u = ns;
      (li = !1), (ns = null);
    } else throw Error(O(198));
    rs || ((rs = !0), (Xl = u));
  }
}
function Qn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Um(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function rf(e) {
  if (Qn(e) !== e) throw Error(O(188));
}
function n2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return rf(i), e;
        if (o === r) return rf(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Wm(e) {
  return (e = n2(e)), e !== null ? Km(e) : null;
}
function Km(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Km(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gm = et.unstable_scheduleCallback,
  of = et.unstable_cancelCallback,
  r2 = et.unstable_shouldYield,
  i2 = et.unstable_requestPaint,
  ve = et.unstable_now,
  o2 = et.unstable_getCurrentPriorityLevel,
  hc = et.unstable_ImmediatePriority,
  Ym = et.unstable_UserBlockingPriority,
  is = et.unstable_NormalPriority,
  s2 = et.unstable_LowPriority,
  Qm = et.unstable_IdlePriority,
  Ys = null,
  Pt = null;
function a2(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Ys, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : c2,
  l2 = Math.log,
  u2 = Math.LN2;
function c2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((l2(e) / u2) | 0)) | 0;
}
var po = 64,
  ho = 4194304;
function ri(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = ri(a)) : ((o &= s), o !== 0 && (r = ri(o)));
  } else (s = n & ~i), s !== 0 ? (r = ri(s)) : o !== 0 && (r = ri(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function d2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function f2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - vt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = d2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xm() {
  var e = po;
  return (po <<= 1), !(po & 4194240) && (po = 64), e;
}
function Da(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n);
}
function p2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - vt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function mc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var X = 0;
function qm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jm,
  gc,
  Zm,
  eg,
  tg,
  Jl = !1,
  mo = [],
  an = null,
  ln = null,
  un = null,
  ki = new Map(),
  Ti = new Map(),
  tn = [],
  h2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function sf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      ki.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ti.delete(t.pointerId);
  }
}
function Kr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Wi(t)), t !== null && gc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function m2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (an = Kr(an, e, t, n, r, i)), !0;
    case "dragenter":
      return (ln = Kr(ln, e, t, n, r, i)), !0;
    case "mouseover":
      return (un = Kr(un, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ki.set(o, Kr(ki.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ti.set(o, Kr(Ti.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ng(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = Qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Um(n)), t !== null)) {
          (e.blockedOn = t),
            tg(e.priority, function () {
              Zm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Io(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gl = r), n.target.dispatchEvent(r), (Gl = null);
    } else return (t = Wi(n)), t !== null && gc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function af(e, t, n) {
  Io(e) && n.delete(t);
}
function g2() {
  (Jl = !1),
    an !== null && Io(an) && (an = null),
    ln !== null && Io(ln) && (ln = null),
    un !== null && Io(un) && (un = null),
    ki.forEach(af),
    Ti.forEach(af);
}
function Gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Jl ||
      ((Jl = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, g2)));
}
function Pi(e) {
  function t(i) {
    return Gr(i, e);
  }
  if (0 < mo.length) {
    Gr(mo[0], e);
    for (var n = 1; n < mo.length; n++) {
      var r = mo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    an !== null && Gr(an, e),
      ln !== null && Gr(ln, e),
      un !== null && Gr(un, e),
      ki.forEach(t),
      Ti.forEach(t),
      n = 0;
    n < tn.length;
    n++
  )
    (r = tn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
    ng(n), n.blockedOn === null && tn.shift();
}
var wr = Ut.ReactCurrentBatchConfig,
  ss = !0;
function v2(e, t, n, r) {
  var i = X,
    o = wr.transition;
  wr.transition = null;
  try {
    (X = 1), vc(e, t, n, r);
  } finally {
    (X = i), (wr.transition = o);
  }
}
function y2(e, t, n, r) {
  var i = X,
    o = wr.transition;
  wr.transition = null;
  try {
    (X = 4), vc(e, t, n, r);
  } finally {
    (X = i), (wr.transition = o);
  }
}
function vc(e, t, n, r) {
  if (ss) {
    var i = Zl(e, t, n, r);
    if (i === null) Wa(e, t, r, as, n), sf(e, r);
    else if (m2(i, e, t, n, r)) r.stopPropagation();
    else if ((sf(e, r), t & 4 && -1 < h2.indexOf(e))) {
      for (; i !== null; ) {
        var o = Wi(i);
        if (
          (o !== null && Jm(o),
          (o = Zl(e, t, n, r)),
          o === null && Wa(e, t, r, as, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Wa(e, t, r, null, n);
  }
}
var as = null;
function Zl(e, t, n, r) {
  if (((as = null), (e = pc(r)), (e = Rn(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Um(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (as = e), null;
}
function rg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (o2()) {
        case hc:
          return 1;
        case Ym:
          return 4;
        case is:
        case s2:
          return 16;
        case Qm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var on = null,
  yc = null,
  Vo = null;
function ig() {
  if (Vo) return Vo;
  var e,
    t = yc,
    n = t.length,
    r,
    i = "value" in on ? on.value : on.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Vo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function go() {
  return !0;
}
function lf() {
  return !1;
}
function rt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? go
        : lf),
      (this.isPropagationStopped = lf),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = go));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = go));
      },
      persist: function () {},
      isPersistent: go,
    }),
    t
  );
}
var Vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wc = rt(Vr),
  Ui = pe({}, Vr, { view: 0, detail: 0 }),
  w2 = rt(Ui),
  za,
  Aa,
  Yr,
  Qs = pe({}, Ui, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Yr &&
            (Yr && e.type === "mousemove"
              ? ((za = e.screenX - Yr.screenX), (Aa = e.screenY - Yr.screenY))
              : (Aa = za = 0),
            (Yr = e)),
          za);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Aa;
    },
  }),
  uf = rt(Qs),
  x2 = pe({}, Qs, { dataTransfer: 0 }),
  S2 = rt(x2),
  b2 = pe({}, Ui, { relatedTarget: 0 }),
  Ia = rt(b2),
  k2 = pe({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  T2 = rt(k2),
  P2 = pe({}, Vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  C2 = rt(P2),
  j2 = pe({}, Vr, { data: 0 }),
  cf = rt(j2),
  E2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  _2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  O2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function M2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = O2[e]) ? !!t[e] : !1;
}
function xc() {
  return M2;
}
var N2 = pe({}, Ui, {
    key: function (e) {
      if (e.key) {
        var t = E2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xc,
    charCode: function (e) {
      return e.type === "keypress" ? Fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  L2 = rt(N2),
  R2 = pe({}, Qs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  df = rt(R2),
  D2 = pe({}, Ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xc,
  }),
  z2 = rt(D2),
  A2 = pe({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  I2 = rt(A2),
  V2 = pe({}, Qs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  F2 = rt(V2),
  B2 = [9, 13, 27, 32],
  Sc = Ft && "CompositionEvent" in window,
  ui = null;
Ft && "documentMode" in document && (ui = document.documentMode);
var $2 = Ft && "TextEvent" in window && !ui,
  og = Ft && (!Sc || (ui && 8 < ui && 11 >= ui)),
  ff = " ",
  pf = !1;
function sg(e, t) {
  switch (e) {
    case "keyup":
      return B2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ag(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var er = !1;
function H2(e, t) {
  switch (e) {
    case "compositionend":
      return ag(t);
    case "keypress":
      return t.which !== 32 ? null : ((pf = !0), ff);
    case "textInput":
      return (e = t.data), e === ff && pf ? null : e;
    default:
      return null;
  }
}
function U2(e, t) {
  if (er)
    return e === "compositionend" || (!Sc && sg(e, t))
      ? ((e = ig()), (Vo = yc = on = null), (er = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return og && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var W2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!W2[e.type] : t === "textarea";
}
function lg(e, t, n, r) {
  Vm(r),
    (t = ls(t, "onChange")),
    0 < t.length &&
      ((n = new wc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ci = null,
  Ci = null;
function K2(e) {
  wg(e, 0);
}
function Xs(e) {
  var t = rr(e);
  if (Nm(t)) return e;
}
function G2(e, t) {
  if (e === "change") return t;
}
var ug = !1;
if (Ft) {
  var Va;
  if (Ft) {
    var Fa = "oninput" in document;
    if (!Fa) {
      var mf = document.createElement("div");
      mf.setAttribute("oninput", "return;"),
        (Fa = typeof mf.oninput == "function");
    }
    Va = Fa;
  } else Va = !1;
  ug = Va && (!document.documentMode || 9 < document.documentMode);
}
function gf() {
  ci && (ci.detachEvent("onpropertychange", cg), (Ci = ci = null));
}
function cg(e) {
  if (e.propertyName === "value" && Xs(Ci)) {
    var t = [];
    lg(t, Ci, e, pc(e)), Hm(K2, t);
  }
}
function Y2(e, t, n) {
  e === "focusin"
    ? (gf(), (ci = t), (Ci = n), ci.attachEvent("onpropertychange", cg))
    : e === "focusout" && gf();
}
function Q2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xs(Ci);
}
function X2(e, t) {
  if (e === "click") return Xs(t);
}
function q2(e, t) {
  if (e === "input" || e === "change") return Xs(t);
}
function J2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : J2;
function ji(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Dl.call(t, i) || !wt(e[i], t[i])) return !1;
  }
  return !0;
}
function vf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yf(e, t) {
  var n = vf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = vf(n);
  }
}
function dg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? dg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function fg() {
  for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ts(e.document);
  }
  return t;
}
function bc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Z2(e) {
  var t = fg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = yf(n, o));
        var s = yf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ew = Ft && "documentMode" in document && 11 >= document.documentMode,
  tr = null,
  eu = null,
  di = null,
  tu = !1;
function wf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  tu ||
    tr == null ||
    tr !== ts(r) ||
    ((r = tr),
    "selectionStart" in r && bc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (di && ji(di, r)) ||
      ((di = r),
      (r = ls(eu, "onSelect")),
      0 < r.length &&
        ((t = new wc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tr))));
}
function vo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nr = {
    animationend: vo("Animation", "AnimationEnd"),
    animationiteration: vo("Animation", "AnimationIteration"),
    animationstart: vo("Animation", "AnimationStart"),
    transitionend: vo("Transition", "TransitionEnd"),
  },
  Ba = {},
  pg = {};
Ft &&
  ((pg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nr.animationend.animation,
    delete nr.animationiteration.animation,
    delete nr.animationstart.animation),
  "TransitionEvent" in window || delete nr.transitionend.transition);
function qs(e) {
  if (Ba[e]) return Ba[e];
  if (!nr[e]) return e;
  var t = nr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in pg) return (Ba[e] = t[n]);
  return e;
}
var hg = qs("animationend"),
  mg = qs("animationiteration"),
  gg = qs("animationstart"),
  vg = qs("transitionend"),
  yg = new Map(),
  xf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bn(e, t) {
  yg.set(e, t), Yn(t, [e]);
}
for (var $a = 0; $a < xf.length; $a++) {
  var Ha = xf[$a],
    tw = Ha.toLowerCase(),
    nw = Ha[0].toUpperCase() + Ha.slice(1);
  bn(tw, "on" + nw);
}
bn(hg, "onAnimationEnd");
bn(mg, "onAnimationIteration");
bn(gg, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(vg, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
Yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ii =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rw = new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));
function Sf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), t2(r, t, void 0, e), (e.currentTarget = null);
}
function wg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Sf(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Sf(i, a, u), (o = l);
        }
    }
  }
  if (rs) throw ((e = Xl), (rs = !1), (Xl = null), e);
}
function ne(e, t) {
  var n = t[su];
  n === void 0 && (n = t[su] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xg(t, e, 2, !1), n.add(r));
}
function Ua(e, t, n) {
  var r = 0;
  t && (r |= 4), xg(n, e, r, t);
}
var yo = "_reactListening" + Math.random().toString(36).slice(2);
function Ei(e) {
  if (!e[yo]) {
    (e[yo] = !0),
      jm.forEach(function (n) {
        n !== "selectionchange" && (rw.has(n) || Ua(n, !1, e), Ua(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yo] || ((t[yo] = !0), Ua("selectionchange", !1, t));
  }
}
function xg(e, t, n, r) {
  switch (rg(t)) {
    case 1:
      var i = v2;
      break;
    case 4:
      i = y2;
      break;
    default:
      i = vc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ql ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Wa(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Rn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Hm(function () {
    var u = o,
      c = pc(n),
      d = [];
    e: {
      var p = yg.get(e);
      if (p !== void 0) {
        var v = wc,
          w = e;
        switch (e) {
          case "keypress":
            if (Fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = L2;
            break;
          case "focusin":
            (w = "focus"), (v = Ia);
            break;
          case "focusout":
            (w = "blur"), (v = Ia);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ia;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = S2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = z2;
            break;
          case hg:
          case mg:
          case gg:
            v = T2;
            break;
          case vg:
            v = I2;
            break;
          case "scroll":
            v = w2;
            break;
          case "wheel":
            v = F2;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = C2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = df;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          m = y ? (p !== null ? p + "Capture" : null) : p;
        y = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              m !== null && ((x = bi(h, m)), x != null && y.push(_i(h, x, g)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((p = new v(p, w, null, n, c)), d.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Gl &&
            (w = n.relatedTarget || n.fromElement) &&
            (Rn(w) || w[Bt]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = u),
              (w = w ? Rn(w) : null),
              w !== null &&
                ((S = Qn(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((y = uf),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = df),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (S = v == null ? p : rr(v)),
            (g = w == null ? p : rr(w)),
            (p = new y(x, h + "leave", v, n, c)),
            (p.target = S),
            (p.relatedTarget = g),
            (x = null),
            Rn(c) === u &&
              ((y = new y(m, h + "enter", w, n, c)),
              (y.target = g),
              (y.relatedTarget = S),
              (x = y)),
            (S = x),
            v && w)
          )
            t: {
              for (y = v, m = w, h = 0, g = y; g; g = qn(g)) h++;
              for (g = 0, x = m; x; x = qn(x)) g++;
              for (; 0 < h - g; ) (y = qn(y)), h--;
              for (; 0 < g - h; ) (m = qn(m)), g--;
              for (; h--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = qn(y)), (m = qn(m));
              }
              y = null;
            }
          else y = null;
          v !== null && bf(d, p, v, y, !1),
            w !== null && S !== null && bf(d, S, w, y, !0);
        }
      }
      e: {
        if (
          ((p = u ? rr(u) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var b = G2;
        else if (hf(p))
          if (ug) b = q2;
          else {
            b = Q2;
            var k = Y2;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (b = X2);
        if (b && (b = b(e, u))) {
          lg(d, b, n, c);
          break e;
        }
        k && k(e, p, u),
          e === "focusout" &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === "number" &&
            $l(p, "number", p.value);
      }
      switch (((k = u ? rr(u) : window), e)) {
        case "focusin":
          (hf(k) || k.contentEditable === "true") &&
            ((tr = k), (eu = u), (di = null));
          break;
        case "focusout":
          di = eu = tr = null;
          break;
        case "mousedown":
          tu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (tu = !1), wf(d, n, c);
          break;
        case "selectionchange":
          if (ew) break;
        case "keydown":
        case "keyup":
          wf(d, n, c);
      }
      var j;
      if (Sc)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        er
          ? sg(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (og &&
          n.locale !== "ko" &&
          (er || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && er && (j = ig())
            : ((on = c),
              (yc = "value" in on ? on.value : on.textContent),
              (er = !0))),
        (k = ls(u, C)),
        0 < k.length &&
          ((C = new cf(C, e, null, n, c)),
          d.push({ event: C, listeners: k }),
          j ? (C.data = j) : ((j = ag(n)), j !== null && (C.data = j)))),
        (j = $2 ? H2(e, n) : U2(e, n)) &&
          ((u = ls(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new cf("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = j)));
    }
    wg(d, t);
  });
}
function _i(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = bi(e, n)),
      o != null && r.unshift(_i(e, o, i)),
      (o = bi(e, t)),
      o != null && r.push(_i(e, o, i))),
      (e = e.return);
  }
  return r;
}
function qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = bi(n, o)), l != null && s.unshift(_i(n, l, a)))
        : i || ((l = bi(n, o)), l != null && s.push(_i(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var iw = /\r\n?/g,
  ow = /\u0000|\uFFFD/g;
function kf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      iw,
      `
`
    )
    .replace(ow, "");
}
function wo(e, t, n) {
  if (((t = kf(t)), kf(e) !== t && n)) throw Error(O(425));
}
function us() {}
var nu = null,
  ru = null;
function iu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ou = typeof setTimeout == "function" ? setTimeout : void 0,
  sw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Tf = typeof Promise == "function" ? Promise : void 0,
  aw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Tf < "u"
      ? function (e) {
          return Tf.resolve(null).then(e).catch(lw);
        }
      : ou;
function lw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ka(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Pi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Pi(t);
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Fr = Math.random().toString(36).slice(2),
  Tt = "__reactFiber$" + Fr,
  Oi = "__reactProps$" + Fr,
  Bt = "__reactContainer$" + Fr,
  su = "__reactEvents$" + Fr,
  uw = "__reactListeners$" + Fr,
  cw = "__reactHandles$" + Fr;
function Rn(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bt] || n[Tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pf(e); e !== null; ) {
          if ((n = e[Tt])) return n;
          e = Pf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Wi(e) {
  return (
    (e = e[Tt] || e[Bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Js(e) {
  return e[Oi] || null;
}
var au = [],
  ir = -1;
function kn(e) {
  return { current: e };
}
function re(e) {
  0 > ir || ((e.current = au[ir]), (au[ir] = null), ir--);
}
function Z(e, t) {
  ir++, (au[ir] = e.current), (e.current = t);
}
var yn = {},
  ze = kn(yn),
  Ge = kn(!1),
  $n = yn;
function Cr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function cs() {
  re(Ge), re(ze);
}
function Cf(e, t, n) {
  if (ze.current !== yn) throw Error(O(168));
  Z(ze, t), Z(Ge, n);
}
function Sg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, Y1(e) || "Unknown", i));
  return pe({}, n, r);
}
function ds(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    ($n = ze.current),
    Z(ze, e),
    Z(Ge, Ge.current),
    !0
  );
}
function jf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Sg(e, t, $n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Ge),
      re(ze),
      Z(ze, e))
    : re(Ge),
    Z(Ge, n);
}
var Nt = null,
  Zs = !1,
  Ga = !1;
function bg(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function dw(e) {
  (Zs = !0), bg(e);
}
function Tn() {
  if (!Ga && Nt !== null) {
    Ga = !0;
    var e = 0,
      t = X;
    try {
      var n = Nt;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Zs = !1);
    } catch (i) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), Gm(hc, Tn), i);
    } finally {
      (X = t), (Ga = !1);
    }
  }
  return null;
}
var or = [],
  sr = 0,
  fs = null,
  ps = 0,
  st = [],
  at = 0,
  Hn = null,
  Lt = 1,
  Rt = "";
function On(e, t) {
  (or[sr++] = ps), (or[sr++] = fs), (fs = e), (ps = t);
}
function kg(e, t, n) {
  (st[at++] = Lt), (st[at++] = Rt), (st[at++] = Hn), (Hn = e);
  var r = Lt;
  e = Rt;
  var i = 32 - vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - vt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Lt = (1 << (32 - vt(t) + i)) | (n << i) | r),
      (Rt = o + e);
  } else (Lt = (1 << o) | (n << i) | r), (Rt = e);
}
function kc(e) {
  e.return !== null && (On(e, 1), kg(e, 1, 0));
}
function Tc(e) {
  for (; e === fs; )
    (fs = or[--sr]), (or[sr] = null), (ps = or[--sr]), (or[sr] = null);
  for (; e === Hn; )
    (Hn = st[--at]),
      (st[at] = null),
      (Rt = st[--at]),
      (st[at] = null),
      (Lt = st[--at]),
      (st[at] = null);
}
var Ze = null,
  Je = null,
  se = !1,
  gt = null;
function Tg(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ef(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Je = cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Hn !== null ? { id: Lt, overflow: Rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function lu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uu(e) {
  if (se) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Ef(e, t)) {
        if (lu(e)) throw Error(O(418));
        t = cn(n.nextSibling);
        var r = Ze;
        t && Ef(e, t)
          ? Tg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e));
      }
    } else {
      if (lu(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e);
    }
  }
}
function _f(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function xo(e) {
  if (e !== Ze) return !1;
  if (!se) return _f(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !iu(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (lu(e)) throw (Pg(), Error(O(418)));
    for (; t; ) Tg(e, t), (t = cn(t.nextSibling));
  }
  if ((_f(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Pg() {
  for (var e = Je; e; ) e = cn(e.nextSibling);
}
function jr() {
  (Je = Ze = null), (se = !1);
}
function Pc(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var fw = Ut.ReactCurrentBatchConfig;
function Qr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function So(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Of(e) {
  var t = e._init;
  return t(e._payload);
}
function Cg(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = hn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, g, x) {
    return h === null || h.tag !== 6
      ? ((h = el(g, m.mode, x)), (h.return = m), h)
      : ((h = i(h, g)), (h.return = m), h);
  }
  function l(m, h, g, x) {
    var b = g.type;
    return b === Zn
      ? c(m, h, g.props.children, x, g.key)
      : h !== null &&
        (h.elementType === b ||
          (typeof b == "object" &&
            b !== null &&
            b.$$typeof === qt &&
            Of(b) === h.type))
      ? ((x = i(h, g.props)), (x.ref = Qr(m, h, g)), (x.return = m), x)
      : ((x = Go(g.type, g.key, g.props, null, m.mode, x)),
        (x.ref = Qr(m, h, g)),
        (x.return = m),
        x);
  }
  function u(m, h, g, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = tl(g, m.mode, x)), (h.return = m), h)
      : ((h = i(h, g.children || [])), (h.return = m), h);
  }
  function c(m, h, g, x, b) {
    return h === null || h.tag !== 7
      ? ((h = Fn(g, m.mode, x, b)), (h.return = m), h)
      : ((h = i(h, g)), (h.return = m), h);
  }
  function d(m, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = el("" + h, m.mode, g)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case uo:
          return (
            (g = Go(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = Qr(m, null, h)),
            (g.return = m),
            g
          );
        case Jn:
          return (h = tl(h, m.mode, g)), (h.return = m), h;
        case qt:
          var x = h._init;
          return d(m, x(h._payload), g);
      }
      if (ni(h) || Ur(h))
        return (h = Fn(h, m.mode, g, null)), (h.return = m), h;
      So(m, h);
    }
    return null;
  }
  function p(m, h, g, x) {
    var b = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : a(m, h, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case uo:
          return g.key === b ? l(m, h, g, x) : null;
        case Jn:
          return g.key === b ? u(m, h, g, x) : null;
        case qt:
          return (b = g._init), p(m, h, b(g._payload), x);
      }
      if (ni(g) || Ur(g)) return b !== null ? null : c(m, h, g, x, null);
      So(m, g);
    }
    return null;
  }
  function v(m, h, g, x, b) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(g) || null), a(h, m, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case uo:
          return (m = m.get(x.key === null ? g : x.key) || null), l(h, m, x, b);
        case Jn:
          return (m = m.get(x.key === null ? g : x.key) || null), u(h, m, x, b);
        case qt:
          var k = x._init;
          return v(m, h, g, k(x._payload), b);
      }
      if (ni(x) || Ur(x)) return (m = m.get(g) || null), c(h, m, x, b, null);
      So(h, x);
    }
    return null;
  }
  function w(m, h, g, x) {
    for (
      var b = null, k = null, j = h, C = (h = 0), P = null;
      j !== null && C < g.length;
      C++
    ) {
      j.index > C ? ((P = j), (j = null)) : (P = j.sibling);
      var T = p(m, j, g[C], x);
      if (T === null) {
        j === null && (j = P);
        break;
      }
      e && j && T.alternate === null && t(m, j),
        (h = o(T, h, C)),
        k === null ? (b = T) : (k.sibling = T),
        (k = T),
        (j = P);
    }
    if (C === g.length) return n(m, j), se && On(m, C), b;
    if (j === null) {
      for (; C < g.length; C++)
        (j = d(m, g[C], x)),
          j !== null &&
            ((h = o(j, h, C)), k === null ? (b = j) : (k.sibling = j), (k = j));
      return se && On(m, C), b;
    }
    for (j = r(m, j); C < g.length; C++)
      (P = v(j, m, C, g[C], x)),
        P !== null &&
          (e && P.alternate !== null && j.delete(P.key === null ? C : P.key),
          (h = o(P, h, C)),
          k === null ? (b = P) : (k.sibling = P),
          (k = P));
    return (
      e &&
        j.forEach(function (D) {
          return t(m, D);
        }),
      se && On(m, C),
      b
    );
  }
  function y(m, h, g, x) {
    var b = Ur(g);
    if (typeof b != "function") throw Error(O(150));
    if (((g = b.call(g)), g == null)) throw Error(O(151));
    for (
      var k = (b = null), j = h, C = (h = 0), P = null, T = g.next();
      j !== null && !T.done;
      C++, T = g.next()
    ) {
      j.index > C ? ((P = j), (j = null)) : (P = j.sibling);
      var D = p(m, j, T.value, x);
      if (D === null) {
        j === null && (j = P);
        break;
      }
      e && j && D.alternate === null && t(m, j),
        (h = o(D, h, C)),
        k === null ? (b = D) : (k.sibling = D),
        (k = D),
        (j = P);
    }
    if (T.done) return n(m, j), se && On(m, C), b;
    if (j === null) {
      for (; !T.done; C++, T = g.next())
        (T = d(m, T.value, x)),
          T !== null &&
            ((h = o(T, h, C)), k === null ? (b = T) : (k.sibling = T), (k = T));
      return se && On(m, C), b;
    }
    for (j = r(m, j); !T.done; C++, T = g.next())
      (T = v(j, m, C, T.value, x)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? C : T.key),
          (h = o(T, h, C)),
          k === null ? (b = T) : (k.sibling = T),
          (k = T));
    return (
      e &&
        j.forEach(function (L) {
          return t(m, L);
        }),
      se && On(m, C),
      b
    );
  }
  function S(m, h, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Zn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case uo:
          e: {
            for (var b = g.key, k = h; k !== null; ) {
              if (k.key === b) {
                if (((b = g.type), b === Zn)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (h = i(k, g.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  k.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === qt &&
                    Of(b) === k.type)
                ) {
                  n(m, k.sibling),
                    (h = i(k, g.props)),
                    (h.ref = Qr(m, k, g)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            g.type === Zn
              ? ((h = Fn(g.props.children, m.mode, x, g.key)),
                (h.return = m),
                (m = h))
              : ((x = Go(g.type, g.key, g.props, null, m.mode, x)),
                (x.ref = Qr(m, h, g)),
                (x.return = m),
                (m = x));
          }
          return s(m);
        case Jn:
          e: {
            for (k = g.key; h !== null; ) {
              if (h.key === k)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = tl(g, m.mode, x)), (h.return = m), (m = h);
          }
          return s(m);
        case qt:
          return (k = g._init), S(m, h, k(g._payload), x);
      }
      if (ni(g)) return w(m, h, g, x);
      if (Ur(g)) return y(m, h, g, x);
      So(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, g)), (h.return = m), (m = h))
          : (n(m, h), (h = el(g, m.mode, x)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return S;
}
var Er = Cg(!0),
  jg = Cg(!1),
  hs = kn(null),
  ms = null,
  ar = null,
  Cc = null;
function jc() {
  Cc = ar = ms = null;
}
function Ec(e) {
  var t = hs.current;
  re(hs), (e._currentValue = t);
}
function cu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xr(e, t) {
  (ms = e),
    (Cc = ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (Cc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ar === null)) {
      if (ms === null) throw Error(O(308));
      (ar = e), (ms.dependencies = { lanes: 0, firstContext: e });
    } else ar = ar.next = e;
  return t;
}
var Dn = null;
function _c(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function Eg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), _c(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function Oc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _g(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function zt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), _c(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function Bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n);
  }
}
function Mf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function gs(e, t, n, r) {
  var i = e.updateQueue;
  Jt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var p = a.lane,
        v = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((p = t), (v = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                d = w.call(v, d, p);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (p = typeof w == "function" ? w.call(v, d, p) : w),
                p == null)
              )
                break e;
              d = pe({}, d, p);
              break e;
            case 2:
              Jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
          (s |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Wn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Nf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var Ki = {},
  Ct = kn(Ki),
  Mi = kn(Ki),
  Ni = kn(Ki);
function zn(e) {
  if (e === Ki) throw Error(O(174));
  return e;
}
function Mc(e, t) {
  switch ((Z(Ni, t), Z(Mi, e), Z(Ct, Ki), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ul(t, e));
  }
  re(Ct), Z(Ct, t);
}
function _r() {
  re(Ct), re(Mi), re(Ni);
}
function Og(e) {
  zn(Ni.current);
  var t = zn(Ct.current),
    n = Ul(t, e.type);
  t !== n && (Z(Mi, e), Z(Ct, n));
}
function Nc(e) {
  Mi.current === e && (re(Ct), re(Mi));
}
var ce = kn(0);
function vs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ya = [];
function Lc() {
  for (var e = 0; e < Ya.length; e++)
    Ya[e]._workInProgressVersionPrimary = null;
  Ya.length = 0;
}
var $o = Ut.ReactCurrentDispatcher,
  Qa = Ut.ReactCurrentBatchConfig,
  Un = 0,
  fe = null,
  we = null,
  Se = null,
  ys = !1,
  fi = !1,
  Li = 0,
  pw = 0;
function Oe() {
  throw Error(O(321));
}
function Rc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Dc(e, t, n, r, i, o) {
  if (
    ((Un = o),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($o.current = e === null || e.memoizedState === null ? vw : yw),
    (e = n(r, i)),
    fi)
  ) {
    o = 0;
    do {
      if (((fi = !1), (Li = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (Se = we = null),
        (t.updateQueue = null),
        ($o.current = ww),
        (e = n(r, i));
    } while (fi);
  }
  if (
    (($o.current = ws),
    (t = we !== null && we.next !== null),
    (Un = 0),
    (Se = we = fe = null),
    (ys = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function zc() {
  var e = Li !== 0;
  return (Li = 0), e;
}
function bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function dt() {
  if (we === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Se === null ? fe.memoizedState : Se.next;
  if (t !== null) (Se = t), (we = e);
  else {
    if (e === null) throw Error(O(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Ri(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xa(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = we,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Un & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (fe.lanes |= c),
          (Wn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      wt(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (fe.lanes |= o), (Wn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qa(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    wt(o, t.memoizedState) || (We = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Mg() {}
function Ng(e, t) {
  var n = fe,
    r = dt(),
    i = t(),
    o = !wt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (We = !0)),
    (r = r.queue),
    Ac(Dg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Di(9, Rg.bind(null, n, r, i, t), void 0, null),
      be === null)
    )
      throw Error(O(349));
    Un & 30 || Lg(n, t, i);
  }
  return i;
}
function Lg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zg(t) && Ag(e);
}
function Dg(e, t, n) {
  return n(function () {
    zg(t) && Ag(e);
  });
}
function zg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Ag(e) {
  var t = $t(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function Lf(e) {
  var t = bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ri,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gw.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Di(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ig() {
  return dt().memoizedState;
}
function Ho(e, t, n, r) {
  var i = bt();
  (fe.flags |= e),
    (i.memoizedState = Di(1 | t, n, void 0, r === void 0 ? null : r));
}
function ea(e, t, n, r) {
  var i = dt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var s = we.memoizedState;
    if (((o = s.destroy), r !== null && Rc(r, s.deps))) {
      i.memoizedState = Di(t, n, o, r);
      return;
    }
  }
  (fe.flags |= e), (i.memoizedState = Di(1 | t, n, o, r));
}
function Rf(e, t) {
  return Ho(8390656, 8, e, t);
}
function Ac(e, t) {
  return ea(2048, 8, e, t);
}
function Vg(e, t) {
  return ea(4, 2, e, t);
}
function Fg(e, t) {
  return ea(4, 4, e, t);
}
function Bg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $g(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ea(4, 4, Bg.bind(null, t, e), n)
  );
}
function Ic() {}
function Hg(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ug(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wg(e, t, n) {
  return Un & 21
    ? (wt(n, t) || ((n = Xm()), (fe.lanes |= n), (Wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function hw(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qa.transition;
  Qa.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (Qa.transition = r);
  }
}
function Kg() {
  return dt().memoizedState;
}
function mw(e, t, n) {
  var r = pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gg(e))
  )
    Yg(t, n);
  else if (((n = Eg(e, t, n, r)), n !== null)) {
    var i = Ve();
    yt(n, e, r, i), Qg(n, t, r);
  }
}
function gw(e, t, n) {
  var r = pn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gg(e)) Yg(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), wt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), _c(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Eg(e, t, i, r)),
      n !== null && ((i = Ve()), yt(n, e, r, i), Qg(n, t, r));
  }
}
function Gg(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function Yg(e, t) {
  fi = ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Qg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n);
  }
}
var ws = {
    readContext: ct,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  vw = {
    readContext: ct,
    useCallback: function (e, t) {
      return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: Rf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ho(4194308, 4, Bg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = mw.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Lf,
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      return (bt().memoizedState = e);
    },
    useTransition: function () {
      var e = Lf(!1),
        t = e[0];
      return (e = hw.bind(null, e[1])), (bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        i = bt();
      if (se) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(O(349));
        Un & 30 || Lg(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Rf(Dg.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Di(9, Rg.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bt(),
        t = be.identifierPrefix;
      if (se) {
        var n = Rt,
          r = Lt;
        (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Li++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yw = {
    readContext: ct,
    useCallback: Hg,
    useContext: ct,
    useEffect: Ac,
    useImperativeHandle: $g,
    useInsertionEffect: Vg,
    useLayoutEffect: Fg,
    useMemo: Ug,
    useReducer: Xa,
    useRef: Ig,
    useState: function () {
      return Xa(Ri);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      var t = dt();
      return Wg(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Xa(Ri)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Mg,
    useSyncExternalStore: Ng,
    useId: Kg,
    unstable_isNewReconciler: !1,
  },
  ww = {
    readContext: ct,
    useCallback: Hg,
    useContext: ct,
    useEffect: Ac,
    useImperativeHandle: $g,
    useInsertionEffect: Vg,
    useLayoutEffect: Fg,
    useMemo: Ug,
    useReducer: qa,
    useRef: Ig,
    useState: function () {
      return qa(Ri);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      var t = dt();
      return we === null ? (t.memoizedState = e) : Wg(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = qa(Ri)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Mg,
    useSyncExternalStore: Ng,
    useId: Kg,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function du(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ta = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      i = pn(e),
      o = zt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (yt(t, e, i, r), Bo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      i = pn(e),
      o = zt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (yt(t, e, i, r), Bo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = pn(e),
      i = zt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = dn(e, i, r)),
      t !== null && (yt(t, e, r, n), Bo(t, e, r));
  },
};
function Df(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ji(n, r) || !ji(i, o)
      : !0
  );
}
function Xg(e, t, n) {
  var r = !1,
    i = yn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ct(o))
      : ((i = Ye(t) ? $n : ze.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Cr(e, i) : yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ta),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function zf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ta.enqueueReplaceState(t, t.state, null);
}
function fu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Oc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ct(o))
    : ((o = Ye(t) ? $n : ze.current), (i.context = Cr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (du(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ta.enqueueReplaceState(i, i.state, null),
      gs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Or(e, t) {
  try {
    var n = "",
      r = t;
    do (n += G1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ja(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var xw = typeof WeakMap == "function" ? WeakMap : Map;
function qg(e, t, n) {
  (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ss || ((Ss = !0), (ku = r)), pu(e, t);
    }),
    n
  );
}
function Jg(e, t, n) {
  (n = zt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        pu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        pu(e, t),
          typeof r != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Af(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Rw.bind(null, e, t, n)), t.then(e, e));
}
function If(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = zt(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sw = Ut.ReactCurrentOwner,
  We = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? jg(t, null, n, r) : Er(t, e.child, n, r);
}
function Ff(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    xr(t, i),
    (r = Dc(e, t, n, r, o, i)),
    (n = zc()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (se && n && kc(t), (t.flags |= 1), Ie(e, t, r, i), t.child)
  );
}
function Bf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Kc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Zg(e, t, o, r, i))
      : ((e = Go(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ji), n(s, r) && e.ref === t.ref)
    )
      return Ht(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = hn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zg(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ji(o, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), Ht(e, t, i);
  }
  return hu(e, t, n, r, i);
}
function ev(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(ur, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(ur, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Z(ur, qe),
        (qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(ur, qe),
      (qe |= r);
  return Ie(e, t, i, n), t.child;
}
function tv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function hu(e, t, n, r, i) {
  var o = Ye(n) ? $n : ze.current;
  return (
    (o = Cr(t, o)),
    xr(t, i),
    (n = Dc(e, t, n, r, o, i)),
    (r = zc()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (se && r && kc(t), (t.flags |= 1), Ie(e, t, n, i), t.child)
  );
}
function $f(e, t, n, r, i) {
  if (Ye(n)) {
    var o = !0;
    ds(t);
  } else o = !1;
  if ((xr(t, i), t.stateNode === null))
    Uo(e, t), Xg(t, n, r), fu(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = Ye(n) ? $n : ze.current), (u = Cr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && zf(t, s, r, u)),
      (Jt = !1);
    var p = t.memoizedState;
    (s.state = p),
      gs(t, r, s, i),
      (l = t.memoizedState),
      a !== r || p !== l || Ge.current || Jt
        ? (typeof c == "function" && (du(t, n, c, r), (l = t.memoizedState)),
          (a = Jt || Df(t, n, a, r, p, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      _g(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : pt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (p = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ct(l))
        : ((l = Ye(n) ? $n : ze.current), (l = Cr(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || p !== l) && zf(t, s, r, l)),
      (Jt = !1),
      (p = t.memoizedState),
      (s.state = p),
      gs(t, r, s, i);
    var w = t.memoizedState;
    a !== d || p !== w || Ge.current || Jt
      ? (typeof v == "function" && (du(t, n, v, r), (w = t.memoizedState)),
        (u = Jt || Df(t, n, u, r, p, w, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return mu(e, t, n, r, o, i);
}
function mu(e, t, n, r, i, o) {
  tv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && jf(t, n, !1), Ht(e, t, o);
  (r = t.stateNode), (Sw.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Er(t, e.child, null, o)), (t.child = Er(t, null, a, o)))
      : Ie(e, t, a, o),
    (t.memoizedState = r.state),
    i && jf(t, n, !0),
    t.child
  );
}
function nv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Cf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cf(e, t.context, !1),
    Mc(e, t.containerInfo);
}
function Hf(e, t, n, r, i) {
  return jr(), Pc(i), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var gu = { dehydrated: null, treeContext: null, retryLane: 0 };
function vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rv(e, t, n) {
  var r = t.pendingProps,
    i = ce.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Z(ce, i & 1),
    e === null)
  )
    return (
      uu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ia(s, r, 0, null)),
              (e = Fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = vu(n)),
              (t.memoizedState = gu),
              e)
            : Vc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return bw(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = hn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = hn(a, o)) : ((o = Fn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? vu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = gu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Vc(e, t) {
  return (
    (t = ia({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bo(e, t, n, r) {
  return (
    r !== null && Pc(r),
    Er(t, e.child, null, n),
    (e = Vc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bw(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ja(Error(O(422)))), bo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = ia({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Fn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Er(t, e.child, null, s),
        (t.child.memoizedState = vu(s)),
        (t.memoizedState = gu),
        o);
  if (!(t.mode & 1)) return bo(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(O(419))), (r = Ja(o, r, void 0)), bo(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), We || a)) {
    if (((r = be), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), $t(e, i), yt(r, e, i, -1));
    }
    return Wc(), (r = Ja(Error(O(421)))), bo(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Je = cn(i.nextSibling)),
      (Ze = t),
      (se = !0),
      (gt = null),
      e !== null &&
        ((st[at++] = Lt),
        (st[at++] = Rt),
        (st[at++] = Hn),
        (Lt = e.id),
        (Rt = e.overflow),
        (Hn = t)),
      (t = Vc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cu(e.return, t, n);
}
function Za(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function iv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ie(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uf(e, n, t);
        else if (e.tag === 19) Uf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && vs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Za(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && vs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Za(t, !0, n, null, o);
        break;
      case "together":
        Za(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Uo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function kw(e, t, n) {
  switch (t.tag) {
    case 3:
      nv(t), jr();
      break;
    case 5:
      Og(t);
      break;
    case 1:
      Ye(t.type) && ds(t);
      break;
    case 4:
      Mc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Z(hs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rv(e, t, n)
          : (Z(ce, ce.current & 1),
            (e = Ht(e, t, n)),
            e !== null ? e.sibling : null);
      Z(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return iv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Z(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ev(e, t, n);
  }
  return Ht(e, t, n);
}
var ov, yu, sv, av;
ov = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yu = function () {};
sv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), zn(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Fl(e, i)), (r = Fl(e, r)), (o = []);
        break;
      case "select":
        (i = pe({}, i, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Hl(e, i)), (r = Hl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = us);
    }
    Wl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (xi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (xi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ne("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
av = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Tw(e, t, n) {
  var r = t.pendingProps;
  switch ((Tc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return Ye(t.type) && cs(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _r(),
        re(Ge),
        re(ze),
        Lc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (Cu(gt), (gt = null)))),
        yu(e, t),
        Me(t),
        null
      );
    case 5:
      Nc(t);
      var i = zn(Ni.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Me(t), null;
        }
        if (((e = zn(Ct.current)), xo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Tt] = t), (r[Oi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ii.length; i++) ne(ii[i], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              Jd(r, o), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              ef(r, o), ne("invalid", r);
          }
          Wl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      wo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      wo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : xi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              co(r), Zd(r, o, !0);
              break;
            case "textarea":
              co(r), tf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = us);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Dm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Tt] = t),
            (e[Oi] = r),
            ov(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Kl(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ii.length; i++) ne(ii[i], e);
                i = r;
                break;
              case "source":
                ne("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (i = r);
                break;
              case "details":
                ne("toggle", e), (i = r);
                break;
              case "input":
                Jd(e, r), (i = Fl(e, r)), ne("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = pe({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                ef(e, r), (i = Hl(e, r)), ne("invalid", e);
                break;
              default:
                i = r;
            }
            Wl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Im(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && zm(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Si(e, l)
                    : typeof l == "number" && Si(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (xi.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ne("scroll", e)
                      : l != null && uc(e, o, l, s));
              }
            switch (n) {
              case "input":
                co(e), Zd(e, r, !1);
                break;
              case "textarea":
                co(e), tf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? gr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      gr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = us);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) av(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = zn(Ni.current)), zn(Ct.current), xo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Tt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                wo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Tt] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (re(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Je !== null && t.mode & 1 && !(t.flags & 128))
          Pg(), jr(), (t.flags |= 98560), (o = !1);
        else if (((o = xo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[Tt] = t;
          } else
            jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (o = !1);
        } else gt !== null && (Cu(gt), (gt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? xe === 0 && (xe = 3) : Wc())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        _r(), yu(e, t), e === null && Ei(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return Ec(t.type._context), Me(t), null;
    case 17:
      return Ye(t.type) && cs(), Me(t), null;
    case 19:
      if ((re(ce), (o = t.memoizedState), o === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Xr(o, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = vs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Xr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ve() > Mr &&
            ((t.flags |= 128), (r = !0), Xr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !se)
            )
              return Me(t), null;
          } else
            2 * ve() - o.renderingStartTime > Mr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ce.current),
          Z(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Uc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Pw(e, t) {
  switch ((Tc(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && cs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _r(),
        re(Ge),
        re(ze),
        Lc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nc(t), null;
    case 13:
      if (
        (re(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ce), null;
    case 4:
      return _r(), null;
    case 10:
      return Ec(t.type._context), null;
    case 22:
    case 23:
      return Uc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ko = !1,
  Le = !1,
  Cw = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function wu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Wf = !1;
function jw(e, t) {
  if (((nu = ss), (e = fg()), bc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (p = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === i && (a = s),
                p === o && ++c === r && (l = s),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ru = { focusedElem: e, selectionRange: n }, ss = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    S = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : pt(t.type, y),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (x) {
          me(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (w = Wf), (Wf = !1), w;
}
function pi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && wu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function na(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Tt], delete t[Oi], delete t[su], delete t[uw], delete t[cw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Kf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Su(e, t, n), e = e.sibling; e !== null; ) Su(e, t, n), (e = e.sibling);
}
function bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bu(e, t, n), e = e.sibling; e !== null; ) bu(e, t, n), (e = e.sibling);
}
var Te = null,
  mt = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) cv(e, t, n), (n = n.sibling);
}
function cv(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Ys, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || lr(n, t);
    case 6:
      var r = Te,
        i = mt;
      (Te = null),
        Wt(e, t, n),
        (Te = r),
        (mt = i),
        Te !== null &&
          (mt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (mt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ka(e.parentNode, n)
              : e.nodeType === 1 && Ka(e, n),
            Pi(e))
          : Ka(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (i = mt),
        (Te = n.stateNode.containerInfo),
        (mt = !0),
        Wt(e, t, n),
        (Te = r),
        (mt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && wu(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), Wt(e, t, n), (Le = r))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function Gf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cw()),
      t.forEach(function (r) {
        var i = zw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Te = a.stateNode), (mt = !1);
              break e;
            case 3:
              (Te = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (Te = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (Te === null) throw Error(O(160));
        cv(o, s, i), (Te = null), (mt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        me(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dv(t, e), (t = t.sibling);
}
function dv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), xt(e), r & 4)) {
        try {
          pi(3, e, e.return), na(3, e);
        } catch (y) {
          me(e, e.return, y);
        }
        try {
          pi(5, e, e.return);
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 1:
      ft(t, e), xt(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (ft(t, e),
        xt(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Si(i, "");
        } catch (y) {
          me(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Lm(i, o),
              Kl(a, s);
            var u = Kl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Im(i, d)
                : c === "dangerouslySetInnerHTML"
                ? zm(i, d)
                : c === "children"
                ? Si(i, d)
                : uc(i, c, d, u);
            }
            switch (a) {
              case "input":
                Bl(i, o);
                break;
              case "textarea":
                Rm(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? gr(i, !!o.multiple, v, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? gr(i, !!o.multiple, o.defaultValue, !0)
                      : gr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Oi] = o;
          } catch (y) {
            me(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ft(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pi(t.containerInfo);
        } catch (y) {
          me(e, e.return, y);
        }
      break;
    case 4:
      ft(t, e), xt(e);
      break;
    case 13:
      ft(t, e),
        xt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            ($c = ve())),
        r & 4 && Gf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (u = Le) || c), ft(t, e), (Le = u)) : ft(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (d = A = c; A !== null; ) {
              switch (((p = A), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pi(4, p, p.return);
                  break;
                case 1:
                  lr(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      me(r, n, y);
                    }
                  }
                  break;
                case 5:
                  lr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Qf(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (A = v)) : Qf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Am("display", s)));
              } catch (y) {
                me(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                me(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), xt(e), r & 4 && Gf(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Si(i, ""), (r.flags &= -33));
          var o = Kf(e);
          bu(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Kf(e);
          Su(e, a, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      me(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ew(e, t, n) {
  (A = e), fv(e);
}
function fv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ko;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Le;
        a = ko;
        var u = Le;
        if (((ko = s), (Le = l) && !u))
          for (A = i; A !== null; )
            (s = A),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Xf(i)
                : l !== null
                ? ((l.return = s), (A = l))
                : Xf(i);
        for (; o !== null; ) (A = o), fv(o), (o = o.sibling);
        (A = i), (ko = a), (Le = u);
      }
      Yf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (A = o)) : Yf(e);
  }
}
function Yf(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || na(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Nf(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Nf(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Pi(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Le || (t.flags & 512 && xu(t));
      } catch (p) {
        me(t, t.return, p);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Qf(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Xf(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            na(4, t);
          } catch (l) {
            me(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              me(t, i, l);
            }
          }
          var o = t.return;
          try {
            xu(t);
          } catch (l) {
            me(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            xu(t);
          } catch (l) {
            me(t, s, l);
          }
      }
    } catch (l) {
      me(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var _w = Math.ceil,
  xs = Ut.ReactCurrentDispatcher,
  Fc = Ut.ReactCurrentOwner,
  ut = Ut.ReactCurrentBatchConfig,
  Q = 0,
  be = null,
  ye = null,
  je = 0,
  qe = 0,
  ur = kn(0),
  xe = 0,
  zi = null,
  Wn = 0,
  ra = 0,
  Bc = 0,
  hi = null,
  Ue = null,
  $c = 0,
  Mr = 1 / 0,
  Mt = null,
  Ss = !1,
  ku = null,
  fn = null,
  To = !1,
  sn = null,
  bs = 0,
  mi = 0,
  Tu = null,
  Wo = -1,
  Ko = 0;
function Ve() {
  return Q & 6 ? ve() : Wo !== -1 ? Wo : (Wo = ve());
}
function pn(e) {
  return e.mode & 1
    ? Q & 2 && je !== 0
      ? je & -je
      : fw.transition !== null
      ? (Ko === 0 && (Ko = Xm()), Ko)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rg(e.type))),
        e)
    : 1;
}
function yt(e, t, n, r) {
  if (50 < mi) throw ((mi = 0), (Tu = null), Error(O(185)));
  Hi(e, n, r),
    (!(Q & 2) || e !== be) &&
      (e === be && (!(Q & 2) && (ra |= n), xe === 4 && nn(e, je)),
      Qe(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Mr = ve() + 500), Zs && Tn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  f2(e, t);
  var r = os(e, e === be ? je : 0);
  if (r === 0)
    n !== null && of(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && of(n), t === 1))
      e.tag === 0 ? dw(qf.bind(null, e)) : bg(qf.bind(null, e)),
        aw(function () {
          !(Q & 6) && Tn();
        }),
        (n = null);
    else {
      switch (qm(r)) {
        case 1:
          n = hc;
          break;
        case 4:
          n = Ym;
          break;
        case 16:
          n = is;
          break;
        case 536870912:
          n = Qm;
          break;
        default:
          n = is;
      }
      n = xv(n, pv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function pv(e, t) {
  if (((Wo = -1), (Ko = 0), Q & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Sr() && e.callbackNode !== n) return null;
  var r = os(e, e === be ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ks(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var o = mv();
    (be !== e || je !== t) && ((Mt = null), (Mr = ve() + 500), Vn(e, t));
    do
      try {
        Nw();
        break;
      } catch (a) {
        hv(e, a);
      }
    while (!0);
    jc(),
      (xs.current = o),
      (Q = i),
      ye !== null ? (t = 0) : ((be = null), (je = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ql(e)), i !== 0 && ((r = i), (t = Pu(e, i)))), t === 1)
    )
      throw ((n = zi), Vn(e, 0), nn(e, r), Qe(e, ve()), n);
    if (t === 6) nn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ow(i) &&
          ((t = ks(e, r)),
          t === 2 && ((o = ql(e)), o !== 0 && ((r = o), (t = Pu(e, o)))),
          t === 1))
      )
        throw ((n = zi), Vn(e, 0), nn(e, r), Qe(e, ve()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Mn(e, Ue, Mt);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((t = $c + 500 - ve()), 10 < t))
          ) {
            if (os(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ou(Mn.bind(null, e, Ue, Mt), t);
            break;
          }
          Mn(e, Ue, Mt);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - vt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * _w(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ou(Mn.bind(null, e, Ue, Mt), r);
            break;
          }
          Mn(e, Ue, Mt);
          break;
        case 5:
          Mn(e, Ue, Mt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Qe(e, ve()), e.callbackNode === n ? pv.bind(null, e) : null;
}
function Pu(e, t) {
  var n = hi;
  return (
    e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    (e = ks(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Cu(t)),
    e
  );
}
function Cu(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function Ow(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!wt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nn(e, t) {
  for (
    t &= ~Bc,
      t &= ~ra,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qf(e) {
  if (Q & 6) throw Error(O(327));
  Sr();
  var t = os(e, 0);
  if (!(t & 1)) return Qe(e, ve()), null;
  var n = ks(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ql(e);
    r !== 0 && ((t = r), (n = Pu(e, r)));
  }
  if (n === 1) throw ((n = zi), Vn(e, 0), nn(e, t), Qe(e, ve()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mn(e, Ue, Mt),
    Qe(e, ve()),
    null
  );
}
function Hc(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Mr = ve() + 500), Zs && Tn());
  }
}
function Kn(e) {
  sn !== null && sn.tag === 0 && !(Q & 6) && Sr();
  var t = Q;
  Q |= 1;
  var n = ut.transition,
    r = X;
  try {
    if (((ut.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (ut.transition = n), (Q = t), !(Q & 6) && Tn();
  }
}
function Uc() {
  (qe = ur.current), re(ur);
}
function Vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sw(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Tc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cs();
          break;
        case 3:
          _r(), re(Ge), re(ze), Lc();
          break;
        case 5:
          Nc(r);
          break;
        case 4:
          _r();
          break;
        case 13:
          re(ce);
          break;
        case 19:
          re(ce);
          break;
        case 10:
          Ec(r.type._context);
          break;
        case 22:
        case 23:
          Uc();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (ye = e = hn(e.current, null)),
    (je = qe = t),
    (xe = 0),
    (zi = null),
    (Bc = ra = Wn = 0),
    (Ue = hi = null),
    Dn !== null)
  ) {
    for (t = 0; t < Dn.length; t++)
      if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return e;
}
function hv(e, t) {
  do {
    var n = ye;
    try {
      if ((jc(), ($o.current = ws), ys)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ys = !1;
      }
      if (
        ((Un = 0),
        (Se = we = fe = null),
        (fi = !1),
        (Li = 0),
        (Fc.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (zi = t), (ye = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = je),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = If(s);
          if (v !== null) {
            (v.flags &= -257),
              Vf(v, s, a, o, t),
              v.mode & 1 && Af(o, u, t),
              (t = v),
              (l = u);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Af(o, u, t), Wc();
              break e;
            }
            l = Error(O(426));
          }
        } else if (se && a.mode & 1) {
          var S = If(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Vf(S, s, a, o, t),
              Pc(Or(l, a));
            break e;
          }
        }
        (o = l = Or(l, a)),
          xe !== 4 && (xe = 2),
          hi === null ? (hi = [o]) : hi.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = qg(o, l, t);
              Mf(o, m);
              break e;
            case 1:
              a = l;
              var h = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (fn === null || !fn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Jg(o, a, t);
                Mf(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vv(n);
    } catch (b) {
      (t = b), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mv() {
  var e = xs.current;
  return (xs.current = ws), e === null ? ws : e;
}
function Wc() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    be === null || (!(Wn & 268435455) && !(ra & 268435455)) || nn(be, je);
}
function ks(e, t) {
  var n = Q;
  Q |= 2;
  var r = mv();
  (be !== e || je !== t) && ((Mt = null), Vn(e, t));
  do
    try {
      Mw();
      break;
    } catch (i) {
      hv(e, i);
    }
  while (!0);
  if ((jc(), (Q = n), (xs.current = r), ye !== null)) throw Error(O(261));
  return (be = null), (je = 0), xe;
}
function Mw() {
  for (; ye !== null; ) gv(ye);
}
function Nw() {
  for (; ye !== null && !r2(); ) gv(ye);
}
function gv(e) {
  var t = wv(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? vv(e) : (ye = t),
    (Fc.current = null);
}
function vv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Pw(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ye = null);
        return;
      }
    } else if (((n = Tw(n, t, qe)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function Mn(e, t, n) {
  var r = X,
    i = ut.transition;
  try {
    (ut.transition = null), (X = 1), Lw(e, t, n, r);
  } finally {
    (ut.transition = i), (X = r);
  }
  return null;
}
function Lw(e, t, n, r) {
  do Sr();
  while (sn !== null);
  if (Q & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (p2(e, o),
    e === be && ((ye = be = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      To ||
      ((To = !0),
      xv(is, function () {
        return Sr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ut.transition), (ut.transition = null);
    var s = X;
    X = 1;
    var a = Q;
    (Q |= 4),
      (Fc.current = null),
      jw(e, n),
      dv(n, e),
      Z2(ru),
      (ss = !!nu),
      (ru = nu = null),
      (e.current = n),
      Ew(n),
      i2(),
      (Q = a),
      (X = s),
      (ut.transition = o);
  } else e.current = n;
  if (
    (To && ((To = !1), (sn = e), (bs = i)),
    (o = e.pendingLanes),
    o === 0 && (fn = null),
    a2(n.stateNode),
    Qe(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ss) throw ((Ss = !1), (e = ku), (ku = null), e);
  return (
    bs & 1 && e.tag !== 0 && Sr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Tu ? mi++ : ((mi = 0), (Tu = e))) : (mi = 0),
    Tn(),
    null
  );
}
function Sr() {
  if (sn !== null) {
    var e = qm(bs),
      t = ut.transition,
      n = X;
    try {
      if (((ut.transition = null), (X = 16 > e ? 16 : e), sn === null))
        var r = !1;
      else {
        if (((e = sn), (sn = null), (bs = 0), Q & 6)) throw Error(O(331));
        var i = Q;
        for (Q |= 4, A = e.current; A !== null; ) {
          var o = A,
            s = o.child;
          if (A.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (A = d);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var p = c.sibling,
                        v = c.return;
                      if ((lv(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (A = p);
                        break;
                      }
                      A = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              A = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (A = s);
          else
            e: for (; A !== null; ) {
              if (((o = A), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pi(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (A = m);
                break e;
              }
              A = o.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          s = A;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (A = g);
          else
            e: for (s = h; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      na(9, a);
                  }
                } catch (b) {
                  me(a, a.return, b);
                }
              if (a === s) {
                A = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (A = x);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((Q = i), Tn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Ys, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (ut.transition = t);
    }
  }
  return !1;
}
function Jf(e, t, n) {
  (t = Or(n, t)),
    (t = qg(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = Ve()),
    e !== null && (Hi(e, 1, t), Qe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Jf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fn === null || !fn.has(r)))
        ) {
          (e = Or(n, e)),
            (e = Jg(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = Ve()),
            t !== null && (Hi(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (je & n) === n &&
      (xe === 4 || (xe === 3 && (je & 130023424) === je && 500 > ve() - $c)
        ? Vn(e, 0)
        : (Bc |= n)),
    Qe(e, t);
}
function yv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ho), (ho <<= 1), !(ho & 130023424) && (ho = 4194304))
      : (t = 1));
  var n = Ve();
  (e = $t(e, t)), e !== null && (Hi(e, t, n), Qe(e, n));
}
function Dw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yv(e, n);
}
function zw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), yv(e, n);
}
var wv;
wv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), kw(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), se && t.flags & 1048576 && kg(t, ps, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Uo(e, t), (e = t.pendingProps);
      var i = Cr(t, ze.current);
      xr(t, n), (i = Dc(null, t, r, e, i, n));
      var o = zc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), ds(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Oc(t),
            (i.updater = ta),
            (t.stateNode = i),
            (i._reactInternals = t),
            fu(t, r, e, n),
            (t = mu(null, t, r, !0, o, n)))
          : ((t.tag = 0), se && o && kc(t), Ie(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Uo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Iw(r)),
          (e = pt(r, e)),
          i)
        ) {
          case 0:
            t = hu(null, t, r, e, n);
            break e;
          case 1:
            t = $f(null, t, r, e, n);
            break e;
          case 11:
            t = Ff(null, t, r, e, n);
            break e;
          case 14:
            t = Bf(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        hu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        $f(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((nv(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          _g(e, t),
          gs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Or(Error(O(423)), t)), (t = Hf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Or(Error(O(424)), t)), (t = Hf(e, t, r, n, i));
            break e;
          } else
            for (
              Je = cn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                se = !0,
                gt = null,
                n = jg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jr(), r === i)) {
            t = Ht(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Og(t),
        e === null && uu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        iu(r, i) ? (s = null) : o !== null && iu(r, o) && (t.flags |= 32),
        tv(e, t),
        Ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && uu(t), null;
    case 13:
      return rv(e, t, n);
    case 4:
      return (
        Mc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Er(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        Ff(e, t, r, i, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Z(hs, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (wt(o.value, s)) {
            if (o.children === i.children && !Ge.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = zt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      cu(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  cu(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ie(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        xr(t, n),
        (i = ct(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = pt(r, t.pendingProps)),
        (i = pt(r.type, i)),
        Bf(e, t, r, i, n)
      );
    case 15:
      return Zg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pt(r, i)),
        Uo(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), ds(t)) : (e = !1),
        xr(t, n),
        Xg(t, r, i),
        fu(t, r, i, n),
        mu(null, t, r, !0, e, n)
      );
    case 19:
      return iv(e, t, n);
    case 22:
      return ev(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function xv(e, t) {
  return Gm(e, t);
}
function Aw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, n, r) {
  return new Aw(e, t, n, r);
}
function Kc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Iw(e) {
  if (typeof e == "function") return Kc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dc)) return 11;
    if (e === fc) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Go(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Kc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Zn:
        return Fn(n.children, i, o, t);
      case cc:
        (s = 8), (i |= 8);
        break;
      case zl:
        return (
          (e = lt(12, n, t, i | 2)), (e.elementType = zl), (e.lanes = o), e
        );
      case Al:
        return (e = lt(13, n, t, i)), (e.elementType = Al), (e.lanes = o), e;
      case Il:
        return (e = lt(19, n, t, i)), (e.elementType = Il), (e.lanes = o), e;
      case Om:
        return ia(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Em:
              s = 10;
              break e;
            case _m:
              s = 9;
              break e;
            case dc:
              s = 11;
              break e;
            case fc:
              s = 14;
              break e;
            case qt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Fn(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function ia(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = Om),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function el(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function tl(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Vw(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Da(0)),
    (this.expirationTimes = Da(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Da(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Gc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Vw(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = lt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oc(o),
    e
  );
}
function Fw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sv(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return Sg(e, n, t);
  }
  return t;
}
function bv(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Gc(n, r, !0, e, i, o, s, a, l)),
    (e.context = Sv(null)),
    (n = e.current),
    (r = Ve()),
    (i = pn(n)),
    (o = zt(r, i)),
    (o.callback = t ?? null),
    dn(n, o, i),
    (e.current.lanes = i),
    Hi(e, i, r),
    Qe(e, r),
    e
  );
}
function oa(e, t, n, r) {
  var i = t.current,
    o = Ve(),
    s = pn(i);
  return (
    (n = Sv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = zt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(i, t, s)),
    e !== null && (yt(e, i, s, o), Bo(e, i, s)),
    s
  );
}
function Ts(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yc(e, t) {
  Zf(e, t), (e = e.alternate) && Zf(e, t);
}
function Bw() {
  return null;
}
var kv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qc(e) {
  this._internalRoot = e;
}
sa.prototype.render = Qc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  oa(e, t, null, null);
};
sa.prototype.unmount = Qc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kn(function () {
      oa(null, e, null, null);
    }),
      (t[Bt] = null);
  }
};
function sa(e) {
  this._internalRoot = e;
}
sa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = eg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
    tn.splice(n, 0, e), n === 0 && ng(e);
  }
};
function Xc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function aa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ep() {}
function $w(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Ts(s);
        o.call(u);
      };
    }
    var s = bv(t, r, e, 0, null, !1, !1, "", ep);
    return (
      (e._reactRootContainer = s),
      (e[Bt] = s.current),
      Ei(e.nodeType === 8 ? e.parentNode : e),
      Kn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ts(l);
      a.call(u);
    };
  }
  var l = Gc(e, 0, !1, null, null, !1, !1, "", ep);
  return (
    (e._reactRootContainer = l),
    (e[Bt] = l.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    Kn(function () {
      oa(t, l, n, r);
    }),
    l
  );
}
function la(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ts(s);
        a.call(l);
      };
    }
    oa(t, s, e, i);
  } else s = $w(n, t, e, i, r);
  return Ts(s);
}
Jm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ri(t.pendingLanes);
        n !== 0 &&
          (mc(t, n | 1), Qe(t, ve()), !(Q & 6) && ((Mr = ve() + 500), Tn()));
      }
      break;
    case 13:
      Kn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var i = Ve();
          yt(r, e, 1, i);
        }
      }),
        Yc(e, 1);
  }
};
gc = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Ve();
      yt(t, e, 134217728, n);
    }
    Yc(e, 134217728);
  }
};
Zm = function (e) {
  if (e.tag === 13) {
    var t = pn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = Ve();
      yt(n, e, t, r);
    }
    Yc(e, t);
  }
};
eg = function () {
  return X;
};
tg = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Yl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Js(r);
            if (!i) throw Error(O(90));
            Nm(r), Bl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Rm(e, n);
      break;
    case "select":
      (t = n.value), t != null && gr(e, !!n.multiple, t, !1);
  }
};
Bm = Hc;
$m = Kn;
var Hw = { usingClientEntryPoint: !1, Events: [Wi, rr, Js, Vm, Fm, Hc] },
  qr = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Uw = {
    bundleType: qr.bundleType,
    version: qr.version,
    rendererPackageName: qr.rendererPackageName,
    rendererConfig: qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qr.findFiberByHostInstance || Bw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Po.isDisabled && Po.supportsFiber)
    try {
      (Ys = Po.inject(Uw)), (Pt = Po);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hw;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xc(t)) throw Error(O(200));
  return Fw(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Xc(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = kv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Bt] = t.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    new Qc(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Wm(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return Kn(e);
};
nt.hydrate = function (e, t, n) {
  if (!aa(t)) throw Error(O(200));
  return la(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Xc(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = kv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = bv(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Bt] = t.current),
    Ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new sa(t);
};
nt.render = function (e, t, n) {
  if (!aa(t)) throw Error(O(200));
  return la(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!aa(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Kn(function () {
        la(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bt] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = Hc;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!aa(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return la(e, t, n, !1, r);
};
nt.version = "18.3.1-next-f1338f8080-20240426";
function Tv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv);
    } catch (e) {
      console.error(e);
    }
}
Tv(), (Tm.exports = nt);
var Pv = Tm.exports,
  tp = Pv;
(Rl.createRoot = tp.createRoot), (Rl.hydrateRoot = tp.hydrateRoot);
var Yo = {},
  Cv;
Object.defineProperty(Yo, "__esModule", { value: !0 });
var oi = f,
  St = _,
  ht = function () {
    return (
      (ht =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      ht.apply(this, arguments)
    );
  };
function Ww(e, t) {
  var n, r;
  switch (t.type) {
    case "TYPE":
      return ht(ht({}, e), {
        speed: t.speed,
        text:
          (n = t.payload) === null || n === void 0
            ? void 0
            : n.substring(0, e.text.length + 1),
      });
    case "DELAY":
      return ht(ht({}, e), { speed: t.payload });
    case "DELETE":
      return ht(ht({}, e), {
        speed: t.speed,
        text:
          (r = t.payload) === null || r === void 0
            ? void 0
            : r.substring(0, e.text.length - 1),
      });
    case "COUNT":
      return ht(ht({}, e), { count: e.count + 1 });
    default:
      return e;
  }
}
var np = function (e) {
    var t = e.words,
      n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
      r = e.loop,
      i = r === void 0 ? 1 : r,
      o = e.typeSpeed,
      s = o === void 0 ? 80 : o,
      a = e.deleteSpeed,
      l = a === void 0 ? 50 : a,
      u = e.delaySpeed,
      c = u === void 0 ? 1500 : u,
      d = e.onLoopDone,
      p = e.onType,
      v = e.onDelete,
      w = e.onDelay,
      y = St.useReducer(Ww, { speed: s, text: "", count: 0 }),
      S = y[0],
      m = S.speed,
      h = S.text,
      g = S.count,
      x = y[1],
      b = St.useRef(0),
      k = St.useRef(!1),
      j = St.useRef(!1),
      C = St.useRef(!1),
      P = St.useRef(!1),
      T = St.useCallback(
        function () {
          var D = g % n.length,
            L = n[D];
          j.current
            ? (x({ type: "DELETE", payload: L, speed: l }),
              h === "" && ((j.current = !1), x({ type: "COUNT" })))
            : (x({ type: "TYPE", payload: L, speed: s }),
              (C.current = !0),
              h === L &&
                (x({ type: "DELAY", payload: c }),
                (C.current = !1),
                (P.current = !0),
                setTimeout(function () {
                  (P.current = !1), (j.current = !0);
                }, c),
                i > 0 &&
                  ((b.current += 1),
                  b.current / n.length === i &&
                    ((P.current = !1), (k.current = !0))))),
            C.current && p && p(b.current),
            j.current && v && v(),
            P.current && w && w();
        },
        [g, c, l, i, s, n, h, p, v, w]
      );
    return (
      St.useEffect(
        function () {
          var D = setTimeout(T, m);
          return (
            k.current && clearTimeout(D),
            function () {
              return clearTimeout(D);
            }
          );
        },
        [T, m]
      ),
      St.useEffect(
        function () {
          d && k.current && d();
        },
        [d]
      ),
      [
        h,
        {
          isType: C.current,
          isDelay: P.current,
          isDelete: j.current,
          isDone: k.current,
        },
      ]
    );
  },
  Kw = "styles-module_blinkingCursor__yugAC",
  Gw = "styles-module_blinking__9VXRT";
(function (e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0],
      i = document.createElement("style");
    (i.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e));
  }
})(
  ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
);
var rp = St.memo(function (e) {
  var t = e.cursorBlinking,
    n = t === void 0 || t,
    r = e.cursorStyle,
    i = r === void 0 ? "|" : r,
    o = e.cursorColor,
    s = o === void 0 ? "inherit" : o;
  return oi.jsx(
    "span",
    ht(
      {
        style: { color: s },
        className: "".concat(Kw, " ").concat(n ? Gw : ""),
      },
      { children: i }
    )
  );
});
(Yo.Cursor = rp),
  (Yo.Typewriter = function (e) {
    var t = e.words,
      n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
      r = e.loop,
      i = r === void 0 ? 1 : r,
      o = e.typeSpeed,
      s = o === void 0 ? 80 : o,
      a = e.deleteSpeed,
      l = a === void 0 ? 50 : a,
      u = e.delaySpeed,
      c = u === void 0 ? 1500 : u,
      d = e.cursor,
      p = d !== void 0 && d,
      v = e.cursorStyle,
      w = v === void 0 ? "|" : v,
      y = e.cursorColor,
      S = y === void 0 ? "inherit" : y,
      m = e.cursorBlinking,
      h = m === void 0 || m,
      g = e.onLoopDone,
      x = e.onType,
      b = e.onDelay,
      k = e.onDelete,
      j = np({
        words: n,
        loop: i,
        typeSpeed: s,
        deleteSpeed: l,
        delaySpeed: c,
        onLoopDone: g,
        onType: x,
        onDelay: b,
        onDelete: k,
      })[0];
    return oi.jsxs(oi.Fragment, {
      children: [
        oi.jsx("span", { children: j }),
        p && oi.jsx(rp, { cursorStyle: w, cursorColor: S, cursorBlinking: h }),
      ],
    });
  }),
  (Cv = Yo.useTypewriter = np);
var jv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ip = Ke.createContext && Ke.createContext(jv),
  Yw = ["attr", "size", "title"];
function Qw(e, t) {
  if (e == null) return {};
  var n = Xw(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Xw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ps() {
  return (
    (Ps = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ps.apply(this, arguments)
  );
}
function op(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? op(Object(n), !0).forEach(function (r) {
          qw(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : op(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function qw(e, t, n) {
  return (
    (t = Jw(t)),
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
function Jw(e) {
  var t = Zw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Zw(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ev(e) {
  return (
    e &&
    e.map((t, n) =>
      Ke.createElement(t.tag, Cs({ key: n }, t.attr), Ev(t.child))
    )
  );
}
function J(e) {
  return (t) =>
    Ke.createElement(ex, Ps({ attr: Cs({}, e.attr) }, t), Ev(e.child));
}
function ex(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = Qw(e, Yw),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Ke.createElement(
        "svg",
        Ps(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: Cs(Cs({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Ke.createElement("title", null, o),
        e.children
      )
    );
  };
  return ip !== void 0
    ? Ke.createElement(ip.Consumer, null, (n) => t(n))
    : t(jv);
}
function tx(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
        child: [],
      },
    ],
  })(e);
}
function nx(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function rx(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
        child: [],
      },
    ],
  })(e);
}
function ix(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function _v(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z",
        },
        child: [],
      },
    ],
  })(e);
}
var he = {},
  qc = {},
  Gi = {},
  Yi = {},
  Ov = "Expected a function",
  sp = NaN,
  ox = "[object Symbol]",
  sx = /^\s+|\s+$/g,
  ax = /^[-+]0x[0-9a-f]+$/i,
  lx = /^0b[01]+$/i,
  ux = /^0o[0-7]+$/i,
  cx = parseInt,
  dx = typeof rn == "object" && rn && rn.Object === Object && rn,
  fx = typeof self == "object" && self && self.Object === Object && self,
  px = dx || fx || Function("return this")(),
  hx = Object.prototype,
  mx = hx.toString,
  gx = Math.max,
  vx = Math.min,
  nl = function () {
    return px.Date.now();
  };
function yx(e, t, n) {
  var r,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    c = !1,
    d = !1,
    p = !0;
  if (typeof e != "function") throw new TypeError(Ov);
  (t = ap(t) || 0),
    js(n) &&
      ((c = !!n.leading),
      (d = "maxWait" in n),
      (o = d ? gx(ap(n.maxWait) || 0, t) : o),
      (p = "trailing" in n ? !!n.trailing : p));
  function v(k) {
    var j = r,
      C = i;
    return (r = i = void 0), (u = k), (s = e.apply(C, j)), s;
  }
  function w(k) {
    return (u = k), (a = setTimeout(m, t)), c ? v(k) : s;
  }
  function y(k) {
    var j = k - l,
      C = k - u,
      P = t - j;
    return d ? vx(P, o - C) : P;
  }
  function S(k) {
    var j = k - l,
      C = k - u;
    return l === void 0 || j >= t || j < 0 || (d && C >= o);
  }
  function m() {
    var k = nl();
    if (S(k)) return h(k);
    a = setTimeout(m, y(k));
  }
  function h(k) {
    return (a = void 0), p && r ? v(k) : ((r = i = void 0), s);
  }
  function g() {
    a !== void 0 && clearTimeout(a), (u = 0), (r = l = i = a = void 0);
  }
  function x() {
    return a === void 0 ? s : h(nl());
  }
  function b() {
    var k = nl(),
      j = S(k);
    if (((r = arguments), (i = this), (l = k), j)) {
      if (a === void 0) return w(l);
      if (d) return (a = setTimeout(m, t)), v(l);
    }
    return a === void 0 && (a = setTimeout(m, t)), s;
  }
  return (b.cancel = g), (b.flush = x), b;
}
function wx(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(Ov);
  return (
    js(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    yx(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function js(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function xx(e) {
  return !!e && typeof e == "object";
}
function Sx(e) {
  return typeof e == "symbol" || (xx(e) && mx.call(e) == ox);
}
function ap(e) {
  if (typeof e == "number") return e;
  if (Sx(e)) return sp;
  if (js(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = js(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(sx, "");
  var n = lx.test(e);
  return n || ux.test(e) ? cx(e.slice(2), n ? 2 : 8) : ax.test(e) ? sp : +e;
}
var bx = wx,
  Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.addPassiveEventListener = function (t, n, r) {
  var i = r.name;
  i || ((i = n), console.warn("Listener must be a named function.")),
    Qo.has(n) || Qo.set(n, new Set());
  var o = Qo.get(n);
  if (!o.has(i)) {
    var s = (function () {
      var a = !1;
      try {
        var l = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        window.addEventListener("test", null, l);
      } catch {}
      return a;
    })();
    t.addEventListener(n, r, s ? { passive: !0 } : !1), o.add(i);
  }
};
Qi.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), Qo.get(n).delete(r.name || n);
};
var Qo = new Map();
Object.defineProperty(Yi, "__esModule", { value: !0 });
var kx = bx,
  Tx = Cx(kx),
  Px = Qi;
function Cx(e) {
  return e && e.__esModule ? e : { default: e };
}
var jx = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, Tx.default)(t, n);
  },
  le = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = jx(function (i) {
          le.scrollHandler(t);
        }, n);
        le.scrollSpyContainers.push(t),
          (0, Px.addPassiveEventListener)(t, "scroll", r);
      }
    },
    isMounted: function (t) {
      return le.scrollSpyContainers.indexOf(t) !== -1;
    },
    currentPositionX: function (t) {
      if (t === document) {
        var n = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageXOffset
          : r
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
      } else return t.scrollLeft;
    },
    currentPositionY: function (t) {
      if (t === document) {
        var n = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageYOffset
          : r
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      } else return t.scrollTop;
    },
    scrollHandler: function (t) {
      var n =
        le.scrollSpyContainers[le.scrollSpyContainers.indexOf(t)]
          .spyCallbacks || [];
      n.forEach(function (r) {
        return r(le.currentPositionX(t), le.currentPositionY(t));
      });
    },
    addStateHandler: function (t) {
      le.spySetState.push(t);
    },
    addSpyHandler: function (t, n) {
      var r = le.scrollSpyContainers[le.scrollSpyContainers.indexOf(n)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(le.currentPositionX(n), le.currentPositionY(n));
    },
    updateStates: function () {
      le.spySetState.forEach(function (t) {
        return t();
      });
    },
    unmount: function (t, n) {
      le.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(n) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        );
      }),
        le.spySetState &&
          le.spySetState.length &&
          le.spySetState.indexOf(t) > -1 &&
          le.spySetState.splice(le.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", le.scrollHandler);
    },
    update: function () {
      return le.scrollSpyContainers.forEach(function (t) {
        return le.scrollHandler(t);
      });
    },
  };
Yi.default = le;
var Br = {},
  Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
var Ex = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t,
      i = r ? "#" + r : "",
      o = window && window.location,
      s = i ? o.pathname + o.search + i : o.pathname + o.search;
    n
      ? history.pushState(history.state, "", s)
      : history.replaceState(history.state, "", s);
  },
  _x = function () {
    return window.location.hash.replace(/^#/, "");
  },
  Ox = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  Mx = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  rl = function (t, n) {
    for (var r = t.offsetTop, i = t.offsetParent; i && !n(i); )
      (r += i.offsetTop), (i = i.offsetParent);
    return { offsetTop: r, offsetParent: i };
  },
  Nx = function (t, n, r) {
    if (r)
      return t === document
        ? n.getBoundingClientRect().left +
            (window.scrollX || window.pageXOffset)
        : getComputedStyle(t).position !== "static"
        ? n.offsetLeft
        : n.offsetLeft - t.offsetLeft;
    if (t === document)
      return (
        n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (Mx(t)) {
      if (n.offsetParent !== t) {
        var i = function (c) {
            return c === t || c === document;
          },
          o = rl(n, i),
          s = o.offsetTop,
          a = o.offsetParent;
        if (a !== t)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element"
          );
        return s;
      }
      return n.offsetTop;
    }
    if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
    var l = function (c) {
      return c === document;
    };
    return rl(n, l).offsetTop - rl(t, l).offsetTop;
  };
Xi.default = {
  updateHash: Ex,
  getHash: _x,
  filterElementInContainer: Ox,
  scrollOffset: Nx,
};
var ua = {},
  Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
Jc.default = {
  defaultEasing: function (t) {
    return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
  },
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
var Zc = {};
Object.defineProperty(Zc, "__esModule", { value: !0 });
var Lx = Qi,
  Rx = ["mousedown", "mousewheel", "touchmove", "keydown"];
Zc.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      Rx.forEach(function (n) {
        return (0, Lx.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
var ju = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      ju.registered[t] = n;
    },
    remove: function (t) {
      ju.registered[t] = null;
    },
  },
};
qi.default = ju;
Object.defineProperty(ua, "__esModule", { value: !0 });
var Dx =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  zx = Xi;
ca(zx);
var Ax = Jc,
  lp = ca(Ax),
  Ix = Zc,
  Vx = ca(Ix),
  Fx = qi,
  kt = ca(Fx);
function ca(e) {
  return e && e.__esModule ? e : { default: e };
}
var Mv = function (t) {
    return lp.default[t.smooth] || lp.default.defaultEasing;
  },
  Bx = function (t) {
    return typeof t == "function"
      ? t
      : function () {
          return t;
        };
  },
  $x = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  Eu = (function () {
    return (
      $x() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  Nv = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  Lv = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollLeft;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : i
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
  },
  Rv = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollTop;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : i
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  },
  Hx = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollWidth - n.offsetWidth;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      i.clientWidth,
      i.scrollWidth,
      i.offsetWidth
    );
  },
  Ux = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollHeight - n.offsetHeight;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      i.clientHeight,
      i.scrollHeight,
      i.offsetHeight
    );
  },
  Wx = function e(t, n, r) {
    var i = n.data;
    if (!n.ignoreCancelEvents && i.cancel) {
      kt.default.registered.end &&
        kt.default.registered.end(i.to, i.target, i.currentPositionY);
      return;
    }
    if (
      ((i.delta = Math.round(i.targetPosition - i.startPosition)),
      i.start === null && (i.start = r),
      (i.progress = r - i.start),
      (i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
      (i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent)),
      i.containerElement &&
      i.containerElement !== document &&
      i.containerElement !== document.body
        ? n.horizontal
          ? (i.containerElement.scrollLeft = i.currentPosition)
          : (i.containerElement.scrollTop = i.currentPosition)
        : n.horizontal
        ? window.scrollTo(i.currentPosition, 0)
        : window.scrollTo(0, i.currentPosition),
      i.percent < 1)
    ) {
      var o = e.bind(null, t, n);
      Eu.call(window, o);
      return;
    }
    kt.default.registered.end &&
      kt.default.registered.end(i.to, i.target, i.currentPosition);
  },
  ed = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
        ? t.container
        : document
      : null;
  },
  Ji = function (t, n, r, i) {
    (n.data = n.data || Nv()), window.clearTimeout(n.data.delayTimeout);
    var o = function () {
      n.data.cancel = !0;
    };
    if (
      (Vx.default.subscribe(o),
      ed(n),
      (n.data.start = null),
      (n.data.cancel = !1),
      (n.data.startPosition = n.horizontal ? Lv(n) : Rv(n)),
      (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
      n.data.startPosition === n.data.targetPosition)
    ) {
      kt.default.registered.end &&
        kt.default.registered.end(
          n.data.to,
          n.data.target,
          n.data.currentPosition
        );
      return;
    }
    (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
      (n.data.duration = Bx(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = i);
    var s = Mv(n),
      a = Wx.bind(null, s, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        kt.default.registered.begin &&
          kt.default.registered.begin(n.data.to, n.data.target),
          Eu.call(window, a);
      }, n.delay);
      return;
    }
    kt.default.registered.begin &&
      kt.default.registered.begin(n.data.to, n.data.target),
      Eu.call(window, a);
  },
  da = function (t) {
    return (t = Dx({}, t)), (t.data = t.data || Nv()), (t.absolute = !0), t;
  },
  Kx = function (t) {
    Ji(0, da(t));
  },
  Gx = function (t, n) {
    Ji(t, da(n));
  },
  Yx = function (t) {
    (t = da(t)), ed(t), Ji(t.horizontal ? Hx(t) : Ux(t), t);
  },
  Qx = function (t, n) {
    (n = da(n)), ed(n);
    var r = n.horizontal ? Lv(n) : Rv(n);
    Ji(t + r, n);
  };
ua.default = {
  animateTopScroll: Ji,
  getAnimationType: Mv,
  scrollToTop: Kx,
  scrollToBottom: Yx,
  scrollTo: Gx,
  scrollMore: Qx,
};
Object.defineProperty(Br, "__esModule", { value: !0 });
var Xx =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  qx = Xi,
  Jx = td(qx),
  Zx = ua,
  eS = td(Zx),
  tS = qi,
  Co = td(tS);
function td(e) {
  return e && e.__esModule ? e : { default: e };
}
var jo = {},
  up = void 0;
Br.default = {
  unmount: function () {
    jo = {};
  },
  register: function (t, n) {
    jo[t] = n;
  },
  unregister: function (t) {
    delete jo[t];
  },
  get: function (t) {
    return (
      jo[t] ||
      document.getElementById(t) ||
      document.getElementsByName(t)[0] ||
      document.getElementsByClassName(t)[0]
    );
  },
  setActiveLink: function (t) {
    return (up = t);
  },
  getActiveLink: function () {
    return up;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = Xx({}, n, { absolute: !1 });
    var i = n.containerId,
      o = n.container,
      s = void 0;
    i
      ? (s = document.getElementById(i))
      : o && o.nodeType
      ? (s = o)
      : (s = document),
      (n.absolute = !0);
    var a = n.horizontal,
      l = Jx.default.scrollOffset(s, r, a) + (n.offset || 0);
    if (!n.smooth) {
      Co.default.registered.begin && Co.default.registered.begin(t, r),
        s === document
          ? n.horizontal
            ? window.scrollTo(l, 0)
            : window.scrollTo(0, l)
          : (s.scrollTop = l),
        Co.default.registered.end && Co.default.registered.end(t, r);
      return;
    }
    eS.default.animateTopScroll(l, n, t, r);
  },
};
var Dv = { exports: {} },
  nS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  rS = nS,
  iS = rS;
function zv() {}
function Av() {}
Av.resetWarningCache = zv;
var oS = function () {
  function e(r, i, o, s, a, l) {
    if (l !== iS) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Av,
    resetWarningCache: zv,
  };
  return (n.PropTypes = n), n;
};
Dv.exports = oS();
var fa = Dv.exports,
  pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
var sS = Xi,
  il = aS(sS);
function aS(e) {
  return e && e.__esModule ? e : { default: e };
}
var lS = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (t) {
    (this.scroller = t),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (t, n) {
    this.containers[t] = n;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var t = this,
      n = this.getHash();
    n
      ? window.setTimeout(function () {
          t.scrollTo(n, !0), (t.initialized = !0);
        }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (t, n) {
    var r = this.scroller,
      i = r.get(t);
    if (i && (n || t !== r.getActiveLink())) {
      var o = this.containers[t] || document;
      r.scrollTo(t, { container: o });
    }
  },
  getHash: function () {
    return il.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      il.default.getHash() !== t &&
      il.default.updateHash(t, n);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
pa.default = lS;
Object.defineProperty(Gi, "__esModule", { value: !0 });
var Eo =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  uS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  cS = _,
  cp = Zi(cS),
  dS = Yi,
  _o = Zi(dS),
  fS = Br,
  pS = Zi(fS),
  hS = fa,
  ie = Zi(hS),
  mS = pa,
  Kt = Zi(mS);
function Zi(e) {
  return e && e.__esModule ? e : { default: e };
}
function gS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function yS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var dp = {
  to: ie.default.string.isRequired,
  containerId: ie.default.string,
  container: ie.default.object,
  activeClass: ie.default.string,
  activeStyle: ie.default.object,
  spy: ie.default.bool,
  horizontal: ie.default.bool,
  smooth: ie.default.oneOfType([ie.default.bool, ie.default.string]),
  offset: ie.default.number,
  delay: ie.default.number,
  isDynamic: ie.default.bool,
  onClick: ie.default.func,
  duration: ie.default.oneOfType([ie.default.number, ie.default.func]),
  absolute: ie.default.bool,
  onSetActive: ie.default.func,
  onSetInactive: ie.default.func,
  ignoreCancelEvents: ie.default.bool,
  hashSpy: ie.default.bool,
  saveHashHistory: ie.default.bool,
  spyThrottle: ie.default.number,
};
Gi.default = function (e, t) {
  var n = t || pS.default,
    r = (function (o) {
      yS(s, o);
      function s(a) {
        gS(this, s);
        var l = vS(
          this,
          (s.__proto__ || Object.getPrototypeOf(s)).call(this, a)
        );
        return i.call(l), (l.state = { active: !1 }), l;
      }
      return (
        uS(s, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var l = this.props.containerId,
                u = this.props.container;
              return l && !u
                ? document.getElementById(l)
                : u && u.nodeType
                ? u
                : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var l = this.getScrollSpyContainer();
                _o.default.isMounted(l) ||
                  _o.default.mount(l, this.props.spyThrottle),
                  this.props.hashSpy &&
                    (Kt.default.isMounted() || Kt.default.mount(n),
                    Kt.default.mapContainer(this.props.to, l)),
                  _o.default.addSpyHandler(this.spyHandler, l),
                  this.setState({ container: l });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              _o.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var l = "";
              this.state && this.state.active
                ? (l = (
                    (this.props.className || "") +
                    " " +
                    (this.props.activeClass || "active")
                  ).trim())
                : (l = this.props.className);
              var u = {};
              this.state && this.state.active
                ? (u = Eo({}, this.props.style, this.props.activeStyle))
                : (u = Eo({}, this.props.style));
              var c = Eo({}, this.props);
              for (var d in dp) c.hasOwnProperty(d) && delete c[d];
              return (
                (c.className = l),
                (c.style = u),
                (c.onClick = this.handleClick),
                cp.default.createElement(e, c)
              );
            },
          },
        ]),
        s
      );
    })(cp.default.PureComponent),
    i = function () {
      var s = this;
      (this.scrollTo = function (a, l) {
        n.scrollTo(a, Eo({}, s.state, l));
      }),
        (this.handleClick = function (a) {
          s.props.onClick && s.props.onClick(a),
            a.stopPropagation && a.stopPropagation(),
            a.preventDefault && a.preventDefault(),
            s.scrollTo(s.props.to, s.props);
        }),
        (this.spyHandler = function (a, l) {
          var u = s.getScrollSpyContainer();
          if (!(Kt.default.isMounted() && !Kt.default.isInitialized())) {
            var c = s.props.horizontal,
              d = s.props.to,
              p = null,
              v = void 0,
              w = void 0;
            if (c) {
              var y = 0,
                S = 0,
                m = 0;
              if (u.getBoundingClientRect) {
                var h = u.getBoundingClientRect();
                m = h.left;
              }
              if (!p || s.props.isDynamic) {
                if (((p = n.get(d)), !p)) return;
                var g = p.getBoundingClientRect();
                (y = g.left - m + a), (S = y + g.width);
              }
              var x = a - s.props.offset;
              (v = x >= Math.floor(y) && x < Math.floor(S)),
                (w = x < Math.floor(y) || x >= Math.floor(S));
            } else {
              var b = 0,
                k = 0,
                j = 0;
              if (u.getBoundingClientRect) {
                var C = u.getBoundingClientRect();
                j = C.top;
              }
              if (!p || s.props.isDynamic) {
                if (((p = n.get(d)), !p)) return;
                var P = p.getBoundingClientRect();
                (b = P.top - j + l), (k = b + P.height);
              }
              var T = l - s.props.offset;
              (v = T >= Math.floor(b) && T < Math.floor(k)),
                (w = T < Math.floor(b) || T >= Math.floor(k));
            }
            var D = n.getActiveLink();
            if (w) {
              if (
                (d === D && n.setActiveLink(void 0),
                s.props.hashSpy && Kt.default.getHash() === d)
              ) {
                var L = s.props.saveHashHistory,
                  E = L === void 0 ? !1 : L;
                Kt.default.changeHash("", E);
              }
              s.props.spy &&
                s.state.active &&
                (s.setState({ active: !1 }),
                s.props.onSetInactive && s.props.onSetInactive(d, p));
            }
            if (v && (D !== d || s.state.active === !1)) {
              n.setActiveLink(d);
              var M = s.props.saveHashHistory,
                I = M === void 0 ? !1 : M;
              s.props.hashSpy && Kt.default.changeHash(d, I),
                s.props.spy &&
                  (s.setState({ active: !0 }),
                  s.props.onSetActive && s.props.onSetActive(d, p));
            }
          }
        });
    };
  return (r.propTypes = dp), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(qc, "__esModule", { value: !0 });
var wS = _,
  fp = Iv(wS),
  xS = Gi,
  SS = Iv(xS);
function Iv(e) {
  return e && e.__esModule ? e : { default: e };
}
function bS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pp(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function kS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var TS = (function (e) {
  kS(t, e);
  function t() {
    var n, r, i, o;
    bS(this, t);
    for (var s = arguments.length, a = Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    return (
      (o =
        ((r =
          ((i = pp(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(a)
            )
          )),
          i)),
        (i.render = function () {
          return fp.default.createElement("a", i.props, i.props.children);
        }),
        r)),
      pp(i, o)
    );
  }
  return t;
})(fp.default.Component);
qc.default = (0, SS.default)(TS);
var nd = {};
Object.defineProperty(nd, "__esModule", { value: !0 });
var PS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  CS = _,
  hp = Vv(CS),
  jS = Gi,
  ES = Vv(jS);
function Vv(e) {
  return e && e.__esModule ? e : { default: e };
}
function _S(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function OS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function MS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var NS = (function (e) {
  MS(t, e);
  function t() {
    return (
      _S(this, t),
      OS(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    PS(t, [
      {
        key: "render",
        value: function () {
          return hp.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        },
      },
    ]),
    t
  );
})(hp.default.Component);
nd.default = (0, ES.default)(NS);
var rd = {},
  ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
var LS =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  RS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  DS = _,
  mp = ma(DS),
  zS = Pv;
ma(zS);
var AS = Br,
  gp = ma(AS),
  IS = fa,
  vp = ma(IS);
function ma(e) {
  return e && e.__esModule ? e : { default: e };
}
function VS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function FS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function BS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
ha.default = function (e) {
  var t = (function (n) {
    BS(r, n);
    function r(i) {
      VS(this, r);
      var o = FS(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return (o.childBindings = { domNode: null }), o;
    }
    return (
      RS(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (o) {
            this.props.name !== o.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            gp.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (o) {
            gp.default.register(o, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return mp.default.createElement(
              e,
              LS({}, this.props, { parentBindings: this.childBindings })
            );
          },
        },
      ]),
      r
    );
  })(mp.default.Component);
  return (t.propTypes = { name: vp.default.string, id: vp.default.string }), t;
};
Object.defineProperty(rd, "__esModule", { value: !0 });
var yp =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  $S = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  HS = _,
  wp = id(HS),
  US = ha,
  WS = id(US),
  KS = fa,
  xp = id(KS);
function id(e) {
  return e && e.__esModule ? e : { default: e };
}
function GS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function YS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function QS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Fv = (function (e) {
  QS(t, e);
  function t() {
    return (
      GS(this, t),
      YS(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    $S(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            i = yp({}, this.props);
          return (
            delete i.name,
            i.parentBindings && delete i.parentBindings,
            wp.default.createElement(
              "div",
              yp({}, i, {
                ref: function (s) {
                  r.props.parentBindings.domNode = s;
                },
              }),
              this.props.children
            )
          );
        },
      },
    ]),
    t
  );
})(wp.default.Component);
Fv.propTypes = { name: xp.default.string, id: xp.default.string };
rd.default = (0, WS.default)(Fv);
var ol =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Sp = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function bp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kp(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Tp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Oo = _,
  jn = Yi,
  sl = Br,
  ue = fa,
  Gt = pa,
  Pp = {
    to: ue.string.isRequired,
    containerId: ue.string,
    container: ue.object,
    activeClass: ue.string,
    spy: ue.bool,
    smooth: ue.oneOfType([ue.bool, ue.string]),
    offset: ue.number,
    delay: ue.number,
    isDynamic: ue.bool,
    onClick: ue.func,
    duration: ue.oneOfType([ue.number, ue.func]),
    absolute: ue.bool,
    onSetActive: ue.func,
    onSetInactive: ue.func,
    ignoreCancelEvents: ue.bool,
    hashSpy: ue.bool,
    spyThrottle: ue.number,
  },
  XS = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || sl,
        i = (function (s) {
          Tp(a, s);
          function a(l) {
            bp(this, a);
            var u = kp(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, l)
            );
            return o.call(u), (u.state = { active: !1 }), u;
          }
          return (
            Sp(a, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var u = this.props.containerId,
                    c = this.props.container;
                  return u
                    ? document.getElementById(u)
                    : c && c.nodeType
                    ? c
                    : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var u = this.getScrollSpyContainer();
                    jn.isMounted(u) || jn.mount(u, this.props.spyThrottle),
                      this.props.hashSpy &&
                        (Gt.isMounted() || Gt.mount(r),
                        Gt.mapContainer(this.props.to, u)),
                      this.props.spy && jn.addStateHandler(this.stateHandler),
                      jn.addSpyHandler(this.spyHandler, u),
                      this.setState({ container: u });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  jn.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var u = "";
                  this.state && this.state.active
                    ? (u = (
                        (this.props.className || "") +
                        " " +
                        (this.props.activeClass || "active")
                      ).trim())
                    : (u = this.props.className);
                  var c = ol({}, this.props);
                  for (var d in Pp) c.hasOwnProperty(d) && delete c[d];
                  return (
                    (c.className = u),
                    (c.onClick = this.handleClick),
                    Oo.createElement(t, c)
                  );
                },
              },
            ]),
            a
          );
        })(Oo.Component),
        o = function () {
          var a = this;
          (this.scrollTo = function (l, u) {
            r.scrollTo(l, ol({}, a.state, u));
          }),
            (this.handleClick = function (l) {
              a.props.onClick && a.props.onClick(l),
                l.stopPropagation && l.stopPropagation(),
                l.preventDefault && l.preventDefault(),
                a.scrollTo(a.props.to, a.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== a.props.to &&
                (a.state !== null &&
                  a.state.active &&
                  a.props.onSetInactive &&
                  a.props.onSetInactive(),
                a.setState({ active: !1 }));
            }),
            (this.spyHandler = function (l) {
              var u = a.getScrollSpyContainer();
              if (!(Gt.isMounted() && !Gt.isInitialized())) {
                var c = a.props.to,
                  d = null,
                  p = 0,
                  v = 0,
                  w = 0;
                if (u.getBoundingClientRect) {
                  var y = u.getBoundingClientRect();
                  w = y.top;
                }
                if (!d || a.props.isDynamic) {
                  if (((d = r.get(c)), !d)) return;
                  var S = d.getBoundingClientRect();
                  (p = S.top - w + l), (v = p + S.height);
                }
                var m = l - a.props.offset,
                  h = m >= Math.floor(p) && m < Math.floor(v),
                  g = m < Math.floor(p) || m >= Math.floor(v),
                  x = r.getActiveLink();
                if (g)
                  return (
                    c === x && r.setActiveLink(void 0),
                    a.props.hashSpy && Gt.getHash() === c && Gt.changeHash(),
                    a.props.spy &&
                      a.state.active &&
                      (a.setState({ active: !1 }),
                      a.props.onSetInactive && a.props.onSetInactive()),
                    jn.updateStates()
                  );
                if (h && x !== c)
                  return (
                    r.setActiveLink(c),
                    a.props.hashSpy && Gt.changeHash(c),
                    a.props.spy &&
                      (a.setState({ active: !0 }),
                      a.props.onSetActive && a.props.onSetActive(c)),
                    jn.updateStates()
                  );
              }
            });
        };
      return (i.propTypes = Pp), (i.defaultProps = { offset: 0 }), i;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        Tp(i, r);
        function i(o) {
          bp(this, i);
          var s = kp(
            this,
            (i.__proto__ || Object.getPrototypeOf(i)).call(this, o)
          );
          return (s.childBindings = { domNode: null }), s;
        }
        return (
          Sp(i, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (s) {
                this.props.name !== s.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                sl.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (s) {
                sl.register(s, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return Oo.createElement(
                  t,
                  ol({}, this.props, { parentBindings: this.childBindings })
                );
              },
            },
          ]),
          i
        );
      })(Oo.Component);
      return (n.propTypes = { name: ue.string, id: ue.string }), n;
    },
  },
  qS = XS;
Object.defineProperty(he, "__esModule", { value: !0 });
he.Helpers =
  he.ScrollElement =
  he.ScrollLink =
  he.animateScroll =
  he.scrollSpy =
  he.Events =
  he.scroller =
  he.Element =
  he.Button =
  _u =
  he.Link =
    void 0;
var JS = qc,
  Bv = Et(JS),
  ZS = nd,
  $v = Et(ZS),
  e4 = rd,
  Hv = Et(e4),
  t4 = Br,
  Uv = Et(t4),
  n4 = qi,
  Wv = Et(n4),
  r4 = Yi,
  Kv = Et(r4),
  i4 = ua,
  Gv = Et(i4),
  o4 = Gi,
  Yv = Et(o4),
  s4 = ha,
  Qv = Et(s4),
  a4 = qS,
  Xv = Et(a4);
function Et(e) {
  return e && e.__esModule ? e : { default: e };
}
var _u = (he.Link = Bv.default);
he.Button = $v.default;
he.Element = Hv.default;
he.scroller = Uv.default;
he.Events = Wv.default;
he.scrollSpy = Kv.default;
he.animateScroll = Gv.default;
he.ScrollLink = Yv.default;
he.ScrollElement = Qv.default;
he.Helpers = Xv.default;
he.default = {
  Link: Bv.default,
  Button: $v.default,
  Element: Hv.default,
  scroller: Uv.default,
  Events: Wv.default,
  scrollSpy: Kv.default,
  animateScroll: Gv.default,
  ScrollLink: Yv.default,
  ScrollElement: Qv.default,
  Helpers: Xv.default,
};
const l4 = "/assets/Fullstack%20developer-Bb1kOc45.pdf";
function u4(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function c4(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function d4(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function f4(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z",
        },
        child: [],
      },
    ],
  })(e);
}
const p4 = () => {
    const [e] = Cv({
      words: [
        "MERN Stack Developer.",
        "Front-End Developer.",
        "Back-End Developer.",
        "React / Next.js develoepr.",
      ],
      loop: !0,
      typeSpeed: 50,
      deleteSpeed: 20,
      delaySpeed: 2e3,
    });
    return f.jsx("div", {
      className: "w-full lgl:w-1/2 flex flex-col gap-20 z-10 overflow-x-hidden",
      "data-aos": "fade-left",
      "data-aos-once": "true",
      "data-aos-anchor": "#example-anchor",
      "data-aos-offset": "500",
      "data-aos-duration": "800",
      children: f.jsxs("div", {
        className: " w-full rounded-lg",
        children: [
          f.jsxs("div", {
            className: "max-w-[1300px] h-10 relative  border-b border-gray-600",
            children: [
              f.jsx("span", {
                className:
                  "w-3 absolute  top-3 rounded-full left-4 h-3 bg-red-600",
              }),
              f.jsx("span", {
                className:
                  "w-3 absolute  top-3 rounded-full left-8 h-3 bg-yellow-600",
              }),
              f.jsx("span", {
                className:
                  "w-3 absolute  left-12 rounded-full h-3 top-3 bg-green-600",
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "w-full px-4 py-4 flex flex-col items-center gap-4 justify-center",
            children: [
              f.jsxs("h1", {
                className:
                  "md:text-xl text-sm font-semibold flex flex-col  text-center  w-full md:text-start",
                children: [
                  f.jsxs("div", {
                    className:
                      "text-xs text-start w-full md:text-sm font-semibold mb-4",
                    children: [
                      f.jsx("span", { children: "<" }),
                      f.jsx("span", {
                        className: "text-red-400",
                        children: "name",
                      }),
                      f.jsx("span", {
                        className: "pl-2 text-green-400",
                        children: "className",
                      }),
                      f.jsx("span", { className: "text-white", children: "=" }),
                      f.jsx("span", {
                        className: "text-designColor ",
                        children: `
            text-white text-lg`,
                      }),
                      f.jsx("span", { children: ">" }),
                      f.jsx("br", {}),
                      f.jsx("span", {
                        className: "text-lg text-white",
                        children: "MD Rijwan Jannat",
                      }),
                      f.jsx("br", {}),
                      f.jsx("span", { children: "</" }),
                      f.jsx("span", {
                        className: "text-red-400",
                        children: "name",
                      }),
                      f.jsx("span", { children: ">" }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "text-xs text-start md:text-sm font-semibold",
                    children: [
                      f.jsx("span", { children: "<" }),
                      f.jsx("span", {
                        className: "text-red-400",
                        children: "passionate",
                      }),
                      f.jsx("span", {
                        className: "pl-2 text-green-400",
                        children: "className",
                      }),
                      f.jsx("span", { className: "text-white", children: "=" }),
                      f.jsx("span", {
                        className: "text-designColor ",
                        children:
                          "'text-xl font-semibold flex    w-full md:text-start'",
                      }),
                      f.jsx("span", { children: ">" }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex",
                    children: [
                      f.jsx("p", {
                        className: "text-white",
                        children: " Hello: I am",
                      }),
                      f.jsx("span", {
                        className: "text-green-500 px-2",
                        children: e,
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "text-xs md:text-sm text-start font-semibold",
                    children: [
                      f.jsx("span", { children: "</" }),
                      f.jsx("span", {
                        className: "text-red-400",
                        children: "passionate",
                      }),
                      f.jsx("span", { children: ">" }),
                    ],
                  }),
                ],
              }),
              f.jsxs("p", {
                className:
                  "w-full text-start md:text-start text-xs  md:text-sm text-gray-300 font-semibold",
                children: [
                  f.jsxs("div", {
                    className: "text-xs md:text-sm font-semibold",
                    children: [
                      f.jsx("span", { children: "<" }),
                      f.jsx("span", {
                        className: "text-red-400",
                        children: "objective",
                      }),
                      f.jsx("span", {
                        className: "pl-2 text-green-400",
                        children: "className",
                      }),
                      f.jsx("span", { className: "text-white", children: "=" }),
                      f.jsx("span", {
                        className: "text-designColor",
                        children: "'text-sm'",
                      }),
                      f.jsx("span", { children: ">" }),
                    ],
                  }),
                  "As a MERN stack developer, I craft digital marvels with my code, forging web experiences that inspire innovation. Persistence is my compass, guiding me to shape the future. I code, I evolve, and with each line, I paint on the canvas of endless possibilities. 🚀🎨💻",
                  f.jsxs("div", {
                    className: "text-xs md:text-sm font-semibold",
                    children: [
                      f.jsx("span", { children: "</" }),
                      f.jsx("span", {
                        className: "text-red-400",
                        children: "objective",
                      }),
                      f.jsx("span", { children: ">" }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className:
                  "hidden md:flex justify-start w-full items-center gap-2",
                children: [
                  f.jsxs("div", {
                    className: "text-xs  md:text-sm font-semibold",
                    children: [
                      f.jsx("span", { children: "<" }),
                      f.jsx("span", {
                        className: "text-blue-400",
                        children: "SocialButtons",
                      }),
                      f.jsx("span", {
                        className: "pl-2 text-green-400",
                        children: "className",
                      }),
                      f.jsx("span", { className: "text-white", children: "=" }),
                      f.jsx("span", {
                        className: "text-designColor",
                        children: "'icons'",
                      }),
                      f.jsx("span", { children: ">" }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col md:flex-row gap-4 md:gap-4 ",
                    children: [
                      f.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://www.linkedin.com/in/md-rijwan-developer-3353362ba?trk=contact-info",
                        children: f.jsx(d4, {
                          className:
                            " text-3xl md:text-2xl text-gray-200  hover:text-red-400 cursor-pointer",
                        }),
                      }),
                      f.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://www.facebook.com/mdrijwanjannat",
                        children: f.jsx(u4, {
                          className:
                            "text-3xl md:text-2xl cursor-pointer text-gray-200  hover:text-red-400",
                        }),
                      }),
                      f.jsxs("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://github.com/Md-Rijwan-Jannat",
                        children: [
                          f.jsx(c4, {
                            className:
                              "text-3xl md:text-2xl text-gray-200  hover:text-red-400 cursor-pointer",
                          }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "text-xs md:text-sm font-semibold",
                    children: [
                      f.jsx("span", { children: "</" }),
                      f.jsx("span", {
                        className: "text-blue-400",
                        children: "SocialButtons",
                      }),
                      f.jsx("span", { children: ">" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex pb-4 flex-col md:flex-row items-center",
            children: [
              f.jsxs("div", {
                className:
                  "text-xs flex justify-start md:justify-normal md:w-fit w-full md:text-sm  ml-4 font-semibold",
                children: [
                  f.jsx("span", { children: "<" }),
                  f.jsx("span", { className: "text-red-400", children: "a" }),
                  f.jsx("span", {
                    className: "pl-2 text-green-400",
                    children: "href",
                  }),
                  f.jsx("span", { className: "text-white", children: "=" }),
                  f.jsx("span", {
                    className: "text-designColor",
                    children: "'../rijwan jannat resume.pdf'",
                  }),
                  f.jsx("span", {
                    className: "pl-2 text-green-400",
                    children: "downlaod",
                  }),
                  f.jsx("span", { children: ">" }),
                ],
              }),
              f.jsx("a", {
                href: l4,
                className:
                  "flex  justify-start md:justify-normal md:w-fit w-full ml-4 gap-6 md:gap-4 ",
                download: !0,
                children: f.jsxs("span", {
                  className:
                    "text-xs md:text-sm font-semibold w-fit flex animate-pulse items-center gap-2 py-2 cursor-pointer text-white",
                  children: [
                    f.jsx(f4, { className: "font-semibold md:text-2xl" }),
                    "Download Resume",
                  ],
                }),
              }),
              f.jsxs("div", {
                className:
                  "text-xs flex justify-start md:justify-normal md:w-fit w-full md:text-sm ml-4  font-semibold",
                children: [
                  f.jsx("span", { children: "</" }),
                  f.jsx("span", { className: "text-red-400", children: "a" }),
                  f.jsx("span", { children: ">" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  h4 = "/assets/bannerImg-DQ8JdAn-.png",
  m4 = () =>
    f.jsx("div", {
      className:
        "w-full lg:w-1/2 flex justify-center items-center overflow-x-hidden",
      children: f.jsx("img", {
        "data-aos": "fade-right",
        "data-aos-once": "true",
        className:
          "w-[240px] h-[300px] lg:w-[350px] lg:h-[450px] relative mb-10",
        src: h4,
        alt: "bannerImg",
      }),
    }),
  g4 = "/assets/banner-Cg6WBRdQ.mp4",
  v4 = () => {
    const e = g4;
    return f.jsxs("section", {
      id: "home",
      className: "w-full",
      children: [
        f.jsx("div", {
          className: "",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          },
          children: f.jsx("video", {
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            style: {
              width: "100%",
              height: "auto",
              position: "absolute",
              top: 0,
              left: 0,
            },
            children: f.jsx("source", { src: e, type: "video/mp4" }),
          }),
        }),
        f.jsxs("div", {
          className:
            "relative top-20 lg:mt-24 w-full flex flex-col lg:flex-row gap-5 justify-around items-center",
          children: [f.jsx(m4, {}), f.jsx(p4, {})],
        }),
      ],
    });
  },
  y4 = "/assets/profile-BKI2jiyz.png",
  w4 = () => {
    const [e, t] = _.useState(!1),
      n = () => {
        t(!e);
      },
      r =
        "I am a dedicated MERN Stack Developer with expertise in web development. I excel in building full-stack applications using MongoDB, Express,   and Node.js, and I'm passionate about creating user-friendly, elegant web solutions. With a strong commitment to staying up-to-date with industry best practices, I'm ready to tackle new challenges and turn digital ideas into reality.",
      i = e ? r : r.slice(0, 200);
    return f.jsxs("div", {
      className:
        "w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center",
      children: [
        f.jsxs("div", {
          className: "relative",
          children: [
            f.jsx("div", {
              children: f.jsx("img", {
                className: "w-full h-64 object-cover rounded-lg mb-2",
                src: "https://i.ibb.co/2NJrdGL/1698420881184-01.jpg",
                alt: "contactImg",
              }),
            }),
            f.jsx("img", {
              className:
                "w-32 h-32 rounded-full object-cover ring-2 ring-gray-600 mb-2 absolute -bottom-7 left-3",
              src: y4,
              alt: "contactImg",
            }),
          ],
        }),
        f.jsxs("div", {
          "data-aos": "fade-right",
          "data-aos-once": "true",
          className: "flex flex-col gap-4",
          children: [
            f.jsx("h3", {
              className: "text-3xl font-bold text-white",
              children: "MD Rijwan Jannat",
            }),
            f.jsx("p", {
              className: "text-lg font-normal text-gray-400",
              children: "MERN Stack Developer",
            }),
            f.jsxs("p", {
              className: "text-base text-gray-400 tracking-wide",
              children: [
                i,
                r.length > 200 &&
                  !e &&
                  f.jsx("span", {
                    className: "text-lightText cursor-pointer",
                    onClick: n,
                    children: "...See More",
                  }),
                e &&
                  f.jsx("span", {
                    children: f.jsx("div", {
                      className: "text-lightText cursor-pointer",
                      onClick: n,
                      children: "Hide...",
                    }),
                  }),
              ],
            }),
            f.jsxs("p", {
              className: "text-base text-gray-400 flex items-center gap-2",
              children: [
                "Phone: ",
                f.jsx("span", {
                  className: "text-lightText",
                  children: "(+880) 1797660947",
                }),
              ],
            }),
            f.jsxs("p", {
              className: "text-base text-gray-400 flex items-center gap-2",
              children: [
                "Email:",
                " ",
                f.jsx("span", {
                  className: "text-lightText",
                  children: "rijwanjannat36@gmail.com",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  eo = ({ title1: e, title2: t }) => {
    const n = t.substring(0, 3),
      r = t.substring(3);
    return f.jsxs("section", {
      className: "relative mb-24 lg:mb-28 text-center w-full button",
      children: [
        f.jsx("h1", {
          className:
            "text-[#4D4D4D] text-[30px] lg:text-[70px] text-opacity-30 font-[800]",
          children: e,
        }),
        f.jsx("div", {
          className: "absolute -bottom-4 w-full",
          children: f.jsxs("h1", {
            className:
              "text-[#4D4D4D] text-opacity-95 text-[25px] lg:text-[65px] font-[800] btn-shine",
            children: [
              " ",
              f.jsx("span", { style: { color: "#CD6A15" }, children: n }),
              r,
            ],
          }),
        }),
        f.jsx("div", {
          className: "flex items-center justify-center",
          children: f.jsx("span", { className: "bottom" }),
        }),
      ],
    });
  };
class to {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const x4 = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  Ce = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: x4(),
  },
  od = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  S4 = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = od(e);
    (Ce.publicKey = n.publicKey),
      (Ce.blockHeadless = n.blockHeadless),
      (Ce.storageProvider = n.storageProvider),
      (Ce.blockList = n.blockList),
      (Ce.limitRate = n.limitRate),
      (Ce.origin = n.origin || t);
  },
  qv = async (e, t, n = {}) => {
    const r = await fetch(Ce.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      i = await r.text(),
      o = new to(r.status, i);
    if (r.ok) return o;
    throw o;
  },
  Jv = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  b4 = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  Zv = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  e0 = () => new to(451, "Unavailable For Headless Browser"),
  k4 = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  T4 = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  P4 = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  t0 = (e, t) => {
    if (T4(e)) return !1;
    k4(e.list, e.watchVariable);
    const n = P4(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  n0 = () => new to(403, "Forbidden"),
  C4 = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string") throw "The LimitRate ID has to be a string";
  },
  j4 = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  r0 = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    C4(t.throttle, t.id);
    const r = t.id || e;
    return (await j4(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  i0 = () => new to(429, "Too Many Requests"),
  E4 = async (e, t, n, r) => {
    const i = od(r),
      o = i.publicKey || Ce.publicKey,
      s = i.blockHeadless || Ce.blockHeadless,
      a = Ce.storageProvider || i.storageProvider,
      l = { ...Ce.blockList, ...i.blockList },
      u = { ...Ce.limitRate, ...i.limitRate };
    return s && Zv(navigator)
      ? Promise.reject(e0())
      : (Jv(o, e, t),
        b4(n),
        n && t0(l, n)
          ? Promise.reject(n0())
          : (await r0(location.pathname, u, a))
          ? Promise.reject(i0())
          : qv(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.3.3",
                user_id: o,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  _4 = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  O4 = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  M4 = async (e, t, n, r) => {
    const i = od(r),
      o = i.publicKey || Ce.publicKey,
      s = i.blockHeadless || Ce.blockHeadless,
      a = Ce.storageProvider || i.storageProvider,
      l = { ...Ce.blockList, ...i.blockList },
      u = { ...Ce.limitRate, ...i.limitRate };
    if (s && Zv(navigator)) return Promise.reject(e0());
    const c = O4(n);
    Jv(o, e, t), _4(c);
    const d = new FormData(c);
    return t0(l, d)
      ? Promise.reject(n0())
      : (await r0(location.pathname, u, a))
      ? Promise.reject(i0())
      : (d.append("lib_version", "4.3.3"),
        d.append("service_id", e),
        d.append("template_id", t),
        d.append("user_id", o),
        qv("/api/v1.0/email/send-form", d));
  },
  N4 = { init: S4, send: E4, sendForm: M4, EmailJSResponseStatus: to },
  L4 = () => {
    const [e, t] = _.useState(""),
      [n, r] = _.useState(""),
      [i, o] = _.useState(""),
      [s, a] = _.useState(""),
      [l, u] = _.useState(""),
      [c, d] = _.useState(""),
      [p, v] = _.useState(""),
      w = _.useRef(),
      y = () =>
        String(i)
          .toLowerCase()
          .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/),
      S = (m) => {
        m.preventDefault(),
          e === ""
            ? d("Name is required!")
            : i === ""
            ? d("Please give your Email!")
            : y()
            ? l === ""
              ? d("Message is required!")
              : (console.log({
                  from_name: e,
                  phone: n,
                  subject: s,
                  message: l,
                  reply_to: i,
                }),
                N4.sendForm(
                  "service_a83mwk4",
                  "template_crw6xto",
                  w.current,
                  "wTuP0_-qh1sVDIcjH"
                ).then(
                  (g) => {
                    console.log(g.text),
                      d(""),
                      v(
                        `Thank you, ${e}! Your message has been sent successfully.`
                      ),
                      t(""),
                      r(""),
                      o(""),
                      a(""),
                      u("");
                  },
                  (g) => {
                    console.log(g.text),
                      d("Something went wrong. Please try again.");
                  }
                ))
            : d("Give a valid Email!");
      };
    return f.jsxs("section", {
      id: "contact",
      className: "w-full py-5 pt-10 border-b-[1px] border-b-black pb-10",
      children: [
        f.jsx("div", {
          className: "flex justify-center items-center text-center",
          children: f.jsx(eo, { title1: "Contact", title2: "Contact" }),
        }),
        f.jsx("div", {
          className: "w-full overflow-x-hidden",
          "data-aos": "fade-up",
          "data-aos-once": "true",
          "data-aos-anchor-placement": "top-center",
          children: f.jsxs("div", {
            className:
              "w-full h-auto flex flex-col lgl:flex-row gap-7 justify-between",
            children: [
              f.jsx(w4, {}),
              f.jsx("div", {
                "data-aos": "fade-left",
                "data-aos-once": "true",
                className:
                  "w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-md shadow-designColor",
                children: f.jsxs("form", {
                  ref: w,
                  className:
                    "w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5",
                  children: [
                    c &&
                      f.jsx("p", {
                        className:
                          "py-3 bg-gray-200 shadow-md shadow-designColor text-center text-orange-500 text-base tracking-wide animate-bounce",
                        children: c,
                      }),
                    p &&
                      f.jsx("p", {
                        className:
                          "py-3 bg-gray-200 shadow-md shadow-designColor text-center text-green-500 text-base tracking-wide animate-bounce",
                        children: p,
                      }),
                    f.jsx("div", {
                      className: "w-full flex flex-col lgl:flex-row gap-10",
                      children: f.jsxs("div", {
                        className: "w-full lgl:w-full flex flex-col gap-4",
                        children: [
                          f.jsx("p", {
                            className:
                              "text-sm text-gray-400 uppercase tracking-wide",
                            children: "Your name",
                          }),
                          f.jsx("input", {
                            onChange: (m) => t(m.target.value),
                            value: e,
                            name: "from_name",
                            className: `${
                              c === "Username is required!" &&
                              "outline-[#262525]"
                            } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`,
                            type: "text",
                          }),
                        ],
                      }),
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        f.jsx("p", {
                          className:
                            "text-sm text-gray-400 uppercase tracking-wide",
                          children: "Email",
                        }),
                        f.jsx("input", {
                          onChange: (m) => o(m.target.value),
                          value: i,
                          name: "reply_to",
                          className: `${
                            c === "Please give your Email!" &&
                            "outline-[#262525]"
                          } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`,
                          type: "email",
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        f.jsx("p", {
                          className:
                            "text-sm text-gray-400 uppercase tracking-wide",
                          children: "Message",
                        }),
                        f.jsx("textarea", {
                          onChange: (m) => u(m.target.value),
                          value: l,
                          name: "message",
                          className: `${
                            c === "Message is required!" && "outline-[#262525]"
                          } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`,
                          cols: "30",
                          rows: "8",
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: "w-full",
                      children: f.jsx("button", {
                        onClick: S,
                        className:
                          "w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] border-transparent",
                        children: "Send Message",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
function R4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
        },
        child: [],
      },
    ],
  })(e);
}
function D4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
        },
        child: [],
      },
    ],
  })(e);
}
function z4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z",
        },
        child: [],
      },
    ],
  })(e);
}
function A4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z",
        },
        child: [],
      },
    ],
  })(e);
}
function I4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
        },
        child: [],
      },
    ],
  })(e);
}
function V4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
        },
        child: [],
      },
    ],
  })(e);
}
function F4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 6.456v3.072l2.904-.96L20.52 3.36l-2.928-2.136zm2.904 2.112l-1.8 2.496 2.928.936 6.144-1.992-1.128-3.432zM17.832 12l-2.928.936 1.8 2.496 6.144 1.992 1.128-3.432zm-1.128 3.432l-2.904-.96v3.072l3.792 5.232 2.928-2.136zM13.8 17.544L12 15.072l-1.8 2.472V24h3.6zm-3.6 0v-3.072l-2.904.96L3.48 20.64l2.928 2.136zm-2.904-2.112l1.8-2.496L6.168 12 .024 13.992l1.128 3.432zM6.168 12l2.928-.936-1.8-2.496-6.144-1.992-1.128 3.432zm1.128-3.432l2.904.96V6.456L6.408 1.224 3.48 3.36Z",
        },
        child: [],
      },
    ],
  })(e);
}
function B4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",
        },
        child: [],
      },
    ],
  })(e);
}
function $4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
        },
        child: [],
      },
    ],
  })(e);
}
function H4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
        },
        child: [],
      },
    ],
  })(e);
}
function U4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z",
        },
        child: [],
      },
    ],
  })(e);
}
function W4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z",
        },
        child: [],
      },
    ],
  })(e);
}
function K4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
        },
        child: [],
      },
    ],
  })(e);
}
function G4(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
        },
        child: [],
      },
    ],
  })(e);
}
const Cp = [
  {
    id: 1,
    icon: f.jsx(ix, {}),
    title: "React Js",
    des: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of their applications.",
  },
  {
    id: 2,
    icon: f.jsx($4, {}),
    title: "Next Js",
    des: "Next.js is a framework for building server-rendered React applications. It provides features like routing, server-side rendering, and static site generation.",
  },
  {
    id: 3,
    icon: f.jsx(V4, {}),
    title: "JavaScript",
    des: "JavaScript is a versatile programming language used for adding interactivity and functionality to web pages. It's supported by all modern web browsers.",
  },
  {
    id: 4,
    icon: f.jsx(G4, {}),
    title: "TypeScript",
    des: "TypeScript is a statically typed superset of JavaScript. It enhances code quality and maintainability by adding type checking to JavaScript.",
  },
  {
    id: 5,
    icon: f.jsx(W4, {}),
    title: "Redux",
    des: "Redux is a predictable state container for JavaScript applications. It's commonly used with React to manage the state of large and complex applications.",
  },
  {
    id: 6,
    icon: f.jsx(H4, {}),
    title: "Node Js",
    des: "Node.js is a server-side runtime environment for running JavaScript. It's known for its non-blocking I/O and is commonly used for building web servers and APIs.",
  },
  {
    id: 7,
    icon: f.jsx(z4, {}),
    title: "Express",
    des: "Express is a minimal and flexible Node.js web application framework. It simplifies the development of web applications and APIs with Node.js.",
  },
  {
    id: 8,
    icon: f.jsx(B4, {}),
    title: "MongoDB",
    des: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It's suitable for a wide range of applications and is known for its scalability.",
  },
  {
    id: 9,
    icon: f.jsx(F4, {}),
    title: "JWT",
    des: "JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. They are commonly used for authorization.",
  },
  {
    id: 10,
    icon: f.jsx(I4, {}),
    title: "HTML 5",
    des: "HTML5 is the latest version of the Hypertext Markup Language used to structure content on the web. It introduces new features like video and audio elements.",
  },
  {
    id: 11,
    icon: f.jsx(D4, {}),
    title: "CSS",
    des: "Cascading Style Sheets (CSS) is a stylesheet language used to control layout of web pages. It complements HTML and helps create visually appealing websites.",
  },
  {
    id: 12,
    icon: f.jsx(K4, {}),
    title: "Tailwind CSS",
    des: "Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-defined utility classes for styling.",
  },
  {
    id: 13,
    icon: f.jsx(R4, {}),
    title: "Bootstrap",
    des: "Bootstrap is a popular front-end framework that simplifies web development by providing a collection of CSS and JavaScript components for building responsive websites.",
  },
  {
    id: 14,
    icon: f.jsx(A4, {}),
    title: "Firebase",
    des: "Firebase is a mobile and web application development platform that offers a wide range of services, including authentication, real-time database, and hosting.",
  },
  {
    id: 15,
    icon: f.jsx(U4, {}),
    title: "React Router Dom",
    des: "React Router Dom is a popular routing library for React applications. It enables developers to add navigation and routing to single-page applications.",
  },
];
function Y4(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function o0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
const Q4 = ({ item: { title: e, des: t, icon: n } }) =>
    f.jsx("div", {
      "data-aos": "zoom-in-down",
      "data-aos-delay": "200",
      "data-aos-once": "true",
      "data-aos-mirror": "false",
      className:
        "w-full border-2 border-designColor px-3 py-4 rounded-lg shadow-shadowTwo flex items-center group hover:bg-gradient-to-b hover:from-black hover:to-[#1e202484] transition-colors duration-100 group",
      children: f.jsx("div", {
        className: "h-[220px] md:h-[190px] overflow-y-hidden",
        children: f.jsxs("div", {
          className:
            "flex h-full flex-col translate-y-16 group-hover:translate-y-0 transition-transform duration-500",
          children: [
            f.jsxs("div", {
              className: "flex flex-row gap-2 justify-start items-center mb-3",
              children: [
                n
                  ? f.jsx("span", {
                      className: "text-2xl text-designColor",
                      children: n,
                    })
                  : f.jsxs(f.Fragment, {
                      children: [
                        f.jsx("span", {
                          className:
                            "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                        }),
                        f.jsx("span", {
                          className:
                            "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                        }),
                        f.jsx("span", {
                          className:
                            "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                        }),
                        f.jsx("span", {
                          className:
                            "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                        }),
                      ],
                    }),
                f.jsx("h2", {
                  className: "text-sm md:text-lg font-bold text-gray-300",
                  children: e,
                }),
              ],
            }),
            f.jsxs("div", {
              className: "flex flex-col",
              children: [
                f.jsx("p", { className: "base text-sm", children: t }),
                f.jsx("span", {
                  className: "text-2xl mt-7 text-designColor",
                  children: f.jsx(o0, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  X4 = () => {
    const [t, n] = _.useState(1),
      r = (t - 1) * 8,
      i = r + 8,
      o = Cp.slice(r, i),
      s = (a) => {
        n(a);
      };
    return f.jsxs("section", {
      id: "skills",
      className:
        "w-full py-16 border-b-[1px] border-b-black mt-[100px] md:-mt-[200px] lg:-mt-[100px] xl:-mt-[300px]",
      children: [
        f.jsx(eo, { title1: "Skills", title2: "Skills" }),
        f.jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6",
          children: o.map((a, l) => f.jsx(Q4, { item: a }, a.id)),
        }),
        f.jsx("div", {
          className: "flex justify-center mt-4",
          children: Array.from({ length: Math.ceil(Cp.length / 8) }).map(
            (a, l) =>
              f.jsx(
                "div",
                {
                  className: "flex items-center justify-center w-[80px] gap-3",
                  onClick: () => s(l + 1),
                  children: f.jsx("button", {
                    className: `w-10 h-10 cursor-pointer mt-10 rounded-full bg-[#22222f] ${
                      t === l + 1
                        ? "text-[#A24E20] font-bold ring-2 ring-[#a24e20]"
                        : "text-gray-100"
                    }`,
                    children: l + 1,
                  }),
                },
                l
              )
          ),
        }),
      ],
    });
  };
function s0() {
  return f.jsxs("div", {
    children: [
      " ",
      f.jsxs("div", {
        className: "flex gap-4",
        children: [
          f.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.facebook.com/profile.php?id=100086218014706",
            className: "bannerIcon",
            children: f.jsx(tx, { className: "text-designColor" }),
          }),
          f.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.instagram.com/rijwanjannat/",
            className: "bannerIcon",
            children: f.jsx(nx, { className: "text-designColor" }),
          }),
          f.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.linkedin.com/in/md-rijwan-developer-3353362ba?trk=contact-infos",
            className: "bannerIcon",
            children: f.jsx(rx, { className: "text-designColor" }),
          }),
        ],
      }),
    ],
  });
}
const q4 = () =>
    f.jsxs("div", {
      "data-aos": "fade-down",
      "data-aos-once": "true",
      "data-aos-easing": "linear",
      "data-aos-duration": "500",
      className:
        "w-full overflow-x-hidden py-20 h-auto border-b-[1px] border-b-black ",
      children: [
        f.jsxs("div", {
          className: "flex items-center gap-",
          children: [
            f.jsxs("h2", {
              className:
                "bg-designColor text-sm lg:text-xl uppercase px-1 md:px-1 py-2 md:py-2 text-black font-[700]",
              children: [" ", "Rijwan"],
            }),
            f.jsx("h2", {
              className: `text-sm lg:text-xl uppercase px-2 py-2\r
           text-designColor font-[700]`,
              children: "Jannat",
            }),
          ],
        }),
        f.jsx("div", {
          className: "flex items-center justify-center w-full mt-5",
          children: f.jsx(s0, {}),
        }),
      ],
    }),
  J4 = () => {
    const e = new Date().getFullYear();
    return f.jsx("div", {
      className: "w-full pb-10",
      children: f.jsxs("p", {
        className: "text-center text-gray-500 text-base",
        children: ["© ", e, " All rights reserved by Md Rijwan Jannat"],
      }),
    });
  };
function Z4(e) {
  return J({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "3", y1: "12", x2: "21", y2: "12" },
        child: [],
      },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" }, child: [] },
      {
        tag: "line",
        attr: { x1: "3", y1: "18", x2: "21", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
function e3(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        },
        child: [],
      },
    ],
  })(e);
}
const jp = [
    { _id: 1001, title: "Home", link: "home" },
    { _id: 1002, title: "Skills", link: "skills" },
    { _id: 1003, title: "Projects", link: "projects" },
    { _id: 1004, title: "About", link: "about" },
    { _id: 1005, title: "location", link: "location" },
    { _id: 1006, title: "Contact", link: "contact" },
  ],
  t3 = () => {
    const [e, t] = _.useState(!1),
      [n, r] = _.useState(null),
      [i, o] = _.useState("transparent"),
      [s, a] = _.useState(!1),
      [l, u] = _.useState("background 0.4s"),
      c = () => {
        window.scrollY > 0
          ? (o("bg-bodyColor"), u("background 0.4s"))
          : (o("transparent"), u("background 0.4s"));
      };
    return (
      _.useEffect(
        () => (
          window.addEventListener("scroll", c),
          () => {
            window.removeEventListener("scroll", c);
          }
        ),
        []
      ),
      f.jsxs("div", {
        className: `w-full h-[130px] py-5 px-3 fixed top-0 z-50 mx-auto flex justify-between items-center font-titleFont ${i}`,
        style: { transition: l },
        children: [
          f.jsxs("div", {
            className: "flex items-center gap-",
            children: [
              f.jsxs("h2", {
                className:
                  "bg-designColor text-lg lg:text-2xl uppercase px-1 md:px-1 py-2 md:py-3 text-black font-[700]",
                children: [" ", "Rijwan"],
              }),
              f.jsx("h2", {
                className:
                  "text-lg lg:text-2xl uppercase px-2 py-3 text-designColor font-[700]",
                children: "Jannat",
              }),
            ],
          }),
          f.jsxs("div", {
            children: [
              f.jsx("ul", {
                className:
                  "hidden mdl:inline-flex items-center gap-6 lg:gap-10",
                children: jp.map(({ _id: d, title: p, link: v }) =>
                  f.jsx(
                    "li",
                    {
                      className: "link-btn",
                      children: f.jsx(_u, {
                        to: v,
                        spy: !0,
                        smooth: !0,
                        offset: -70,
                        duration: 500,
                        onSetActive: () => r(v),
                        className:
                          n === v ? "active border-t-4 border-designColor" : "",
                        children: p,
                      }),
                    },
                    d
                  )
                ),
              }),
              f.jsx("span", {
                onClick: () => t(!e),
                className:
                  "text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer",
                children: f.jsx(Z4, {}),
              }),
              e &&
                f.jsx("div", {
                  "data-aos": "fade-right",
                  "data-aos-once": "true",
                  className:
                    "w-[80%] h-screen overflow-scroll absolute top-4 left-0 bg-bodyColor p-4 scrollbar-hide",
                  children: f.jsxs("div", {
                    className: "flex flex-col gap-8 py-2 relative",
                    children: [
                      f.jsxs("div", {
                        className: "flex items-center gap-",
                        children: [
                          f.jsxs("h2", {
                            className:
                              "bg-designColor text-lg lg:text-2xl uppercase px-1 md:px-1 py-2 md:py-3 text-black font-[700]",
                            children: [" ", "Rijwan"],
                          }),
                          f.jsx("h2", {
                            className:
                              "text-lg lg:text-2xl uppercase px-2 py-3 text-designColor font-[700]",
                            children: "Jannat",
                          }),
                        ],
                      }),
                      f.jsx("ul", {
                        className:
                          "flex flex-col gap-4 items-center justify-center",
                        children: jp.map((d) =>
                          f.jsx(
                            "li",
                            {
                              className: "link-btn w-[90px] text-center mb-3",
                              children: f.jsx(_u, {
                                onClick: () => t(!1),
                                activeClass: "active",
                                to: d.link,
                                spy: !0,
                                smooth: !0,
                                offset: -70,
                                duration: 500,
                                onSetActive: () => r(d.link),
                                className:
                                  n === d.link
                                    ? "active border-t-2 border-designColor"
                                    : "",
                                children: d.title,
                              }),
                            },
                            d._id
                          )
                        ),
                      }),
                      f.jsxs("div", {
                        className:
                          "flex flex-col gap-4 items-center justify-center",
                        children: [
                          f.jsx("h2", {
                            className:
                              "text-base uppercase font-titleFont mb-4",
                            children: "Find me in",
                          }),
                          f.jsx(s0, {}),
                        ],
                      }),
                      f.jsx("span", {
                        "data-aos": "fade-right",
                        onClick: () => {
                          a(!0),
                            setTimeout(() => {
                              t(!1), a(!1);
                            }, 300);
                        },
                        className:
                          "absolute top-4 right-4 text-gray-400 hover-text-designColor duration-300 text-2xl cursor-pointer",
                        children: f.jsx(e3, {}),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        ],
      })
    );
  };
function al(e) {
  return J({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
        },
        child: [],
      },
    ],
  })(e);
}
const n3 = ({
  icon1: e,
  icon2: t,
  icon3: n,
  gitHubLink1: r,
  gitHubLink2: i,
}) => {
  const [o, s] = _.useState(!1),
    a = _.useRef(),
    l = () => {
      s(!o);
    },
    u = () => {
      s(!1);
    };
  return (
    _.useEffect(() => {
      const c = (d) => {
        a.current && !a.current.contains(d.target) && s(!1);
      };
      return (
        document.addEventListener("mousedown", c),
        () => {
          document.removeEventListener("mousedown", c);
        }
      );
    }, []),
    f.jsxs("div", {
      className: "sec-center",
      children: [
        f.jsx("div", {
          className: "relative z-10 block",
          id: "dropdown",
          name: "dropdown",
          onClick: l,
          children: f.jsx("div", { children: e }),
        }),
        o &&
          f.jsxs("div", {
            "data-aos": "fade-up",
            "data-aos-duration": "500",
            className:
              "bg-[#202223] px-2 py-2 absolute z-20 w-[100px] md:w-28 mt-4 rounded-md space-y-3",
            ref: a,
            children: [
              f.jsxs("a", {
                className:
                  "text-white text-[10px] font-semibold w-full hover:bg-gray-500 shadow shadow-gray-900 hover:bg-opacity-20 flex items-center p-1 rounded",
                href: `${r}`,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: u,
                children: [
                  f.jsx("span", { className: "mr-2", children: t }),
                  " Front-End",
                ],
              }),
              f.jsxs("a", {
                className:
                  "text-white text-[10px] font-semibold w-full hover:bg-gray-500 shadow shadow-gray-900 hover:bg-opacity-20 flex items-center p-1 rounded",
                href: `${i}`,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: u,
                children: [
                  f.jsx("span", { className: "mr-2", children: n }),
                  " Back-End",
                ],
              }),
            ],
          }),
      ],
    })
  );
};
var a0 = {},
  l0 = {},
  ga = {},
  u0 = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  e.default = t;
})(u0);
var r3 = "Expected a function",
  Ep = NaN,
  i3 = "[object Symbol]",
  o3 = /^\s+|\s+$/g,
  s3 = /^[-+]0x[0-9a-f]+$/i,
  a3 = /^0b[01]+$/i,
  l3 = /^0o[0-7]+$/i,
  u3 = parseInt,
  c3 = typeof rn == "object" && rn && rn.Object === Object && rn,
  d3 = typeof self == "object" && self && self.Object === Object && self,
  f3 = c3 || d3 || Function("return this")(),
  p3 = Object.prototype,
  h3 = p3.toString,
  m3 = Math.max,
  g3 = Math.min,
  ll = function () {
    return f3.Date.now();
  };
function v3(e, t, n) {
  var r,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    c = !1,
    d = !1,
    p = !0;
  if (typeof e != "function") throw new TypeError(r3);
  (t = _p(t) || 0),
    Ou(n) &&
      ((c = !!n.leading),
      (d = "maxWait" in n),
      (o = d ? m3(_p(n.maxWait) || 0, t) : o),
      (p = "trailing" in n ? !!n.trailing : p));
  function v(k) {
    var j = r,
      C = i;
    return (r = i = void 0), (u = k), (s = e.apply(C, j)), s;
  }
  function w(k) {
    return (u = k), (a = setTimeout(m, t)), c ? v(k) : s;
  }
  function y(k) {
    var j = k - l,
      C = k - u,
      P = t - j;
    return d ? g3(P, o - C) : P;
  }
  function S(k) {
    var j = k - l,
      C = k - u;
    return l === void 0 || j >= t || j < 0 || (d && C >= o);
  }
  function m() {
    var k = ll();
    if (S(k)) return h(k);
    a = setTimeout(m, y(k));
  }
  function h(k) {
    return (a = void 0), p && r ? v(k) : ((r = i = void 0), s);
  }
  function g() {
    a !== void 0 && clearTimeout(a), (u = 0), (r = l = i = a = void 0);
  }
  function x() {
    return a === void 0 ? s : h(ll());
  }
  function b() {
    var k = ll(),
      j = S(k);
    if (((r = arguments), (i = this), (l = k), j)) {
      if (a === void 0) return w(l);
      if (d) return (a = setTimeout(m, t)), v(l);
    }
    return a === void 0 && (a = setTimeout(m, t)), s;
  }
  return (b.cancel = g), (b.flush = x), b;
}
function Ou(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function y3(e) {
  return !!e && typeof e == "object";
}
function w3(e) {
  return typeof e == "symbol" || (y3(e) && h3.call(e) == i3);
}
function _p(e) {
  if (typeof e == "number") return e;
  if (w3(e)) return Ep;
  if (Ou(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ou(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(o3, "");
  var n = a3.test(e);
  return n || l3.test(e) ? u3(e.slice(2), n ? 2 : 8) : s3.test(e) ? Ep : +e;
}
var x3 = v3,
  c0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var s = "";
      for (var a in o) t.call(o, a) && o[a] && (s = i(s, a));
      return s;
    }
    function i(o, s) {
      return s ? (o ? o + " " + s : o + s) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(c0);
var va = c0.exports,
  R = {},
  sd = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(_);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (o) {
      return t.default.createElement("ul", { style: { display: "block" } }, o);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (o) {
      return t.default.createElement("button", null, o + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  e.default = r;
})(sd);
Object.defineProperty(R, "__esModule", { value: !0 });
R.checkSpecKeys =
  R.checkNavigable =
  R.changeSlide =
  R.canUseDOM =
  R.canGoNext =
    void 0;
R.clamp = f0;
R.extractObject = void 0;
R.filterSettings = D3;
R.validSettings =
  R.swipeStart =
  R.swipeMove =
  R.swipeEnd =
  R.slidesOnRight =
  R.slidesOnLeft =
  R.slideHandler =
  R.siblingDirection =
  R.safePreventDefault =
  R.lazyStartIndex =
  R.lazySlidesOnRight =
  R.lazySlidesOnLeft =
  R.lazyEndIndex =
  R.keyHandler =
  R.initializedState =
  R.getWidth =
  R.getTrackLeft =
  R.getTrackCSS =
  R.getTrackAnimateCSS =
  R.getTotalSlides =
  R.getSwipeDirection =
  R.getSlideCount =
  R.getRequiredLazySlides =
  R.getPreClones =
  R.getPostClones =
  R.getOnDemandLazySlides =
  R.getNavigableIndexes =
  R.getHeight =
    void 0;
var S3 = d0(_),
  b3 = d0(sd);
function d0(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ai(e) {
  "@babel/helpers - typeof";
  return (
    (Ai =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ai(e)
  );
}
function Op(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Op(Object(n), !0).forEach(function (r) {
          k3(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Op(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function k3(e, t, n) {
  return (
    (t = T3(t)),
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
function T3(e) {
  var t = P3(e, "string");
  return Ai(t) == "symbol" ? t : String(t);
}
function P3(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ai(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function f0(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var br = (R.safePreventDefault = function (t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault();
  }),
  p0 = (R.getOnDemandLazySlides = function (t) {
    for (var n = [], r = h0(t), i = m0(t), o = r; o < i; o++)
      t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
    return n;
  });
R.getRequiredLazySlides = function (t) {
  for (var n = [], r = h0(t), i = m0(t), o = r; o < i; o++) n.push(o);
  return n;
};
var h0 = (R.lazyStartIndex = function (t) {
    return t.currentSlide - C3(t);
  }),
  m0 = (R.lazyEndIndex = function (t) {
    return t.currentSlide + j3(t);
  }),
  C3 = (R.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  j3 = (R.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
          1 +
          (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  Mu = (R.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  g0 = (R.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  v0 = (R.getSwipeDirection = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r,
      i,
      o,
      s;
    return (
      (r = t.startX - t.curX),
      (i = t.startY - t.curY),
      (o = Math.atan2(i, r)),
      (s = Math.round((o * 180) / Math.PI)),
      s < 0 && (s = 360 - Math.abs(s)),
      (s <= 45 && s >= 0) || (s <= 360 && s >= 315)
        ? "left"
        : s >= 135 && s <= 225
        ? "right"
        : n === !0
        ? s >= 35 && s <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  y0 = (R.canGoNext = function (t) {
    var n = !0;
    return (
      t.infinite ||
        (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
          t.slideCount <= t.slidesToShow ||
          t.currentSlide >= t.slideCount - t.slidesToShow) &&
          (n = !1)),
      n
    );
  });
R.extractObject = function (t, n) {
  var r = {};
  return (
    n.forEach(function (i) {
      return (r[i] = t[i]);
    }),
    r
  );
};
R.initializedState = function (t) {
  var n = S3.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(Mu(r)),
    o = t.trackRef && t.trackRef.node,
    s = Math.ceil(Mu(o)),
    a;
  if (t.vertical) a = i;
  else {
    var l = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (l *= i / 100),
      (a = Math.ceil((i - l) / t.slidesToShow));
  }
  var u = r && g0(r.querySelector('[data-index="0"]')),
    c = u * t.slidesToShow,
    d = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (d = n - 1 - t.initialSlide);
  var p = t.lazyLoadedList || [],
    v = p0(oe(oe({}, t), {}, { currentSlide: d, lazyLoadedList: p }));
  p = p.concat(v);
  var w = {
    slideCount: n,
    slideWidth: a,
    listWidth: i,
    trackWidth: s,
    currentSlide: d,
    slideHeight: u,
    listHeight: c,
    lazyLoadedList: p,
  };
  return t.autoplaying === null && t.autoplay && (w.autoplaying = "playing"), w;
};
R.slideHandler = function (t) {
  var n = t.waitForAnimate,
    r = t.animating,
    i = t.fade,
    o = t.infinite,
    s = t.index,
    a = t.slideCount,
    l = t.lazyLoad,
    u = t.currentSlide,
    c = t.centerMode,
    d = t.slidesToScroll,
    p = t.slidesToShow,
    v = t.useCSS,
    w = t.lazyLoadedList;
  if (n && r) return {};
  var y = s,
    S,
    m,
    h,
    g = {},
    x = {},
    b = o ? s : f0(s, 0, a - 1);
  if (i) {
    if (!o && (s < 0 || s >= a)) return {};
    s < 0 ? (y = s + a) : s >= a && (y = s - a),
      l && w.indexOf(y) < 0 && (w = w.concat(y)),
      (g = {
        animating: !0,
        currentSlide: y,
        lazyLoadedList: w,
        targetSlide: y,
      }),
      (x = { animating: !1, targetSlide: y });
  } else
    (S = y),
      y < 0
        ? ((S = y + a), o ? a % d !== 0 && (S = a - (a % d)) : (S = 0))
        : !y0(t) && y > u
        ? (y = S = u)
        : c && y >= a
        ? ((y = o ? a : a - 1), (S = o ? 0 : a - 1))
        : y >= a && ((S = y - a), o ? a % d !== 0 && (S = 0) : (S = a - p)),
      !o && y + p >= a && (S = a - p),
      (m = _s(oe(oe({}, t), {}, { slideIndex: y }))),
      (h = _s(oe(oe({}, t), {}, { slideIndex: S }))),
      o || (m === h && (y = S), (m = h)),
      l && (w = w.concat(p0(oe(oe({}, t), {}, { currentSlide: y })))),
      v
        ? ((g = {
            animating: !0,
            currentSlide: S,
            trackStyle: w0(oe(oe({}, t), {}, { left: m })),
            lazyLoadedList: w,
            targetSlide: b,
          }),
          (x = {
            animating: !1,
            currentSlide: S,
            trackStyle: Es(oe(oe({}, t), {}, { left: h })),
            swipeLeft: null,
            targetSlide: b,
          }))
        : (g = {
            currentSlide: S,
            trackStyle: Es(oe(oe({}, t), {}, { left: h })),
            lazyLoadedList: w,
            targetSlide: b,
          });
  return { state: g, nextState: x };
};
R.changeSlide = function (t, n) {
  var r,
    i,
    o,
    s,
    a,
    l = t.slidesToScroll,
    u = t.slidesToShow,
    c = t.slideCount,
    d = t.currentSlide,
    p = t.targetSlide,
    v = t.lazyLoad,
    w = t.infinite;
  if (((s = c % l !== 0), (r = s ? 0 : (c - d) % l), n.message === "previous"))
    (o = r === 0 ? l : u - r),
      (a = d - o),
      v && !w && ((i = d - o), (a = i === -1 ? c - 1 : i)),
      w || (a = p - l);
  else if (n.message === "next")
    (o = r === 0 ? l : r),
      (a = d + o),
      v && !w && (a = ((d + l) % c) + r),
      w || (a = p + l);
  else if (n.message === "dots") a = n.index * n.slidesToScroll;
  else if (n.message === "children") {
    if (((a = n.index), w)) {
      var y = M3(oe(oe({}, t), {}, { targetSlide: a }));
      a > n.currentSlide && y === "left"
        ? (a = a - c)
        : a < n.currentSlide && y === "right" && (a = a + c);
    }
  } else n.message === "index" && (a = Number(n.index));
  return a;
};
R.keyHandler = function (t, n, r) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n
    ? ""
    : t.keyCode === 37
    ? r
      ? "next"
      : "previous"
    : t.keyCode === 39
    ? r
      ? "previous"
      : "next"
    : "";
};
R.swipeStart = function (t, n, r) {
  return (
    t.target.tagName === "IMG" && br(t),
    !n || (!r && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY,
          },
        }
  );
};
R.swipeMove = function (t, n) {
  var r = n.scrolling,
    i = n.animating,
    o = n.vertical,
    s = n.swipeToSlide,
    a = n.verticalSwiping,
    l = n.rtl,
    u = n.currentSlide,
    c = n.edgeFriction,
    d = n.edgeDragged,
    p = n.onEdge,
    v = n.swiped,
    w = n.swiping,
    y = n.slideCount,
    S = n.slidesToScroll,
    m = n.infinite,
    h = n.touchObject,
    g = n.swipeEvent,
    x = n.listHeight,
    b = n.listWidth;
  if (!r) {
    if (i) return br(t);
    o && s && a && br(t);
    var k,
      j = {},
      C = _s(n);
    (h.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (h.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (h.swipeLength = Math.round(Math.sqrt(Math.pow(h.curX - h.startX, 2))));
    var P = Math.round(Math.sqrt(Math.pow(h.curY - h.startY, 2)));
    if (!a && !w && P > 10) return { scrolling: !0 };
    a && (h.swipeLength = P);
    var T = (l ? -1 : 1) * (h.curX > h.startX ? 1 : -1);
    a && (T = h.curY > h.startY ? 1 : -1);
    var D = Math.ceil(y / S),
      L = v0(n.touchObject, a),
      E = h.swipeLength;
    return (
      m ||
        (((u === 0 && (L === "right" || L === "down")) ||
          (u + 1 >= D && (L === "left" || L === "up")) ||
          (!y0(n) && (L === "left" || L === "up"))) &&
          ((E = h.swipeLength * c),
          d === !1 && p && (p(L), (j.edgeDragged = !0)))),
      !v && g && (g(L), (j.swiped = !0)),
      o ? (k = C + E * (x / b) * T) : l ? (k = C - E * T) : (k = C + E * T),
      a && (k = C + E * T),
      (j = oe(
        oe({}, j),
        {},
        {
          touchObject: h,
          swipeLeft: k,
          trackStyle: Es(oe(oe({}, n), {}, { left: k })),
        }
      )),
      Math.abs(h.curX - h.startX) < Math.abs(h.curY - h.startY) * 0.8 ||
        (h.swipeLength > 10 && ((j.swiping = !0), br(t))),
      j
    );
  }
};
R.swipeEnd = function (t, n) {
  var r = n.dragging,
    i = n.swipe,
    o = n.touchObject,
    s = n.listWidth,
    a = n.touchThreshold,
    l = n.verticalSwiping,
    u = n.listHeight,
    c = n.swipeToSlide,
    d = n.scrolling,
    p = n.onSwipe,
    v = n.targetSlide,
    w = n.currentSlide,
    y = n.infinite;
  if (!r) return i && br(t), {};
  var S = l ? u / a : s / a,
    m = v0(o, l),
    h = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (d || !o.swipeLength) return h;
  if (o.swipeLength > S) {
    br(t), p && p(m);
    var g,
      x,
      b = y ? w : v;
    switch (m) {
      case "left":
      case "up":
        (x = b + Np(n)), (g = c ? Mp(n, x) : x), (h.currentDirection = 0);
        break;
      case "right":
      case "down":
        (x = b - Np(n)), (g = c ? Mp(n, x) : x), (h.currentDirection = 1);
        break;
      default:
        g = b;
    }
    h.triggerSlideHandler = g;
  } else {
    var k = _s(n);
    h.trackStyle = w0(oe(oe({}, n), {}, { left: k }));
  }
  return h;
};
var E3 = (R.getNavigableIndexes = function (t) {
    for (
      var n = t.infinite ? t.slideCount * 2 : t.slideCount,
        r = t.infinite ? t.slidesToShow * -1 : 0,
        i = t.infinite ? t.slidesToShow * -1 : 0,
        o = [];
      r < n;

    )
      o.push(r),
        (r = i + t.slidesToScroll),
        (i += Math.min(t.slidesToScroll, t.slidesToShow));
    return o;
  }),
  Mp = (R.checkNavigable = function (t, n) {
    var r = E3(t),
      i = 0;
    if (n > r[r.length - 1]) n = r[r.length - 1];
    else
      for (var o in r) {
        if (n < r[o]) {
          n = i;
          break;
        }
        i = r[o];
      }
    return n;
  }),
  Np = (R.getSlideCount = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var r,
        i = t.listRef,
        o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(o).every(function (l) {
          if (t.vertical) {
            if (l.offsetTop + g0(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
          } else if (l.offsetLeft - n + Mu(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
          return !0;
        }),
        !r)
      )
        return 0;
      var s = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        a = Math.abs(r.dataset.index - s) || 1;
      return a;
    } else return t.slidesToScroll;
  }),
  ad = (R.checkSpecKeys = function (t, n) {
    return n.reduce(function (r, i) {
      return r && t.hasOwnProperty(i);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  Es = (R.getTrackCSS = function (t) {
    ad(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var n,
      r,
      i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (r = i * t.slideHeight) : (n = O3(t) * t.slideWidth);
    var o = { opacity: 1, transition: "", WebkitTransition: "" };
    if (t.useTransform) {
      var s = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        a = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        l = t.vertical
          ? "translateY(" + t.left + "px)"
          : "translateX(" + t.left + "px)";
      o = oe(
        oe({}, o),
        {},
        { WebkitTransform: s, transform: a, msTransform: l }
      );
    } else t.vertical ? (o.top = t.left) : (o.left = t.left);
    return (
      t.fade && (o = { opacity: 1 }),
      n && (o.width = n),
      r && (o.height = r),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (t.vertical
          ? (o.marginTop = t.left + "px")
          : (o.marginLeft = t.left + "px")),
      o
    );
  }),
  w0 = (R.getTrackAnimateCSS = function (t) {
    ad(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var n = Es(t);
    return (
      t.useTransform
        ? ((n.WebkitTransition =
            "-webkit-transform " + t.speed + "ms " + t.cssEase),
          (n.transition = "transform " + t.speed + "ms " + t.cssEase))
        : t.vertical
        ? (n.transition = "top " + t.speed + "ms " + t.cssEase)
        : (n.transition = "left " + t.speed + "ms " + t.cssEase),
      n
    );
  }),
  _s = (R.getTrackLeft = function (t) {
    if (t.unslick) return 0;
    ad(t, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var n = t.slideIndex,
      r = t.trackRef,
      i = t.infinite,
      o = t.centerMode,
      s = t.slideCount,
      a = t.slidesToShow,
      l = t.slidesToScroll,
      u = t.slideWidth,
      c = t.listWidth,
      d = t.variableWidth,
      p = t.slideHeight,
      v = t.fade,
      w = t.vertical,
      y = 0,
      S,
      m,
      h = 0;
    if (v || t.slideCount === 1) return 0;
    var g = 0;
    if (
      (i
        ? ((g = -Xo(t)),
          s % l !== 0 && n + l > s && (g = -(n > s ? a - (n - s) : s % l)),
          o && (g += parseInt(a / 2)))
        : (s % l !== 0 && n + l > s && (g = a - (s % l)),
          o && (g = parseInt(a / 2))),
      (y = g * u),
      (h = g * p),
      w ? (S = n * p * -1 + h) : (S = n * u * -1 + y),
      d === !0)
    ) {
      var x,
        b = r && r.node;
      if (
        ((x = n + Xo(t)),
        (m = b && b.childNodes[x]),
        (S = m ? m.offsetLeft * -1 : 0),
        o === !0)
      ) {
        (x = i ? n + Xo(t) : n), (m = b && b.children[x]), (S = 0);
        for (var k = 0; k < x; k++)
          S -= b && b.children[k] && b.children[k].offsetWidth;
        (S -= parseInt(t.centerPadding)), (S += m && (c - m.offsetWidth) / 2);
      }
    }
    return S;
  }),
  Xo = (R.getPreClones = function (t) {
    return t.unslick || !t.infinite
      ? 0
      : t.variableWidth
      ? t.slideCount
      : t.slidesToShow + (t.centerMode ? 1 : 0);
  }),
  _3 = (R.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  O3 = (R.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : Xo(t) + t.slideCount + _3(t);
  }),
  M3 = (R.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + N3(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - L3(t)
      ? "right"
      : "left";
  }),
  N3 = (R.slidesOnRight = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var s = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (s += 1), i && n % 2 === 0 && (s += 1), s;
    }
    return i ? 0 : n - 1;
  }),
  L3 = (R.slidesOnLeft = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var s = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (s += 1), !i && n % 2 === 0 && (s += 1), s;
    }
    return i ? n - 1 : 0;
  });
R.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var R3 = (R.validSettings = Object.keys(b3.default));
function D3(e) {
  return R3.reduce(function (t, n) {
    return e.hasOwnProperty(n) && (t[n] = e[n]), t;
  }, {});
}
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.Track = void 0;
var Zt = x0(_),
  ul = x0(va),
  cl = R;
function x0(e) {
  return e && e.__esModule ? e : { default: e };
}
function Nr(e) {
  "@babel/helpers - typeof";
  return (
    (Nr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nr(e)
  );
}
function Nu() {
  return (
    (Nu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nu.apply(this, arguments)
  );
}
function z3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A3(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, b0(r.key), r);
  }
}
function I3(e, t, n) {
  return (
    t && A3(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function V3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Lu(e, t);
}
function Lu(e, t) {
  return (
    (Lu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Lu(e, t)
  );
}
function F3(e) {
  var t = S0();
  return function () {
    var r = Os(e),
      i;
    if (t) {
      var o = Os(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return B3(this, i);
  };
}
function B3(e, t) {
  if (t && (Nr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ru(e);
}
function Ru(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function S0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (S0 = function () {
    return !!e;
  })();
}
function Os(e) {
  return (
    (Os = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Os(e)
  );
}
function Lp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lp(Object(n), !0).forEach(function (r) {
          Du(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Lp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Du(e, t, n) {
  return (
    (t = b0(t)),
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
function b0(e) {
  var t = $3(e, "string");
  return Nr(t) == "symbol" ? t : String(t);
}
function $3(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dl = function (t) {
    var n, r, i, o, s;
    t.rtl ? (s = t.slideCount - 1 - t.index) : (s = t.index),
      (i = s < 0 || s >= t.slideCount),
      t.centerMode
        ? ((o = Math.floor(t.slidesToShow / 2)),
          (r = (s - t.currentSlide) % t.slideCount === 0),
          s > t.currentSlide - o - 1 && s <= t.currentSlide + o && (n = !0))
        : (n = t.currentSlide <= s && s < t.currentSlide + t.slidesToShow);
    var a;
    t.targetSlide < 0
      ? (a = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (a = t.targetSlide - t.slideCount)
      : (a = t.targetSlide);
    var l = s === a;
    return {
      "slick-slide": !0,
      "slick-active": n,
      "slick-center": r,
      "slick-cloned": i,
      "slick-current": l,
    };
  },
  H3 = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
        (n.width = t.slideWidth),
      t.fade &&
        ((n.position = "relative"),
        t.vertical
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        (n.zIndex = t.currentSlide === t.index ? 999 : 998),
        t.useCSS &&
          (n.transition =
            "opacity " +
            t.speed +
            "ms " +
            t.cssEase +
            ", visibility " +
            t.speed +
            "ms " +
            t.cssEase)),
      n
    );
  },
  fl = function (t, n) {
    return t.key || n;
  },
  U3 = function (t) {
    var n,
      r = [],
      i = [],
      o = [],
      s = Zt.default.Children.count(t.children),
      a = (0, cl.lazyStartIndex)(t),
      l = (0, cl.lazyEndIndex)(t);
    return (
      Zt.default.Children.forEach(t.children, function (u, c) {
        var d,
          p = {
            message: "children",
            index: c,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(c) >= 0)
          ? (d = u)
          : (d = Zt.default.createElement("div", null));
        var v = H3(He(He({}, t), {}, { index: c })),
          w = d.props.className || "",
          y = dl(He(He({}, t), {}, { index: c }));
        if (
          (r.push(
            Zt.default.cloneElement(d, {
              key: "original" + fl(d, c),
              "data-index": c,
              className: (0, ul.default)(y, w),
              tabIndex: "-1",
              "aria-hidden": !y["slick-active"],
              style: He(He({ outline: "none" }, d.props.style || {}), v),
              onClick: function (h) {
                d.props && d.props.onClick && d.props.onClick(h),
                  t.focusOnSelect && t.focusOnSelect(p);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var S = s - c;
          S <= (0, cl.getPreClones)(t) &&
            ((n = -S),
            n >= a && (d = u),
            (y = dl(He(He({}, t), {}, { index: n }))),
            i.push(
              Zt.default.cloneElement(d, {
                key: "precloned" + fl(d, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, ul.default)(y, w),
                "aria-hidden": !y["slick-active"],
                style: He(He({}, d.props.style || {}), v),
                onClick: function (h) {
                  d.props && d.props.onClick && d.props.onClick(h),
                    t.focusOnSelect && t.focusOnSelect(p);
                },
              })
            )),
            (n = s + c),
            n < l && (d = u),
            (y = dl(He(He({}, t), {}, { index: n }))),
            o.push(
              Zt.default.cloneElement(d, {
                key: "postcloned" + fl(d, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, ul.default)(y, w),
                "aria-hidden": !y["slick-active"],
                style: He(He({}, d.props.style || {}), v),
                onClick: function (h) {
                  d.props && d.props.onClick && d.props.onClick(h),
                    t.focusOnSelect && t.focusOnSelect(p);
                },
              })
            );
        }
      }),
      t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
    );
  };
ya.Track = (function (e) {
  V3(n, e);
  var t = F3(n);
  function n() {
    var r;
    z3(this, n);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      Du(Ru(r), "node", null),
      Du(Ru(r), "handleRef", function (a) {
        r.node = a;
      }),
      r
    );
  }
  return (
    I3(n, [
      {
        key: "render",
        value: function () {
          var i = U3(this.props),
            o = this.props,
            s = o.onMouseEnter,
            a = o.onMouseOver,
            l = o.onMouseLeave,
            u = { onMouseEnter: s, onMouseOver: a, onMouseLeave: l };
          return Zt.default.createElement(
            "div",
            Nu(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              u
            ),
            i
          );
        },
      },
    ]),
    n
  );
})(Zt.default.PureComponent);
var wa = {};
function Lr(e) {
  "@babel/helpers - typeof";
  return (
    (Lr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lr(e)
  );
}
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.Dots = void 0;
var Mo = k0(_),
  W3 = k0(va),
  Rp = R;
function k0(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function K3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dp(Object(n), !0).forEach(function (r) {
          G3(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Dp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function G3(e, t, n) {
  return (
    (t = T0(t)),
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
function Y3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q3(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, T0(r.key), r);
  }
}
function X3(e, t, n) {
  return (
    t && Q3(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function T0(e) {
  var t = q3(e, "string");
  return Lr(t) == "symbol" ? t : String(t);
}
function q3(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && zu(e, t);
}
function zu(e, t) {
  return (
    (zu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    zu(e, t)
  );
}
function Z3(e) {
  var t = P0();
  return function () {
    var r = Ms(e),
      i;
    if (t) {
      var o = Ms(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return eb(this, i);
  };
}
function eb(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return tb(e);
}
function tb(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function P0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (P0 = function () {
    return !!e;
  })();
}
function Ms(e) {
  return (
    (Ms = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ms(e)
  );
}
var nb = function (t) {
  var n;
  return (
    t.infinite
      ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
      : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    n
  );
};
wa.Dots = (function (e) {
  J3(n, e);
  var t = Z3(n);
  function n() {
    return Y3(this, n), t.apply(this, arguments);
  }
  return (
    X3(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o.preventDefault(), this.props.clickHandler(i);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var i = this.props,
              o = i.onMouseEnter,
              s = i.onMouseOver,
              a = i.onMouseLeave,
              l = i.infinite,
              u = i.slidesToScroll,
              c = i.slidesToShow,
              d = i.slideCount,
              p = i.currentSlide,
              v = nb({
                slideCount: d,
                slidesToScroll: u,
                slidesToShow: c,
                infinite: l,
              }),
              w = { onMouseEnter: o, onMouseOver: s, onMouseLeave: a },
              y = [],
              S = 0;
            S < v;
            S++
          ) {
            var m = (S + 1) * u - 1,
              h = l ? m : (0, Rp.clamp)(m, 0, d - 1),
              g = h - (u - 1),
              x = l ? g : (0, Rp.clamp)(g, 0, d - 1),
              b = (0, W3.default)({
                "slick-active": l ? p >= x && p <= h : p === x,
              }),
              k = {
                message: "dots",
                index: S,
                slidesToScroll: u,
                currentSlide: p,
              },
              j = this.clickHandler.bind(this, k);
            y = y.concat(
              Mo.default.createElement(
                "li",
                { key: S, className: b },
                Mo.default.cloneElement(this.props.customPaging(S), {
                  onClick: j,
                })
              )
            );
          }
          return Mo.default.cloneElement(
            this.props.appendDots(y),
            K3({ className: this.props.dotsClass }, w)
          );
        },
      },
    ]),
    n
  );
})(Mo.default.PureComponent);
var Rr = {};
function Dr(e) {
  "@babel/helpers - typeof";
  return (
    (Dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dr(e)
  );
}
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.PrevArrow = Rr.NextArrow = void 0;
var kr = j0(_),
  C0 = j0(va),
  rb = R;
function j0(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ns() {
  return (
    (Ns = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ns.apply(this, arguments)
  );
}
function zp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ls(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zp(Object(n), !0).forEach(function (r) {
          ib(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : zp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ib(e, t, n) {
  return (
    (t = O0(t)),
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
function E0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ob(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, O0(r.key), r);
  }
}
function _0(e, t, n) {
  return (
    t && ob(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function O0(e) {
  var t = sb(e, "string");
  return Dr(t) == "symbol" ? t : String(t);
}
function sb(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function M0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Au(e, t);
}
function Au(e, t) {
  return (
    (Au = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Au(e, t)
  );
}
function N0(e) {
  var t = L0();
  return function () {
    var r = Rs(e),
      i;
    if (t) {
      var o = Rs(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return ab(this, i);
  };
}
function ab(e, t) {
  if (t && (Dr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return lb(e);
}
function lb(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function L0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (L0 = function () {
    return !!e;
  })();
}
function Rs(e) {
  return (
    (Rs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Rs(e)
  );
}
Rr.PrevArrow = (function (e) {
  M0(n, e);
  var t = N0(n);
  function n() {
    return E0(this, n), t.apply(this, arguments);
  }
  return (
    _0(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-prev": !0 },
            o = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
              key: "0",
              "data-role": "none",
              className: (0, C0.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            a = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.prevArrow
              ? (l = kr.default.cloneElement(
                  this.props.prevArrow,
                  Ls(Ls({}, s), a)
                ))
              : (l = kr.default.createElement(
                  "button",
                  Ns({ key: "0", type: "button" }, s),
                  " ",
                  "Previous"
                )),
            l
          );
        },
      },
    ]),
    n
  );
})(kr.default.PureComponent);
Rr.NextArrow = (function (e) {
  M0(n, e);
  var t = N0(n);
  function n() {
    return E0(this, n), t.apply(this, arguments);
  }
  return (
    _0(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-next": !0 },
            o = this.clickHandler.bind(this, { message: "next" });
          (0, rb.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
              key: "1",
              "data-role": "none",
              className: (0, C0.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            a = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.nextArrow
              ? (l = kr.default.cloneElement(
                  this.props.nextArrow,
                  Ls(Ls({}, s), a)
                ))
              : (l = kr.default.createElement(
                  "button",
                  Ns({ key: "1", type: "button" }, s),
                  " ",
                  "Next"
                )),
            l
          );
        },
      },
    ]),
    n
  );
})(kr.default.PureComponent);
var R0 = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (i, o) {
          return i[0] === n ? ((r = o), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r];
          return i && i[1];
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n);
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n);
          ~i && r.splice(i, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var s = o[i];
            n.call(r, s[1], s[0]);
          }
        }),
        t
      );
    })();
  })(),
  Iu =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Ds = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  ub = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Ds)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  cb = 2;
function db(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function o() {
    n && ((n = !1), e()), r && a();
  }
  function s() {
    ub(o);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - i < cb) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(s, t);
    i = l;
  }
  return a;
}
var fb = 20,
  pb = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  hb = typeof MutationObserver < "u",
  mb = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = db(this.refresh.bind(this), fb));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Iu ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          hb
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Iu ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = pb.some(function (o) {
            return !!~r.indexOf(o);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  D0 = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  zr = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Ds;
  },
  z0 = xa(0, 0, 0, 0);
function zs(e) {
  return parseFloat(e) || 0;
}
function Ap(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var o = e["border-" + i + "-width"];
    return r + zs(o);
  }, 0);
}
function gb(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var o = i[r],
      s = e["padding-" + o];
    n[o] = zs(s);
  }
  return n;
}
function vb(e) {
  var t = e.getBBox();
  return xa(0, 0, t.width, t.height);
}
function yb(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return z0;
  var r = zr(e).getComputedStyle(e),
    i = gb(r),
    o = i.left + i.right,
    s = i.top + i.bottom,
    a = zs(r.width),
    l = zs(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(a + o) !== t && (a -= Ap(r, "left", "right") + o),
      Math.round(l + s) !== n && (l -= Ap(r, "top", "bottom") + s)),
    !xb(e))
  ) {
    var u = Math.round(a + o) - t,
      c = Math.round(l + s) - n;
    Math.abs(u) !== 1 && (a -= u), Math.abs(c) !== 1 && (l -= c);
  }
  return xa(i.left, i.top, a, l);
}
var wb = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof zr(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof zr(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function xb(e) {
  return e === zr(e).document.documentElement;
}
function Sb(e) {
  return Iu ? (wb(e) ? vb(e) : yb(e)) : z0;
}
function bb(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    s = Object.create(o.prototype);
  return (
    D0(s, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    s
  );
}
function xa(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var kb = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = xa(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = Sb(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  Tb = (function () {
    function e(t, n) {
      var r = bb(n);
      D0(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  Pb = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new R0()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof zr(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new kb(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof zr(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new Tb(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  A0 = typeof WeakMap < "u" ? new WeakMap() : new R0(),
  I0 = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = mb.getInstance(),
        r = new Pb(t, n, this);
      A0.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  I0.prototype[e] = function () {
    var t;
    return (t = A0.get(this))[e].apply(t, arguments);
  };
});
var Cb = (function () {
  return typeof Ds.ResizeObserver < "u" ? Ds.ResizeObserver : I0;
})();
const jb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Cb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Eb = w1(jb);
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.InnerSlider = void 0;
var Ae = no(_),
  _b = no(u0),
  Ob = no(x3),
  Mb = no(va),
  ae = R,
  Nb = ya,
  Lb = wa,
  Ip = Rr,
  Rb = no(Eb);
function no(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gn(e) {
  "@babel/helpers - typeof";
  return (
    (Gn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gn(e)
  );
}
function As() {
  return (
    (As = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    As.apply(this, arguments)
  );
}
function Db(e, t) {
  if (e == null) return {};
  var n = zb(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function zb(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Vp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vp(Object(n), !0).forEach(function (r) {
          K(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Vp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ab(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ib(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, F0(r.key), r);
  }
}
function Vb(e, t, n) {
  return (
    t && Ib(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Fb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Vu(e, t);
}
function Vu(e, t) {
  return (
    (Vu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Vu(e, t)
  );
}
function Bb(e) {
  var t = V0();
  return function () {
    var r = Is(e),
      i;
    if (t) {
      var o = Is(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return $b(this, i);
  };
}
function $b(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return W(e);
}
function W(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function V0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (V0 = function () {
    return !!e;
  })();
}
function Is(e) {
  return (
    (Is = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Is(e)
  );
}
function K(e, t, n) {
  return (
    (t = F0(t)),
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
function F0(e) {
  var t = Hb(e, "string");
  return Gn(t) == "symbol" ? t : String(t);
}
function Hb(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Gn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
ga.InnerSlider = (function (e) {
  Fb(n, e);
  var t = Bb(n);
  function n(r) {
    var i;
    Ab(this, n),
      (i = t.call(this, r)),
      K(W(i), "listRefHandler", function (s) {
        return (i.list = s);
      }),
      K(W(i), "trackRefHandler", function (s) {
        return (i.track = s);
      }),
      K(W(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var s = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, ae.getHeight)(s) + "px";
        }
      }),
      K(W(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var s = (0, ae.getOnDemandLazySlides)(V(V({}, i.props), i.state));
          s.length > 0 &&
            (i.setState(function (l) {
              return { lazyLoadedList: l.lazyLoadedList.concat(s) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s));
        }
        var a = V({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(a, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
            (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new Rb.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (l) {
                (l.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                  (l.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      K(W(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
            (i.callbackTimers.forEach(function (s) {
              return clearTimeout(s);
            }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      K(W(i), "componentDidUpdate", function (s) {
        if (
          (i.checkImagesLoad(),
          i.props.onReInit && i.props.onReInit(),
          i.props.lazyLoad)
        ) {
          var a = (0, ae.getOnDemandLazySlides)(V(V({}, i.props), i.state));
          a.length > 0 &&
            (i.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a));
        }
        i.adaptHeight();
        var l = V(V({ listRef: i.list, trackRef: i.track }, i.props), i.state),
          u = i.didPropsChange(s);
        u &&
          i.updateState(l, u, function () {
            i.state.currentSlide >=
              Ae.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  Ae.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      K(W(i), "onWindowResized", function (s) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, Ob.default)(function () {
            return i.resizeWindow(s);
          }, 50)),
          i.debouncedResize();
      }),
      K(W(i), "resizeWindow", function () {
        var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          a = !!(i.track && i.track.node);
        if (a) {
          var l = V(
            V({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(l, s, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      K(W(i), "updateState", function (s, a, l) {
        var u = (0, ae.initializedState)(s);
        s = V(V(V({}, s), u), {}, { slideIndex: u.currentSlide });
        var c = (0, ae.getTrackLeft)(s);
        s = V(V({}, s), {}, { left: c });
        var d = (0, ae.getTrackCSS)(s);
        (a ||
          Ae.default.Children.count(i.props.children) !==
            Ae.default.Children.count(s.children)) &&
          (u.trackStyle = d),
          i.setState(u, l);
      }),
      K(W(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var s = 0,
            a = 0,
            l = [],
            u = (0, ae.getPreClones)(
              V(
                V(V({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            c = (0, ae.getPostClones)(
              V(
                V(V({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (j) {
            l.push(j.props.style.width), (s += j.props.style.width);
          });
          for (var d = 0; d < u; d++)
            (a += l[l.length - 1 - d]), (s += l[l.length - 1 - d]);
          for (var p = 0; p < c; p++) s += l[p];
          for (var v = 0; v < i.state.currentSlide; v++) a += l[v];
          var w = { width: s + "px", left: -a + "px" };
          if (i.props.centerMode) {
            var y = "".concat(l[i.state.currentSlide], "px");
            w.left = "calc("
              .concat(w.left, " + (100% - ")
              .concat(y, ") / 2 ) ");
          }
          return { trackStyle: w };
        }
        var S = Ae.default.Children.count(i.props.children),
          m = V(V(V({}, i.props), i.state), {}, { slideCount: S }),
          h = (0, ae.getPreClones)(m) + (0, ae.getPostClones)(m) + S,
          g = (100 / i.props.slidesToShow) * h,
          x = 100 / h,
          b = (-x * ((0, ae.getPreClones)(m) + i.state.currentSlide) * g) / 100;
        i.props.centerMode && (b += (100 - (x * g) / 100) / 2);
        var k = { width: g + "%", left: b + "%" };
        return { slideWidth: x + "%", trackStyle: k };
      }),
      K(W(i), "checkImagesLoad", function () {
        var s =
            (i.list &&
              i.list.querySelectorAll &&
              i.list.querySelectorAll(".slick-slide img")) ||
            [],
          a = s.length,
          l = 0;
        Array.prototype.forEach.call(s, function (u) {
          var c = function () {
            return ++l && l >= a && i.onWindowResized();
          };
          if (!u.onclick)
            u.onclick = function () {
              return u.parentNode.focus();
            };
          else {
            var d = u.onclick;
            u.onclick = function (p) {
              d(p), u.parentNode.focus();
            };
          }
          u.onload ||
            (i.props.lazyLoad
              ? (u.onload = function () {
                  i.adaptHeight(),
                    i.callbackTimers.push(
                      setTimeout(i.onWindowResized, i.props.speed)
                    );
                })
              : ((u.onload = c),
                (u.onerror = function () {
                  c(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      K(W(i), "progressiveLazyLoad", function () {
        for (
          var s = [], a = V(V({}, i.props), i.state), l = i.state.currentSlide;
          l < i.state.slideCount + (0, ae.getPostClones)(a);
          l++
        )
          if (i.state.lazyLoadedList.indexOf(l) < 0) {
            s.push(l);
            break;
          }
        for (
          var u = i.state.currentSlide - 1;
          u >= -(0, ae.getPreClones)(a);
          u--
        )
          if (i.state.lazyLoadedList.indexOf(u) < 0) {
            s.push(u);
            break;
          }
        s.length > 0
          ? (i.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(s) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s))
          : i.lazyLoadTimer &&
            (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      K(W(i), "slideHandler", function (s) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = i.props,
          u = l.asNavFor,
          c = l.beforeChange,
          d = l.onLazyLoad,
          p = l.speed,
          v = l.afterChange,
          w = i.state.currentSlide,
          y = (0, ae.slideHandler)(
            V(
              V(V({ index: s }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !a }
            )
          ),
          S = y.state,
          m = y.nextState;
        if (S) {
          c && c(w, S.currentSlide);
          var h = S.lazyLoadedList.filter(function (g) {
            return i.state.lazyLoadedList.indexOf(g) < 0;
          });
          d && h.length > 0 && d(h),
            !i.props.waitForAnimate &&
              i.animationEndCallback &&
              (clearTimeout(i.animationEndCallback),
              v && v(w),
              delete i.animationEndCallback),
            i.setState(S, function () {
              u &&
                i.asNavForIndex !== s &&
                ((i.asNavForIndex = s), u.innerSlider.slideHandler(s)),
                m &&
                  (i.animationEndCallback = setTimeout(function () {
                    var g = m.animating,
                      x = Db(m, ["animating"]);
                    i.setState(x, function () {
                      i.callbackTimers.push(
                        setTimeout(function () {
                          return i.setState({ animating: g });
                        }, 10)
                      ),
                        v && v(S.currentSlide),
                        delete i.animationEndCallback;
                    });
                  }, p));
            });
        }
      }),
      K(W(i), "changeSlide", function (s) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = V(V({}, i.props), i.state),
          u = (0, ae.changeSlide)(l, s);
        if (
          !(u !== 0 && !u) &&
          (a === !0 ? i.slideHandler(u, a) : i.slideHandler(u),
          i.props.autoplay && i.autoPlay("update"),
          i.props.focusOnSelect)
        ) {
          var c = i.list.querySelectorAll(".slick-current");
          c[0] && c[0].focus();
        }
      }),
      K(W(i), "clickHandler", function (s) {
        i.clickable === !1 && (s.stopPropagation(), s.preventDefault()),
          (i.clickable = !0);
      }),
      K(W(i), "keyHandler", function (s) {
        var a = (0, ae.keyHandler)(s, i.props.accessibility, i.props.rtl);
        a !== "" && i.changeSlide({ message: a });
      }),
      K(W(i), "selectHandler", function (s) {
        i.changeSlide(s);
      }),
      K(W(i), "disableBodyScroll", function () {
        var s = function (l) {
          (l = l || window.event),
            l.preventDefault && l.preventDefault(),
            (l.returnValue = !1);
        };
        window.ontouchmove = s;
      }),
      K(W(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      K(W(i), "swipeStart", function (s) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var a = (0, ae.swipeStart)(s, i.props.swipe, i.props.draggable);
        a !== "" && i.setState(a);
      }),
      K(W(i), "swipeMove", function (s) {
        var a = (0, ae.swipeMove)(
          s,
          V(
            V(V({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        a && (a.swiping && (i.clickable = !1), i.setState(a));
      }),
      K(W(i), "swipeEnd", function (s) {
        var a = (0, ae.swipeEnd)(
          s,
          V(
            V(V({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (a) {
          var l = a.triggerSlideHandler;
          delete a.triggerSlideHandler,
            i.setState(a),
            l !== void 0 &&
              (i.slideHandler(l),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      K(W(i), "touchEnd", function (s) {
        i.swipeEnd(s), (i.clickable = !0);
      }),
      K(W(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      K(W(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      K(W(i), "slickGoTo", function (s) {
        var a =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((s = Number(s)), isNaN(s))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: s,
                currentSlide: i.state.currentSlide,
              },
              a
            );
          }, 0)
        );
      }),
      K(W(i), "play", function () {
        var s;
        if (i.props.rtl) s = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, ae.canGoNext)(V(V({}, i.props), i.state)))
          s = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(s);
      }),
      K(W(i), "autoPlay", function (s) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var a = i.state.autoplaying;
        if (s === "update") {
          if (a === "hovered" || a === "focused" || a === "paused") return;
        } else if (s === "leave") {
          if (a === "paused" || a === "focused") return;
        } else if (s === "blur" && (a === "paused" || a === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      K(W(i), "pause", function (s) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var a = i.state.autoplaying;
        s === "paused"
          ? i.setState({ autoplaying: "paused" })
          : s === "focused"
          ? (a === "hovered" || a === "playing") &&
            i.setState({ autoplaying: "focused" })
          : a === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      K(W(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      K(W(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      K(W(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      K(W(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      K(W(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      K(W(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      K(W(i), "render", function () {
        var s = (0, Mb.default)("slick-slider", i.props.className, {
            "slick-vertical": i.props.vertical,
            "slick-initialized": !0,
          }),
          a = V(V({}, i.props), i.state),
          l = (0, ae.extractObject)(a, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          u = i.props.pauseOnHover;
        l = V(
          V({}, l),
          {},
          {
            onMouseEnter: u ? i.onTrackOver : null,
            onMouseLeave: u ? i.onTrackLeave : null,
            onMouseOver: u ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var c;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var d = (0, ae.extractObject)(a, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            p = i.props.pauseOnDotsHover;
          (d = V(
            V({}, d),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: p ? i.onDotsLeave : null,
              onMouseOver: p ? i.onDotsOver : null,
              onMouseLeave: p ? i.onDotsLeave : null,
            }
          )),
            (c = Ae.default.createElement(Lb.Dots, d));
        }
        var v,
          w,
          y = (0, ae.extractObject)(a, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (y.clickHandler = i.changeSlide),
          i.props.arrows &&
            ((v = Ae.default.createElement(Ip.PrevArrow, y)),
            (w = Ae.default.createElement(Ip.NextArrow, y)));
        var S = null;
        i.props.vertical && (S = { height: i.state.listHeight });
        var m = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
            (m = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
            (m = { padding: i.props.centerPadding + " 0px" });
        var h = V(V({}, S), m),
          g = i.props.touchMove,
          x = {
            className: "slick-list",
            style: h,
            onClick: i.clickHandler,
            onMouseDown: g ? i.swipeStart : null,
            onMouseMove: i.state.dragging && g ? i.swipeMove : null,
            onMouseUp: g ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && g ? i.swipeEnd : null,
            onTouchStart: g ? i.swipeStart : null,
            onTouchMove: i.state.dragging && g ? i.swipeMove : null,
            onTouchEnd: g ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && g ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          b = { className: s, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
            ((x = { className: "slick-list" }), (b = { className: s })),
          Ae.default.createElement(
            "div",
            b,
            i.props.unslick ? "" : v,
            Ae.default.createElement(
              "div",
              As({ ref: i.listRefHandler }, x),
              Ae.default.createElement(
                Nb.Track,
                As({ ref: i.trackRefHandler }, l),
                i.props.children
              )
            ),
            i.props.unslick ? "" : w,
            i.props.unslick ? "" : c
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = V(
        V({}, _b.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
          slideCount: Ae.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var o = i.ssrInit();
    return (i.state = V(V({}, i.state), o)), i;
  }
  return (
    Vb(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var o = !1, s = 0, a = Object.keys(this.props);
            s < a.length;
            s++
          ) {
            var l = a[s];
            if (!i.hasOwnProperty(l)) {
              o = !0;
              break;
            }
            if (
              !(
                Gn(i[l]) === "object" ||
                typeof i[l] == "function" ||
                isNaN(i[l])
              ) &&
              i[l] !== this.props[l]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            Ae.default.Children.count(this.props.children) !==
              Ae.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})(Ae.default.Component);
var Ub = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  Wb = Ub,
  Kb = Wb,
  Gb = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  Fp = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var o = e[r];
        (r = Kb(r)),
          Gb(r) && typeof o == "number" && (o = o + "px"),
          o === !0
            ? (t += r)
            : o === !1
            ? (t += "not " + r)
            : (t += "(" + r + ": " + o + ")"),
          i < n.length - 1 && (t += " and ");
      }),
      t
    );
  },
  Yb = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (n, r) {
          (t += Fp(n)), r < e.length - 1 && (t += ", ");
        }),
        t)
      : Fp(e);
  },
  Qb = Yb,
  pl,
  Bp;
function Xb() {
  if (Bp) return pl;
  Bp = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (pl = e),
    pl
  );
}
var hl, $p;
function B0() {
  if ($p) return hl;
  $p = 1;
  function e(r, i) {
    var o = 0,
      s = r.length,
      a;
    for (o; o < s && ((a = i(r[o], o)), a !== !1); o++);
  }
  function t(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }
  function n(r) {
    return typeof r == "function";
  }
  return (hl = { isFunction: n, isArray: t, each: e }), hl;
}
var ml, Hp;
function qb() {
  if (Hp) return ml;
  Hp = 1;
  var e = Xb(),
    t = B0().each;
  function n(r, i) {
    (this.query = r),
      (this.isUnconditional = i),
      (this.handlers = []),
      (this.mql = window.matchMedia(r));
    var o = this;
    (this.listener = function (s) {
      (o.mql = s.currentTarget || s), o.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (n.prototype = {
      constuctor: n,
      addHandler: function (r) {
        var i = new e(r);
        this.handlers.push(i), this.matches() && i.on();
      },
      removeHandler: function (r) {
        var i = this.handlers;
        t(i, function (o, s) {
          if (o.equals(r)) return o.destroy(), !i.splice(s, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (r) {
          r.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var r = this.matches() ? "on" : "off";
        t(this.handlers, function (i) {
          i[r]();
        });
      },
    }),
    (ml = n),
    ml
  );
}
var gl, Up;
function Jb() {
  if (Up) return gl;
  Up = 1;
  var e = qb(),
    t = B0(),
    n = t.each,
    r = t.isFunction,
    i = t.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (o.prototype = {
      constructor: o,
      register: function (s, a, l) {
        var u = this.queries,
          c = l && this.browserIsIncapable;
        return (
          u[s] || (u[s] = new e(s, c)),
          r(a) && (a = { match: a }),
          i(a) || (a = [a]),
          n(a, function (d) {
            r(d) && (d = { match: d }), u[s].addHandler(d);
          }),
          this
        );
      },
      unregister: function (s, a) {
        var l = this.queries[s];
        return (
          l && (a ? l.removeHandler(a) : (l.clear(), delete this.queries[s])),
          this
        );
      },
    }),
    (gl = o),
    gl
  );
}
var vl, Wp;
function Zb() {
  if (Wp) return vl;
  Wp = 1;
  var e = Jb();
  return (vl = new e()), vl;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = s(_),
    n = ga,
    r = s(Qb),
    i = s(sd),
    o = R;
  function s(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function a(P) {
    "@babel/helpers - typeof";
    return (
      (a =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (T) {
              return typeof T;
            }
          : function (T) {
              return T &&
                typeof Symbol == "function" &&
                T.constructor === Symbol &&
                T !== Symbol.prototype
                ? "symbol"
                : typeof T;
            }),
      a(P)
    );
  }
  function l() {
    return (
      (l = Object.assign
        ? Object.assign.bind()
        : function (P) {
            for (var T = 1; T < arguments.length; T++) {
              var D = arguments[T];
              for (var L in D)
                Object.prototype.hasOwnProperty.call(D, L) && (P[L] = D[L]);
            }
            return P;
          }),
      l.apply(this, arguments)
    );
  }
  function u(P, T) {
    var D = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var L = Object.getOwnPropertySymbols(P);
      T &&
        (L = L.filter(function (E) {
          return Object.getOwnPropertyDescriptor(P, E).enumerable;
        })),
        D.push.apply(D, L);
    }
    return D;
  }
  function c(P) {
    for (var T = 1; T < arguments.length; T++) {
      var D = arguments[T] != null ? arguments[T] : {};
      T % 2
        ? u(Object(D), !0).forEach(function (L) {
            b(P, L, D[L]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(D))
        : u(Object(D)).forEach(function (L) {
            Object.defineProperty(P, L, Object.getOwnPropertyDescriptor(D, L));
          });
    }
    return P;
  }
  function d(P, T) {
    if (!(P instanceof T))
      throw new TypeError("Cannot call a class as a function");
  }
  function p(P, T) {
    for (var D = 0; D < T.length; D++) {
      var L = T[D];
      (L.enumerable = L.enumerable || !1),
        (L.configurable = !0),
        "value" in L && (L.writable = !0),
        Object.defineProperty(P, k(L.key), L);
    }
  }
  function v(P, T, D) {
    return (
      T && p(P.prototype, T),
      Object.defineProperty(P, "prototype", { writable: !1 }),
      P
    );
  }
  function w(P, T) {
    if (typeof T != "function" && T !== null)
      throw new TypeError("Super expression must either be null or a function");
    (P.prototype = Object.create(T && T.prototype, {
      constructor: { value: P, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(P, "prototype", { writable: !1 }),
      T && y(P, T);
  }
  function y(P, T) {
    return (
      (y = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (L, E) {
            return (L.__proto__ = E), L;
          }),
      y(P, T)
    );
  }
  function S(P) {
    var T = g();
    return function () {
      var L = x(P),
        E;
      if (T) {
        var M = x(this).constructor;
        E = Reflect.construct(L, arguments, M);
      } else E = L.apply(this, arguments);
      return m(this, E);
    };
  }
  function m(P, T) {
    if (T && (a(T) === "object" || typeof T == "function")) return T;
    if (T !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return h(P);
  }
  function h(P) {
    if (P === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return P;
  }
  function g() {
    try {
      var P = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (g = function () {
      return !!P;
    })();
  }
  function x(P) {
    return (
      (x = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (D) {
            return D.__proto__ || Object.getPrototypeOf(D);
          }),
      x(P)
    );
  }
  function b(P, T, D) {
    return (
      (T = k(T)),
      T in P
        ? Object.defineProperty(P, T, {
            value: D,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (P[T] = D),
      P
    );
  }
  function k(P) {
    var T = j(P, "string");
    return a(T) == "symbol" ? T : String(T);
  }
  function j(P, T) {
    if (a(P) != "object" || !P) return P;
    var D = P[Symbol.toPrimitive];
    if (D !== void 0) {
      var L = D.call(P, T || "default");
      if (a(L) != "object") return L;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (T === "string" ? String : Number)(P);
  }
  var C = (0, o.canUseDOM)() && Zb();
  e.default = (function (P) {
    w(D, P);
    var T = S(D);
    function D(L) {
      var E;
      return (
        d(this, D),
        (E = T.call(this, L)),
        b(h(E), "innerSliderRefHandler", function (M) {
          return (E.innerSlider = M);
        }),
        b(h(E), "slickPrev", function () {
          return E.innerSlider.slickPrev();
        }),
        b(h(E), "slickNext", function () {
          return E.innerSlider.slickNext();
        }),
        b(h(E), "slickGoTo", function (M) {
          var I =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return E.innerSlider.slickGoTo(M, I);
        }),
        b(h(E), "slickPause", function () {
          return E.innerSlider.pause("paused");
        }),
        b(h(E), "slickPlay", function () {
          return E.innerSlider.autoPlay("play");
        }),
        (E.state = { breakpoint: null }),
        (E._responsiveMediaHandlers = []),
        E
      );
    }
    return (
      v(D, [
        {
          key: "media",
          value: function (E, M) {
            C.register(E, M),
              this._responsiveMediaHandlers.push({ query: E, handler: M });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var E = this;
            if (this.props.responsive) {
              var M = this.props.responsive.map(function ($) {
                return $.breakpoint;
              });
              M.sort(function ($, Y) {
                return $ - Y;
              }),
                M.forEach(function ($, Y) {
                  var N;
                  Y === 0
                    ? (N = (0, r.default)({ minWidth: 0, maxWidth: $ }))
                    : (N = (0, r.default)({
                        minWidth: M[Y - 1] + 1,
                        maxWidth: $,
                      })),
                    (0, o.canUseDOM)() &&
                      E.media(N, function () {
                        E.setState({ breakpoint: $ });
                      });
                });
              var I = (0, r.default)({ minWidth: M.slice(-1)[0] });
              (0, o.canUseDOM)() &&
                this.media(I, function () {
                  E.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (E) {
              C.unregister(E.query, E.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var E = this,
              M,
              I;
            this.state.breakpoint
              ? ((I = this.props.responsive.filter(function (Xe) {
                  return Xe.breakpoint === E.state.breakpoint;
                })),
                (M =
                  I[0].settings === "unslick"
                    ? "unslick"
                    : c(c(c({}, i.default), this.props), I[0].settings)))
              : (M = c(c({}, i.default), this.props)),
              M.centerMode && (M.slidesToScroll > 1, (M.slidesToScroll = 1)),
              M.fade &&
                (M.slidesToShow > 1,
                M.slidesToScroll > 1,
                (M.slidesToShow = 1),
                (M.slidesToScroll = 1));
            var $ = t.default.Children.toArray(this.props.children);
            ($ = $.filter(function (Xe) {
              return typeof Xe == "string" ? !!Xe.trim() : !!Xe;
            })),
              M.variableWidth &&
                (M.rows > 1 || M.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (M.variableWidth = !1));
            for (
              var Y = [], N = null, z = 0;
              z < $.length;
              z += M.rows * M.slidesPerRow
            ) {
              for (
                var B = [], U = z;
                U < z + M.rows * M.slidesPerRow;
                U += M.slidesPerRow
              ) {
                for (
                  var q = [], $e = U;
                  $e < U + M.slidesPerRow &&
                  (M.variableWidth &&
                    $[$e].props.style &&
                    (N = $[$e].props.style.width),
                  !($e >= $.length));
                  $e += 1
                )
                  q.push(
                    t.default.cloneElement($[$e], {
                      key: 100 * z + 10 * U + $e,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / M.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                B.push(t.default.createElement("div", { key: 10 * z + U }, q));
              }
              M.variableWidth
                ? Y.push(
                    t.default.createElement(
                      "div",
                      { key: z, style: { width: N } },
                      B
                    )
                  )
                : Y.push(t.default.createElement("div", { key: z }, B));
            }
            if (M === "unslick") {
              var ke = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: ke }, $);
            } else
              Y.length <= M.slidesToShow && !M.infinite && (M.unslick = !0);
            return t.default.createElement(
              n.InnerSlider,
              l(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, o.filterSettings)(M)
              ),
              Y
            );
          },
        },
      ]),
      D
    );
  })(t.default.Component);
})(l0);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(l0);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.default = t.default;
})(a0);
const e5 = fm(a0),
  t5 = ({ image: e }) =>
    f.jsx("div", {
      className: "w-full",
      children: f.jsx("div", {
        className: "w-full h-auto flex flex-col lgl:flex-row justify-between",
        children: f.jsx("div", {
          className:
            "w-full h-[300px] md:h-[350px] lgl:h-96 p-5 mt-10 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center",
          children: f.jsx("img", {
            className: "w-full h-full rounded-lg object-contain",
            src: e.image,
            alt: "project-page",
          }),
        }),
      }),
    });
function n5(e) {
  const { onClick: t } = e;
  return f.jsx("div", {
    className:
      "w-14 h-12 bg-[#0c1821] hover:bg-black duration-1000 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10",
    onClick: t,
    children: f.jsx(o0, {}),
  });
}
function r5(e) {
  const { onClick: t } = e;
  return f.jsx("div", {
    className:
      "w-14 h-12 bg-[#0c1821] hover:bg-black duration-1000 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10",
    onClick: t,
    children: f.jsx(Y4, {}),
  });
}
const i5 = ({ isOpen: e, images: t, closeToggleModal: n }) => {
    const [r, i] = _.useState(0),
      o = (a) => {
        a.target === a.currentTarget && n();
      },
      s = {
        dots: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: f.jsx(n5, {}),
        prevArrow: f.jsx(r5, {}),
        beforeChange: (a, l) => {
          i(l);
        },
        appendDots: (a) =>
          f.jsx("div", {
            style: { borderRadius: "10px", padding: "10px" },
            children: f.jsxs("ul", {
              style: {
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                marginTop: "20px",
              },
              children: [" ", a, " "],
            }),
          }),
        customPaging: (a) =>
          f.jsx("div", {
            style:
              a === r
                ? {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "#ff014f",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }
                : {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "gray",
                    borderRadius: "50%",
                    cursor: "pointer",
                  },
          }),
      };
    return f.jsx("div", {
      className: "relative flex justify-center",
      children:
        e &&
        f.jsx("div", {
          "data-aos": "zoom-in",
          onClick: o,
          className:
            "fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden bg-black bg-opacity-60 w-full flex items-center justify-center",
          "aria-labelledby": "modal-title",
          role: "dialog",
          "aria-modal": "true",
          children: f.jsx("div", {
            className:
              "bg-[#202223] w-11/12 md:w-1/2 lg:w-[600px] h-auto p-5 rounded-lg",
            children: f.jsx(e5, {
              ...s,
              children: t.map((a) => f.jsx(t5, { image: a }, a.id)),
            }),
          }),
        }),
    });
  },
  o5 = ({ project: e, title: t, des: n, src: r }) => {
    const {
        name: i,
        image: o,
        images: s,
        details: a,
        link1: l,
        link2: u,
        link3: c,
        technology: d,
      } = e,
      [p, v] = _.useState(!1),
      [w, y] = _.useState(!1),
      S = () => {
        v(!p);
      },
      m = () => {
        v(!1);
      },
      h = () => {
        y(!w);
      },
      g = a.slice(0, 110),
      x = [
        "#FF5733",
        "#FFBD33",
        "#33FF57",
        "#3366FF",
        "#B233FF",
        "#FF33FF",
        "#33FFFF",
      ];
    return f.jsxs("div", {
      "data-aos": "fade-up",
      "data-aos-once": "true",
      "data-aos-easing": "linear",
      "data-aos-duration": "900",
      className:
        "w-full overflow-x-hidden p-4 h-auto rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000",
      children: [
        f.jsx("div", {
          onClick: S,
          className:
            "w-full h-60 bg-black bg-transparent overflow-hidden rounded-lg",
          children: f.jsx("img", {
            className:
              "w-full h-full object-fill group-hover:scale-110 duration-300 cursor-pointer rounded-lg",
            src: o,
            alt: "home-page",
          }),
        }),
        f.jsx("div", {
          className: "w-full mt-5 flex flex-col gap-6",
          children: f.jsxs("div", {
            children: [
              f.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  f.jsx("h3", {
                    className: "text-base uppercase text-cyan-100 font-normal",
                    children: i,
                  }),
                  f.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      f.jsx("button", {
                        className:
                          "text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-cyan-100 text-designColor duration-300 cursor-pointer",
                        children: f.jsx(n3, {
                          icon1: f.jsx(al, {}),
                          icon2: f.jsx(al, {}),
                          icon3: f.jsx(al, {}),
                          gitHubLink1: l,
                          gitHubLink2: u,
                        }),
                      }),
                      f.jsx("button", {
                        className:
                          "text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-designColor hover:text-cyan-100 duration-300 cursor-pointer",
                        children: f.jsxs("a", {
                          href: `${c}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: [" ", f.jsx(_v, {})],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("p", {
                className:
                  "text-sm tracking-wide mt-3 hover:text-gray-400 hover:text-decoration-300 duration-300",
                children: [
                  w ? a : g,
                  " ",
                  a.length > 110 &&
                    f.jsx("span", {
                      className: "text-cyan-100 cursor-pointer",
                      onClick: h,
                      children: w ? " See Less" : " See More",
                    }),
                ],
              }),
            ],
          }),
        }),
        f.jsx(i5, { images: s, isOpen: p, closeToggleModal: m }),
        f.jsx("div", {
          className: "mt-5 flex flex-wrap gap-3 md:gap-5",
          children: d.map((b, k) =>
            f.jsx(
              "div",
              {
                className: "",
                style: { color: x[k % x.length] },
                children: "#" + b.name,
              },
              k
            )
          ),
        }),
      ],
    });
  },
  Kp = "/assets/SummerHome-q9HqUxyy.png",
  Gp = "/assets/ToyHome-wtwjCxm3.png",
  Yp = "/assets/AsupHome-BlE42d4E.png",
  Qp = "/assets/contactHome-biNLkKYp.png",
  Xp = "/assets/ShefHome-Ccf533Me.png",
  qp = "/assets/AiSquadHome-V4fEbzg6.png",
  Jp = "/assets/TwitterHome-DXvddeXq.png",
  yl = "/assets/tec-zone1-CIYvnye8.png",
  s5 = "/assets/summer1-CP21qADm.png",
  a5 = "/assets/summer2-DVF3NYoD.png",
  l5 = "/assets/summer3-Co1Ku4Wj.png",
  u5 = "/assets/summer4-DaRCE21h.png",
  c5 = "/assets/summer5-YalYDESY.png",
  d5 = "/assets/summer10-Bk0aLt4z.png",
  f5 = "/assets/summer11-CMPhCBZ-.png",
  Zp = "/assets/summer13-Do1prX07.png",
  p5 = "/assets/summer14-CJKBNCVO.png",
  h5 = "/assets/summer15-CL-N_euR.png",
  m5 = "/assets/summer16-BOu1YPTc.png",
  g5 = "/assets/summer17-DnlBOUNJ.png",
  v5 = "/assets/Toy1-8x8EOo3y.png",
  y5 = "/assets/Toy2-s20FjRpa.png",
  w5 = "/assets/Toy3-BHpiMSoP.png",
  x5 = "/assets/Toy4-C8Hf4OGF.png",
  S5 = "/assets/Toy5-DFRFbPzq.png",
  b5 = "/assets/Toy6-DRrZAAeP.png",
  k5 = "/assets/Toy7-CZJVwBBU.png",
  T5 = "/assets/Toy8-BJ2naxIH.png",
  P5 = "/assets/Toy9-BHUpd0_t.png",
  C5 = "/assets/Toy10-DZazyFsV.png",
  j5 = "/assets/Chef1-D54_IV6b.png",
  E5 = "/assets/Chef2-wilw_Dye.png",
  _5 = "/assets/Chef3-D_GX-Sw2.png",
  O5 = "/assets/Chef4-nrUZMZ_q.png",
  M5 = "/assets/Chef5-BMALHT1q.png",
  N5 = "/assets/Chef6-BZ0hkpy5.png",
  L5 = "/assets/Asop1-aSE-LaeI.png",
  R5 = "/assets/Asop2-CyMlOSob.png",
  D5 = "/assets/Asop3-B9KrGY6P.png",
  z5 = "/assets/Asop4-xlx26856.png",
  A5 = "/assets/Asop5-nLRMLDto.png",
  I5 = "/assets/contact1-UjqBmjCB.png",
  V5 = "/assets/contact2-CA8WMOW8.png",
  F5 = "/assets/contact3-DWvmvRCq.png",
  B5 = "/assets/contact4-DR1EXP1n.png",
  $5 = "/assets/twitter1-CvRcmGXz.png",
  H5 = "/assets/twitter2-B5D-B66Z.png",
  U5 = "/assets/twitter3-PvocbYRh.png",
  W5 = "/assets/twitter4-B_ReY9Cl.png",
  K5 = "/assets/twitter5-hDoxFGcZ.png",
  G5 = "/assets/twitter6-DM3FAdee.png",
  Y5 = "/assets/twitter7-CBWlhFOO.png",
  Q5 = "/assets/twitter8-CxKvKhzL.png",
  X5 = "/assets/twitter9-DP3KyVVk.png",
  q5 = "/assets/tec-zone2-D5R_IBq4.png",
  J5 = "/assets/tec-zone3-BUF5M9jt.png",
  Z5 = "/assets/tec-zone4-CGPbcsfO.png",
  ek = "/assets/tec-zone6-CZtoqYUQ.png",
  tk = "/assets/tec-zone7-DDloGrVR.png",
  nk = "/assets/tec-zone8-DnEtDQNG.png",
  rk = "/assets/tec-zone9-CxEN-eeg.png",
  ik = "/assets/tec-zone10-CdEfEWcD.png",
  ok = "/assets/tec-zone11-pNOJvwtL.png",
  eh = [
    {
      id: 1,
      image: Kp,
      images: [
        { id: 1, image: Kp },
        { id: 2, image: s5 },
        { id: 3, image: a5 },
        { id: 4, image: l5 },
        { id: 5, image: u5 },
        { id: 6, image: c5 },
        { id: 8, image: d5 },
        { id: 8, image: f5 },
        { id: 8, image: Zp },
        { id: 8, image: Zp },
        { id: 8, image: p5 },
        { id: 8, image: h5 },
        { id: 8, image: m5 },
        { id: 8, image: g5 },
      ],
      name: "summer sports school camp crouse",
      details:
        "The Summer Sports Camp School MERN website is a mobile-responsive platform with dark mode, role management, authentication and authorization using Firebase and JWT, and visually appealing animations. Students can easily enroll in classes and make payments securely.",
      des1: "First, the web site has a nice snider. Below that are popular classes, instructors, student reviews, and footers.",
      des2: "The project contains all class and instructor pages and has its own power for students, instructors, and admin.",
      des3: "Admin can remove student and instructor and change their role. You can see details by looking at the website.",
      link1:
        "https://github.com/Md-Rijwan-Jannat/summer-sports-school-camp-crouse",
      link2: "https://github.com/Md-Rijwan-Jannat/summer-sports-school-server",
      link3: "https://summer-sports-camp.web.app/",
      technology: [
        { id: 1, name: "React" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Node.js" },
        { id: 4, name: "Express" },
        { id: 5, name: "MongoDB" },
        { id: 6, name: "JWT" },
      ],
    },
    {
      id: 2,
      image: Jp,
      images: [
        { id: 1, image: Jp },
        { id: 2, image: $5 },
        { id: 3, image: H5 },
        { id: 4, image: U5 },
        { id: 5, image: W5 },
        { id: 6, image: K5 },
        { id: 7, image: G5 },
        { id: 8, image: Y5 },
        { id: 9, image: Q5 },
        { id: 10, image: X5 },
      ],
      name: "twitter clone",
      details:
        "The Twitter Clone project is a full-stack Next.js web application that replicates the core functionality of the popular social media platform, Twitter.The interface is designed to closely resemble the familiar Twitter layout, offering a seamless and intuitive user experience.",
      des1: "The Twitter Clone is a full-stack web app replicating core features of the popular social media platform.",
      des2: "Users have personalized profiles where they can customize their bio, profile picture, and cover photo.",
      des3: "Built with modern web technologies, the Twitter Clone emphasizes responsiveness and accessibility.",
      link1: "https://github.com/The-Time-llc/twitter-clone-project",
      link2: "https://github.com/The-Time-llc/twitter-clone-project-server",
      link3: "https://twitter-clone-project-phi.vercel.app/",
      technology: [
        { id: 1, name: "Next.js" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Node.js" },
        { id: 4, name: "Express" },
        { id: 5, name: "MongoDB" },
        { id: 6, name: "JWT" },
      ],
    },
    {
      id: 3,
      image: yl,
      images: [
        { id: 1, image: yl },
        { id: 2, image: yl },
        { id: 3, image: q5 },
        { id: 4, image: J5 },
        { id: 5, image: Z5 },
        { id: 6, image: ek },
        { id: 7, image: tk },
        { id: 8, image: nk },
        { id: 9, image: rk },
        { id: 10, image: ik },
        { id: 11, image: ok },
      ],
      name: "Tec Zone",
      details:
        "Tec Zone is a responsive Next.js web application developed using TypeScript and Redux. It features a modern and intuitive interface designed to provide users with an enhanced browsing experience. The project emphasizes responsiveness and accessibility, ensuring seamless functionality across various devices. Users can expect personalized profiles where they can customize their bio, profile picture, and cover photo",
      des1: "Tec Zone is a responsive Next.js web application developed with TypeScript and Redux.",
      des2: "The interface is designed to provide users with an intuitive browsing experience.",
      des3: "Emphasizes responsiveness and accessibility for seamless functionality across devices.",
      link1: "https://github.com/Md-Rijwan-Jannat/Tec-Zone.",
      link2: "https://github.com/Md-Rijwan-Jannat/Tec-Zone.",
      link3: "https://tec-zone.vercel.app/",
      technology: [
        { id: 1, name: "Next.js" },
        { id: 2, name: "Typescript" },
        { id: 3, name: "Node.js" },
        { id: 4, name: "Express" },
        { id: 5, name: "MongoDB" },
        { id: 6, name: "JWT" },
      ],
    },
    {
      id: 4,
      image: Gp,
      images: [
        { id: 1, image: Gp },
        { id: 2, image: v5 },
        { id: 3, image: y5 },
        { id: 4, image: w5 },
        { id: 5, image: x5 },
        { id: 6, image: S5 },
        { id: 7, image: b5 },
        { id: 8, image: k5 },
        { id: 8, image: T5 },
        { id: 8, image: P5 },
        { id: 8, image: C5 },
      ],
      name: "sports cars toy",
      details:
        "This responsive web app has conditional navigation, private routes, user authentication with Firebase, and sections for Banners, Galleries, Categories, Trending Toys, and Top Rated Toys. Users can explore, search, add, and view their own toys. The app also includes a Blog page with FAQs. It is a seamless and secure experience for toy enthusiasts",
      des1: "This dynamic toy sports car marketplace allows you to effortlessly list sports cars for making for toys enthusiasts.",
      des2: "Whether you are a buyer or a seller, our platform ensures a seamless experience. You are simply log in or register",
      des3: "Explore and discover various categories of toy cars or contribute by adding your own listings for sale.",
      link1: "https://github.com/Md-Rijwan-Jannat/toy-marcketplace",
      link2: "https://github.com/Md-Rijwan-Jannat/Toys-marketplase-server",
      link3: "https://toys-marketplace-386bc.web.app/",
      technology: [
        { id: 1, name: "React" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Node.js" },
        { id: 4, name: "Express" },
        { id: 5, name: "MongoDB" },
      ],
    },
    {
      id: 5,
      image: Yp,
      images: [
        { id: 1, image: Yp },
        { id: 2, image: L5 },
        { id: 3, image: R5 },
        { id: 4, image: D5 },
        { id: 5, image: z5 },
        { id: 6, image: A5 },
      ],
      name: "Aesop",
      details:
        "Aesop is an e-commerce website dedicated to providing a seamless shopping experience for high-quality beauty and skincare products. It offers a wide range of products, from skincare to fragrances, all presented with elegance and sophistication.",
      des1: "Create a visually appealing product page that displays the product name, image, and description.",
      des2: "Implement a feature that allows users to view the product from different angles by hovering over or clicking on the product image.",
      des3: "Ensure that the application is responsive and looks good on various screen sizes and devices, including mobile phones and tablets.",
      link1: "https://github.com/Md-Rijwan-Jannat/assignment-app",
      link2: "",
      link3: "https://aesop-shop.netlify.app/",
      technology: [
        { id: 1, name: "HTML" },
        { id: 2, name: "React" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Express" },
        { id: 6, name: "MongoDB" },
      ],
    },
    {
      id: 6,
      image: Qp,
      images: [
        { id: 1, image: Qp },
        { id: 2, image: I5 },
        { id: 2, image: V5 },
        { id: 2, image: F5 },
        { id: 2, image: B5 },
      ],
      name: "Contact Management",
      details:
        "The Contact Management app is a web-based application designed for efficient contact organization and communication. It offers features for storing and managing contacts, sending messages, and categorizing information.",
      des1: "Modern and intuitive user interface for a visually appealing and user-friendly contact management experience.",
      des2: "Effortless contact navigation, communication, and categorization to streamline user interactions and data organization.",
      des3: "Responsive design ensuring accessibility on various devices, making it ideal for professionals and individuals on-the-go.",
      link1: "https://github.com/Md-Rijwan-Jannat/contact--management-client",
      link2: "https://github.com/Md-Rijwan-Jannat/contact-management-server",
      link3: "https://contact-management-8b060.web.app/",
      technology: [
        { id: 1, name: "HTML" },
        { id: 2, name: "React" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Express" },
        { id: 6, name: "MongoDB" },
      ],
    },
    {
      id: 7,
      image: Xp,
      images: [
        { id: 1, image: Xp },
        { id: 2, image: j5 },
        { id: 3, image: E5 },
        { id: 4, image: _5 },
        { id: 5, image: O5 },
        { id: 6, image: M5 },
        { id: 7, image: N5 },
      ],
      name: "popular chef",
      details:
        "This Chef Recipe project is a responsive web app with login functionality. It includes a banner section, a chefs section, and recipe details with a favorite button. The home page is fully responsive, and users can register and log in via email, password, or Google/GitHub.",
      des1: "Visually appealing design showcasing culinary artistry, enhancing user engagement and appetite.",
      des2: "Seamless navigation for recipes, chef profiles, and interactive cooking tutorials, optimizing user experience.",
      des3: "Mobile-friendly layout, ensuring accessibility across devices for food enthusiasts on-the-go.",
      link1: "https://github.com/Md-Rijwan-Jannat/popular-chef",
      link2: "https://github.com/Md-Rijwan-Jannat/popular-chef-server",
      link3: "https://the-chef-recipe.web.app/",
      technology: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind CSS" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Next.js" },
        { id: 6, name: "JavaScript" },
      ],
    },
    {
      id: 8,
      image: qp,
      images: [{ id: 1, image: qp }],
      name: "Ai work Squad",
      details:
        "The Ai Work Squad is a comprehensive AI project management platform designed to streamline collaboration and task assignment for AI work teams. It provides a centralized workspace for project managers and team members to work efficiently on AI projects.",
      des1: "Develop a user-friendly interface that allows project managers to assign tasks to AI work squad members.",
      des2: "Ensure that the frontend supports various AI model types and provides insights into their results and accuracy.",
      des3: "Implement real-time collaboration tools to allow team members to work together efficiently and provide feedback on AI model outputs.",
      link1: "https://github.com/Md-Rijwan-Jannat/Ai-frontend-Interviews-task",
      link2: "https://github.com/Md-Rijwan-Jannat/Ai-frontend-Interviews-task",
      link3: "https://ai-frontend-interviews-task.vercel.app/",
      technology: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind CSS" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Next.js" },
        { id: 6, name: "JavaScript" },
      ],
    },
  ],
  sk = () => {
    const [t, n] = _.useState(1),
      r = t * 6,
      i = r - 6,
      o = eh.slice(i, r),
      s = Math.ceil(eh.length / 6),
      a = () => {
        n(t + 1);
      },
      l = () => {
        n(t - 1);
      };
    return f.jsxs("div", {
      id: "projects",
      className:
        "w-full py-5 pt-10 border-b-[1px] border-b-black relative xl:h-[1350px]",
      children: [
        f.jsx("div", {
          className: "flex justify-center items-center text-center",
          children: f.jsx(eo, { title1: "Projects", title2: "Projects" }),
        }),
        f.jsx("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14",
          children: o.map((u) => f.jsx(o5, { project: u }, u.id)),
        }),
        f.jsxs("div", {
          className: "flex justify-center mt-8",
          children: [
            t > 1 &&
              f.jsx("button", {
                className:
                  "bg-[#22222f] text-designColor px-4 py-2 rounded-md ring-2 ring-designColor mr-2",
                onClick: l,
                children: "Back",
              }),
            t < s &&
              f.jsx("button", {
                className:
                  "bg-[#22222f] text-designColor px-4 py-2 rounded-md ring-2 ring-designColor",
                onClick: a,
                children: "Load More",
              }),
          ],
        }),
      ],
    });
  },
  ak = () =>
    f.jsxs("section", {
      id: "location",
      className: "w-full h-auto py-5 pt-10 border-b-[1px] border-b-black",
      children: [
        f.jsx("div", {
          className: "flex justify-center items-center text-center",
          children: f.jsx(eo, { title1: "Location", title2: "Location" }),
        }),
        f.jsx("div", {
          className: "w-full h-[300px] md:h-[400px] overflow-x-hidden",
          "data-aos": "fade-up",
          "data-aos-once": "true",
          "data-aos-anchor-placement": "top-center",
          children: f.jsx("iframe", {
            className: "w-full h-full md:h-[400px] rounded",
            title: "Map Location",
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1279078417915!2d89.37233267517156!3d24.722488678019676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5299872276e7%3A0x1fa4833d70cb6fa5!2sBaroAnjul%20Bazar!5e0!3m2!1sen!2sbd!4v1698417903567!5m2!1sen!2sbd",
            frameBorder: "0",
            style: { border: 0 },
            allowFullScreen: !0,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          }),
        }),
      ],
    }),
  lk = () =>
    f.jsx("div", {
      className: "w-full h-screen flex items-center justify-center",
      children: f.jsx("div", {
        className: "pyramid-loader",
        children: f.jsxs("div", {
          className: "wrapper",
          children: [
            f.jsx("span", { className: "side side1" }),
            f.jsx("span", { className: "side side2" }),
            f.jsx("span", { className: "side side3" }),
            f.jsx("span", { className: "side side4" }),
            f.jsx("span", { className: "shadow" }),
          ],
        }),
      }),
    }),
  $0 = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Sa = _.createContext({}),
  ld = _.createContext(null),
  ud = typeof document < "u",
  uk = ud ? _.useLayoutEffect : _.useEffect,
  H0 = _.createContext({ strict: !1 }),
  cd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  ck = "framerAppearId",
  U0 = "data-" + cd(ck),
  dk = { skipAnimations: !1, useManualTiming: !1 };
class th {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function fk(e) {
  let t = new th(),
    n = new th(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          p = d ? t : n;
        return u && s.add(l), p.add(l) && d && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            s.has(c) && (a.schedule(c), e()), c(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const No = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  pk = 40;
function W0(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = No.reduce((d, p) => ((d[p] = fk(() => (n = !0))), d), {}),
    s = (d) => {
      o[d].process(i);
    },
    a = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, pk), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        No.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: No.reduce((d, p) => {
      const v = o[p];
      return (d[p] = (w, y = !1, S = !1) => (n || l(), v.schedule(w, y, S))), d;
    }, {}),
    cancel: (d) => No.forEach((p) => o[p].cancel(d)),
    state: i,
    steps: o,
  };
}
const { schedule: dd, cancel: wC } = W0(queueMicrotask, !1);
function hk(e, t, n, r) {
  const { visualElement: i } = _.useContext(Sa),
    o = _.useContext(H0),
    s = _.useContext(ld),
    a = _.useContext($0).reducedMotion,
    l = _.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  _.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = _.useRef(!!(n[U0] && !window.HandoffComplete));
  return (
    uk(() => {
      u &&
        (dd.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    _.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function cr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function mk(e, t, n) {
  return _.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : cr(n) && (n.current = r));
    },
    [t]
  );
}
function Ii(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ba(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const fd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  pd = ["initial", ...fd];
function ka(e) {
  return ba(e.animate) || pd.some((t) => Ii(e[t]));
}
function K0(e) {
  return !!(ka(e) || e.variants);
}
function gk(e, t) {
  if (ka(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ii(n) ? n : void 0,
      animate: Ii(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function vk(e) {
  const { initial: t, animate: n } = gk(e, _.useContext(Sa));
  return _.useMemo(() => ({ initial: t, animate: n }), [nh(t), nh(n)]);
}
function nh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const rh = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Vi = {};
for (const e in rh) Vi[e] = { isEnabled: (t) => rh[e].some((n) => !!t[n]) };
function yk(e) {
  for (const t in e) Vi[t] = { ...Vi[t], ...e[t] };
}
const G0 = _.createContext({}),
  Y0 = _.createContext({}),
  wk = Symbol.for("motionComponentSymbol");
function xk({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && yk(e);
  function o(a, l) {
    let u;
    const c = { ..._.useContext($0), ...a, layoutId: Sk(a) },
      { isStatic: d } = c,
      p = vk(a),
      v = r(a, d);
    if (!d && ud) {
      p.visualElement = hk(i, v, c, t);
      const w = _.useContext(Y0),
        y = _.useContext(H0).strict;
      p.visualElement && (u = p.visualElement.loadFeatures(c, y, e, w));
    }
    return f.jsxs(Sa.Provider, {
      value: p,
      children: [
        u && p.visualElement
          ? f.jsx(u, { visualElement: p.visualElement, ...c })
          : null,
        n(i, a, mk(v, p.visualElement, l), v, d, p.visualElement),
      ],
    });
  }
  const s = _.forwardRef(o);
  return (s[wk] = i), s;
}
function Sk({ layoutId: e }) {
  const t = _.useContext(G0).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function bk(e) {
  function t(r, i = {}) {
    return xk(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const kk = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function hd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(kk.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Vs = {};
function Tk(e) {
  Object.assign(Vs, e);
}
const ro = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Xn = new Set(ro);
function Q0(e, { layout: t, layoutId: n }) {
  return (
    Xn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Vs[e] || e === "opacity"))
  );
}
const Re = (e) => !!(e && e.getVelocity),
  Pk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Ck = ro.length;
function jk(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < Ck; s++) {
    const a = ro[s];
    if (e[a] !== void 0) {
      const l = Pk[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const X0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  q0 = X0("--"),
  Ek = X0("var(--"),
  md = (e) => (Ek(e) ? _k.test(e.split("/*")[0].trim()) : !1),
  _k =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ok = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  wn = (e, t, n) => (n > t ? t : n < e ? e : n),
  $r = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  gi = { ...$r, transform: (e) => wn(0, 1, e) },
  Lo = { ...$r, default: 1 },
  vi = (e) => Math.round(e * 1e5) / 1e5,
  gd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  Mk =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  Nk =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function io(e) {
  return typeof e == "string";
}
const oo = (e) => ({
    test: (t) => io(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Xt = oo("deg"),
  jt = oo("%"),
  F = oo("px"),
  Lk = oo("vh"),
  Rk = oo("vw"),
  ih = {
    ...jt,
    parse: (e) => jt.parse(e) / 100,
    transform: (e) => jt.transform(e * 100),
  },
  oh = { ...$r, transform: Math.round },
  J0 = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    size: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    rotate: Xt,
    rotateX: Xt,
    rotateY: Xt,
    rotateZ: Xt,
    scale: Lo,
    scaleX: Lo,
    scaleY: Lo,
    scaleZ: Lo,
    skew: Xt,
    skewX: Xt,
    skewY: Xt,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: gi,
    originX: ih,
    originY: ih,
    originZ: F,
    zIndex: oh,
    backgroundPositionX: F,
    backgroundPositionY: F,
    fillOpacity: gi,
    strokeOpacity: gi,
    numOctaves: oh,
  };
function vd(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const p = t[d];
    if (q0(d)) {
      o[d] = p;
      continue;
    }
    const v = J0[d],
      w = Ok(p, v);
    if (Xn.has(d)) {
      if (((l = !0), (s[d] = w), !c)) continue;
      p !== (v.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = w)) : (i[d] = w);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = jk(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: p = "50%", originZ: v = 0 } = a;
    i.transformOrigin = `${d} ${p} ${v}`;
  }
}
const yd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Z0(e, t, n) {
  for (const r in t) !Re(t[r]) && !Q0(r, n) && (e[r] = t[r]);
}
function Dk({ transformTemplate: e }, t, n) {
  return _.useMemo(() => {
    const r = yd();
    return (
      vd(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function zk(e, t, n) {
  const r = e.style || {},
    i = {};
  return Z0(i, r, e), Object.assign(i, Dk(e, t, n)), i;
}
function Ak(e, t, n) {
  const r = {},
    i = zk(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const Ik = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Fs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Ik.has(e)
  );
}
let ey = (e) => !Fs(e);
function Vk(e) {
  e && (ey = (t) => (t.startsWith("on") ? !Fs(t) : e(t)));
}
try {
  Vk(require("@emotion/is-prop-valid").default);
} catch {}
function Fk(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((ey(i) ||
        (n === !0 && Fs(i)) ||
        (!t && !Fs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function sh(e, t, n) {
  return typeof e == "string" ? e : F.transform(t + n * e);
}
function Bk(e, t, n) {
  const r = sh(t, e.x, e.width),
    i = sh(n, e.y, e.height);
  return `${r} ${i}`;
}
const $k = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Hk = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Uk(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? $k : Hk;
  e[o.offset] = F.transform(-r);
  const s = F.transform(t),
    a = F.transform(n);
  e[o.array] = `${s} ${a}`;
}
function wd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  p
) {
  if ((vd(e, u, c, p), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: v, style: w, dimensions: y } = e;
  v.transform && (y && (w.transform = v.transform), delete v.transform),
    y &&
      (i !== void 0 || o !== void 0 || w.transform) &&
      (w.transformOrigin = Bk(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (v.x = t),
    n !== void 0 && (v.y = n),
    r !== void 0 && (v.scale = r),
    s !== void 0 && Uk(v, s, a, l, !1);
}
const ty = () => ({ ...yd(), attrs: {} }),
  xd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Wk(e, t, n, r) {
  const i = _.useMemo(() => {
    const o = ty();
    return (
      wd(o, t, { enableHardwareAcceleration: !1 }, xd(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Z0(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Kk(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (hd(n) ? Wk : Ak)(r, o, s, n),
      u = Fk(r, typeof n == "string", e),
      c = n !== _.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      p = _.useMemo(() => (Re(d) ? d.get() : d), [d]);
    return _.createElement(n, { ...c, children: p });
  };
}
function ny(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const ry = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function iy(e, t, n, r) {
  ny(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(ry.has(i) ? i : cd(i), t.attrs[i]);
}
function Sd(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Re(i[s]) ||
      (t.style && Re(t.style[s])) ||
      Q0(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function oy(e, t, n) {
  const r = Sd(e, t, n);
  for (const i in e)
    if (Re(e[i]) || Re(t[i])) {
      const o =
        ro.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function bd(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Gk(e) {
  const t = _.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Fu = (e) => Array.isArray(e),
  Yk = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Qk = (e) => (Fu(e) ? e[e.length - 1] || 0 : e);
function qo(e) {
  const t = Re(e) ? e.get() : e;
  return Yk(t) ? t.toValue() : t;
}
function Xk(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: qk(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const sy = (e) => (t, n) => {
  const r = _.useContext(Sa),
    i = _.useContext(ld),
    o = () => Xk(e, t, r, i);
  return n ? o() : Gk(o);
};
function qk(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const p in o) i[p] = qo(o[p]);
  let { initial: s, animate: a } = e;
  const l = ka(e),
    u = K0(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != "boolean" &&
      !ba(d) &&
      (Array.isArray(d) ? d : [d]).forEach((v) => {
        const w = bd(e, v);
        if (!w) return;
        const { transitionEnd: y, transition: S, ...m } = w;
        for (const h in m) {
          let g = m[h];
          if (Array.isArray(g)) {
            const x = c ? g.length - 1 : 0;
            g = g[x];
          }
          g !== null && (i[h] = g);
        }
        for (const h in y) i[h] = y[h];
      }),
    i
  );
}
const De = (e) => e,
  {
    schedule: ee,
    cancel: xn,
    state: Pe,
    steps: wl,
  } = W0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0),
  Jk = {
    useVisualState: sy({
      scrapeMotionValuesFromProps: oy,
      createRenderState: ty,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ee.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ee.render(() => {
            wd(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              xd(t.tagName),
              e.transformTemplate
            ),
              iy(t, n);
          });
      },
    }),
  },
  Zk = {
    useVisualState: sy({
      scrapeMotionValuesFromProps: Sd,
      createRenderState: yd,
    }),
  };
function eT(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(hd(e) ? Jk : Zk),
    preloadedFeatures: n,
    useRender: Kk(t),
    createVisualElement: r,
    Component: e,
  };
}
function Dt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ay = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ta(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const tT = (e) => (t) => ay(t) && e(t, Ta(t));
function At(e, t, n, r) {
  return Dt(e, t, tT(n), r);
}
const nT = (e, t) => (n) => t(e(n)),
  It = (...e) => e.reduce(nT);
function ly(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const ah = ly("dragHorizontal"),
  lh = ly("dragVertical");
function uy(e) {
  let t = !1;
  if (e === "y") t = lh();
  else if (e === "x") t = ah();
  else {
    const n = ah(),
      r = lh();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function cy() {
  const e = uy(!0);
  return e ? (e(), !1) : !0;
}
class Pn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function uh(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || cy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && ee.postRender(() => l(o, s));
    };
  return At(e.current, n, i, { passive: !e.getProps()[r] });
}
class rT extends Pn {
  mount() {
    this.unmount = It(uh(this.node, !0), uh(this.node, !1));
  }
  unmount() {}
}
class iT extends Pn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = It(
      Dt(this.node.current, "focus", () => this.onFocus()),
      Dt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const dy = (e, t) => (t ? (e === t ? !0 : dy(e, t.parentElement)) : !1);
function xl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ta(n));
}
class oT extends Pn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = De),
      (this.removeEndListeners = De),
      (this.removeAccessibleListeners = De),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = At(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                p = !d && !dy(this.node.current, a.target) ? c : u;
              p && ee.update(() => p(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = At(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = It(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                xl("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ee.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Dt(this.node.current, "keyup", s)),
              xl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Dt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && xl("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Dt(this.node.current, "blur", r);
        this.removeAccessibleListeners = It(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ee.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !cy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ee.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = At(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Dt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = It(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Bu = new WeakMap(),
  Sl = new WeakMap(),
  sT = (e) => {
    const t = Bu.get(e.target);
    t && t(e);
  },
  aT = (e) => {
    e.forEach(sT);
  };
function lT({ root: e, ...t }) {
  const n = e || document;
  Sl.has(n) || Sl.set(n, {});
  const r = Sl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(aT, { root: e, ...t })), r[i];
}
function uT(e, t, n) {
  const r = lT(t);
  return (
    Bu.set(e, n),
    r.observe(e),
    () => {
      Bu.delete(e), r.unobserve(e);
    }
  );
}
const cT = { some: 0, all: 1 };
class dT extends Pn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : cT[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          p = u ? c : d;
        p && p(l);
      };
    return uT(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(fT(t, n)) && this.startObserver();
  }
  unmount() {}
}
function fT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const pT = {
  inView: { Feature: dT },
  tap: { Feature: oT },
  focus: { Feature: iT },
  hover: { Feature: rT },
};
function fy(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function hT(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function mT(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Pa(e, t, n) {
  const r = e.getProps();
  return bd(r, t, n !== void 0 ? n : r.custom, hT(e), mT(e));
}
const mn = (e) => e * 1e3,
  Vt = (e) => e / 1e3,
  gT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  vT = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  yT = { type: "keyframes", duration: 0.8 },
  wT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  xT = (e, { keyframes: t }) =>
    t.length > 2
      ? yT
      : Xn.has(e)
      ? e.startsWith("scale")
        ? vT(t[1])
        : gT
      : wT;
function ST({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function kd(e, t) {
  return e[t] || e.default || e;
}
const bT = (e) => e !== null;
function Ca(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(bT),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
let Jo;
function kT() {
  Jo = void 0;
}
const gn = {
    now: () => (
      Jo === void 0 &&
        gn.set(
          Pe.isProcessing || dk.useManualTiming
            ? Pe.timestamp
            : performance.now()
        ),
      Jo
    ),
    set: (e) => {
      (Jo = e), queueMicrotask(kT);
    },
  },
  py = (e) => /^0[^.\s]+$/u.test(e);
function TT(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || py(e)
    : !0;
}
let $u = De;
const hy = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  PT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function CT(e) {
  const t = PT.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function my(e, t, n = 1) {
  const [r, i] = CT(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return hy(s) ? parseFloat(s) : s;
  }
  return md(i) ? my(i, t, n + 1) : i;
}
const jT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  ch = (e) => e === $r || e === F,
  dh = (e, t) => parseFloat(e.split(", ")[t]),
  fh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return dh(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? dh(o[1], e) : 0;
      }
    },
  ET = new Set(["x", "y", "z"]),
  _T = ro.filter((e) => !ET.has(e));
function OT(e) {
  const t = [];
  return (
    _T.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ar = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: fh(4, 13),
  y: fh(5, 14),
};
Ar.translateX = Ar.x;
Ar.translateY = Ar.y;
const gy = (e) => (t) => t.test(e),
  MT = { test: (e) => e === "auto", parse: (e) => e },
  vy = [$r, F, jt, Xt, Rk, Lk, MT],
  ph = (e) => vy.find(gy(e)),
  Bn = new Set();
let Hu = !1,
  Uu = !1;
function yy() {
  if (Uu) {
    const e = Array.from(Bn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = OT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Uu = !1), (Hu = !1), Bn.forEach((e) => e.complete()), Bn.clear();
}
function wy() {
  Bn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Uu = !0);
  });
}
function NT() {
  wy(), yy();
}
class Td {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Bn.add(this),
          Hu || ((Hu = !0), ee.read(wy), ee.resolveKeyframes(yy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Bn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Bn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Pd = (e, t) => (n) =>
    !!(
      (io(n) && Nk.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  xy = (e, t, n) => (r) => {
    if (!io(r)) return r;
    const [i, o, s, a] = r.match(gd);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  LT = (e) => wn(0, 255, e),
  bl = { ...$r, transform: (e) => Math.round(LT(e)) },
  An = {
    test: Pd("rgb", "red"),
    parse: xy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      bl.transform(e) +
      ", " +
      bl.transform(t) +
      ", " +
      bl.transform(n) +
      ", " +
      vi(gi.transform(r)) +
      ")",
  };
function RT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Wu = { test: Pd("#"), parse: RT, transform: An.transform },
  dr = {
    test: Pd("hsl", "hue"),
    parse: xy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      jt.transform(vi(t)) +
      ", " +
      jt.transform(vi(n)) +
      ", " +
      vi(gi.transform(r)) +
      ")",
  },
  Ne = {
    test: (e) => An.test(e) || Wu.test(e) || dr.test(e),
    parse: (e) =>
      An.test(e) ? An.parse(e) : dr.test(e) ? dr.parse(e) : Wu.parse(e),
    transform: (e) =>
      io(e) ? e : e.hasOwnProperty("red") ? An.transform(e) : dr.transform(e),
  };
function DT(e) {
  var t, n;
  return (
    isNaN(e) &&
    io(e) &&
    (((t = e.match(gd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Mk)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Sy = "number",
  by = "color",
  zT = "var",
  AT = "var(",
  hh = "${}",
  IT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Bs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      IT,
      (l) => (
        Ne.test(l)
          ? (r.color.push(o), i.push(by), n.push(Ne.parse(l)))
          : l.startsWith(AT)
          ? (r.var.push(o), i.push(zT), n.push(l))
          : (r.number.push(o), i.push(Sy), n.push(parseFloat(l))),
        ++o,
        hh
      )
    )
    .split(hh);
  return { values: n, split: a, indexes: r, types: i };
}
function ky(e) {
  return Bs(e).values;
}
function Ty(e) {
  const { split: t, types: n } = Bs(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Sy
          ? (o += vi(i[s]))
          : a === by
          ? (o += Ne.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const VT = (e) => (typeof e == "number" ? 0 : e);
function FT(e) {
  const t = ky(e);
  return Ty(e)(t.map(VT));
}
const Sn = {
    test: DT,
    parse: ky,
    createTransformer: Ty,
    getAnimatableNone: FT,
  },
  BT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $T(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(gd) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = BT.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const HT = /\b([a-z-]*)\(.*?\)/gu,
  Ku = {
    ...Sn,
    getAnimatableNone: (e) => {
      const t = e.match(HT);
      return t ? t.map($T).join(" ") : e;
    },
  },
  UT = {
    ...J0,
    color: Ne,
    backgroundColor: Ne,
    outlineColor: Ne,
    fill: Ne,
    stroke: Ne,
    borderColor: Ne,
    borderTopColor: Ne,
    borderRightColor: Ne,
    borderBottomColor: Ne,
    borderLeftColor: Ne,
    filter: Ku,
    WebkitFilter: Ku,
  },
  Cd = (e) => UT[e];
function Py(e, t) {
  let n = Cd(e);
  return (
    n !== Ku && (n = Sn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const WT = new Set(["auto", "none", "0"]);
function KT(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !WT.has(o) && (i = e[r]), r++;
  }
  if (i && n) for (const o of t) e[o] = Py(n, i);
}
class Cy extends Td {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      const u = t[l];
      if (typeof u == "string" && md(u)) {
        const c = my(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !jT.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = ph(i),
      a = ph(o);
    if (s !== a)
      if (ch(s) && ch(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) TT(t[i]) && r.push(i);
    r.length && KT(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ar[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = Ar[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function GT(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const mh = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Sn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function YT(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function QT(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  const o = e[e.length - 1],
    s = mh(i, t),
    a = mh(o, t);
  return !s || !a ? !1 : YT(e) || (n === "spring" && r);
}
class jy {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && NT(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !QT(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Ca(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Ey(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const XT = 5;
function _y(e, t, n) {
  const r = Math.max(t - XT, 0);
  return Ey(n - e(r), t - r);
}
const kl = 0.001,
  qT = 0.01,
  JT = 10,
  ZT = 0.05,
  e6 = 1;
function t6({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = wn(ZT, e6, s)),
    (e = wn(qT, JT, Vt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            p = c - n,
            v = Gu(u, s),
            w = Math.exp(-d);
          return kl - (p / v) * w;
        }),
        (o = (u) => {
          const d = u * s * e,
            p = d * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            w = Math.exp(-d),
            y = Gu(Math.pow(u, 2), s);
          return ((-i(u) + kl > 0 ? -1 : 1) * ((p - v) * w)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -kl + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = r6(i, o, a);
  if (((e = mn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const n6 = 12;
function r6(e, t, n) {
  let r = n;
  for (let i = 1; i < n6; i++) r = r - e(r) / t(r);
  return r;
}
function Gu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const i6 = ["duration", "bounce"],
  o6 = ["stiffness", "damping", "mass"];
function gh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function s6(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!gh(e, o6) && gh(e, i6)) {
    const n = t6(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Oy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: p,
    } = s6({ ...r, velocity: -Vt(r.velocity || 0) }),
    v = d || 0,
    w = l / (2 * Math.sqrt(a * u)),
    y = o - i,
    S = Vt(Math.sqrt(a / u)),
    m = Math.abs(y) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (w < 1) {
    const g = Gu(S, w);
    h = (x) => {
      const b = Math.exp(-w * S * x);
      return (
        o - b * (((v + w * S * y) / g) * Math.sin(g * x) + y * Math.cos(g * x))
      );
    };
  } else if (w === 1) h = (g) => o - Math.exp(-S * g) * (y + (v + S * y) * g);
  else {
    const g = S * Math.sqrt(w * w - 1);
    h = (x) => {
      const b = Math.exp(-w * S * x),
        k = Math.min(g * x, 300);
      return (
        o - (b * ((v + w * S * y) * Math.sinh(k) + g * y * Math.cosh(k))) / g
      );
    };
  }
  return {
    calculatedDuration: (p && c) || null,
    next: (g) => {
      const x = h(g);
      if (p) s.done = g >= c;
      else {
        let b = v;
        g !== 0 && (w < 1 ? (b = _y(h, g, x)) : (b = 0));
        const k = Math.abs(b) <= n,
          j = Math.abs(o - x) <= t;
        s.done = k && j;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function vh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    p = { done: !1, value: d },
    v = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
    w = (C) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - C) < Math.abs(l - C)
        ? a
        : l;
  let y = n * t;
  const S = d + y,
    m = s === void 0 ? S : s(S);
  m !== S && (y = m - d);
  const h = (C) => -y * Math.exp(-C / r),
    g = (C) => m + h(C),
    x = (C) => {
      const P = h(C),
        T = g(C);
      (p.done = Math.abs(P) <= u), (p.value = p.done ? m : T);
    };
  let b, k;
  const j = (C) => {
    v(p.value) &&
      ((b = C),
      (k = Oy({
        keyframes: [p.value, w(p.value)],
        velocity: _y(g, C, p.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    j(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let P = !1;
        return (
          !k && b === void 0 && ((P = !0), x(C), j(C)),
          b !== void 0 && C >= b ? k.next(C - b) : (!P && x(C), p)
        );
      },
    }
  );
}
const My = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  a6 = 1e-7,
  l6 = 12;
function u6(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = My(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > a6 && ++a < l6);
  return s;
}
function so(e, t, n, r) {
  if (e === t && n === r) return De;
  const i = (o) => u6(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : My(i(o), t, r));
}
const c6 = so(0.42, 0, 1, 1),
  d6 = so(0, 0, 0.58, 1),
  Ny = so(0.42, 0, 0.58, 1),
  f6 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ly = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ry = (e) => (t) => 1 - e(1 - t),
  jd = (e) => 1 - Math.sin(Math.acos(e)),
  Dy = Ry(jd),
  p6 = Ly(jd),
  zy = so(0.33, 1.53, 0.69, 0.99),
  Ed = Ry(zy),
  h6 = Ly(Ed),
  m6 = (e) =>
    (e *= 2) < 1 ? 0.5 * Ed(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  yh = {
    linear: De,
    easeIn: c6,
    easeInOut: Ny,
    easeOut: d6,
    circIn: jd,
    circInOut: p6,
    circOut: Dy,
    backIn: Ed,
    backInOut: h6,
    backOut: zy,
    anticipate: m6,
  },
  wh = (e) => {
    if (Array.isArray(e)) {
      $u(e.length === 4);
      const [t, n, r, i] = e;
      return so(t, n, r, i);
    } else if (typeof e == "string") return $u(yh[e] !== void 0), yh[e];
    return e;
  },
  Fi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  de = (e, t, n) => e + (t - e) * n;
function Tl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function g6({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Tl(l, a, e + 1 / 3)), (o = Tl(l, a, e)), (s = Tl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Pl = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  v6 = [Wu, An, dr],
  y6 = (e) => v6.find((t) => t.test(e));
function xh(e) {
  const t = y6(e);
  let n = t.parse(e);
  return t === dr && (n = g6(n)), n;
}
const Sh = (e, t) => {
  const n = xh(e),
    r = xh(t),
    i = { ...n };
  return (o) => (
    (i.red = Pl(n.red, r.red, o)),
    (i.green = Pl(n.green, r.green, o)),
    (i.blue = Pl(n.blue, r.blue, o)),
    (i.alpha = de(n.alpha, r.alpha, o)),
    An.transform(i)
  );
};
function Yu(e, t) {
  return (n) => (n > 0 ? t : e);
}
function w6(e, t) {
  return (n) => de(e, t, n);
}
function _d(e) {
  return typeof e == "number"
    ? w6
    : typeof e == "string"
    ? md(e)
      ? Yu
      : Ne.test(e)
      ? Sh
      : b6
    : Array.isArray(e)
    ? Ay
    : typeof e == "object"
    ? Ne.test(e)
      ? Sh
      : x6
    : Yu;
}
function Ay(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => _d(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function x6(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = _d(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function S6(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const b6 = (e, t) => {
  const n = Sn.createTransformer(t),
    r = Bs(e),
    i = Bs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? It(Ay(S6(r, i), i.values), n)
    : Yu(e, t);
};
function Iy(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? de(e, t, n)
    : _d(e)(e, t);
}
function k6(e, t, n) {
  const r = [],
    i = n || Iy,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || De : t;
      a = It(l, a);
    }
    r.push(a);
  }
  return r;
}
function T6(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (($u(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = k6(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Fi(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(wn(e[0], e[o - 1], u)) : l;
}
function P6(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Fi(0, t, r);
    e.push(de(n, 1, i));
  }
}
function C6(e) {
  const t = [0];
  return P6(t, e.length - 1), t;
}
function j6(e, t) {
  return e.map((n) => n * t);
}
function E6(e, t) {
  return e.map(() => t || Ny).splice(0, e.length - 1);
}
function $s({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = f6(r) ? r.map(wh) : wh(r),
    o = { done: !1, value: t[0] },
    s = j6(n && n.length === t.length ? n : C6(t), e),
    a = T6(s, t, { ease: Array.isArray(i) ? i : E6(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const bh = 2e4;
function _6(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < bh; ) (t += n), (r = e.next(t));
  return t >= bh ? 1 / 0 : t;
}
const O6 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ee.update(t, !0),
      stop: () => xn(t),
      now: () => (Pe.isProcessing ? Pe.timestamp : gn.now()),
    };
  },
  M6 = { decay: vh, inertia: vh, tween: $s, keyframes: $s, spring: Oy },
  N6 = (e) => e / 100;
class Od extends jy {
  constructor({ KeyframeResolver: t = Td, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: i, keyframes: o } = this.options,
      s = (a, l) => this.onKeyframesResolved(a, l);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(o, s, r, i))
      : (this.resolver = new t(o, s, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = M6[n] || $s;
    let l, u;
    a !== $s &&
      typeof t[0] != "number" &&
      ((l = It(N6, Iy(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = _6(c));
    const { calculatedDuration: d } = c,
      p = d + i,
      v = p * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: p,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: C } = this.options;
      return { done: !0, value: C[C.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: p,
      repeat: v,
      repeatType: w,
      repeatDelay: y,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      x = o;
    if (v) {
      const C = Math.min(this.currentTime, c) / d;
      let P = Math.floor(C),
        T = C % 1;
      !T && C >= 1 && (T = 1),
        T === 1 && P--,
        (P = Math.min(P, v + 1)),
        !!(P % 2) &&
          (w === "reverse"
            ? ((T = 1 - T), y && (T -= y / d))
            : w === "mirror" && (x = s)),
        (g = wn(0, 1, T) * d);
    }
    const b = h ? { done: !1, value: l[0] } : x.next(g);
    a && (b.value = a(b.value));
    let { done: k } = b;
    !h &&
      u !== null &&
      (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const j =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && k));
    return (
      j && i !== void 0 && (b.value = Ca(l, this.options, i)),
      S && S(b.value),
      j && this.finish(),
      b
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Vt(t.calculatedDuration) : 0;
  }
  get time() {
    return Vt(this.currentTime);
  }
  set time(t) {
    (t = mn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Vt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = O6, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Vy = (e) => Array.isArray(e) && typeof e[0] == "number";
function Fy(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in Md) ||
    Vy(e) ||
    (Array.isArray(e) && e.every(Fy))
  );
}
const si = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Md = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: si([0, 0.65, 0.55, 1]),
    circOut: si([0.55, 0, 1, 0.45]),
    backIn: si([0.31, 0.01, 0.66, -0.59]),
    backOut: si([0.33, 1.53, 0.69, 0.99]),
  };
function L6(e) {
  return By(e) || Md.easeOut;
}
function By(e) {
  if (e) return Vy(e) ? si(e) : Array.isArray(e) ? e.map(L6) : Md[e];
}
function R6(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = By(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const D6 = GT(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  z6 = new Set(["opacity", "clipPath", "filter", "transform"]),
  Hs = 10,
  A6 = 2e4;
function I6(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !Fy(e.ease);
}
function V6(e, t) {
  const n = new Od({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < A6; ) (r = n.sample(o)), i.push(r.value), (o += Hs);
  return { times: void 0, keyframes: i, duration: o - Hs, ease: "linear" };
}
class kh extends jy {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new Cy(i, (o, s) => this.onKeyframesResolved(o, s), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (I6(this.options)) {
      const { onComplete: d, onUpdate: p, motionValue: v, ...w } = this.options,
        y = V6(t, w);
      (t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = y.duration),
        (o = y.times),
        (s = y.ease),
        (a = "keyframes");
    }
    const c = R6(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (c.startTime = gn.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Ca(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Vt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Vt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = mn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return De;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return De;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: l,
            onUpdate: u,
            onComplete: c,
            ...d
          } = this.options,
          p = new Od({
            ...d,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a,
            isGenerator: !0,
          }),
          v = mn(this.time);
        l.setWithVelocity(p.sample(v - Hs).value, p.sample(v).value, Hs);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      D6() &&
      r &&
      z6.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const Nd =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = kd(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - mn(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (p) => {
        t.set(p), a.onUpdate && a.onUpdate(p);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    ST(a) || (c = { ...c, ...xT(e, c) }),
      c.duration && (c.duration = mn(c.duration)),
      c.repeatDelay && (c.repeatDelay = mn(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !o && t.get() !== void 0)
    ) {
      const p = Ca(c.keyframes, a);
      if (p !== void 0) {
        ee.update(() => {
          c.onUpdate(p), c.onComplete();
        });
        return;
      }
    }
    return !o && kh.supports(c) ? new kh(c) : new Od(c);
  };
function Us(e) {
  return !!(Re(e) && e.add);
}
function Ld(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Rd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Dd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ld(this.subscriptions, t), () => Rd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Th = 30,
  F6 = (e) => !isNaN(parseFloat(e));
class B6 {
  constructor(t, n = {}) {
    (this.version = "11.1.9"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = gn.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = F6(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = gn.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Dd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ee.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = gn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Th
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Th);
    return Ey(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Bi(e, t) {
  return new B6(e, t);
}
function $6(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bi(n));
}
function H6(e, t) {
  const n = Pa(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = Qk(o[s]);
    $6(e, s, a);
  }
}
function U6({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function $y(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const u = e.getValue("willChange");
  r && (s = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const p in l) {
    const v = e.getValue(
        p,
        (o = e.latestValues[p]) !== null && o !== void 0 ? o : null
      ),
      w = l[p];
    if (w === void 0 || (d && U6(d, p))) continue;
    const y = { delay: n, elapsed: 0, ...kd(s || {}, p) };
    let S = !1;
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[U0];
      if (g) {
        const x = window.HandoffAppearAnimations(g, p);
        x !== null && ((y.elapsed = x), (S = !0));
      }
    }
    v.start(
      Nd(p, v, w, e.shouldReduceMotion && Xn.has(p) ? { type: !1 } : y, e, S)
    );
    const m = v.animation;
    m && (Us(u) && (u.add(p), m.then(() => u.remove(p))), c.push(m));
  }
  return (
    a &&
      Promise.all(c).then(() => {
        ee.update(() => {
          a && H6(e, a);
        });
      }),
    c
  );
}
function Qu(e, t, n = {}) {
  var r;
  const i = Pa(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all($y(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: p,
            } = o;
            return W6(e, t, c + u, d, p, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function W6(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(K6)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Qu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function K6(e, t) {
  return e.sortNodePosition(t);
}
function G6(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Qu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Qu(e, t, n);
  else {
    const i = typeof t == "function" ? Pa(e, t, n.custom) : t;
    r = Promise.all($y(e, i, n));
  }
  return r.then(() => {
    ee.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const Y6 = [...fd].reverse(),
  Q6 = fd.length;
function X6(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => G6(e, n, r)));
}
function q6(e) {
  let t = X6(e);
  const n = Z6();
  let r = !0;
  const i = (l) => (u, c) => {
    var d;
    const p = Pa(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (p) {
      const { transition: v, transitionEnd: w, ...y } = p;
      u = { ...u, ...y, ...w };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      p = new Set();
    let v = {},
      w = 1 / 0;
    for (let S = 0; S < Q6; S++) {
      const m = Y6[S],
        h = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        x = Ii(g),
        b = m === l ? h.isActive : null;
      b === !1 && (w = S);
      let k = g === c[m] && g !== u[m] && x;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (h.protectedKeys = { ...v }),
        (!h.isActive && b === null) ||
          (!g && !h.prevProp) ||
          ba(g) ||
          typeof g == "boolean")
      )
        continue;
      let C =
          J6(h.prevProp, g) ||
          (m === l && h.isActive && !k && x) ||
          (S > w && x),
        P = !1;
      const T = Array.isArray(g) ? g : [g];
      let D = T.reduce(i(m), {});
      b === !1 && (D = {});
      const { prevResolvedValues: L = {} } = h,
        E = { ...L, ...D },
        M = (I) => {
          (C = !0),
            p.has(I) && ((P = !0), p.delete(I)),
            (h.needsAnimating[I] = !0);
          const $ = e.getValue(I);
          $ && ($.liveStyle = !1);
        };
      for (const I in E) {
        const $ = D[I],
          Y = L[I];
        if (v.hasOwnProperty(I)) continue;
        let N = !1;
        Fu($) && Fu(Y) ? (N = !fy($, Y)) : (N = $ !== Y),
          N
            ? $ != null
              ? M(I)
              : p.add(I)
            : $ !== void 0 && p.has(I)
            ? M(I)
            : (h.protectedKeys[I] = !0);
      }
      (h.prevProp = g),
        (h.prevResolvedValues = D),
        h.isActive && (v = { ...v, ...D }),
        r && e.blockInitialAnimation && (C = !1),
        C &&
          (!k || P) &&
          d.push(...T.map((I) => ({ animation: I, options: { type: m } })));
    }
    if (p.size) {
      const S = {};
      p.forEach((m) => {
        const h = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (S[m] = h ?? null);
      }),
        d.push({ animation: S });
    }
    let y = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((p) => {
        var v;
        return (v = p.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(l);
    for (const p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function J6(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !fy(t, e) : !1;
}
function En(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Z6() {
  return {
    animate: En(!0),
    whileInView: En(),
    whileHover: En(),
    whileTap: En(),
    whileDrag: En(),
    whileFocus: En(),
    exit: En(),
  };
}
class eP extends Pn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = q6(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ba(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let tP = 0;
class nP extends Pn {
  constructor() {
    super(...arguments), (this.id = tP++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const rP = { animation: { Feature: eP }, exit: { Feature: nP } },
  Ph = (e, t) => Math.abs(e - t);
function iP(e, t) {
  const n = Ph(e.x, t.x),
    r = Ph(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Hy {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = jl(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          v = iP(d.offset, { x: 0, y: 0 }) >= 3;
        if (!p && !v) return;
        const { point: w } = d,
          { timestamp: y } = Pe;
        this.history.push({ ...w, timestamp: y });
        const { onStart: S, onMove: m } = this.handlers;
        p ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, p) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Cl(p, this.transformPagePoint)),
          ee.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, p) => {
        this.end();
        const { onEnd: v, onSessionEnd: w, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = jl(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Cl(p, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(d, S), w && w(d, S);
      }),
      !ay(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Ta(t),
      a = Cl(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Pe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, jl(a, this.history)),
      (this.removeListeners = It(
        At(this.contextWindow, "pointermove", this.handlePointerMove),
        At(this.contextWindow, "pointerup", this.handlePointerUp),
        At(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), xn(this.updatePoint);
  }
}
function Cl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ch(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function jl({ point: e }, t) {
  return {
    point: e,
    delta: Ch(e, Uy(t)),
    offset: Ch(e, oP(t)),
    velocity: sP(t, 0.1),
  };
}
function oP(e) {
  return e[0];
}
function Uy(e) {
  return e[e.length - 1];
}
function sP(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Uy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > mn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Vt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function tt(e) {
  return e.max - e.min;
}
function Xu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function jh(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = de(t.min, t.max, e.origin)),
    (e.scale = tt(n) / tt(t)),
    (Xu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = de(n.min, n.max, e.origin) - e.originPoint),
    (Xu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function yi(e, t, n, r) {
  jh(e.x, t.x, n.x, r ? r.originX : void 0),
    jh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Eh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + tt(t));
}
function aP(e, t, n) {
  Eh(e.x, t.x, n.x), Eh(e.y, t.y, n.y);
}
function _h(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + tt(t));
}
function wi(e, t, n) {
  _h(e.x, t.x, n.x), _h(e.y, t.y, n.y);
}
function lP(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? de(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? de(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Oh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function uP(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Oh(e.x, n, i), y: Oh(e.y, t, r) };
}
function Mh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function cP(e, t) {
  return { x: Mh(e.x, t.x), y: Mh(e.y, t.y) };
}
function dP(e, t) {
  let n = 0.5;
  const r = tt(e),
    i = tt(t);
  return (
    i > r
      ? (n = Fi(t.min, t.max - r, e.min))
      : r > i && (n = Fi(e.min, e.max - i, t.min)),
    wn(0, 1, n)
  );
}
function fP(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const qu = 0.35;
function pP(e = qu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = qu),
    { x: Nh(e, "left", "right"), y: Nh(e, "top", "bottom") }
  );
}
function Nh(e, t, n) {
  return { min: Lh(e, t), max: Lh(e, n) };
}
function Lh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Rh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fr = () => ({ x: Rh(), y: Rh() }),
  Dh = () => ({ min: 0, max: 0 }),
  ge = () => ({ x: Dh(), y: Dh() });
function ot(e) {
  return [e("x"), e("y")];
}
function Wy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function hP({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function mP(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function El(e) {
  return e === void 0 || e === 1;
}
function Ju({ scale: e, scaleX: t, scaleY: n }) {
  return !El(e) || !El(t) || !El(n);
}
function Nn(e) {
  return (
    Ju(e) ||
    Ky(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Ky(e) {
  return zh(e.x) || zh(e.y);
}
function zh(e) {
  return e && e !== "0%";
}
function Ws(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ah(e, t, n, r, i) {
  return i !== void 0 && (e = Ws(e, i, r)), Ws(e, n, r) + t;
}
function Zu(e, t = 0, n = 1, r, i) {
  (e.min = Ah(e.min, t, n, r, i)), (e.max = Ah(e.max, t, n, r, i));
}
function Gy(e, { x: t, y: n }) {
  Zu(e.x, t.translate, t.scale, t.originPoint),
    Zu(e.y, n.translate, n.scale, n.originPoint);
}
function gP(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        pr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Gy(e, s)),
      r && Nn(o.latestValues) && pr(e, o.latestValues));
  }
  (t.x = Ih(t.x)), (t.y = Ih(t.y));
}
function Ih(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function en(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Vh(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = de(e.min, e.max, o);
  Zu(e, t[n], t[r], s, t.scale);
}
const vP = ["x", "scaleX", "originX"],
  yP = ["y", "scaleY", "originY"];
function pr(e, t) {
  Vh(e.x, t, vP), Vh(e.y, t, yP);
}
function Yy(e, t) {
  return Wy(mP(e.getBoundingClientRect(), t));
}
function wP(e, t, n) {
  const r = Yy(e, n),
    { scroll: i } = t;
  return i && (en(r.x, i.offset.x), en(r.y, i.offset.y)), r;
}
const Qy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  xP = new WeakMap();
class SP {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ge()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ta(c, "page").point);
      },
      o = (c, d) => {
        const { drag: p, dragPropagation: v, onDragStart: w } = this.getProps();
        if (
          p &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = uy(p)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ot((S) => {
            let m = this.getAxisMotionValue(S).get() || 0;
            if (jt.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const g = h.layout.layoutBox[S];
                g && (m = tt(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[S] = m;
          }),
          w && ee.postRender(() => w(c, d));
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: p,
          dragDirectionLock: v,
          onDirectionLock: w,
          onDrag: y,
        } = this.getProps();
        if (!p && !this.openGlobalLock) return;
        const { offset: S } = d;
        if (v && this.currentDirection === null) {
          (this.currentDirection = bP(S)),
            this.currentDirection !== null && w && w(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          y && y(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        ot((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Hy(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Qy(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && ee.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ro(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = lP(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && cr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = uP(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = pP(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ot((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = fP(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !cr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = wP(r, i.root, this.visualElement.getTransformPagePoint());
    let s = cP(i.layout.layoutBox, o);
    if (n) {
      const a = n(hP(s));
      (this.hasMutatedConstraints = !!a), a && (s = Wy(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = ot((c) => {
        if (!Ro(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const p = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: p,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, w);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Nd(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    ot((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ot((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ot((n) => {
      const { drag: r } = this.getProps();
      if (!Ro(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - de(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!cr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ot((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = dP({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ot((s) => {
        if (!Ro(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(de(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    xP.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = At(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        cr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = Dt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ot((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = qu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Ro(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function bP(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class kP extends Pn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = De),
      (this.removeListeners = De),
      (this.controls = new SP(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || De);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Fh = (e) => (t, n) => {
  e && ee.postRender(() => e(t, n));
};
class TP extends Pn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = De);
  }
  onPointerDown(t) {
    this.session = new Hy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Qy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Fh(t),
      onStart: Fh(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && ee.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = At(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function PP() {
  const e = _.useContext(ld);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = _.useId();
  return _.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Zo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Bh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Jr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (F.test(e)) e = parseFloat(e);
        else return e;
      const n = Bh(e, t.target.x),
        r = Bh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  CP = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Sn.parse(e);
      if (i.length > 5) return r;
      const o = Sn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = de(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class jP extends _.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Tk(EP),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Zo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ee.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      dd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Xy(e) {
  const [t, n] = PP(),
    r = _.useContext(G0);
  return f.jsx(jP, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: _.useContext(Y0),
    isPresent: t,
    safeToRemove: n,
  });
}
const EP = {
    borderRadius: {
      ...Jr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Jr,
    borderTopRightRadius: Jr,
    borderBottomLeftRadius: Jr,
    borderBottomRightRadius: Jr,
    boxShadow: CP,
  },
  qy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  _P = qy.length,
  $h = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Hh = (e) => typeof e == "number" || F.test(e);
function OP(e, t, n, r, i, o) {
  i
    ? ((e.opacity = de(0, n.opacity !== void 0 ? n.opacity : 1, MP(r))),
      (e.opacityExit = de(t.opacity !== void 0 ? t.opacity : 1, 0, NP(r))))
    : o &&
      (e.opacity = de(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < _P; s++) {
    const a = `border${qy[s]}Radius`;
    let l = Uh(t, a),
      u = Uh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Hh(l) === Hh(u)
        ? ((e[a] = Math.max(de($h(l), $h(u), r), 0)),
          (jt.test(u) || jt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = de(t.rotate || 0, n.rotate || 0, r));
}
function Uh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const MP = Jy(0, 0.5, Dy),
  NP = Jy(0.5, 0.95, De);
function Jy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Fi(e, t, r)));
}
function Wh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function it(e, t) {
  Wh(e.x, t.x), Wh(e.y, t.y);
}
function Kh(e, t, n, r, i) {
  return (
    (e -= t), (e = Ws(e, 1 / n, r)), i !== void 0 && (e = Ws(e, 1 / i, r)), e
  );
}
function LP(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (jt.test(t) &&
      ((t = parseFloat(t)), (t = de(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = de(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Kh(e.min, t, n, a, i)),
    (e.max = Kh(e.max, t, n, a, i));
}
function Gh(e, t, [n, r, i], o, s) {
  LP(e, t[n], t[r], t[i], t.scale, o, s);
}
const RP = ["x", "scaleX", "originX"],
  DP = ["y", "scaleY", "originY"];
function Yh(e, t, n, r) {
  Gh(e.x, t, RP, n ? n.x : void 0, r ? r.x : void 0),
    Gh(e.y, t, DP, n ? n.y : void 0, r ? r.y : void 0);
}
function Qh(e) {
  return e.translate === 0 && e.scale === 1;
}
function Zy(e) {
  return Qh(e.x) && Qh(e.y);
}
function zP(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function e1(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Xh(e) {
  return tt(e.x) / tt(e.y);
}
class AP {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ld(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Rd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qh(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: p,
      skewX: v,
      skewY: w,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      p && (r += `rotateY(${p}deg) `),
      v && (r += `skewX(${v}deg) `),
      w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const IP = (e, t) => e.depth - t.depth;
class VP {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ld(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Rd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(IP),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function FP(e, t) {
  const n = gn.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (xn(r), e(o - t));
    };
  return ee.read(r, !0), () => xn(r);
}
function BP(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function $P(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function HP(e, t, n) {
  const r = Re(e) ? e : Bi(e);
  return r.start(Nd("", r, t, n)), r.animation;
}
const _l = ["", "X", "Y", "Z"],
  UP = { visibility: "hidden" },
  Jh = 1e3;
let WP = 0;
const Ln = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Ol(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function t1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = WP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Ln.totalNodes =
              Ln.resolvedTargetDeltas =
              Ln.recalculatedProjection =
                0),
            this.nodes.forEach(YP),
            this.nodes.forEach(ZP),
            this.nodes.forEach(e8),
            this.nodes.forEach(QP),
            BP(Ln);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new VP());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Dd()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = $P(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const p = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = FP(p, 250)),
            Zo.hasAnimatedSinceResize &&
              ((Zo.hasAnimatedSinceResize = !1), this.nodes.forEach(em));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: p,
              hasRelativeTargetChanged: v,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || o8,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !e1(this.targetLayout, w) || v,
                g = !p && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (p && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const x = { ...kd(y, "layout"), onPlay: S, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                p || em(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = w;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        xn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(t8),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Zh);
        return;
      }
      this.isUpdating || this.nodes.forEach(qP),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(JP),
        this.nodes.forEach(KP),
        this.nodes.forEach(GP),
        this.clearAllSnapshots();
      const a = gn.now();
      (Pe.delta = wn(0, 1e3 / 60, a - Pe.timestamp)),
        (Pe.timestamp = a),
        (Pe.isProcessing = !0),
        wl.update.process(Pe),
        wl.preRender.process(Pe),
        wl.render.process(Pe),
        (Pe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), dd.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(XP), this.sharedNodes.forEach(n8);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ee.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ee.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ge()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Zy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Nn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        s8(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ge();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (en(a.x, l.offset.x), en(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ge();
      it(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            it(a, s);
            const { scroll: p } = this.root;
            p && (en(a.x, -p.offset.x), en(a.y, -p.offset.y));
          }
          en(a.x, c.offset.x), en(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ge();
      it(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          pr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Nn(c.latestValues) && pr(l, c.latestValues);
      }
      return Nn(this.latestValues) && pr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ge();
      it(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Nn(u.latestValues)) continue;
        Ju(u.latestValues) && u.updateSnapshot();
        const c = ge(),
          d = u.measurePageBox();
        it(c, d),
          Yh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Nn(this.latestValues) && Yh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Pe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: p } = this.options;
      if (!(!this.layout || !(d || p))) {
        if (
          ((this.resolvedRelativeTargetAt = Pe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ge()),
              (this.relativeTargetOrigin = ge()),
              wi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              it(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ge()), (this.targetWithTransforms = ge())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                aP(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : it(this.target, this.layout.layoutBox),
                Gy(this.target, this.targetDelta))
              : it(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ge()),
                (this.relativeTargetOrigin = ge()),
                wi(this.relativeTargetOrigin, this.target, v.target),
                it(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ln.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ju(this.parent.latestValues) ||
          Ky(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Pe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      it(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        v = this.treeScale.y;
      gP(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ge()));
      const { target: w } = a;
      if (!w) {
        this.projectionTransform &&
          ((this.projectionDelta = fr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = fr()),
        (this.projectionDeltaWithTransform = fr()));
      const y = this.projectionTransform;
      yi(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.projectionTransform = qh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== p ||
          this.treeScale.y !== v) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)),
        Ln.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = fr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const p = ge(),
        v = l ? l.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        y = v !== w,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(i8));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (x) => {
        const b = x / 1e3;
        tm(d.x, s.x, b),
          tm(d.y, s.y, b),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (wi(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            r8(this.relativeTarget, this.relativeTargetOrigin, p, b),
            g && zP(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ge()),
            it(g, this.relativeTarget)),
          y &&
            ((this.animationValues = c), OP(c, u, this.latestValues, b, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = b);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (xn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ee.update(() => {
          (Zo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = HP(0, Jh, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Jh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          n1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ge();
          const d = tt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const p = tt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + p);
        }
        it(a, l),
          pr(a, c),
          yi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new AP()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Ol("z", s, u, this.animationValues);
      for (let c = 0; c < _l.length; c++)
        Ol(`rotate${_l[c]}`, s, u, this.animationValues),
          Ol(`skew${_l[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return UP;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = qo(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = qo(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Nn(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const p = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = qh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          p
        )),
        c && (u.transform = c(p, u.transform));
      const { x: v, y: w } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${w.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = p.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : p.opacityExit)
          : (u.opacity =
              d === this
                ? p.opacity !== void 0
                  ? p.opacity
                  : ""
                : p.opacityExit !== void 0
                ? p.opacityExit
                : 0);
      for (const y in Vs) {
        if (p[y] === void 0) continue;
        const { correct: S, applyTo: m } = Vs[y],
          h = u.transform === "none" ? p[y] : S(p[y], d);
        if (m) {
          const g = m.length;
          for (let x = 0; x < g; x++) u[m[x]] = h;
        } else u[y] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? qo(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Zh),
        this.root.sharedNodes.clear();
    }
  };
}
function KP(e) {
  e.updateLayout();
}
function GP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? ot((d) => {
          const p = s ? n.measuredBox[d] : n.layoutBox[d],
            v = tt(p);
          (p.min = r[d].min), (p.max = p.min + v);
        })
      : n1(o, n.layoutBox, r) &&
        ot((d) => {
          const p = s ? n.measuredBox[d] : n.layoutBox[d],
            v = tt(r[d]);
          (p.max = p.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + v));
        });
    const a = fr();
    yi(a, r, n.layoutBox);
    const l = fr();
    s ? yi(l, e.applyTransform(i, !0), n.measuredBox) : yi(l, r, n.layoutBox);
    const u = !Zy(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: p, layout: v } = d;
        if (p && v) {
          const w = ge();
          wi(w, n.layoutBox, p.layoutBox);
          const y = ge();
          wi(y, r, v.layoutBox),
            e1(w, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function YP(e) {
  Ln.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function QP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function XP(e) {
  e.clearSnapshot();
}
function Zh(e) {
  e.clearMeasurements();
}
function qP(e) {
  e.isLayoutDirty = !1;
}
function JP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function em(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function ZP(e) {
  e.resolveTargetDelta();
}
function e8(e) {
  e.calcProjection();
}
function t8(e) {
  e.resetSkewAndRotation();
}
function n8(e) {
  e.removeLeadSnapshot();
}
function tm(e, t, n) {
  (e.translate = de(t.translate, 0, n)),
    (e.scale = de(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function nm(e, t, n, r) {
  (e.min = de(t.min, n.min, r)), (e.max = de(t.max, n.max, r));
}
function r8(e, t, n, r) {
  nm(e.x, t.x, n.x, r), nm(e.y, t.y, n.y, r);
}
function i8(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const o8 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  rm = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  im = rm("applewebkit/") && !rm("chrome/") ? Math.round : De;
function om(e) {
  (e.min = im(e.min)), (e.max = im(e.max));
}
function s8(e) {
  om(e.x), om(e.y);
}
function n1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Xu(Xh(t), Xh(n), 0.2))
  );
}
const a8 = t1({
    attachResizeListener: (e, t) => Dt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ml = { current: void 0 },
  r1 = t1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ml.current) {
        const e = new a8({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ml.current = e);
      }
      return Ml.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  l8 = {
    pan: { Feature: TP },
    drag: { Feature: kP, ProjectionNode: r1, MeasureLayout: Xy },
  },
  ec = { current: null },
  i1 = { current: !1 };
function u8() {
  if (((i1.current = !0), !!ud))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ec.current = e.matches);
      e.addListener(t), t();
    } else ec.current = !1;
}
function c8(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Re(o)) e.addValue(i, o), Us(r) && r.add(i);
    else if (Re(s)) e.addValue(i, Bi(o, { owner: e })), Us(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, Bi(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const sm = new WeakMap(),
  d8 = [...vy, Ne, Sn],
  f8 = (e) => d8.find(gy(e)),
  o1 = Object.keys(Vi),
  p8 = o1.length,
  am = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  h8 = pd.length;
function s1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : s1(e.parent);
}
class m8 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.resolveKeyframes = (p, v, w, y) =>
      new this.KeyframeResolver(p, v, w, y, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Td),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ee.render(this.render, !1, !0));
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = ka(n)),
      (this.isVariantNode = K0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const p in d) {
      const v = d[p];
      l[p] !== void 0 && Re(v) && (v.set(l[p], !1), Us(c) && c.add(p));
    }
  }
  mount(t) {
    (this.current = t),
      sm.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      i1.current || u8(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : ec.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    sm.delete(this.current),
      this.projection && this.projection.unmount(),
      xn(this.notifyUpdate),
      xn(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features)
      (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Xn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && ee.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < p8; l++) {
      const u = o1[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: p,
          MeasureLayout: v,
        } = Vi[u];
      p && (s = p),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          v && (a = v));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(this.latestValues, s1(this.parent));
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: p,
        layoutRoot: v,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && cr(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: p,
        layoutRoot: v,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ge();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < am.length; r++) {
      const i = am[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = c8(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < h8; r++) {
      const i = pd[r],
        o = this.props[i];
      (Ii(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Bi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (hy(i) || py(i))
          ? (i = parseFloat(i))
          : !f8(i) && Sn.test(n) && (i = Py(t, n)),
        this.setBaseTarget(t, Re(i) ? i.get() : i)),
      Re(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = bd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Re(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Dd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class a1 extends m8 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Cy);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function g8(e) {
  return window.getComputedStyle(e);
}
class v8 extends a1 {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Xn.has(n)) {
      const r = Cd(n);
      return (r && r.default) || 0;
    } else {
      const r = g8(t),
        i = (q0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Yy(t, n);
  }
  build(t, n, r, i) {
    vd(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Sd(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Re(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    ny(t, n, r, i);
  }
}
class y8 extends a1 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Xn.has(n)) {
      const r = Cd(n);
      return (r && r.default) || 0;
    }
    return (n = ry.has(n) ? n : cd(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ge();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return oy(t, n, r);
  }
  build(t, n, r, i) {
    wd(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    iy(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = xd(t.tagName)), super.mount(t);
  }
}
const w8 = (e, t) =>
    hd(e)
      ? new y8(t, { enableHardwareAcceleration: !1 })
      : new v8(t, {
          allowProjection: e !== _.Fragment,
          enableHardwareAcceleration: !0,
        }),
  x8 = { layout: { ProjectionNode: r1, MeasureLayout: Xy } },
  S8 = { ...rP, ...pT, ...l8, ...x8 },
  Tr = bk((e, t) => eT(e, t, S8, w8)),
  zd = ({ education: e }) => {
    const { name: t, title: n, type: r, result: i, des: o } = e;
    return f.jsx("div", {
      "data-aos": "fade-down",
      "data-aos-once": "true",
      "data-aos-easing": "linear",
      "data-aos-duration": "1000",
      className: "w-full overflow-x-hidden",
      children: f.jsxs("div", {
        className:
          "w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne",
        children: [
          f.jsxs("div", {
            className:
              "flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center",
            children: [
              f.jsxs("div", {
                children: [
                  f.jsx("h3", {
                    className:
                      "text-xl md:text-2xl font-semibold group-hover:text-white duration-300",
                    children: t,
                  }),
                  f.jsx("p", {
                    className:
                      "text-sm mt-2 text-gray-400 group-hover:text-white duration-300",
                    children: n,
                  }),
                  (e == null ? void 0 : e.link) &&
                    f.jsxs("a", {
                      href: `${e == null ? void 0 : e.link}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center gap-2 text-sm mt-2 text-gray-400 group-hover:text-white duration-300 hover:text-blue-400",
                      children: [
                        f.jsx("button", {
                          className:
                            "text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer",
                          children: f.jsx(_v, {}),
                        }),
                        e.link,
                      ],
                    }),
                ],
              }),
              f.jsxs("div", {
                className: "space-y-2",
                children: [
                  f.jsx("p", {
                    className:
                      "px-4 py-2 text-green-400 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium",
                    children: r,
                  }),
                  f.jsx("p", {
                    className:
                      "px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium",
                    children: i,
                  }),
                ],
              }),
            ],
          }),
          (e == null ? void 0 : e.image) &&
            f.jsx("img", {
              className: "rounded w-full h-full",
              src: `${e.image}`,
              alt: "certificate",
            }),
          f.jsx("p", {
            className:
              "text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300",
            children: o,
          }),
        ],
      }),
    });
  },
  b8 = [
    {
      id: 1,
      name: "Programming Hero",
      title: "Complete Web Development Course",
      type: "Complete",
      result: "In Hunting process",
      des: "Programming Hero offers a comprehensive MERN stack web development course to kickstart my career.Programming Hero provides a complete MERN stack development program, equipping you with the skills to build modern web applications. Join us on the path to becoming a proficient MERN stack developer.",
    },
    {
      id: 2,
      name: "Bogura Polytechnic Institute",
      title: "Mechanical Engineering",
      type: "Running",
      result: "pending",
      des: "Bogura Polytechnic Institute: Elevate my career with Mechanical Engineering, mastering design, analysis, and innovation",
    },
    {
      id: 3,
      name: "Jamunna Polli Bondhu High School & Collage",
      title: "SSC Examination",
      type: "Complete",
      result: "GPA 5.00",
      des: "Jamunna Polli Bondhu High School & College excels in SSC Examination, empowering students with knowledge and skills for a bright future",
    },
  ],
  k8 = [
    {
      id: 1,
      name: "Upnyx Innovative Solutions",
      title: "Front-End Developer",
      type: "Internship",
      link: "https://www.upnyx.com/",
      result: "3 Month",
      des: "During my 3-month internship at Upnyx Innovative Solutions, I honed my front-end development skills and contributed to real-world projects, gaining valuable industry experience.",
    },
    {
      id: 2,
      name: "The-Time",
      title: "Full-Stack Developer",
      type: "Full-Time",
      link: "https://thetime.cloud/",
      result: "Start Up",
      des: "Joined The-Time as a Full-Stack Developer for a full-time position in a dynamic startup environment",
    },
    {
      id: 3,
      name: "Programming Hero",
      title: "Student",
      link: "https://www.programming-hero.com/",
      type: "Complete",
      result: "9 Month",
      des: "Enrolled in a 6-month web development course at Programming Hero and received an additional 3 months as a reward for successful completion.",
    },
  ],
  T8 = [
    {
      id: 1,
      name: "Programming Hero",
      image:
        "https://i.ibb.co/8Xr1NTk/7ae35c27-6490-4f77-87df-1afad72c31ff.jpg",
      title: "Complete Web Development",
      type: "Complete",
      link: "https://www.programming-hero.com/",
      result: "9 Month",
      des: "Enrolled in a 6-month web development course at Programming Hero and received an additional 3 months as a reward for successful completion.",
    },
  ],
  P8 = () =>
    f.jsxs(Tr.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5 } },
      className: "",
      children: [
        f.jsx("div", {
          className: "py-5 lgl:pt-16 font-titleFont flex flex-col gap-4",
          children: f.jsx("h2", {
            className: "text-3xl md:text-4xl font-bold",
            children: "Education",
          }),
        }),
        f.jsx("div", {
          className:
            "mt-6 lgl:mt-7 w-full h-full border-l-[6px] border-l-black border-opacity-30",
          children: f.jsx("div", {
            className: "w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-10",
            children: b8.map((e) => f.jsx(zd, { education: e }, e.id)),
          }),
        }),
      ],
    }),
  Nl = [
    {
      id: 1,
      frontendData: [
        { id: 1, name: "React", percent: "92%" },
        { id: 2, name: "Next.js", percent: "80%" },
        { id: 3, name: "JavaScript", percent: "70%" },
        { id: 4, name: "HTML", percent: "95%" },
        { id: 5, name: "CSS", percent: "89%" },
        { id: 6, name: "Tailwind CSS", percent: "90%" },
        { id: 7, name: "Bootstrap", percent: "80%" },
      ],
      backendData: [
        { id: 1, name: "Node.js", percent: "80%" },
        { id: 2, name: "Express", percent: "70%" },
        { id: 3, name: "MongoDB", percent: "90%" },
        { id: 4, name: "Mongoose", percent: "50%" },
        { id: 5, name: "Socket.io", percent: "40%" },
      ],
    },
  ],
  C8 = () => {
    const [e, t] = _.useState([]),
      [n, r] = _.useState([]);
    return (
      _.useEffect(() => {
        const i = Nl[0].frontendData,
          o = Nl[0].backendData;
        t(i), r(o);
      }, []),
      console.log(Nl),
      console.log(e),
      console.log(n),
      f.jsxs(Tr.div, {
        "data-aos": "fade-down",
        "data-aos-once": "true",
        "data-aos-easing": "linear",
        "data-aos-duration": "1000",
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
        className:
          "w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 overflow-x-hidden",
        children: [
          f.jsxs("div", {
            className: "w-full lgl:w-1/2",
            children: [
              f.jsxs("div", {
                className: "py-12 font-titleFont flex flex-col gap-4",
                children: [
                  f.jsx("p", {
                    className:
                      "text-sm text-designColor tracking-[4px] uppercase",
                    children: "Basic Features",
                  }),
                  f.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold",
                    children: "Front-End Development Skills",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "flex flex-col gap-6",
                children: e.map((i) =>
                  f.jsxs(
                    "div",
                    {
                      className: "overflow-x-hidden",
                      children: [
                        f.jsx("p", {
                          className: "text-sm uppercase font-medium",
                          children: i.name,
                        }),
                        f.jsx("span", {
                          className:
                            "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                          children: f.jsx(Tr.span, {
                            initial: { x: "-100%", opacity: 0 },
                            animate: { x: 0, opacity: 1 },
                            transition: { duration: 0.5, delay: 0.5 },
                            style: { width: `${i.percent}` },
                            className:
                              " h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                            children: f.jsx("span", {
                              className: "absolute -top-7 right-0",
                              children: i.percent,
                            }),
                          }),
                        }),
                      ],
                    },
                    i.id
                  )
                ),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "w-full lgl:w-1/2",
            children: [
              f.jsxs("div", {
                className: "py-12 font-titleFont flex flex-col gap-4",
                children: [
                  f.jsx("p", {
                    className:
                      "text-sm text-designColor tracking-[4px] uppercase",
                    children: "Features",
                  }),
                  f.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold",
                    children: "Back-End Development Skills",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "flex flex-col gap-6",
                children: n.map((i) =>
                  f.jsxs(
                    "div",
                    {
                      className: "overflow-x-hidden",
                      children: [
                        f.jsx("p", {
                          className: "text-sm uppercase font-medium",
                          children: i.name,
                        }),
                        f.jsx("span", {
                          className:
                            "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                          children: f.jsx(Tr.span, {
                            initial: { x: "-100%", opacity: 0 },
                            animate: { x: 0, opacity: 1 },
                            transition: { duration: 0.5, delay: 0.5 },
                            style: { width: `${i.percent}` },
                            className:
                              "h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                            children: f.jsx("span", {
                              className: "absolute -top-7 right-0",
                              children: i.percent,
                            }),
                          }),
                        }),
                      ],
                    },
                    i.id
                  )
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  j8 = () =>
    f.jsxs(Tr.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5 } },
      className: "",
      children: [
        f.jsx("div", {
          className: "py-5 lgl:pt-16 font-titleFont flex flex-col gap-4",
          children: f.jsx("h2", {
            className: "text-3xl md:text-4xl font-bold",
            children: "Education",
          }),
        }),
        f.jsx("div", {
          className:
            "mt-6 lgl:mt-7 w-full h-full border-l-[6px] border-l-black border-opacity-30",
          children: f.jsx("div", {
            className: "w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-10",
            children: T8.map((e) => f.jsx(zd, { education: e }, e.id)),
          }),
        }),
      ],
    }),
  E8 = () =>
    f.jsxs(Tr.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5 } },
      className: "",
      children: [
        f.jsx("div", {
          className: "py-5 lgl:pt-16 font-titleFont flex flex-col gap-4",
          children: f.jsx("h2", {
            className: "text-3xl md:text-4xl font-bold",
            children: "Education",
          }),
        }),
        f.jsx("div", {
          className:
            "mt-6 lgl:mt-7 w-full h-full border-l-[6px] border-l-black border-opacity-30",
          children: f.jsx("div", {
            className: "w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-10",
            children: k8.map((e) => f.jsx(zd, { education: e }, e.id)),
          }),
        }),
      ],
    });
function Ad(e) {
  return (t) => !!t.type && t.type.tabsRole === e;
}
const ja = Ad("Tab"),
  Id = Ad("TabList"),
  Vd = Ad("TabPanel");
function _8(e) {
  return ja(e) || Id(e) || Vd(e);
}
function tc(e, t) {
  return _.Children.map(e, (n) =>
    n === null
      ? null
      : _8(n)
      ? t(n)
      : n.props && n.props.children && typeof n.props.children == "object"
      ? _.cloneElement(n, { ...n.props, children: tc(n.props.children, t) })
      : n
  );
}
function l1(e, t) {
  return _.Children.forEach(e, (n) => {
    n !== null &&
      (ja(n) || Vd(n)
        ? t(n)
        : n.props &&
          n.props.children &&
          typeof n.props.children == "object" &&
          (Id(n) && t(n), l1(n.props.children, t)));
  });
}
function u1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = u1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ao() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = u1(e)) && (r && (r += " "), (r += t));
  return r;
}
function c1(e) {
  let t = 0;
  return (
    l1(e, (n) => {
      ja(n) && t++;
    }),
    t
  );
}
function d1(e) {
  return e && "getAttribute" in e;
}
function lm(e) {
  return d1(e) && e.getAttribute("data-rttab");
}
function _n(e) {
  return d1(e) && e.getAttribute("aria-disabled") === "true";
}
let Ks;
function O8(e) {
  const t = e || (typeof window < "u" ? window : void 0);
  try {
    Ks = !!(typeof t < "u" && t.document && t.document.activeElement);
  } catch {
    Ks = !1;
  }
}
const M8 = { className: "react-tabs", focus: !1 },
  f1 = (e) => {
    let t = _.useRef([]),
      n = _.useRef([]);
    const r = _.useRef();
    function i(E, M) {
      if (E < 0 || E >= u()) return;
      const { onSelect: I, selectedIndex: $ } = e;
      I(E, $, M);
    }
    function o(E) {
      const M = u();
      for (let I = E + 1; I < M; I++) if (!_n(c(I))) return I;
      for (let I = 0; I < E; I++) if (!_n(c(I))) return I;
      return E;
    }
    function s(E) {
      let M = E;
      for (; M--; ) if (!_n(c(M))) return M;
      for (M = u(); M-- > E; ) if (!_n(c(M))) return M;
      return E;
    }
    function a() {
      const E = u();
      for (let M = 0; M < E; M++) if (!_n(c(M))) return M;
      return null;
    }
    function l() {
      let E = u();
      for (; E--; ) if (!_n(c(E))) return E;
      return null;
    }
    function u() {
      const { children: E } = e;
      return c1(E);
    }
    function c(E) {
      return t.current[`tabs-${E}`];
    }
    function d() {
      let E = 0;
      const {
        children: M,
        disabledTabClassName: I,
        focus: $,
        forceRenderTabPanel: Y,
        selectedIndex: N,
        selectedTabClassName: z,
        selectedTabPanelClassName: B,
        environment: U,
      } = e;
      n.current = n.current || [];
      let q = n.current.length - u();
      const $e = _.useId();
      for (; q++ < 0; ) n.current.push(`${$e}${n.current.length}`);
      return tc(M, (ke) => {
        let Xe = ke;
        if (Id(ke)) {
          let _e = 0,
            Cn = !1;
          Ks == null && O8(U);
          const Hd = U || (typeof window < "u" ? window : void 0);
          Ks &&
            Hd &&
            (Cn = Ke.Children.toArray(ke.props.children)
              .filter(ja)
              .some((Ud, Ea) => Hd.document.activeElement === c(Ea))),
            (Xe = _.cloneElement(ke, {
              children: tc(ke.props.children, (Ud) => {
                const Ea = `tabs-${_e}`,
                  Wd = N === _e,
                  _a = {
                    tabRef: (y1) => {
                      t.current[Ea] = y1;
                    },
                    id: n.current[_e],
                    selected: Wd,
                    focus: Wd && ($ || Cn),
                  };
                return (
                  z && (_a.selectedClassName = z),
                  I && (_a.disabledClassName = I),
                  _e++,
                  _.cloneElement(Ud, _a)
                );
              }),
            }));
        } else if (Vd(ke)) {
          const _e = { id: n.current[E], selected: N === E };
          Y && (_e.forceRender = Y),
            B && (_e.selectedClassName = B),
            E++,
            (Xe = _.cloneElement(ke, _e));
        }
        return Xe;
      });
    }
    function p(E) {
      const { direction: M, disableUpDownKeys: I, disableLeftRightKeys: $ } = e;
      if (w(E.target)) {
        let { selectedIndex: Y } = e,
          N = !1,
          z = !1;
        (E.code === "Space" ||
          E.keyCode === 32 ||
          E.code === "Enter" ||
          E.keyCode === 13) &&
          ((N = !0), (z = !1), v(E)),
          (!$ && (E.keyCode === 37 || E.code === "ArrowLeft")) ||
          (!I && (E.keyCode === 38 || E.code === "ArrowUp"))
            ? (M === "rtl" ? (Y = o(Y)) : (Y = s(Y)), (N = !0), (z = !0))
            : (!$ && (E.keyCode === 39 || E.code === "ArrowRight")) ||
              (!I && (E.keyCode === 40 || E.code === "ArrowDown"))
            ? (M === "rtl" ? (Y = s(Y)) : (Y = o(Y)), (N = !0), (z = !0))
            : E.keyCode === 35 || E.code === "End"
            ? ((Y = l()), (N = !0), (z = !0))
            : (E.keyCode === 36 || E.code === "Home") &&
              ((Y = a()), (N = !0), (z = !0)),
          N && E.preventDefault(),
          z && i(Y, E);
      }
    }
    function v(E) {
      let M = E.target;
      do
        if (w(M)) {
          if (_n(M)) return;
          const I = [].slice.call(M.parentNode.children).filter(lm).indexOf(M);
          i(I, E);
          return;
        }
      while ((M = M.parentNode) != null);
    }
    function w(E) {
      if (!lm(E)) return !1;
      let M = E.parentElement;
      do {
        if (M === r.current) return !0;
        if (M.getAttribute("data-rttabs")) break;
        M = M.parentElement;
      } while (M);
      return !1;
    }
    const {
      children: y,
      className: S,
      disabledTabClassName: m,
      domRef: h,
      focus: g,
      forceRenderTabPanel: x,
      onSelect: b,
      selectedIndex: k,
      selectedTabClassName: j,
      selectedTabPanelClassName: C,
      environment: P,
      disableUpDownKeys: T,
      disableLeftRightKeys: D,
      ...L
    } = { ...M8, ...e };
    return Ke.createElement(
      "div",
      Object.assign({}, L, {
        className: ao(S),
        onClick: v,
        onKeyDown: p,
        ref: (E) => {
          (r.current = E), h && h(E);
        },
        "data-rttabs": !0,
      }),
      d()
    );
  };
f1.propTypes = {};
const N8 = 0,
  es = 1,
  L8 = {
    defaultFocus: !1,
    focusTabOnClick: !0,
    forceRenderTabPanel: !1,
    selectedIndex: null,
    defaultIndex: null,
    environment: null,
    disableUpDownKeys: !1,
    disableLeftRightKeys: !1,
  },
  R8 = (e) => (e.selectedIndex === null ? es : N8),
  Fd = (e) => {
    const {
        children: t,
        defaultFocus: n,
        defaultIndex: r,
        focusTabOnClick: i,
        onSelect: o,
        ...s
      } = { ...L8, ...e },
      [a, l] = _.useState(n),
      [u] = _.useState(R8(s)),
      [c, d] = _.useState(u === es ? r || 0 : null);
    if (
      (_.useEffect(() => {
        l(!1);
      }, []),
      u === es)
    ) {
      const w = c1(t);
      _.useEffect(() => {
        if (c != null) {
          const y = Math.max(0, w - 1);
          d(Math.min(c, y));
        }
      }, [w]);
    }
    const p = (w, y, S) => {
      (typeof o == "function" && o(w, y, S) === !1) ||
        (i && l(!0), u === es && d(w));
    };
    let v = { ...e, ...s };
    return (
      (v.focus = a),
      (v.onSelect = p),
      c != null && (v.selectedIndex = c),
      delete v.defaultFocus,
      delete v.defaultIndex,
      delete v.focusTabOnClick,
      Ke.createElement(f1, v, t)
    );
  };
Fd.propTypes = {};
Fd.tabsRole = "Tabs";
const D8 = { className: "react-tabs__tab-list" },
  Bd = (e) => {
    const { children: t, className: n, ...r } = { ...D8, ...e };
    return Ke.createElement(
      "ul",
      Object.assign({}, r, { className: ao(n), role: "tablist" }),
      t
    );
  };
Bd.tabsRole = "TabList";
Bd.propTypes = {};
const Ll = "react-tabs__tab",
  z8 = {
    className: Ll,
    disabledClassName: `${Ll}--disabled`,
    focus: !1,
    id: null,
    selected: !1,
    selectedClassName: `${Ll}--selected`,
  },
  hr = (e) => {
    let t = _.useRef();
    const {
      children: n,
      className: r,
      disabled: i,
      disabledClassName: o,
      focus: s,
      id: a,
      selected: l,
      selectedClassName: u,
      tabIndex: c,
      tabRef: d,
      ...p
    } = { ...z8, ...e };
    return (
      _.useEffect(() => {
        l && s && t.current.focus();
      }, [l, s]),
      Ke.createElement(
        "li",
        Object.assign({}, p, {
          className: ao(r, { [u]: l, [o]: i }),
          ref: (v) => {
            (t.current = v), d && d(v);
          },
          role: "tab",
          id: `tab${a}`,
          "aria-selected": l ? "true" : "false",
          "aria-disabled": i ? "true" : "false",
          "aria-controls": `panel${a}`,
          tabIndex: c || (l ? "0" : null),
          "data-rttab": !0,
        }),
        n
      )
    );
  };
hr.propTypes = {};
hr.tabsRole = "Tab";
const um = "react-tabs__tab-panel",
  A8 = { className: um, forceRender: !1, selectedClassName: `${um}--selected` },
  mr = (e) => {
    const {
      children: t,
      className: n,
      forceRender: r,
      id: i,
      selected: o,
      selectedClassName: s,
      ...a
    } = { ...A8, ...e };
    return Ke.createElement(
      "div",
      Object.assign({}, a, {
        className: ao(n, { [s]: o }),
        role: "tabpanel",
        id: `panel${i}`,
        "aria-labelledby": `tab${i}`,
      }),
      r || o ? t : null
    );
  };
mr.tabsRole = "TabPanel";
mr.propTypes = {};
const I8 = () =>
    f.jsxs("section", {
      id: "about",
      children: [
        f.jsx("div", {
          className: "flex justify-center pt-16 items-center text-center",
          children: f.jsx(eo, { title1: "About", title2: "About" }),
        }),
        f.jsxs(Fd, {
          "data-aos": "fade-up",
          "data-aos-anchor-placement": "top-center",
          "data-aos-once": "true",
          className: "overflow-x-hidden w-full",
          selectedClassName: "bg-designColor",
          children: [
            f.jsxs(Bd, {
              className:
                "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
              children: [
                f.jsx(hr, {
                  className:
                    "border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor",
                  children: f.jsx("div", { children: "Education" }),
                }),
                f.jsx(hr, {
                  className:
                    "border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor",
                  children: f.jsx("div", { children: "Professional Skills" }),
                }),
                f.jsx(hr, {
                  className:
                    "border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor",
                  children: f.jsx("div", { children: "Experience" }),
                }),
                f.jsx(hr, {
                  className:
                    "border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor",
                  children: f.jsx("div", { children: "Certificate" }),
                }),
              ],
            }),
            f.jsx(mr, { children: f.jsx(P8, {}) }),
            f.jsx(mr, { children: f.jsx(C8, {}) }),
            f.jsx(mr, { children: f.jsx(E8, {}) }),
            f.jsx(mr, { children: f.jsx(j8, {}) }),
          ],
        }),
      ],
    }),
  V8 = ({
    gradientBackgroundStart: e = "rgb(108, 0, 162)",
    gradientBackgroundEnd: t = "rgb(0, 17, 82)",
    firstColor: n = "18, 113, 255",
    secondColor: r = "221, 74, 255",
    thirdColor: i = "100, 220, 255",
    fourthColor: o = "200, 50, 50",
    fifthColor: s = "180, 180, 50",
    pointerColor: a = "140, 100, 255",
    size: l = "80%",
    blendingValue: u = "hard-light",
    children: c,
    className: d,
    interactive: p = !0,
    containerClassName: v,
  }) => {
    const w = _.useRef(null),
      [y, S] = _.useState(0),
      [m, h] = _.useState(0),
      [g, x] = _.useState(0),
      [b, k] = _.useState(0);
    _.useEffect(() => {
      document.body.style.setProperty("--gradient-background-start", e),
        document.body.style.setProperty("--gradient-background-end", t),
        document.body.style.setProperty("--first-color", n),
        document.body.style.setProperty("--second-color", r),
        document.body.style.setProperty("--third-color", i),
        document.body.style.setProperty("--fourth-color", o),
        document.body.style.setProperty("--fifth-color", s),
        document.body.style.setProperty("--pointer-color", a),
        document.body.style.setProperty("--size", l),
        document.body.style.setProperty("--blending-value", u);
    }, []),
      _.useEffect(() => {
        function T() {
          w.current &&
            (S(y + (g - y) / 20),
            h(m + (b - m) / 20),
            (w.current.style.transform = `translate(${Math.round(
              y
            )}px, ${Math.round(m)}px)`));
        }
        T();
      }, [g, b]);
    const j = (T) => {
        if (w.current) {
          const D = w.current.getBoundingClientRect();
          x(T.clientX - D.left), k(T.clientY - D.top);
        }
      },
      [C, P] = _.useState(!1);
    return (
      _.useEffect(() => {
        P(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
      }, []),
      f.jsxs("div", {
        className: Ot("h-screen w-full", v),
        children: [
          f.jsx("svg", {
            className: "hidden",
            children: f.jsx("defs", {
              children: f.jsxs("filter", {
                id: "blurMe",
                children: [
                  f.jsx("feGaussianBlur", {
                    in: "SourceGraphic",
                    stdDeviation: "10",
                    result: "blur",
                  }),
                  f.jsx("feColorMatrix", {
                    in: "blur",
                    mode: "matrix",
                    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",
                    result: "goo",
                  }),
                  f.jsx("feBlend", { in: "SourceGraphic", in2: "goo" }),
                ],
              }),
            }),
          }),
          f.jsx("div", { className: Ot("", d), children: c }),
          f.jsxs("div", {
            className: Ot(
              "gradients-container h-full w-full blur-lg",
              C ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
            ),
            children: [
              f.jsx("div", {
                className: Ot(
                  "absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]",
                  "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
                  "[transform-origin:center_center]",
                  "animate-first",
                  "opacity-100"
                ),
              }),
              f.jsx("div", {
                className: Ot(
                  "absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]",
                  "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
                  "[transform-origin:calc(50%-400px)]",
                  "animate-second",
                  "opacity-100"
                ),
              }),
              f.jsx("div", {
                className: Ot(
                  "absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]",
                  "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
                  "[transform-origin:calc(50%+400px)]",
                  "animate-third",
                  "opacity-100"
                ),
              }),
              f.jsx("div", {
                className: Ot(
                  "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]",
                  "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
                  "[transform-origin:calc(50%-200px)]",
                  "animate-fourth",
                  "opacity-70"
                ),
              }),
              f.jsx("div", {
                className: Ot(
                  "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]",
                  "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
                  "[transform-origin:calc(50%-800px)_calc(50%+800px)]",
                  "animate-fifth",
                  "opacity-100"
                ),
              }),
              p &&
                f.jsx("div", {
                  ref: w,
                  onMouseMove: j,
                  className: Ot(
                    "absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
                    "[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2",
                    "opacity-70"
                  ),
                }),
            ],
          }),
        ],
      })
    );
  };
function F8() {
  const [e, t] = _.useState(!0);
  return (
    _.useEffect(() => {
      const r = setTimeout(() => {
        document.readyState === "complete" && t(!1);
      }, 500);
      return () => clearTimeout(r);
    }, []),
    f.jsx("div", {
      className: `w-full h-auto bg-bodyColor text-lightText overflow-hidden ${
        e ? "overflow-hidden" : ""
      }`,
      children: e
        ? f.jsx(lk, {})
        : f.jsxs(f.Fragment, {
            children: [
              f.jsx(t3, {}),
              f.jsxs("div", {
                className: "max-w-screen-xl mx-auto px-3",
                children: [
                  f.jsx(V8, { children: f.jsx(v4, {}) }),
                  f.jsx(X4, {}),
                  f.jsx(sk, {}),
                  f.jsx(I8, {}),
                  f.jsx(ak, {}),
                  f.jsx(L4, {}),
                  f.jsx(q4, {}),
                  f.jsx(J4, {}),
                ],
              }),
            ],
          }),
    })
  );
}
const $d = "-";
function B8(e) {
  const t = H8(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function i(s) {
    const a = s.split($d);
    return a[0] === "" && a.length !== 1 && a.shift(), p1(a, t) || $8(s);
  }
  function o(s, a) {
    const l = n[s] || [];
    return a && r[s] ? [...l, ...r[s]] : l;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: o };
}
function p1(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    i = r ? p1(e.slice(1), r) : void 0;
  if (i) return i;
  if (t.validators.length === 0) return;
  const o = e.join($d);
  return (s = t.validators.find(({ validator: a }) => a(o))) == null
    ? void 0
    : s.classGroupId;
}
const cm = /^\[(.+)\]$/;
function $8(e) {
  if (cm.test(e)) {
    const t = cm.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function H8(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    W8(Object.entries(e.classGroups), n).forEach(([o, s]) => {
      nc(s, r, o, t);
    }),
    r
  );
}
function nc(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : dm(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (U8(i)) {
        nc(i(r), t, n, r);
        return;
      }
      t.validators.push({ validator: i, classGroupId: n });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      nc(s, dm(t, o), n, r);
    });
  });
}
function dm(e, t) {
  let n = e;
  return (
    t.split($d).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function U8(e) {
  return e.isThemeGetter;
}
function W8(e, t) {
  return t
    ? e.map(([n, r]) => {
        const i = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
            ? Object.fromEntries(Object.entries(o).map(([s, a]) => [t + s, a]))
            : o
        );
        return [n, i];
      })
    : e;
}
function K8(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function i(o, s) {
    n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(o) {
      let s = n.get(o);
      if (s !== void 0) return s;
      if ((s = r.get(o)) !== void 0) return i(o, s), s;
    },
    set(o, s) {
      n.has(o) ? n.set(o, s) : i(o, s);
    },
  };
}
const h1 = "!";
function G8(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    i = t.length;
  return function (s) {
    const a = [];
    let l = 0,
      u = 0,
      c;
    for (let y = 0; y < s.length; y++) {
      let S = s[y];
      if (l === 0) {
        if (S === r && (n || s.slice(y, y + i) === t)) {
          a.push(s.slice(u, y)), (u = y + i);
          continue;
        }
        if (S === "/") {
          c = y;
          continue;
        }
      }
      S === "[" ? l++ : S === "]" && l--;
    }
    const d = a.length === 0 ? s : s.substring(u),
      p = d.startsWith(h1),
      v = p ? d.substring(1) : d,
      w = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: w,
    };
  };
}
function Y8(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function Q8(e) {
  return { cache: K8(e.cacheSize), splitModifiers: G8(e), ...B8(e) };
}
const X8 = /\s+/;
function q8(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
    } = t,
    o = new Set();
  return e
    .trim()
    .split(X8)
    .map((s) => {
      const {
        modifiers: a,
        hasImportantModifier: l,
        baseClassName: u,
        maybePostfixModifierPosition: c,
      } = n(s);
      let d = r(c ? u.substring(0, c) : u),
        p = !!c;
      if (!d) {
        if (!c) return { isTailwindClass: !1, originalClassName: s };
        if (((d = r(u)), !d))
          return { isTailwindClass: !1, originalClassName: s };
        p = !1;
      }
      const v = Y8(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? v + h1 : v,
        classGroupId: d,
        originalClassName: s,
        hasPostfixModifier: p,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: l, hasPostfixModifier: u } = s,
        c = a + l;
      return o.has(c)
        ? !1
        : (o.add(c), i(l, u).forEach((d) => o.add(a + d)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(" ");
}
function J8() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = m1(t)) && (r && (r += " "), (r += n));
  return r;
}
function m1(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = m1(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function Z8(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = Q8(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = q8(l, n);
    return i(l, c), c;
  }
  return function () {
    return o(J8.apply(null, arguments));
  };
}
function te(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const g1 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  eC = /^\d+\/\d+$/,
  tC = new Set(["px", "full", "screen"]),
  nC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  rC =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  iC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  oC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  sC =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function _t(e) {
  return In(e) || tC.has(e) || eC.test(e);
}
function Yt(e) {
  return Hr(e, "length", hC);
}
function In(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Do(e) {
  return Hr(e, "number", In);
}
function Zr(e) {
  return !!e && Number.isInteger(Number(e));
}
function aC(e) {
  return e.endsWith("%") && In(e.slice(0, -1));
}
function H(e) {
  return g1.test(e);
}
function Qt(e) {
  return nC.test(e);
}
const lC = new Set(["length", "size", "percentage"]);
function uC(e) {
  return Hr(e, lC, v1);
}
function cC(e) {
  return Hr(e, "position", v1);
}
const dC = new Set(["image", "url"]);
function fC(e) {
  return Hr(e, dC, gC);
}
function pC(e) {
  return Hr(e, "", mC);
}
function ei() {
  return !0;
}
function Hr(e, t, n) {
  const r = g1.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function hC(e) {
  return rC.test(e) && !iC.test(e);
}
function v1() {
  return !1;
}
function mC(e) {
  return oC.test(e);
}
function gC(e) {
  return sC.test(e);
}
function vC() {
  const e = te("colors"),
    t = te("spacing"),
    n = te("blur"),
    r = te("brightness"),
    i = te("borderColor"),
    o = te("borderRadius"),
    s = te("borderSpacing"),
    a = te("borderWidth"),
    l = te("contrast"),
    u = te("grayscale"),
    c = te("hueRotate"),
    d = te("invert"),
    p = te("gap"),
    v = te("gradientColorStops"),
    w = te("gradientColorStopPositions"),
    y = te("inset"),
    S = te("margin"),
    m = te("opacity"),
    h = te("padding"),
    g = te("saturate"),
    x = te("scale"),
    b = te("sepia"),
    k = te("skew"),
    j = te("space"),
    C = te("translate"),
    P = () => ["auto", "contain", "none"],
    T = () => ["auto", "hidden", "clip", "visible", "scroll"],
    D = () => ["auto", H, t],
    L = () => [H, t],
    E = () => ["", _t, Yt],
    M = () => ["auto", In, H],
    I = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    $ = () => ["solid", "dashed", "dotted", "double", "none"],
    Y = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    N = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    z = () => ["", "0", H],
    B = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    U = () => [In, Do],
    q = () => [In, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ei],
      spacing: [_t, Yt],
      blur: ["none", "", Qt, H],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Qt, H],
      borderSpacing: L(),
      borderWidth: E(),
      contrast: U(),
      grayscale: z(),
      hueRotate: q(),
      invert: z(),
      gap: L(),
      gradientColorStops: [e],
      gradientColorStopPositions: [aC, Yt],
      inset: D(),
      margin: D(),
      opacity: U(),
      padding: L(),
      saturate: U(),
      scale: U(),
      sepia: z(),
      skew: q(),
      space: L(),
      translate: L(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", H] }],
      container: ["container"],
      columns: [{ columns: [Qt] }],
      "break-after": [{ "break-after": B() }],
      "break-before": [{ "break-before": B() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...I(), H] }],
      overflow: [{ overflow: T() }],
      "overflow-x": [{ "overflow-x": T() }],
      "overflow-y": [{ "overflow-y": T() }],
      overscroll: [{ overscroll: P() }],
      "overscroll-x": [{ "overscroll-x": P() }],
      "overscroll-y": [{ "overscroll-y": P() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Zr, H] }],
      basis: [{ basis: D() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", H] }],
      grow: [{ grow: z() }],
      shrink: [{ shrink: z() }],
      order: [{ order: ["first", "last", "none", Zr, H] }],
      "grid-cols": [{ "grid-cols": [ei] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Zr, H] }, H] }],
      "col-start": [{ "col-start": M() }],
      "col-end": [{ "col-end": M() }],
      "grid-rows": [{ "grid-rows": [ei] }],
      "row-start-end": [{ row: ["auto", { span: [Zr, H] }, H] }],
      "row-start": [{ "row-start": M() }],
      "row-end": [{ "row-end": M() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
      gap: [{ gap: [p] }],
      "gap-x": [{ "gap-x": [p] }],
      "gap-y": [{ "gap-y": [p] }],
      "justify-content": [{ justify: ["normal", ...N()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...N(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...N(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [h] }],
      px: [{ px: [h] }],
      py: [{ py: [h] }],
      ps: [{ ps: [h] }],
      pe: [{ pe: [h] }],
      pt: [{ pt: [h] }],
      pr: [{ pr: [h] }],
      pb: [{ pb: [h] }],
      pl: [{ pl: [h] }],
      m: [{ m: [S] }],
      mx: [{ mx: [S] }],
      my: [{ my: [S] }],
      ms: [{ ms: [S] }],
      me: [{ me: [S] }],
      mt: [{ mt: [S] }],
      mr: [{ mr: [S] }],
      mb: [{ mb: [S] }],
      ml: [{ ml: [S] }],
      "space-x": [{ "space-x": [j] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [j] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t] }],
      "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            H,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Qt] },
            Qt,
          ],
        },
      ],
      h: [{ h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Qt, Yt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Do,
          ],
        },
      ],
      "font-family": [{ font: [ei] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            H,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", In, Do] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            _t,
            H,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", H] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [m] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [m] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", _t, Yt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", _t, H] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: L() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            H,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", H] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [m] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...I(), cC] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", uC] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            fC,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [w] }],
      "gradient-via-pos": [{ via: [w] }],
      "gradient-to-pos": [{ to: [w] }],
      "gradient-from": [{ from: [v] }],
      "gradient-via": [{ via: [v] }],
      "gradient-to": [{ to: [v] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [m] }],
      "border-style": [{ border: [...$(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [m] }],
      "divide-style": [{ divide: $() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: ["", ...$()] }],
      "outline-offset": [{ "outline-offset": [_t, H] }],
      "outline-w": [{ outline: [_t, Yt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: E() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [m] }],
      "ring-offset-w": [{ "ring-offset": [_t, Yt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Qt, pC] }],
      "shadow-color": [{ shadow: [ei] }],
      opacity: [{ opacity: [m] }],
      "mix-blend": [{ "mix-blend": [...Y(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": Y() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Qt, H] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [g] }],
      sepia: [{ sepia: [b] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [m] }],
      "backdrop-saturate": [{ "backdrop-saturate": [g] }],
      "backdrop-sepia": [{ "backdrop-sepia": [b] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            H,
          ],
        },
      ],
      duration: [{ duration: q() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
      delay: [{ delay: q() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", H] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [x] }],
      "scale-x": [{ "scale-x": [x] }],
      "scale-y": [{ "scale-y": [x] }],
      rotate: [{ rotate: [Zr, H] }],
      "translate-x": [{ "translate-x": [C] }],
      "translate-y": [{ "translate-y": [C] }],
      "skew-x": [{ "skew-x": [k] }],
      "skew-y": [{ "skew-y": [k] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            H,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            H,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": L() }],
      "scroll-mx": [{ "scroll-mx": L() }],
      "scroll-my": [{ "scroll-my": L() }],
      "scroll-ms": [{ "scroll-ms": L() }],
      "scroll-me": [{ "scroll-me": L() }],
      "scroll-mt": [{ "scroll-mt": L() }],
      "scroll-mr": [{ "scroll-mr": L() }],
      "scroll-mb": [{ "scroll-mb": L() }],
      "scroll-ml": [{ "scroll-ml": L() }],
      "scroll-p": [{ "scroll-p": L() }],
      "scroll-px": [{ "scroll-px": L() }],
      "scroll-py": [{ "scroll-py": L() }],
      "scroll-ps": [{ "scroll-ps": L() }],
      "scroll-pe": [{ "scroll-pe": L() }],
      "scroll-pt": [{ "scroll-pt": L() }],
      "scroll-pr": [{ "scroll-pr": L() }],
      "scroll-pb": [{ "scroll-pb": L() }],
      "scroll-pl": [{ "scroll-pl": L() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", H] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [_t, Yt, Do] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const yC = Z8(vC);
function Ot(...e) {
  return yC(ao(e));
}
Rl.createRoot(document.getElementById("root")).render(
  f.jsx(Ke.StrictMode, { children: f.jsx(F8, {}) })
);