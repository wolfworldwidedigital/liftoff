import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    error:
      "We nemen het sterk op prijs dat je steeds terugkomt om nog eens te komen kijken, ook als er aanpassingen nodig zijn na deze sessie kan dat nog steeds gedaan worden, geen paniek.",
  });
  return res.end();
}
