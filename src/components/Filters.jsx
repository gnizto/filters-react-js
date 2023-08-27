import Query from "./Query";
import { fields } from "../assets/sourceSchema.json";

export default function Filters() {
  return (
    <>
      <Query fields={fields} />
    </>
  );
}
