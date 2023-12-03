import { LegacyRef, useEffect, useRef, useState } from "react";
import { ListBox } from "primereact/listbox";
import "./App.css";

import { Button } from "primereact/button";

const cities = [
  { name: "New York", code: "NY", idx: 0 },
  { name: "Rome", code: "RM", idx: 1 },
  { name: "London", code: "LDN", idx: 2 },
  { name: "Istanbul", code: "IST", idx: 3 },
  { name: "Paris", code: "PRS", idx: 4 },
  { name: "Foo", code: "FOO", idx: 5 },
  { name: "Var", code: "VAR", idx: 6 },
  { name: "Bar", code: "BAR", idx: 7 },
  { name: "Zi", code: "Zo", idx: 8 },
];

function valueIsIntersectingRange(
  value: number | undefined,
  rangeStart: number | undefined,
  rangeEnd: number | undefined
) {
  if (!value || !rangeEnd || !rangeStart) return false;
  return value > rangeStart && value < rangeEnd;
}

function App() {
  const [selectedCity, setSelectedCity] = useState<
    (typeof cities)[number] | null
  >(null);
  const ref = useRef<ListBox>(null!);

  function onButton() {
    if (!selectedCity) return;
    const scroller = ref.current.getVirtualScroller();
    const ele = ref.current.getElement();
    const containerEle = ele; // ele.querySelector("ul");
    const childEle = ele.querySelector(`li:nth-child(${selectedCity.idx + 1})`);
    // console.log(childEle);
    const container = containerEle?.getBoundingClientRect();
    const child = childEle?.getBoundingClientRect();
    if (!child || !containerEle) return;
    console.log("container", container);
    console.log("child", child);
    const childIsVisible =
      valueIsIntersectingRange(child.top, container.top, container.bottom) ||
      valueIsIntersectingRange(child.bottom, container.top, container.bottom);
    console.log("vivible: ", childIsVisible);
    if (!childIsVisible) {
      childEle?.scrollIntoView();
    }
    // if (!selectedCity) return;
    // console.log("scroll to " + JSON.stringify(selectedCity));
    // scroller.scrollToIndex(selectedCity.idx);
  }
  console.log("rendered");
  return (
    <>
      <Button onClick={onButton}>Scroll to selected</Button>
      <ListBox
        virtualScrollerOptions={{
          itemSize: 38,
          appendOnly: true,
        }}
        ref={ref}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        pt={{
          wrapper: { className: "vs-wrapper" },
          virtualScroller: { root: { className: "vs" } },
        }}
      />
    </>
  );
}

export default App;
