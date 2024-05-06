export default function Email() {
  return (
    <div className="h-max max-w-[375px] relative">
      <img
        src="https://fszrfqmgzavpnfgcviev.supabase.co/storage/v1/object/public/verdroof_font_bucket/email_bkg.png"
        alt=""
        className="absolute top-0 right-0 z-10 h-full w-full object-cover"
      />
      <div className="absolute h-full w-full top-0 right-0 z-10 "></div>

      <div className="relative z-20 space-y-10 font-serenata pt-16 font-bold">
        <div className="flex flex-col px-8 justify-center space-y-6">
          <h1 className="font-kenyan font-light text-4xl text-center">
            Welcome to the Verdroof 20 days challenge
          </h1>
          <button className="px-4 py-2 bg-brand_primary">
            Here is you challenge link
          </button>
        </div>
        <div className="space-y-10 px-8 h-full py-8 ">
          <p className="seranta_bold text-sm">
            Hey [Name]! Welcome aboard! We're thrilled to have you join
            Verdroof. Here's your special referral link for the challenge:
            [Insert Referral Link].{" "}
            <a className="text-brand_secondary font-light">Know more.</a>
          </p>
          <div className="seranta_bold flex flex-col space-y-2 items-center">
            <ul className="flex space-x-4">
              <li>
                <svg
                  className="h-6"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0002 3.49316H20.0002C18.2321 3.49316 16.5364 4.19554 15.2861 5.44579C14.0359 6.69603 13.3335 8.39172 13.3335 10.1598V14.1598H9.3335V19.4932H13.3335V30.1598H18.6668V19.4932H22.6668L24.0002 14.1598H18.6668V10.1598C18.6668 9.80621 18.8073 9.46707 19.0574 9.21702C19.3074 8.96697 19.6465 8.8265 20.0002 8.8265H24.0002V3.49316Z"
                    stroke="#FAA320"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li>
                <svg
                  className="h-6"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6665 3.49316H9.33317C5.65127 3.49316 2.6665 6.47793 2.6665 10.1598V23.4932C2.6665 27.1751 5.65127 30.1598 9.33317 30.1598H22.6665C26.3484 30.1598 29.3332 27.1751 29.3332 23.4932V10.1598C29.3332 6.47793 26.3484 3.49316 22.6665 3.49316Z"
                    stroke="#FAA320"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.3331 15.9866C21.4977 17.0962 21.3081 18.2295 20.7915 19.2253C20.2748 20.221 19.4573 21.0285 18.4553 21.5328C17.4532 22.0372 16.3177 22.2127 15.2102 22.0345C14.1026 21.8563 13.0795 21.3334 12.2862 20.5401C11.493 19.7469 10.9701 18.7237 10.7919 17.6162C10.6136 16.5086 10.7892 15.3731 11.2935 14.3711C11.7979 13.369 12.6054 12.5516 13.6011 12.0349C14.5968 11.5182 15.7301 11.3287 16.8398 11.4932C17.9717 11.6611 19.0196 12.1885 19.8287 12.9976C20.6378 13.8068 21.1653 14.8547 21.3331 15.9866Z"
                    stroke="#FAA320"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.3335 9.49316H23.3424"
                    stroke="#FAA320"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li>
                <svg
                  className="h-6"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3332 6.15986C29.3332 6.15986 28.3998 8.95986 26.6665 10.6932C28.7998 24.0265 14.1332 33.7599 2.6665 26.1599C5.59984 26.2932 8.53317 25.3599 10.6665 23.4932C3.99984 21.4932 0.666504 13.6265 3.99984 7.49319C6.93317 10.9599 11.4665 12.9599 15.9998 12.8265C14.7998 7.22653 21.3332 4.02653 25.3332 7.75986C26.7998 7.75986 29.3332 6.15986 29.3332 6.15986Z"
                    stroke="#FAA320"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li>
                <svg
                  className="h-6"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3335 11.4932C23.4552 11.4932 25.4901 12.336 26.9904 13.8363C28.4906 15.3366 29.3335 17.3714 29.3335 19.4932V28.8265H24.0002V19.4932C24.0002 18.7859 23.7192 18.1076 23.2191 17.6075C22.719 17.1074 22.0407 16.8265 21.3335 16.8265C20.6263 16.8265 19.948 17.1074 19.4479 17.6075C18.9478 18.1076 18.6668 18.7859 18.6668 19.4932V28.8265H13.3335V19.4932C13.3335 17.3714 14.1764 15.3366 15.6766 13.8363C17.1769 12.336 19.2118 11.4932 21.3335 11.4932Z"
                    stroke="#FAA320"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99984 12.8262H2.6665V28.8262H7.99984V12.8262Z"
                    stroke="#FAA320"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33317 8.8265C6.80593 8.8265 7.99984 7.63259 7.99984 6.15983C7.99984 4.68707 6.80593 3.49316 5.33317 3.49316C3.86041 3.49316 2.6665 4.68707 2.6665 6.15983C2.6665 7.63259 3.86041 8.8265 5.33317 8.8265Z"
                    stroke="#FAA320"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
            </ul>
            <p className="text-xs">Be sure to follow us on all our socials</p>
          </div>
          <div className="flex flex-wrap justify-evenly gap-y-6">
            <div className="flex flex-col items-center">
              <p className="font-kenyan font-light text-center">
                Looking for a roomie?
              </p>
              <a className="text-sm font-light text-brand_secondary">
                click here
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-kenyan font-light">
                Wanna help save the planet?
              </p>
              <a className="text-sm font-light text-brand_secondary">
                click here
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-kenyan font-light">
                To earn extra cash with us
              </p>
              <a className="text-sm font-light text-brand_secondary">
                click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
