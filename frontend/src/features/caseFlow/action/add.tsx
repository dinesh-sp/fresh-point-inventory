import { CusForm } from "../../../components/common/Layout";

export const GenForm = () => {
  return (
    <>
      <CusForm
        action={{
          Cancle: () => {},
          Reset: () => {},
          Submit: () => {}, // handleSubmit(onSubmit),
          Close: () => {}, //  _handleClose,
        }}
        submitting={false}
        title=" Today Cash Flow"
        description="Daily Transaction"
      >
        <>
        
        </>
      </CusForm>
    </>
  );
};
