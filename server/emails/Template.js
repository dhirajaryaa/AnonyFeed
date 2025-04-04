export const generateVerificationEmail = (username, verifyCode) => {
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
          margin-bottom: 30px;
        }
        .code-box {
          display: inline-block;
          padding: 12px 20px;
          background-color: #4F46E5;
          color: #fff;
          font-size: 20px;
          letter-spacing: 4px;
          border-radius: 6px;
          margin-bottom: 20px;
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
        <div class="message">Hi ${username || "there"},<br /><br />Thank you for signing up on <span class="brand">AnonyFeed</span>! Please use the verification code below to complete your registration:</div>
        <div class="code-box">${verifyCode}</div>
        <div class="message">If you didn’t request this code, you can safely ignore this email.</div>
        <div class="footer">— Team AnonyFeed</div>
      </div>
    </body>
    </html>
    `;
  };
  