import RadioNavbar from "./components/RadioNavbar"

import "./reset.css"
import "./App.scss"

export function App(props: { children: JSX.Element; }) {
    return <>
      <RadioNavbar />
      {props.children}
    </>;
}
