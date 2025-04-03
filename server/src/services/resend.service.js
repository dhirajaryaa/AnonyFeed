import { Resend } from "resend";
import { RESEND_API_KEY } from "../config/env.js";
import VerifycationEmail from "../../emails/VerifycationEmail.jsx";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";

const resend = new Resend(RESEND_API_KEY);

export const sendVerifycationEmail = async (email, verifyCode, username) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "AnonyFeed Message | verification Code",
      react: VerifycationEmail({
        email,
        username,
        verificationCode: verifyCode,
      }),
    });
    if (error) {
      throw new ApiError(400, error.message);
    }
    return ApiResponse(200, "verification Email Send successfully", data);
  } catch (error) {
    console.error("verification Email fail to send =>", error);
    throw new ApiError(400, "Fail to send verification code");
  }
};
