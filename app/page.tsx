"use client"
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import customizableImg from "../public/alert.jpg"
import { FileText, CreditCard, BarChart, Clock, CheckCircle, Mail, Phone } from "lucide-react"
import simple from "../public/simplicity.jpg"
import reports from "../public/customizable.jpg"
import coffee from "../public/coff.jpg"
interface data {
  companyTitle: string,
  customerTitle: string,
  product: string,
}
import Image from "next/image";
import Nav from "./components/Nav";
import { Button } from "@/components/ui/button";
import FadeInSection from "./components/FadeInSection";

// const colors = [ "#1E67C6", "#4D85B1"];

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('/api/data');

  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }

  //       const data = await res.json();
  //       console.log(data);
  //       // setData(data);
  //     } catch (error) {
  //       // setError(error.message);
  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <main>
      <Nav />
      <motion.div style={{}} className="relative min-h-screen flex flex-col items-center">
        <motion.section className="md:hidden">
          <Image src={customizableImg} alt="image" priority className="top-0 object-center w-full h-full"/>
          <div className="p-4 border-b grid gap-y-4 mt-6 shadow-lg ">
              <p className="font-semibold text-4xl">Streamline your invoicing</p>
              <p className="text-sm max-w-[30rem]">Create, customize, and send professional invoices in minutes. Perfect for freelancers and small businesses.</p>
              <Button variant={"invoicer"} className="flex gap-2 max-w-max">
                <Link href="/generateinvoice" className=" p-2 text-white font-semibold">Create invoice</Link>
              </Button>
          </div>
        </motion.section>
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{ ease: 'easeInOut', duration: 1.0}} className="h-[65vh] hidden md:flex overflow-hidden w-full justify-between relative">
          <div className="w-full">
            <div className="max-w-[98rem] my-auto mx-auto z-10 h-full flex flex-col justify-center gap-y-4 ">
              <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{ ease: 'easeInOut', duration: 1.5}} className="max-w-fit backdrop-blur-lg grid gap-y-4 p-12 rounded-2xl">
                <p className="font-semibold text-4xl text-main">Streamline your invoicing</p>
                <p className="text-md max-w-[30rem] text-muted">Create, customize, and send professional invoices in minutes. Perfect for freelancers and small businesses.</p>
                <div className="flex gap-2">
                  <Link href="/generateinvoice" className="bg-[#0067B8] p-2 text-white font-semibold">Create invoice</Link>
                </div>
              </motion.div>
            </div>
            <Image src={customizableImg} alt="image" priority className="absolute object-cover top-0 object-center w-full h-full -z-10"/>
          </div>
        </motion.section>
        <FadeInSection>
          <section id="features" className="w-full py-12 md:py-24 lg:py-28">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block bg-main px-3 py-1 text-sm text-primary-foreground">
                    Features
                  </div>
                  <h2 className="text-3xl  font-bold tracking-tighter md:text-4xl">
                    Everything You Need to Bill Like a Pro
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground  md:text-xl">
                    Our invoice generator comes packed with all the features you need to create professional invoices,
                    track payments, and grow your business.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-6">
                <div className="grid place-content-end w-full text-center lg:col-span-2 shadow-xl relative h-[30rem]">
                  <Image src={coffee} alt="coffee" className="w-full h-full object-cover object-center -z-10 absolute"/>
                  <div className="text-white p-4 font-bold">
                    <h3 className="text-4xl mb-4 text-center">Mobile Friendly</h3>
                    <p className="text-center">
                      Create and send invoices from anywhere using our mobile-friendly interface.
                    </p>
                  </div>
                </div>
                <div className="grid place-content-end w-full h-full text-center relative lg:col-span-4 ma-w-max">
                  <Image src={reports} alt="coffee" className="w-full h-full object-cover object-center -z-10 absolute"/>
                  <div className="text-white p-4 h-full mb-6 font-bold">
                    <h3 className="md:text-4xl mb-4">Financial Reports</h3>
                    <p className="text-center ">
                      Generate detailed reports to track your income, expenses, and outstanding invoices.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-xl  lg:col-span-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Recurring Invoices</h3>
                  <p className="text-center text-muted-foreground">
                    Set up automatic billing for your regular clients and save hours every month.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-xl lg:col-span-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Automated Reminders</h3>
                  <p className="text-center text-muted-foreground">
                    Send automatic payment reminders to clients with overdue invoices.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-xl lg:col-span-2">
                  <div className="bg-primary/10 p-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Beautiful Templates</h3>
                  <p className="text-center text-muted-foreground">
                    Choose from dozens of professionally designed invoice templates to match your brand.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-[#165dee]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block bg-primary px-3 py-1 text-sm text-primary-foreground">
                      How It Works
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">Simple, Fast, and Effective</h2>
                    <p className="max-w-[600px] text-muted md:text-xl">
                      Our invoice generator is designed to be intuitive and easy to use, so you can create professional
                      invoices in just a few clicks.
                    </p>
                  </div>
                  <ul className="grid gap-6">
                    <li className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full aspect-square bg-[#2971ff] shadow-lg border border-white/20 text-primary-foreground">
                        1
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-muted">Choose a Template</h3>
                        <p className="text-muted">
                          Select from our library of professionally designed invoice templates.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full aspect-square bg-[#2971ff] shadow-lg border border-white/20  text-primary-foreground">
                        2
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-muted">Add Your Details</h3>
                        <p className="text-muted">
                          Customize with your logo, contact information, and payment terms.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full aspect-square bg-[#2971ff] shadow-lg border border-white/20 text-primary-foreground">
                        3
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-muted">Send and Get Paid</h3>
                        <p className="text-muted">
                          Email the invoice directly to your client or download as a PDF.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Button size="lg" asChild className="rounded-none">
                      <Link href="/signup">Try It Now</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] overflow-hidden border-r-8 border-b-8  bg-background shadow-xl">
                    <Image
                      src={simple}
                      width={800}
                      height={600}
                      alt="Invoice Generator Demo"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#f6f6f6]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Pricing
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Choose the plan that works best for your business. All plans include a 14-day free trial.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-muted-foreground">Perfect for freelancers and small businesses.</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Up to 10 clients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>20 invoices per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Basic templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="/signup?plan=starter">Get Started</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Professional</h3>
                    <p className="text-muted-foreground">Ideal for growing businesses.</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited clients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>100 invoices per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Premium templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Recurring invoices</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="/signup?plan=professional">Get Started</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Business</h3>
                    <p className="text-muted-foreground">For larger businesses with advanced needs.</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$79</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited clients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited invoices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Phone & email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Team accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>API access</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="/signup?plan=business">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Thousands of Businesses</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Don not just take our word for it. Here is what our customers have to say.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={50}
                      height={50}
                      alt="Customer"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Freelance Designer</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      &quot;InvoiceFlow has completely transformed how I bill my clients. It&apos;s so easy to use and looks
                      professional. I get paid faster now!&quot; 
                    </p>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={50}
                      height={50}
                      alt="Customer"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">Michael Chen</h3>
                      <p className="text-sm text-muted-foreground">Small Business Owner</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      &quot;The recurring invoice feature alone has saved me hours every month. The reporting tools help me
                      stay on top of my finances.&quot; 
                    </p>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={50}
                      height={50}
                      alt="Customer"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">Jessica Martinez</h3>
                      <p className="text-sm text-muted-foreground">Marketing Agency</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      &quot;We&apos;ve scaled our agency from 5 to 25 clients, and InvoiceFlow has grown with us. The team accounts
                      feature is perfect for our needs.&quot; 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">Got questions? We&apos;ve got answers.</p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl space-y-4 py-12">
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">Is there a free trial?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, we offer a 14-day free trial on all our plans. No credit card required to get started.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">Can I change plans later?</h3>
                  <p className="mt-2 text-muted-foreground">
                    You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next
                    billing cycle.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">How do online payments work?</h3>
                  <p className="mt-2 text-muted-foreground">
                    We integrate with popular payment processors like Stripe and PayPal. Your clients can pay directly
                    from the invoice with just a few clicks.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">Is my data secure?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, we take security seriously. All data is encrypted, and we use industry-standard security
                    practices to protect your information.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">Can I import my existing clients?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, you can import clients from CSV files or directly from popular accounting software like
                    QuickBooks and Xero.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

      </motion.div>
      <footer className="bg-[#1d1d1d] p-12">
      </footer>
    </main>
  );
}
