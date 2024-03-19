import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 import train from '../images/the-train-app.png'
 import calc from '../images/calculator.png'
 import bank from '../images/hoobank.png'
 import hv from '../images/hackverse.png'
 import webce from '../images/webcentric.png'
export function CardD() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <Card className="mt-6 ml-14 w-96 px-2 py-1">
      <CardHeader color="blue-gray" className="relative h-56">
        <a href="https://your-train-react-app.vercel.app/"><img
          src={train}
          alt="card-image"          
        /></a>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          The Train App
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    <Card className="mt-6 ml-11 w-96 px-2 py-1">
      <CardHeader color="blue-gray" className="relative h-56">
        <a href="https://the-billing-system.vercel.app/"><img
          src={bank}
          alt="card-image"          
        /></a>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          The Train App
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    <Card className="mt-6 ml-8 w-96 px-2 py-1">
      <CardHeader color="blue-gray" className="relative h-56">
        <a href="https://hackathon.texus.io/"><img
          src={hv}
          alt="card-image"          
        /></a>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          The Train App
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    <Card className="mt-6 ml-14 w-96 px-2 py-1">
      <CardHeader color="blue-gray" className="relative h-56">
        <a href="https://priyanshudash589.github.io/ARITHEMATIC-CALCULATOR/"><img
          src={calc}
          alt="card-image"          
        /></a>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          The Train App
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    <Card className="mt-6 ml-11 w-96 px-2 py-1">
      <CardHeader color="blue-gray" className="relative h-56">
        <a href="https://priyanshudash589.github.io/WEBCENTRIC/"><img
          src={webce}
          alt="card-image"          
        /></a>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          The Train App
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    </div>
    
    </>
  );
}


