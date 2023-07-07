import { createSignal, createEffect, For, Show, on } from "solid-js";
import Event from "./Event";
import { TABS } from "../lib/tabs";
const TABS_KEYS = Object.keys(TABS);

export default function Devices() {
  let ref;
  let currentTabRef;
  let initedRef = false;
  const [activeTab, setActiveTab] = createSignal("");
  const [hasRightScroll, setHasRightScroll] = createSignal(false);

  createEffect(() => {
    if (!activeTab() && !initedRef) {
      initedRef = true;
      setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
    }
  });

  createEffect(
    on(activeTab, () => {
      setTimeout(() => {
        currentTabRef = ref.querySelector(
          ".section__panel:not(.section__panel_hidden)"
        );
        const scrollerWidth = currentTabRef ? currentTabRef.scrollWidth : 0;

        const newHasRightScroll = scrollerWidth > ref.offsetWidth;
        if (newHasRightScroll !== hasRightScroll()) {
          setHasRightScroll(newHasRightScroll);
        }
      }, 0);
    })
  );

  const onSelectInput = (event) => {
    setActiveTab(event.target.value);
  };

  const onArrowCLick = () => {
    const scroller = currentTabRef;
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section class="section main__devices">
      <div class="section__title">
        <h2 class="section__title-header">Избранные устройства</h2>

        <select
          class="section__select"
          defaultValue="all"
          onInput={onSelectInput}
        >
          <For each={TABS_KEYS}>
            {(key) => <options value={key}>{TABS[key].title}</options>}
          </For>
        </select>

        <ul role="tablist" class="section__tabs">
          <For each={TABS_KEYS}>
            {(key) => (
              <li
                key={key}
                role="tab"
                aria-selected={key === activeTab() ? "true" : "false"}
                tabIndex={key === activeTab() ? "0" : undefined}
                class={
                  "section__tab" +
                  (key === activeTab() ? " section__tab_active" : "")
                }
                id={`tab_${key}`}
                aria-controls={`panel_${key}`}
                onClick={() => setActiveTab(key)}
              >
                {TABS[key].title}
              </li>
            )}
          </For>
        </ul>
      </div>

      <div class="section__panel-wrapper" ref={ref}>
        <For each={TABS_KEYS}>
          {(key) => (
            <div
              key={key}
              ref={key === activeTab() ? currentTabRef : null}
              role="tabpanel"
              class={
                "section__panel" +
                (key === activeTab() ? "" : " section__panel_hidden")
              }
              aria-hidden={key === activeTab() ? "false" : "true"}
              id={`panel_${key}`}
              aria-labelledby={`tab_${key}`}
            >
              <ul class="section__panel-list">
                <For each={TABS[key].items}>
                  {(item) => <Event {...item} />}
                </For>
              </ul>
            </div>
          )}
        </For>
        <Show when={hasRightScroll()}>
          <div class="section__arrow" onClick={onArrowCLick}></div>
        </Show>
      </div>
    </section>
  );
}
