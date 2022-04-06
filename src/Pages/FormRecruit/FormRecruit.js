import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import styles from "./FormRecruit.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom"
import { RecruitContext } from "../../hook/ContextRecruit";
const steps = [
  {
    label: "Điền đầy đủ thông tin",
    name: "Họ và tên của bạn",
    applyfor: "Vị trí ứng tuyển",
    description: `Vui lòng nhập đầy đủ thông tin bên dưới`,
  },
  {
    label: "Upload",
    description: "Tải lên CV",
  },
  {
    label: "Xác nhận thông tin",
    description: `Xác nhận mọi thông tin bạn đưa ra là chính xác! Vui lòng kiểm tra kỹ email của bạn để nhận được cơ hội việc làm và tin tức mới nhất từ Diligo`,
  },
];

export default function FormRecruit() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const {
    register,
    handleSubmit,
    formState,
    getValues
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    const values = getValues()

    handleNext()
    const output = JSON.stringify(values)
    alert(output)
  };
  const id = useLocation().search.replace('?', '')
  const { data } = React.useContext(RecruitContext)
  const currentData = data.find(val => val.id === +id)
  let title
  let recruiter
  if (currentData) {
    title = currentData.name.name
    recruiter = currentData.phone_recruiter
    console.log(title+recruiter);
  }
  return (
    <>
      <Header />
      <Box
        sx={{ maxWidth: 600 }}
        className={styles.container + " " + styles.bordered}
      >
        <h5 className="my-3">
          Tên công việc: {title}
        </h5>
        <h5 className="my-3">
          Người phụ trách: {recruiter}
        </h5>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Bước cuối cùng</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {index === 0 ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" value={id} {...register("id", {
                      required: true,
                    })} />
                    <input type="text" style={{ display: 'none' }} value={title ? title : 'null'} {...register("jobName", {
                      required: true,
                    })} />
                    <label>Họ và Tên</label>
                    <input type="text"
                      {...register("name", {
                        required: true,
                        pattern: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i,
                      })}
                      placeholder="Nhập họ và tên"

                    />


                    <label>Số điện thoại</label>
                    <input type="phone"
                      {...register("phone", {
                        required: true,
                        pattern: /^(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                      })}
                      placeholder="Nhập số điện thoại"
                    />


                    <label>Email</label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      })}
                      placeholder="Nhập email"
                    />

                  </form>
                ) : index === 1 ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Tải lên CV của bạn (Tùy chọn)</label>
                    <input type="file" placeholder="Tải lên hồ sơ của bạn" />

                  </form>
                ) : null}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button type="submit"
                      variant="contained"
                      onClick={onSubmit}
                      sx={{ mt: 1, mr: 1 }}
                      disabled={
                        !formState.isDirty ||
                        (formState.isDirty && !formState.isValid)
                      }
                    >
                      {index === steps.length - 1
                        ? "Hoàn tất"
                        : index === 1 ? "Bỏ qua" : "Bước tiếp theo"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Quay lại
                    </Button>

                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>
              Cảm ơn bạn đã hoàn thành thông tin, ban tuyển dụng chúng tôi sẽ
              liên hệ với bạn!
            </Typography>
            <Link to="/">
              <Button sx={{ mt: 1, mr: 1 }}>
                Quay về trang chủ
              </Button>
            </Link>
          </Paper>
        )}
      </Box>
      <div className="mt-5 pt-5">
        <Footer />
      </div>
    </>
  );
}
