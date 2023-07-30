import SettingsSwitcher from "./SettingsSwitcher";
import styles from "../SettingsList/SettingsList.module.scss";

const SettingsList = function () {
  return (
    <ul className={styles.list}>
      <li>
        <span className={styles.label}>Тема</span>
        {/* <div></div> */}
        <SettingsSwitcher
          textArray={[
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g clipPath="url(#clip0_48_1565)">
                <rect
                  width="44"
                  height="44"
                  rx="27"
                  fill="url(#paint0_linear_48_1565)"
                />
                <path
                  d="M27 54C41.9117 54 54 41.9117 54 27H0C0 41.9117 12.0883 54 27 54Z"
                  fill="url(#paint1_linear_48_1565)"
                />
                <path
                  opacity="0.4"
                  d="M40.1786 28.2857C43.6535 28.2818 66.8571 27 66.8571 27H12.8571C12.8571 27 29.4971 28.2978 40.1786 28.2857Z"
                  fill="url(#paint2_linear_48_1565)"
                />
                <path
                  opacity="0.4"
                  d="M41.7857 39.6001C48.4743 40.1132 60.2592 38.2668 63.0593 35.8976C63.0593 35.8976 48.528 38.3757 43.4062 38.2643C27.9643 37.9286 9.65618 31.5143 9.65618 31.5143C8.37047 31.5143 24.5598 38.2785 41.7857 39.6001Z"
                  fill="url(#paint3_linear_48_1565)"
                />
                <path
                  opacity="0.4"
                  d="M33.6849 30.1556C21.3298 31.8577 7.82753 29.3985 9.58962 28.8901C9.58962 28.8901 23.345 30.0299 33.6849 30.1556Z"
                  fill="url(#paint4_linear_48_1565)"
                />
                <path
                  opacity="0.4"
                  d="M47.2567 32.2678C50.1429 34.3929 24.75 33.4286 28.9286 33.1072C33.1071 32.7857 42.75 33.5305 47.2567 32.2678Z"
                  fill="url(#paint5_linear_48_1565)"
                />
                <path
                  d="M54.0886 47.7327C49.8534 57.1038 37.7284 64.4351 26.7763 64.4351C19.085 64.4351 10.0147 60.8258 3.8116 55.4278C2.44585 54.2393 0.919025 51.9029 -0.152336 49.7677C-1.18347 47.7126 -1.02689 42.2074 -0.269661 41.5667C2.53044 39.1975 8.078 38.7722 14.7666 39.2853C31.9925 40.6069 39.5231 47.5973 54.0886 47.5973V47.7327Z"
                  fill="url(#paint6_linear_48_1565)"
                />
                <path
                  opacity="0.45"
                  d="M53.1745 49.5166C53.5103 48.9314 53.8158 48.3363 54.0886 47.7327V47.5973C46.6243 47.5973 41.0074 45.7615 34.9865 43.7935C29.2585 41.9214 23.1647 39.9297 14.7666 39.2853C8.07799 38.7722 2.53043 39.1975 -0.269669 41.5667V42.8524C2.53043 40.4832 8.07799 40.0579 14.7666 40.5711C23.1647 41.2154 29.2585 43.8499 34.9865 45.7221C40.7592 47.6089 46.1604 49.3742 53.1745 49.5166Z"
                  fill="url(#paint7_linear_48_1565)"
                />
                <path
                  d="M48.4426 47.2821C46.0073 59.4474 33.7439 70.7131 20.8695 73.6854C11.8282 75.7727 0.186429 71.4201 -8.57031 66.7581C-10.4983 65.7317 -12.9272 63.3996 -14.7661 61.1803C-16.5359 59.0444 -16.5668 54.623 -15.8506 53.6644C-13.202 50.1194 -8.07526 46.0214 -0.07347 44.8094C20.5345 41.688 25.0714 51.75 48.4059 47.1229L48.4426 47.2821Z"
                  fill="url(#paint8_linear_48_1565)"
                />
                <path
                  d="M2.25 42.4286L7.71428 37.2858H0.321426L2.25 42.4286Z"
                  fill="#150529"
                  fillOpacity="0.5"
                />
                <path
                  d="M63.9643 21.2143C62.1179 21.2143 61.0714 20.25 58.8214 20.25C57.6727 20.25 66.2143 23.0413 63.9643 24.1071C61.8761 24.8616 51.75 24.2087 47.5714 24.1071C43.3929 24.0056 39.8571 27 39.8571 27L58.5 27.3215L57.8571 27.9643L72.9643 28.6072V18.0001C72.9643 18.0001 70.3929 16.2054 68.7857 17.6786C66.6818 19.6071 65.8106 21.2143 63.9643 21.2143Z"
                  fill="#1F1332"
                />
                <path
                  d="M-9 21.2143C-7.15367 21.2143 -6.10714 20.25 -3.85714 20.25C-2.70846 20.25 -0.642857 23.1429 1.60714 24.2087C3.69532 24.9631 6.08648 24.1071 7.39286 24.1071C8.67857 24.1071 15.1071 27 15.1071 27L-3.53571 27.3215L-2.89286 27.9643L-18 28.6072V18.0001C-18 18.0001 -15.4286 16.2054 -13.8214 17.6786C-11.7175 19.6071 -10.8463 21.2143 -9 21.2143Z"
                  fill="#1F1332"
                />
                <path
                  d="M2.25 34.5214V32.4642L0 34.0714V37.9285H3.85714L4.17857 35.6785L2.25 34.5214Z"
                  fill="url(#paint9_linear_48_1565)"
                />
                <path
                  d="M2.25 34.5728V32.4642L6.75 34.0714L7.71429 37.2857L3.85714 37.9285L4.17857 35.6785L2.25 34.5728Z"
                  fill="url(#paint10_linear_48_1565)"
                />
                <circle cx="32.1429" cy="13.5" r="4.5" fill="#FEFFCA" />
                <circle cx="45.9643" cy="11.25" r="0.321429" fill="#FEFFCF" />
                <circle cx="20.8929" cy="3.53566" r="0.321429" fill="#FEFFCF" />
                <circle cx="15.75" cy="13.1786" r="0.321429" fill="#FEFFCF" />
                <circle cx="9.96428" cy="8.67861" r="0.321429" fill="#FEFFCF" />
                <circle cx="38.8929" cy="6.75002" r="0.321429" fill="#FEFFCF" />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_48_1565"
                  x1="3.21428"
                  y1="-6.42857"
                  x2="4.5"
                  y2="61.7143"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.210553" stopColor="#1B0E35" />
                  <stop offset="0.378499" stopColor="#311D82" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_48_1565"
                  x1="27"
                  y1="27"
                  x2="26.0357"
                  y2="68.4643"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#470C92" />
                  <stop offset="0.397692" stopColor="#3A16A3" />
                  <stop offset="0.896307" stopColor="#140835" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_48_1565"
                  x1="14.7857"
                  y1="28.6071"
                  x2="28.0692"
                  y2="41.192"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FEFFCA" />
                  <stop
                    offset="0.527742"
                    stopColor="#FEFFCA"
                    stopOpacity="0.17"
                  />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_48_1565"
                  x1="35.3571"
                  y1="39.2143"
                  x2="8.17792"
                  y2="29.4263"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ED82FF" />
                  <stop offset="1" stopColor="#FEFFCA" stopOpacity="0.46" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_48_1565"
                  x1="16.0714"
                  y1="31.1786"
                  x2="27.9643"
                  y2="26.6786"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ED82FF" />
                  <stop offset="1" stopColor="#FEFFCA" stopOpacity="0.46" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_48_1565"
                  x1="33.8607"
                  y1="34.8013"
                  x2="43.0253"
                  y2="30.7207"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ED82FF" />
                  <stop offset="1" stopColor="#FEFFCA" stopOpacity="0.46" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_48_1565"
                  x1="50.1429"
                  y1="54.3214"
                  x2="-1.00878"
                  y2="40.35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.441667" stopColor="#120534" />
                  <stop offset="0.915688" stopColor="#391468" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_48_1565"
                  x1="45"
                  y1="49.5"
                  x2="8.67858"
                  y2="39.2143"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.320459"
                    stopColor="white"
                    stopOpacity="0.1"
                  />
                  <stop
                    offset="0.969904"
                    stopColor="#FEFFCA"
                    stopOpacity="0.5"
                  />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_48_1565"
                  x1="44.6861"
                  y1="54.4528"
                  x2="-18.0374"
                  y2="53.4123"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0A0221" />
                  <stop offset="0.660468" stopColor="#2A1563" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_48_1565"
                  x1="1.44643"
                  y1="32.4642"
                  x2="1.28571"
                  y2="41.1428"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#09000E" />
                  <stop offset="1" stopColor="#380156" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_48_1565"
                  x1="1.28571"
                  y1="36.6428"
                  x2="9.64286"
                  y2="30.8571"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.264182" stopColor="#361E7C" />
                  <stop
                    offset="0.895833"
                    stopColor="#FEFFCA"
                    stopOpacity="0.5"
                  />
                </linearGradient>
                <clipPath id="clip0_48_1565">
                  <rect width="44" height="44" rx="27" fill="white" />
                </clipPath>
              </defs>
            </svg>,
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g clipPath="url(#clip0_48_1560)">
                <rect
                  width="44"
                  height="44"
                  rx="27"
                  fill="url(#paint0_linear_48_1560)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.3344 31.1822C58.3344 31.1822 50.6767 26.3344 44.8928 26.3344C37.2419 26.3344 32.1265 32.946 25.9377 32.946C18.7249 32.946 17.8173 31.0354 13.7726 31.0354C8.05609 31.0354 0.511196 34.6179 -3.4678 33.3249C-6.67877 32.2815 -10.5444 30.1741 -10.5444 30.1741V47.8702L58.3344 48.9338V31.1822Z"
                  fill="url(#paint1_linear_48_1560)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-9.40916 43.0053C-9.40916 43.0053 -9.05997 31.8721 -1.14397 30.1313C5.77715 29.096 11.1132 37.1312 17.302 37.1312C24.5148 37.1312 27.914 32.468 34.9169 32.468C40.0245 32.468 45.0119 36.5222 51.9673 35.1169C67.4161 31.9954 59.4697 31.4599 59.4697 31.4599V49.156L-9.40916 50.2196V43.0053Z"
                  fill="url(#paint2_linear_48_1560)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-1.97298 43.7164C-1.97298 43.7164 1.35001 39.2504 3.95788 38.8007C6.56575 38.3511 8.00912 42.7046 8.00912 42.7046C8.00912 42.7046 9.23011 42.5141 9.89329 42.7046C10.5565 42.8951 11.0816 43.7164 11.0816 43.7164C11.0816 43.7164 11.9263 41.093 15.4337 41.093C18.9411 41.093 20.723 44.6371 20.723 44.6371C20.723 44.6371 21.8905 43.7164 23.1063 43.7164C24.3221 43.7164 25.6983 44.6371 25.6983 44.6371C25.6983 44.6371 26.5572 41.093 30.181 41.093C33.8048 41.093 35.3506 44.1007 35.3506 44.1007C35.3506 44.1007 36.8148 43.1768 38.2374 43.1768C39.6601 43.1768 41.3578 44.1007 41.3578 44.1007C41.3578 44.1007 41.8342 41.1827 43.9534 39.4629C46.0726 37.743 50.6866 38.8007 50.6866 38.8007L53.2105 40.1293V54H-1.97298V43.7164Z"
                  fill="url(#paint3_linear_48_1560)"
                />
                <circle cx="33.4286" cy="12.8572" r="4.5" fill="#FEFFCA" />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_48_1560"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A2E9FF" />
                  <stop offset="0.552083" stopColor="#DDFDFF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_48_1560"
                  x1="58.3344"
                  y1="26.3344"
                  x2="58.3344"
                  y2="48.9338"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AAF3FA" />
                  <stop offset="1" stopColor="#D5FAFD" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_48_1560"
                  x1="-9.40916"
                  y1="30.0392"
                  x2="-9.40916"
                  y2="50.2196"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7EDEE7" />
                  <stop offset="1" stopColor="#B5F1F5" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_48_1560"
                  x1="-1.97298"
                  y1="38.3979"
                  x2="-1.97298"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4297A8" />
                  <stop offset="1" stopColor="#77C8D3" />
                </linearGradient>
                <clipPath id="clip0_48_1560">
                  <rect width="44" height="44" rx="27" fill="white" />
                </clipPath>
              </defs>
            </svg>,
          ]}
        />
      </li>
    </ul>
  );
};

export default SettingsList;
