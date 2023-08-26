import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
require("moment/locale/tr");
interface IProps {
  data: IData;
}

type IData = {
  username: string;
  fname: string;
  lname: string;
  birthdate: string;
};

const HDHeader = ({ data }: IProps) => {
  const { username, fname, lname, birthdate } = data;
  const [ageState, setAgeState] = useState<Moment>();
  const [hi, setHi] = useState<string>("selam!");
  useEffect(() => {
    const bd = moment(birthdate, "DD-MM-YYYY");
    setAgeState(bd);
  }, [birthdate]);

  const handleHi = () => {
    setHi(`Selamlar, ${username}`);
  };
  return (
    <div>
      HDHeader {username} <br /> {fname} <br /> {lname} <br />{" "}
      {ageState?.format("LLLL")}
      <br />
      {birthdate}
      <br />
      <button type="button" onClick={handleHi}>
        Selamla
      </button>
      <br />
      {hi}
    </div>
  );
};

export default HDHeader;
