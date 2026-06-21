const topicTabs = Array.from(document.querySelectorAll("[data-topic]"));
const topicPanels = Array.from(document.querySelectorAll("[data-topic-panel]"));

function selectTopic(topic, updateUrl = true) {
  if (!topicTabs.some((tab) => tab.dataset.topic === topic)) return;

  topicTabs.forEach((tab) => {
    const selected = tab.dataset.topic === topic;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  topicPanels.forEach((panel) => {
    panel.hidden = panel.dataset.topicPanel !== topic;
  });

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("topic", topic);
    window.history.replaceState({}, "", url);
  }
}

topicTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTopic(tab.dataset.topic));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + topicTabs.length) % topicTabs.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % topicTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = topicTabs.length - 1;
    selectTopic(topicTabs[nextIndex].dataset.topic);
    topicTabs[nextIndex].focus();
  });
});

const requestedTopic = new URL(window.location.href).searchParams.get("topic");
const initialTopic = topicTabs.some((tab) => tab.dataset.topic === requestedTopic) ? requestedTopic : "pdf";
selectTopic(initialTopic, false);
