import Card from "@/components/elements/Card";
import Container from "@/components/elements/Container";
import RegisterModal from "@/components/RegisterModal";
import Image from "next/image";
import { FiAward, FiInfo } from "react-icons/fi";

export default function HomePage() {
  return (
    <main className="space-y-16">
      <Container className="">
        <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start">
          <Image
            src="/hero-image.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-xl object-cover w flex-1"
          />
          <div className="space-y-3 flex-1 md:mt-10">
            <h3 className="font-bold text-3xl md:text-5xl text-rose-800">
              Welcome to UPHORIA
            </h3>
            <div className="space-y-3">
              <p>
                The platform that&apos;s redefining financial freedom with
                AI-powered tools, and skill-building opportunities. Ready to
                dive into financial knowledge and expertise & control your
                future? Dive into UPHORIA, where opportunity awaits!
              </p>
              <div className="flex flex-wrap gap-3 w-1/2">
                <RegisterModal showButton />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="space-y-5">
        <Card className="flex items-center gap-3 mx-auto !px-4 py-2 w-max">
          <FiInfo /> About Us
        </Card>
        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <Card className="space-y-4 order-2 lg:order-1">
            <p>
              <span className="text-rose-900">UPHORIA</span> is gotten from the
              word EUPHORIA which denote a feeling of intense joy, excitement,
              and satisfaction. It&apos;s that exhilarating rush when things are
              going perfectly, and you're experiencing a peak moment. Often,
              euphoria is associated with feelings of triumph, discovery, or
              profound happiness.
            </p>
            <p>
              With our well crafted creative features, and innovative integral
              structure! <span className="text-rose-900">UPHORIA</span> will
              Uphold your happiness through Artificial Intelligence, Expertise
              and Financial Knowledge!
            </p>
            <p>
              This is more than just a project; it&apos;s a movement toward
              financial freedom, powered by advanced AI and designed to elevate
              your journey.
            </p>
            <RegisterModal showButton buttonText="Click Here to Register" />
          </Card>
          <Image
            src="/about-image.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-3xl order-1 lg:order-2 object-contain flex-1"
          />
        </div>
      </Container>

      <Container className="space-y-5">
        <Card className="flex items-center gap-3 mx-auto !px-4 py-2 w-max ">
          <FiInfo /> Features
        </Card>
        <Image
          src="/features-image.jpg"
          alt="hero-image"
          width={500}
          height={500}
          className="rounded-3xl order-1 lg:order-2 object-contain flex-1 mx-auto"
        />
      </Container>

      <Container className="space-y-5">
        <Card className="flex items-center gap-3 mx-auto !px-4 py-2 w-max">
          <FiAward /> We Are Registered
        </Card>
        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <div className="flex-1 w-full">
            <Image
              src="/cac-image.jpg"
              alt="hero-image"
              width={500}
              height={500}
              className="rounded-3xl object-contain "
            />
          </div>
          <Card className="space-y-4 flex-1">
            <h3 className="font-bold text-4xl  text-rose-800">
              We Are Duly Registered!
            </h3>
            <p>
              Officially{" "}
              <span className="text-rose-900 font-bold">
                Registered and Ready
              </span>{" "}
              to Empower! Your trusted platform for growth, opportunity, and
              innovation; fully certified and here to stay!
            </p>
            <p>
              Join a community that&apos;s backed by legitimacy and trusted by
              thousands. Elevate with confidence!
            </p>
            <p>
              Our commitment to legitimacy and excellence is why so many trust
              us. Join the community that&apos;s paving the way for a secure,
              innovative future!
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
