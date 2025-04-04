export const generateVerificationEmail = (username, verifyCode,baseUrl) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Verify your Email</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f7fa;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);
        text-align: center;
      }
      .header {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
      }
      .message {
        font-size: 16px;
        color: #555;
        margin-bottom: 20px;
        line-height: 1.6;
      }
      .code-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f3f4f6;
        color: #4F46E5;
        font-size: 26px;
        letter-spacing: 4px;
        font-weight: bold;
        border-radius: 8px;
        margin: 20px 0 10px;
        box-sizing: border-box;
      }
        .code{
        width: 100%;
        text-align: center;
        }
      .valid-note {
        font-size: 14px;
        color: #888;
        margin-bottom: 30px;
      }
      .button {
        display: inline-block;
        background-color: #4F46E5;
        text-decoration: none;
        padding: 14px 30px;
        border-radius: 6px;
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
        transition: background-color 0.3s ease;
      }
        .button:hover {
        background-color: #3730a3;
      }
      .footer {
        font-size: 14px;
        color: #888;
        margin-top: 30px;
      }
      .brand {
        font-weight: bold;
        color: #4F46E5;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Verify Your Email</div>
      <div class="message">
        Hi ${username || "there"},<br /><br />
        Thank you for signing up on <span class="brand">AnonyFeed</span>! Please use the verification code below to complete your registration:
      </div>

      <div class="code-box">
      <div class="code">${verifyCode}</div>
      </div>
      <div class="valid-note">This code is valid for only 10 minutes.</div>

      <div class="message">Or simply click the button below to verify:</div>
      <a href="${baseUrl}/verify?user=${username}&code=${verifyCode}" class="button" style=" color: #ffffff">Verify Now</a>

      <div class="message">If you didn’t request this code, you can safely ignore this email.</div>
      <div class="footer">— Team AnonyFeed</div>
    </div>
  </body>
  </html>
  `;
};
