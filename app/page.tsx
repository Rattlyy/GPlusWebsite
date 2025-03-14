import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Download,
  Github,
  Shield,
  Zap,
  Settings,
  Smartphone,
  Code,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 w-full border-b border-yellow-900/20 bg-black/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="text-yellow-500">GrindrPlus</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-3">
              <Link
                href="#hooks"
                className="text-sm font-medium transition-colors hover:text-yellow-500"
              >
                Hooks
              </Link>
              <Link
                href="#installation"
                className="text-sm font-medium transition-colors hover:text-yellow-500 mx-4"
              >
                Installation
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium transition-colors hover:text-yellow-500"
              >
                FAQ
              </Link>
              <Link href="#download">
                <Button className="ml-4 bg-yellow-500 text-black hover:bg-yellow-400">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text">
                    Enhance Your Grindr Experience
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    GrindrPlus is a powerful Xposed module that brings advanced
                    customization and enhanced functionality to your Grindr app.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#download">
                    <Button
                      size="lg"
                      className="px-8 bg-yellow-500 text-black hover:bg-yellow-400"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </Button>
                  </Link>
                  <Link href="https://github.com/R0rt1z2/GrindrPlus">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 border-yellow-500 text-yellow-500 hover:bg-yellow-500/20"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[400px] h-[400px] group perspective-[1000px]">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-75 blur"></div>
                  <div className="relative w-full h-full transition-all duration-500 preserve-3d group-hover:rotate-y-180 cursor-pointer">
                    <div className="absolute backface-hidden w-full h-full rounded-lg border border-yellow-500/20 bg-black rotate-y-180 flex items-center justify-center p-8">
                      <div className="text-center">{/* GrindrPlus Logo */}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="hooks"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-zinc-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">
                  Hooks
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  GrindrPlus comes packed with features to enhance your Android
                  experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Shield className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Enhanced Privacy</CardTitle>
                  <CardDescription className="text-zinc-400">
                    All ad trackers are blocked, removing ≈50% of traffic coming
                    out of your Grindr app.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Zap className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Premium features</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Unlocked premium features like read receipts, unlimited
                    albums, and more.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Settings className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Power User</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Profile BMI indicator, more accurate distance, last online
                    timestamp.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">
                    I dont fucking know
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Add new features to your favorite apps.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Code className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Developer Tools</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Debug and analyze app behavior with advanced tools.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Shield className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Regular Updates</CardTitle>
                  <CardDescription className="text-zinc-400">
                    We try to keep up with Grindr updates, usually releasing
                    GPlus for latest Grindr in less than a day since the update.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="installation"
          className="w-full py-12 md:py-24 lg:py-32 bg-black"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">
                  Installation Guide
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to install GrindrPlus on your
                  device.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="lsposed" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-zinc-900 border border-yellow-900/20">
                  <TabsTrigger
                    value="lsposed"
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                  >
                    LSPosed
                  </TabsTrigger>
                  <TabsTrigger
                    value="lspatch"
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                  >
                    LSPatch
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="lspatch" className="mt-6 space-y-4">
                  {[
                    [
                      "Download JingMatrix's LSPatch Fork",
                      "Download JingMatrix's LSPatch fork (as of September 2024, official LSPatch doesn't work anymore with latest Android versions).",
                    ],
                    [
                      "Install GrindrPlus Module APK",
                      "Download and install the GrindrPlus module APK from the downloads section of the README.",
                    ],
                    [
                      "Download Latest Grindr App",
                      "Download the latest Grindr app from Play Store or install the APK bundle from APKMirror using SAI.",
                    ],
                    [
                      "Check Shizuku Service in LSPatch",
                      "Open LSPatch and ensure everything is correctly set up; confirm you see 'Shizuku service available' at the top of the home tab.",
                    ],
                    [
                      "Create New Grindr Patch",
                      "In LSPatch, go to 'Manage > Apps', press '+', select 'Create new patch', and search for the installed Grindr app (com.grindrapp.android).",
                    ],
                    [
                      "Enable Patch Options",
                      "Select and enable the options 'LOCAL' and 'ENABLE DEBUGGING', then start the patch process and wait for completion.",
                    ],
                    [
                      "Install Patched Grindr APK",
                      "After patching completes, click on 'Install', uninstall the original Grindr app when prompted, and wait for the patched APK installation.",
                    ],
                    [
                      "Configure Grindr Module Scope",
                      "In LSPatch, return to 'Manage > Apps', select 'Grindr > Module scope', choose Grindr Plus (com.grindrplus), and confirm by pressing the checkmark at the bottom right.",
                    ],
                    [
                      "Verify Grindr Mod Installation",
                      "Open Grindr to verify if 'Mod Settings' appear at the top of Grindr's settings.",
                    ],
                  ].map((e, i) => (
                    <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                      <h3 className="text-lg font-medium text-white">
                        {i + 1}. {e[0]}
                      </h3>
                      <p className="text-zinc-400 mt-2">{e[1]}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="lsposed" className="mt-6 space-y-4">
                  {[
                    [
                      "Install GrindrPlus Module APK",
                      "Install the GrindrPlus module APK from the downloads section of the README.",
                    ],
                    [
                      "Download Latest Grindr App",
                      "Download Grindr from the Play Store or install an APK bundle using SAI from APKMirror.",
                    ],
                    [
                      "Activate Module in LSPosed",
                      "Enable the GrindrPlus module in LSPosed, ensuring Grindr is added to the module's scope.",
                    ],
                    [
                      "Verify Grindr Mod Installation",
                      "Open Grindr and confirm the presence of 'Mod Settings' at the top of the Grindr settings menu.",
                    ],
                  ].map((e, i) => (
                    <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                      <h3 className="text-lg font-medium text-white">
                        {i + 1}. {e[0]}
                      </h3>
                      <p className="text-zinc-400 mt-2">{e[1]}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section
          id="screenshots"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-black via-zinc-950 to-black relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">
                  Screenshots
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See GrindrPlus in action.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 relative z-10">
              <div className="w-full max-w-md mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="relative">
                          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-50 blur-sm"></div>
                          <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-black">
                            <Image
                              src="/placeholder.svg?height=600&width=300"
                              width={300}
                              height={600}
                              alt="ModuleX Screenshot 1"
                              className="object-cover w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="relative">
                          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-50 blur-sm"></div>
                          <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-black">
                            <Image
                              src="/placeholder.svg?height=600&width=300"
                              width={300}
                              height={600}
                              alt="ModuleX Screenshot 2"
                              className="object-cover w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="relative">
                          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-50 blur-sm"></div>
                          <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-black">
                            <Image
                              src="/placeholder.svg?height=600&width=300"
                              width={300}
                              height={600}
                              alt="ModuleX Screenshot 3"
                              className="object-cover w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex items-center justify-center mt-8">
                    <CarouselPrevious className="relative mr-4 bg-zinc-900 hover:bg-zinc-800 border-yellow-900/20 text-yellow-500 hover:text-yellow-400" />
                    <CarouselNext className="relative ml-4 bg-zinc-900 hover:bg-zinc-800 border-yellow-900/20 text-yellow-500 hover:text-yellow-400" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about GrindrPlus.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    Do maps work with LSPatch?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    No.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    Will GrindrPlus get me banned?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    GrindrPlus is a modification a Grindr, so it could get you
                    banned. Use it at your own risk.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    Can I suggest a new feature?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    Feel free to, but keep in mind that every feature, no matter
                    how small, has a lot of work behind it, so please be patient
                    and understand that sometimes it is impossible to implement
                    certain things due to the nature of how LSPosed works.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    I'm using LSPatch and I can't login with Google!
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    As mentioned above, when using LSPatch the original
                    signature of the application is invalidated which causes all
                    functions related to Google Services (GMS) to not work
                    properly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    I can't see profiles, whenever I open them they're blank!
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    This most likely means you're using an AdBlocker (e.g.
                    AdAway). Disable it or whitelist cdn.cookielaw.org.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    I've updated to newer Android version and LSPosed/LSPatch
                    stopped working!
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    The development of LSPosed/LSPatch is currently frozen and
                    that is why, no new updates have been released to support
                    new Android versions. Make sure you're using{" "}
                    <Link
                      href="https://github.com/JingMatrix"
                      className="text-blue-400"
                    >
                      JingMatrix's fork
                    </Link>
                    , which works with latest updates.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.2),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text">
                  Ready to enhance your Grindr?
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download GrindrPlus now and experience Grindr like never
                  before.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="px-8 bg-yellow-500 text-black hover:bg-yellow-400"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Latest (v1.2.0)
                </Button>
                <Link href="https://github.com/R0rt1z2/GrindrPlus/releases">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 border-yellow-500 text-yellow-500 hover:bg-yellow-500/20"
                  >
                    View All Releases
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-yellow-900/20 py-6 md:py-0 bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-bold">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span className="text-yellow-500">GrindrPlus</span>
          </div>
          <p className="text-center text-sm leading-loose text-zinc-500 md:text-left">
            © {new Date().getFullYear()} GrindrPlus. All rights reserved.
            Released under the MIT License.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/R0rt1z2/GrindrPlus"
              className="text-zinc-500 hover:text-yellow-500"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://t.me/GrindrPlus"
              className="text-zinc-500 hover:text-yellow-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M21.5 4.5L2.5 12.5L21.5 20.5L21.5 4.5Z"></path>
                <path d="M12 12.5L21.5 4.5"></path>
                <path d="M2.5 12.5L12 12.5"></path>
                <path d="M12 12.5L17 19.5"></path>
              </svg>
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
