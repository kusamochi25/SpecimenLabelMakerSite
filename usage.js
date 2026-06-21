const tabs = Array.from(document.querySelectorAll("[data-plan]"));
const panels = Array.from(document.querySelectorAll("[data-plan-panel]"));

function selectPlan(plan, updateUrl = true) {
  if (!tabs.some((tab) => tab.dataset.plan === plan)) return;

  tabs.forEach((tab) => {
    const selected = tab.dataset.plan === plan;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.planPanel !== plan;
  });

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("plan", plan);
    window.history.replaceState({}, "", url);
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectPlan(tab.dataset.plan));
  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    selectPlan(tabs[nextIndex].dataset.plan);
    tabs[nextIndex].focus();
  });
});

const requestedPlan = new URL(window.location.href).searchParams.get("plan");
selectPlan(requestedPlan === "premium" ? "premium" : "free", false);
