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

function App() {
  const [selectedCity, setSelectedCity] = useState<
    (typeof cities)[number] | null
  >(null);
  const ref = useRef<ListBox>(null!);

  function onButton() {
    const scroller = ref.current.getVirtualScroller();
    if (!selectedCity) return;
    console.log("scroll to " + JSON.stringify(selectedCity));
    scroller.scrollToIndex(selectedCity.idx);
    // also exist but no good
    // scroller.scrollInView(selectedCity.idx, "to-start");
  }
  console.log("rendered");
  return (
    <>
      <Button onClick={onButton}>Scroll to selected</Button>
      <ListBox
        virtualScrollerOptions={{
          itemSize: 38,
          delay: 1000,
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
