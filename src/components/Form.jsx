import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { RxPerson } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { TbPassword } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { MdAlternateEmail } from "react-icons/md";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const res = await fetch("/api/csrf-token");
      const data = await res.json();
      setCsrfToken(data.csrfToken);
    };
    fetchCsrfToken();
  }, []);

  const onSubmit = async (data) => {
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": csrfToken,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      } else {
        toast.error("Something went wrong");
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res.ok) {
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div className="w-full h-lvh flex items-center justify-center">
      <div className="w-1/3 py-7 px-4 max-sm:w-5/6 max-lg:w-2/3 max-xl:w-1/2 flex flex-col items-center justify-center gap-6 bg-white rounded-3xl">
        <img src="" alt="logo" className="w-52 h-auto" />

        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {type === "register" && (
            <div>
              <div className="flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer shadow-2xl">
                <input
                  defaultValue=""
                  {...register("username", {
                    required: "Username is required",
                    validate: (value) => {
                      if (value.length < 3) {
                        return "Username must be at least 3 characters";
                      }
                    },
                  })}
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-[300px] max-sm:w-full bg-transparent outline-none"
                />
                <RxPerson className="text-azure-radiance-400 h-7 w-7" />
              </div>
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>
          )}
          <div>
            <div className="flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer shadow-2xl">
              <input
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                type="text"
                name="email"
                placeholder="Email"
                className="w-[300px] max-sm:w-full bg-transparent outline-none"
              />
              <MdAlternateEmail className="text-azure-radiance-400 h-7 w-7" />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer shadow-2xl">
              <input
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    if (
                      value.length < 5 ||
                      !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                    ) {
                      return "Password must be at least 5 characters and contain at least one special character";
                    }
                  },
                })}
                type="password"
                name="password"
                placeholder="Password"
                className="w-[300px] max-sm:w-full bg-transparent outline-none"
              />
              <TbPassword className="text-azure-radiance-400 h-7 w-7" />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input type="hidden" name="csrfToken" value={csrfToken} />
          <button
            className="w-full shadow-xl px-5 py-3 mt-5 mb-7 rounded-full cursor-pointer bg-azure-radiance-400 hover:bg-red-300 text-white"
            type="submit"
          >
            {type === "register" ? "Register" : "Let's chat"}
          </button>
        </form>

        {type === "register" ? (
          <Link
            href="/login"
            className="text-base text-gray-500 hover:text-red-300"
          >
            <p className="text-center">Already have an account ? Sign in</p>
          </Link>
        ) : (
          <Link
            href="/register"
            className="text-base text-gray-500 hover:text-red-300"
          >
            <p className="text-center">Don't have an account ? Sign up</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Form;
