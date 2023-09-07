import { useFormik } from "formik";
import { formValidationScheme } from "../../validations/form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: formValidationScheme,
    onSubmit: async (values: any) => {
      await toast.success("E bültene başarılı bir şekilde kaydoldunuz!");
      navigate("/success");
    },
  });

  return (
    <div>
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <div className="mb-6 mt-6 flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email@company.com"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <button
            type="submit"
            className="text-white bg-slate-800 hover:bg-gradient-to-b hover:from-[#FF6A3A] hover:to-[#FF527B] focus:outline-none focus:ring-4 font-bold focus:ring-blue-300 rounded-md text-sm w-full p-2.5 mt-4 text-center mr-2 mb-2 h-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
