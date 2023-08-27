import PropTypes from "prop-types";
import { useState } from "react";
import getConditionsOptions from "../utils/Conditions";

Query.propTypes = {
  fields: PropTypes.array,
};

export default function Query({ fields }) {
  const [conditionsOptions, setConditionsOptions] = useState([]);

  const handleFieldChange = (event) => {
    const selectedField = event.target.value;
    const selectedFieldInfo = fields.find(
      (field) => field.id === selectedField
    );

    console.log(selectedFieldInfo);

    const conditionsInfo = getConditionsOptions(selectedFieldInfo.type);

    console.log(conditionsInfo);

    const conditions = conditionsInfo.map((condition) => (
      <option key={condition.operator} value={condition.operator}>
        {condition.label}
      </option>
    ));
    setConditionsOptions(conditions);
  };

  const fieldsOptions = fields.map((field) => (
    <option key={field.id} value={field.id}>
      {field.label}
    </option>
  ));

  return (
    <>
      <select id="field-select" defaultValue="" onChange={handleFieldChange}>
        <option value="" disabled>
          Field
        </option>
        {fieldsOptions}
      </select>

      <select id="field-select" defaultValue="">
        <option value="" disabled>
          Condition
        </option>
        {conditionsOptions}
      </select>

      <select id="field-select" defaultValue="">
        <option value="" disabled>
          Value
        </option>
        {fieldsOptions}
      </select>
    </>
  );
}
