import { clsx } from "clsx";
import { css } from "goober";
import { flushSync } from "react-dom";
import { create } from "zustand";

const useStore = create<{ left: boolean; toggle: () => void }>((set) => ({
  left: true,
  toggle: () => {
    set((state) => ({ left: !state.left }));
  },
}));

function App() {
  //const [left, setLeft] = useState(true);
  const { left, toggle } = useStore();

  const onMove = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        toggle();
        //setLeft((prev) => !prev);
      });
    });
  };

  return (
    <>
      <button onClick={onMove}>move</button>
      <span
        style={{ position: "fixed", top: "50vh", viewTransitionName: "moin" }}
        className={clsx({ [leftCls]: left, [rightCls]: !left })}
      >
        Moin
      </span>
    </>
  );
}

export default App;

const leftCls = css({ left: 0 });
const rightCls = css({ right: 0 });
