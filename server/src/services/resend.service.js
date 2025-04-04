import { Resend } from "resend";
import { RESEND_API_KEY } from "../config/env.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import {generateVerificationEmail as emailTemplate} from "../../emails/Template.js";

const resend = new Resend(RESEND_API_KEY);

export const sendVerifycationEmail = async (email, verifyCode, username) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "AnonyFeed <onboarding@resend.dev>",
      to: email,
      subject: "AnonyFeed Message | Verification Code",
      html: emailTemplate(username,verifyCode),
    });
    if (error) {
      throw new ApiError(400, error.message);
    }
    return new ApiResponse(200, "verification Email Send successfully", data);
  } catch (error) {
    console.error("verification Email fail to send =>", error);
    throw new ApiError(400, "Fail to send verification code");
  }
};
