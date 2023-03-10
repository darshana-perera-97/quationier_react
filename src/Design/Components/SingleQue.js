import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { dataStore } from "../Data/DataHandle";

export default function SingleQue(prop) {
  // console.log(prop.marks);
  const [selection, setSelection] = React.useState("");
  return (
    <div>
      <h2 className="quastion">{prop.val.que}</h2>
      <div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={""}
            name="radio-buttons-group"
            onChange={(e) => {
              setSelection(e.target.value);
            }}
          >
            {prop.val.ans.map((val, key) => {
              return (
                <FormControlLabel
                  value={val.a}
                  onClick={() => {
                    prop.setMarks(prop.marks + val.c);
                  }}
                  control={<Radio />}
                  label={val.a}
                  key={key}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
      {selection ? (
        <button
          className="button_2"
          onClick={() => {
            prop.setMarks(prop.marks);
            setSelection("");
            prop.set(prop.num + 1);
            const tmp = prop.userData;
            tmp.answers[prop.num] = selection;
            tmp.answers[prop.total_mark] = prop.marks;
            prop.setUserData(tmp);
            // console.log(tmp);
            dataStore(tmp);
          }}
        >
          Continue
        </button>
      ) : (
        <button className="button_3" disabled title="Select to Continue">
          Continue
        </button>
      )}
    </div>
  );
}
