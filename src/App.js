import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DomainCard from "./components/DomainCard/DomainCard";
import ToggleContainer from "./components/ToggleContainer/ToggleContainer";
export default function App() {
  const DummyData = [
    {
      domain: ".COM",
      price: "$15.99/yr",
      text: "Instead of 10.98$ p/y",
    },
    {
      domain: ".AL",
      price: "$55.99/yr",
      text: "Instead of 10.98$ p/y",
    },
    {
      domain: ".NET",
      price: "$7.99/yr",
      text: "Instead of 10.98$ p/y",
    },
    {
      domain: ".HEALTH",
      price: "$7.99/yr",
      text: "Instead of 10.98$ p/y",
    },
    {
      domain: ".CO.UK",
      price: "$3.99/yr",
      text: "Instead of 10.98$ p/y",
    },
    {
      domain: ".ORG",
      price: "$15.99/yr",
      text: "Instead of 10.98$ p/y",
    },
    {
      domain: ".CO",
      price: "$15.99/yr",
      text: "Instead of 10.98$ p/y",
    },
    {
      domain: ".SEA",
      price: "$15.99/yr",
      text: "Instead of 10.98$ p/y",
    },
  ];

  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Domains</Tab>
          <Tab>Web Hosting</Tab>
          <Tab>Virtual Cloud Services</Tab>
          <Tab>WordPress Hosting</Tab>
          <Tab>Email Hosting</Tab>
          <Tab>Vps Hosting Servers</Tab>
          <Tab>Free Hosting</Tab>
        </TabList>
      
        <TabPanel>
          <div className="gridContainer">
            {DummyData.map((data, index) => (
              <DomainCard key={index} {...data} />
            ))}
          </div>
          <ToggleContainer />
        </TabPanel>
              
        <TabPanel>
          <h1>Web Hosting</h1>
          <p>
            Web hosting is the foundation of the o nline world, where websites
            find their digital home. It's like renting space on the internet to
            store your website's files and make it accessible to users
            worldwide. Here's a quick breakdown:
          </p>
          <p>
            Storage Space: Web hosting provides storage for your website's
            files, such as HTML, images, and videos. Think of it as your
            website's digital storage locker. Bandwidth: Just like a highway,
            bandwidth determines how much traffic (visitors) your site can
            handle. More bandwidth means smoother user experiences. Server
            Types: Shared hosting, VPS (Virtual Private Server), and dedicated
            servers offer different levels of control and performance. Choose
            one that suits your website's needs. Uptime: A critical factor! It
            measures how often your website is online. The goal? 99.9% uptime to
            keep your site accessible to visitors. Security: Protecting your
            site from cyber threats is paramount. Most hosts offer security
            features, such as SSL certificates and firewalls. Support: Reliable
            customer support ensures you get assistance when issues arise,
            making your hosting experience stress-free. Cost: Web hosting costs
            vary, with options for every budget. Shared hosting is economical,
            while dedicated servers are pricier but offer more control.
          </p>
        </TabPanel>
        <TabPanel>
          <h1>Virtual Cloud Services</h1>
          <p>
            Virtual cloud services have revolutionized the way businesses and
            ndividuals manage and scale their IT infrastructure and
            applications. These services harness the potential of cloud com
            puting to provide flexibility, scalability, and cost-efficiency.
            Here's what you need to know:
          </p>
          <p>
            Virtual Cloud Services: Unleashing the Power of the Cloud Virtual
            cloud services have revolutionized the way businesses and
            individuals manage and scale their IT infrastructure and
            applications. These services harness the potential of cloud
            computing to provide flexibility, scalability, and cost-efficiency.
            Here's what you need to know: What Are Virtual Cloud Services?
            Virtual cloud services are a subset of cloud computing services that
            allow users to run virtualized instances of servers, storage, and
            networking resources on cloud platforms. These resources are hosted
            in data centers around the world and can be accessed and managed
            remotely via the internet. Key Benefits: Scalability: Virtual cloud
            services enable businesses to scale their resources up or down based
            on demand. This agility is crucial for handling fluctuating
            workloads. Cost-Efficiency: Pay-as-you-go pricing models mean users
            only pay for the resources they consume, reducing upfront capital
            expenditures. Global Accessibility: Virtual cloud services are
            accessible from anywhere with an internet connection, fostering
            remote work and global collaboration. Reliability: Cloud providers
            typically offer high levels of uptime, redundancy, and data backup,
            ensuring data integrity and availability. Security: Providers
            implement robust security measures to protect data and applications
            from cyber threats. Types of Virtual Cloud Services: Infrastructure
            as a Service (IaaS): Provides virtualized computing resources,
            including servers, storage, and networking. Users have control over
            the operating system and applications. Platform as a Service (PaaS):
            Offers a platform and environment for developing, testing, and
            deploying applications without worrying about underlying
            infrastructure. Software as a Service (SaaS): Delivers fully
            functional software applications over the internet on a subscription
            basis, eliminating the need for local installation and maintenance.
            Popular Cloud Providers: Amazon Web Services (AWS): Offers a vast
            array of cloud services, including computing power, storage,
            databases, and more. Microsoft Azure: Microsoft's cloud platform
            provides a wide range of services for building, deploying, and
            managing applications. Google Cloud Platform (GCP): Known for its
            data analytics and machine learning capabilities, GCP provides a
            comprehensive suite of cloud services. IBM Cloud: Offers hybrid and
            multi-cloud solutions with a focus on enterprise-grade security and
            AI-powered services. Use Cases: Web Hosting: Host websites and web
            applications in the cloud for reliability and scalability. Data
            Storage and Backup: Store, manage, and back up data securely in the
            cloud. Application Development: Create, test, and deploy
            applications without the need for on-premises infrastructure.
            Machine Learning and AI: Access powerful cloud-based tools and
            resources for data analysis and AI model training.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}
