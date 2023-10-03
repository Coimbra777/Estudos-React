import React from "react";

const Checkbox = ({ options, value, setValue, ...props }) => {
  const [checkbox, setCheckbox] = React.useState(false);

  function handleChange({ target }) {
    setCheckbox(target.checked);
    // console.log(checkbox);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={checkbox}
          onChange={handleChange}
        />
        Li os termos.
      </label>
    </form>
  );
};

export default Checkbox;
