import { ref as g, computed as m, openBlock as _, createElementBlock as h, createElementVNode as l, normalizeStyle as c, renderSlot as u } from "vue";
const S = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, a] of e)
    t[i] = a;
  return t;
}, y = { class: "right-part" }, $ = {
  __name: "drag-container",
  props: {
    initSize: {
      type: [Number, String],
      default: 300
    },
    dividerColor: {
      type: String,
      default: "#ddd"
    },
    dividerWidth: {
      type: Number,
      default: 2
    }
  },
  setup(n) {
    const e = n;
    let t = !1, i = 0, a = 0;
    const o = g(e.initSize), d = m(() => typeof o.value == "string" ? o.value : o.value + "px"), p = (r) => {
      t = !0, a = o.value, i = r.clientX;
    }, f = () => {
      t = !1;
    }, v = (r) => {
      if (t) {
        const s = r.x;
        o.value = a + s - i;
      }
    };
    return (r, s) => (_(), h("div", {
      class: "container-wrap",
      onMousemove: v,
      onMouseup: f
    }, [
      l("div", {
        class: "left-part",
        style: c(`width: ${d.value};margin-right: ${e.dividerWidth}`)
      }, [
        u(r.$slots, "left", {}, void 0, !0)
      ], 4),
      l("div", {
        class: "middle-drag",
        style: c(`left: ${d.value};background-color: ${e.dividerColor};width: ${e.dividerWidth}px;`),
        onMousedown: p
      }, null, 36),
      l("div", y, [
        u(r.$slots, "right", {}, void 0, !0)
      ])
    ], 32));
  }
}, D = /* @__PURE__ */ S($, [["__scopeId", "data-v-0b723af4"]]);
export {
  D as default
};
