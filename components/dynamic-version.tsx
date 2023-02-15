import { useEffect, useRef } from "react";

interface Props {
  version: string;
  children: JSX.Element;
}

export function DynamicVersion(props: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  // Find the corresponding token from the DOM
  useEffect(() => {
    if (ref.current) {
      const token = [...ref.current.querySelectorAll("code span, p")].forEach(
        (el) => {
          if (!(el instanceof HTMLElement)) return;
          if (el.firstChild?.nodeType !== Node.TEXT_NODE) return;

          el.innerHTML = el.innerHTML.replace(/\$VERSION/g, props.version);
        }
      );
    }
  }, []);

  return (
    <div ref={ref} style={{ marginTop: "1.5rem" }}>
      {props.children}
    </div>
  );
}
