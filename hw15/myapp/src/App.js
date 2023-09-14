import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./App.css";

function App() {
  const [tableData, setTableData] = useState([]);
  const { handleSubmit, control, reset } = useForm();
  // const [imageCard, setImageCard] = useState("./images/cards.png")

  const onSubmit = (data) => {
    setTableData([...tableData, data]);
    reset();
  };

  // if (data.number[0] == 4){
  //   setImageCard("./images/visa.png")
  // }else if (data.number[0] == 5){
  //  setImageCard("./images/mastercard.png")
  // }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content">
          <div className="card-content">
            <div className="credit-card">
             
                <div className="form-item">
                  <label htmlFor="holder"></label>
                  <Controller
                    name="holder"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Required",
                      pattern: {
                        value: /^[A-Za-z]+\s[A-Za-z]+$/,
                        message: "Invalid name",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <>
                        <input
                          type="text"
                          {...field}
                          placeholder="Holder of card"
                          className={fieldState.invalid ? "has-error" : ""}
                        />
                        {fieldState.error && (
                          <p className="alert alert--error">
                            {fieldState.error.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="number"></label>
                  <Controller
                    name="number"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Required",
                      pattern: {
                        value: /^[0-9]{16}$/,
                        message: "Invalid card number",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <>
                        <input
                          type="text"
                          {...field}
                          placeholder="Number of card"
                          className={fieldState.invalid ? "has-error" : ""}
                        />
                        {fieldState.error && (
                          <p className="alert alert--error">
                            {fieldState.error.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
 <div className="card-bottom">
                
                  <div className="form-item form-date">
                    <label htmlFor="expiryMM"></label>
                    <Controller
                      name="expiryMM"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Required",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])$/,
                          message: "Invalid",
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <>
                          <input
                            type="text"
                            {...field}
                            placeholder="MM"
                            className={fieldState.invalid ? "has-error" : ""}
                          />
                          {fieldState.error && (
                            <p className="alert alert--error">
                              {fieldState.error.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  <span className="slash">/</span>

                  <div className="form-item form-date">
                    <label htmlFor="expiryYY"></label>
                    <Controller
                      name="expiryYY"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Required",
                        validate: (value) => {
                          const currentYear = new Date().getFullYear() % 100;
                          const enteredYear = parseInt(value, 10);

                          if (isNaN(enteredYear)) {
                            return "Invalid";
                          }

                          if (enteredYear < currentYear) {
                            return "Invalid";
                          }

                          return true;
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <>
                          <input
                            type="text"
                            {...field}
                            placeholder="YY"
                            className={fieldState.invalid ? "has-error" : ""}
                          />
                          {fieldState.error && (
                            <p className="alert alert--error">
                              {fieldState.error.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                

                <div className="card-images">
                  {/* <img src={imageCard} alt="Cards" /> */}
                  <img src="./images/cards.png" alt="Cards" />
                </div>
              </div>

            </div>
            <div className="card-back">
            <div className="card-line"></div>
              <div className="form-item">
                <label htmlFor="cvc"></label>
                <Controller
                  name="cvc"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Required",
                    pattern: {
                      value: /^[0-9]{3}$/,
                      message: "Invalid",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                    
                      <input
                        type="password"
                        {...field}
                        placeholder="CVC"
                        maxLength={3}
                        className={`${"cvc-input"} ${fieldState.invalid ? "has-error" : ""}`}
                      />
                      {fieldState.error && (
                        <p className="alert alert--error">
                          {fieldState.error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="logo-content">
            <img src="./images/Logo.png" alt="Logo" />
          </div>
        </div>

        <button type="submit" className="send-button">
          Send
        </button>
      </form>

      <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>CARD NUMBER</th>
            <th>DATE EXPIRE</th>
            <th>CODE</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.holder}</td>
              <td>{data.number}</td>
              <td>{`${data.expiryMM}/${data.expiryYY}`}</td>
              <td>{data.cvc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
