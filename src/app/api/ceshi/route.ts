import {demo} from "@/servers/Tool";

export async function POST(req: Request, res: Response) {
    
  const result = await demo();
  return Response.json(result);
}
