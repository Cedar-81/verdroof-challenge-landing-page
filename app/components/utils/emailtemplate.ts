export interface TemplateArgs {
  insta_link: string;
  twitter_link: string;
  linkedin_link: string;
  facebook_link: string;
  user_name: string;
  ref_link: string;
  roomie_link: string;
  planet_link: string;
  earn_link: string;
}

export const template = ({
  insta_link,
  twitter_link,
  linkedin_link,
  facebook_link,
  user_name,
  ref_link,
  roomie_link,
  planet_link,
  earn_link,
}: TemplateArgs) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Verdroof 20 days Challenge</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fszrfqmgzavpnfgcviev.supabase.co/storage/v1/object/public/verdroof_font_bucket/kenyan%20coffee%20bd.otf">
    <link rel="stylesheet" href="https://fszrfqmgzavpnfgcviev.supabase.co/storage/v1/object/public/verdroof_font_bucket/kenyan%20coffee%20rg.otf">
    
  <style>
    body {
      font-family: 'Montserrat', sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: rgb(32, 32, 32);
      color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h1 {
      color: #fff;
      font-family: 'kenyan coffee rg', sans-serif;
    }
    p {
      margin-bottom: 15px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    ul li {
      margin-bottom: 10px;
    }
    a {
      color: #FAA320;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .header {
      background-image: url('https://fszrfqmgzavpnfgcviev.supabase.co/storage/v1/object/public/verdroof_font_bucket/emailheader.png');
      background-size: cover;
      background-position: center;
      height: 200px;
      max-width: 600px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="header"></div>
  <div class="container">
    <h1>Welcome to the Verdroof 20 days Challenge</h1>
    <p>Hey ${user_name}! Welcome onboard!</p>
    <p>We're thrilled to have you join Verdroof. Here's your special referral link for our ongoing 20 days challenge: <a href=${ref_link}>${ref_link}</a>.</p>
    <p>Be sure to follow us on our social media handles:</p>
    <ul>
      <li><a href=${insta_link}>Instagram</a></li>
      <li><a href=${twitter_link}>Twitter</a></li>
      <li><a href=${facebook_link}>Facebook</a></li>
      <li><a href=${linkedin_link}>LinkedIn</a></li>
    </ul>
    <p>Looking for a roommate? <a href=${roomie_link}>Click here</a></p>
    <p>Wanna help save the planet? <a href=${planet_link}>Click here</a></p>
    <p>To earn extra with cash us <a href=${earn_link}>Click here</a></p>
  </div>
</body>
</html>


`;

export const templateText = ({
  insta_link,
  twitter_link,
  linkedin_link,
  facebook_link,
  user_name,
  ref_link,
  roomie_link,
  planet_link,
  earn_link,
}: TemplateArgs) => `
Welcome to the Verdroof 20 days Challenge

Hey ${user_name}! Welcome onboard!

We're thrilled to have you join Verdroof. Here's your special referral link for our ongoing 20 days challenge: ${ref_link}.

Be sure to follow us on our social media handles:

- Instagram: ${insta_link}
- Twitter: ${twitter_link}
- Facebook: ${facebook_link}
- LinkedIn: ${linkedin_link}

Looking for a roommate? Click here: ${roomie_link}

Wanna help save the planet? Click here: ${planet_link}

To earn extra cash with us, click here: ${earn_link}
`;
