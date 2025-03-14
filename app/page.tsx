import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Download, Github, Shield, Zap, Settings, Smartphone, Code } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 w-full border-b border-yellow-900/20 bg-black/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="text-yellow-500">ModuleX</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-yellow-500">
                Features
              </Link>
              <Link href="#installation" className="text-sm font-medium transition-colors hover:text-yellow-500 mx-4">
                Installation
              </Link>
              <Link href="#faq" className="text-sm font-medium transition-colors hover:text-yellow-500">
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
                    Enhance Your Android Experience
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    ModuleX is a powerful Xposed module that brings advanced customization and enhanced functionality to
                    your Android device.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#download">
                    <Button size="lg" className="px-8 bg-yellow-500 text-black hover:bg-yellow-400">
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </Button>
                  </Link>
                  <Link href="https://github.com/username/modulex">
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
                    <div className="absolute backface-hidden w-full h-full rounded-lg border border-yellow-500/20 bg-black flex items-center justify-center">
                      <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#eab308" />
                            <stop offset="100%" stopColor="#f59e0b" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M100 20
                             L160 50
                             L160 150
                             L100 180
                             L40 150
                             L40 50
                             Z"
                          fill="none"
                          stroke="url(#logoGradient)"
                          strokeWidth="4"
                          className="drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]"
                        />
                        <path
                          d="M100 40
                             L140 60
                             L140 140
                             L100 160
                             L60 140
                             L60 60
                             Z"
                          fill="none"
                          stroke="url(#logoGradient)"
                          strokeWidth="2"
                        />
                        <text
                          x="100"
                          y="110"
                          textAnchor="middle"
                          fill="url(#logoGradient)"
                          fontSize="24"
                          fontWeight="bold"
                          className="drop-shadow-[0_0_8px_rgba(234,179,8,0.7)]"
                        >
                          ModuleX
                        </text>
                        <path d="M85 80 L115 80 L115 90 L85 90 Z" fill="url(#logoGradient)" />
                        <path d="M90 70 L110 70 L110 75 L90 75 Z" fill="url(#logoGradient)" />
                      </svg>
                    </div>
                    <div className="absolute backface-hidden w-full h-full rounded-lg border border-yellow-500/20 bg-black rotate-y-180 flex items-center justify-center p-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-yellow-500 mb-4">ModuleX</h3>
                        <p className="text-zinc-400 text-sm">
                          Advanced Xposed module with powerful customization features for your Android device
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">
                  Powerful Features
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ModuleX comes packed with features to enhance your Android experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Shield className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Enhanced Privacy</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Control app permissions at a granular level and block trackers.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Zap className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Performance Boost</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Optimize system resources and improve battery life.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Settings className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">Deep Customization</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Modify system UI elements and app behaviors.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-zinc-900/80 border-yellow-900/20 shadow-lg hover:shadow-yellow-500/5 transition-all duration-200">
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-white">App Enhancements</CardTitle>
                  <CardDescription className="text-zinc-400">Add new features to your favorite apps.</CardDescription>
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
                    Stay up-to-date with the latest Android security patches.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="installation" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">
                  Installation Guide
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to install ModuleX on your device.
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
                    value="edxposed"
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                  >
                    EdXposed
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="lsposed" className="mt-6 space-y-4">
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">1. Install LSPosed Framework</h3>
                    <p className="text-zinc-400 mt-2">
                      Make sure you have LSPosed framework installed on your device. If not, follow the official LSPosed
                      installation guide.
                    </p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">2. Download ModuleX</h3>
                    <p className="text-zinc-400 mt-2">
                      Download the latest version of ModuleX from the releases section.
                    </p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">3. Install the Module</h3>
                    <p className="text-zinc-400 mt-2">Install the ModuleX APK on your device.</p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">4. Activate in LSPosed</h3>
                    <p className="text-zinc-400 mt-2">
                      Open LSPosed Manager, go to Modules, find ModuleX, and enable it.
                    </p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">5. Reboot Your Device</h3>
                    <p className="text-zinc-400 mt-2">Reboot your device to apply the changes.</p>
                  </div>
                </TabsContent>
                <TabsContent value="edxposed" className="mt-6 space-y-4">
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">1. Install EdXposed Framework</h3>
                    <p className="text-zinc-400 mt-2">
                      Make sure you have EdXposed framework installed on your device. If not, follow the official
                      EdXposed installation guide.
                    </p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">2. Download ModuleX</h3>
                    <p className="text-zinc-400 mt-2">
                      Download the latest version of ModuleX from the releases section.
                    </p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">3. Install the Module</h3>
                    <p className="text-zinc-400 mt-2">Install the ModuleX APK on your device.</p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">4. Activate in EdXposed</h3>
                    <p className="text-zinc-400 mt-2">
                      Open EdXposed Manager, go to Modules, find ModuleX, and enable it.
                    </p>
                  </div>
                  <div className="rounded-lg border border-yellow-900/20 bg-zinc-900 p-4">
                    <h3 className="text-lg font-medium text-white">5. Reboot Your Device</h3>
                    <p className="text-zinc-400 mt-2">Reboot your device to apply the changes.</p>
                  </div>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">Screenshots</h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See ModuleX in action.
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

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-500">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about ModuleX.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    Is my device compatible with ModuleX?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    ModuleX works on any Android device running Android 8.0 or higher with a compatible Xposed framework
                    (LSPosed or EdXposed) installed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    Will ModuleX void my warranty?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    Using Xposed modules typically requires root access, which may void your device's warranty. However,
                    you can usually uninstall everything and return to stock if needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    Is ModuleX open source?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    Yes, ModuleX is fully open source. You can view the source code on our GitHub repository and
                    contribute to the project.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    How do I report bugs or request features?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    You can report bugs or request features by opening an issue on our GitHub repository or joining our
                    community on Telegram.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-yellow-900/20">
                  <AccordionTrigger className="text-white hover:text-yellow-500">
                    Will ModuleX affect my device's performance?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    ModuleX is designed to be lightweight and efficient. While any Xposed module can have some impact on
                    performance, we've optimized ModuleX to minimize this effect.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.2),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text">
                  Ready to Enhance Your Android?
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download ModuleX now and experience Android like never before.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8 bg-yellow-500 text-black hover:bg-yellow-400">
                  <Download className="mr-2 h-4 w-4" />
                  Download Latest (v1.2.0)
                </Button>
                <Link href="https://github.com/username/modulex/releases">
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
            <span className="text-yellow-500">ModuleX</span>
          </div>
          <p className="text-center text-sm leading-loose text-zinc-500 md:text-left">
            © {new Date().getFullYear()} ModuleX. All rights reserved. Released under the MIT License.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/username/modulex" className="text-zinc-500 hover:text-yellow-500">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://t.me/modulex" className="text-zinc-500 hover:text-yellow-500">
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
  )
}

