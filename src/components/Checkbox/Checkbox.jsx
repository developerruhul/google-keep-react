import React from "react";
// import './style/checkbox.css';
import { Checkbox as MCheckBox } from "@material-ui/core";

export default function Checkbox({ id, onChange, checked = false, ...o }) {
  return (
    <div className="o-samsung-checkbox">
      <MCheckBox
        onChange={e => onChange(id, e)}
        type="checkbox"
        checked={checked}
      />
      {/* <label
                className="c-samsung-checkbox"
                htmlFor={id}>
            </label> */}
    </div>
  );
}
