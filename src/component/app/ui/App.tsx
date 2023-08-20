import "./App.scss";
import { FirstStageForm, Result, SecondStageForm } from "../..";
import useApp from "../hooks/useApp";
// import { Table } from "antd";

function App() {
  const {
    onFinishSecondForm,
    onFinishFirstForm,
    disableFirstForm,
    showResult,
    columns,
    dataSource,
    handleFileUpload,
    SecondForm,
    option,
    showSecondForm,
    firstForm,
    handleBackBtn,
    // data,
  } = useApp();
  return (
    <div className={`${!showResult ? "parent-container" : ""}`}>
      <div className="child-container">
        {showResult ? (
          <Result
            columns={columns}
            dataSource={dataSource}
            options={option}
            handleBackBtn={handleBackBtn}
          />
        ) : (
          <div className="form-container">
            <FirstStageForm
              form={firstForm}
              onFinish={onFinishFirstForm}
              disableFirstForm={disableFirstForm}
            />
            {showSecondForm && (
              <SecondStageForm
                onFinish={onFinishSecondForm}
                handleFileUpload={handleFileUpload}
                form={SecondForm}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
