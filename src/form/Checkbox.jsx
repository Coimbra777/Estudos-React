import React from "react";

const Checkbox = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito todos os termos.
      </label>
    </form>
  );
};

export default Checkbox;