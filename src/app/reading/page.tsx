import ProjectListItem from "@/components/ProjectListItem";
import ReadListItem from "@/components/ReadListItem";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
    return (
        <div className="scroll-smooth dark:text-zinc-100 text-zinc-950 dark:bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900 bg-gradient-to-tr from-zinc-50 to-zinc-100 transition-colors duration-200 ease-in-out">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="pt-24">
                    <div className="hover:translate-x-1 transition-all ease-in-out"><a href="/" className="text-3xl dark:text-zinc-400 text-zinc-700 font-medium">← Yash Barve</a></div>
                    <h1 className="text-5xl font-semibold bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-100 dark:to-zinc-400 inline-block text-transparent bg-clip-text pb-3 mt-2">Reading Collection</h1>
                </div>
                <div className="grid grid-cols-12 border-b-[0.5px] p-2 pb-4 pt-9 dark:border-zinc-700 dark:text-zinc-400 border-zinc-400 text-zinc-500 font-semibold">
                        <div className="lg:block hidden col-span-2 lg:col-span-1">Sr.</div>
                        <div className="col-span-4 lg:col-span-5">Title</div>
                        <div className="col-span-4 lg:col-span-3">Author</div>
                        <div className="col-span-2 mx-auto">Pages</div>
                        <div className="col-span-2 mx-auto lg:col-span-1">Link</div>
                    </div>
                <div className="flex flex-col-reverse dark:hover:text-zinc-400 hover:text-zinc-500 pb-24">
                    <ReadListItem sr="01" title="Do Epic Shit" author="Ankur Warikoo" pages="312" link="https://www.amazon.ca/Do-Epic-Ankur-Warikoo/dp/9393986282/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.e4pK3ikR7MrTM5e388_v9jfrQ9H8az8k8zi0ul2lp8bmLWqV0m-QVhycUC7w9dPTzVmUOjB8SSP-7eW8wbyNdGLbpL6_16fF4q6MrEjFn-7QJHDgNB-QtV2J2C6KZmIq6AcVnyFE8U3V4hEy5p8sXb30TtKScphBuSf1aniZKds31Y4GytoEtCy0vq0Ib_Q2WCrtxUVQyUUlikgxHFUWBlgPFo6jjpvL66UyMrfFt9PhLrtVw6dzBUNPCyqvKLUC8oxjjxPT3PTRNSTJudYaTCq9_sC9MY8OteQujcxKzI8.ZZ3iYbKf4AOaIkH2owWHZBUsq1j11YjpG49JuWWRbQ0&qid=1722827367&sr=8-1" />

                    <ReadListItem sr="02" title="The Alchemist" author="Paulo Coelho" pages="200" link="https://www.amazon.ca/Alchemist-25th-Anniversary-Paulo-Coelho/dp/0062390627/ref=sr_1_3?crid=5HFF8ZQTL0G8&dib=eyJ2IjoiMSJ9.oUSaMmdTbyPBivuJLFm4Q37r39spfhaLSEBLasfpT4Ol0ZK8euwF2yoVhIALUuCkbm5aL_LcWx6rY-4U2VYt1WIhP4ICgO3OTUc-EZcqzQwdZpgzaBuTsDoOOdw3GXwGSyco_-YME1uF-cpoFWYXdcCL-xqT8H9rggkd4atWajnK5Nw6mVfJ_6Ym6WIWcR2jV_DoQ_oIcLIc331PW7gwuev43kKlI9TD9Yksvlh8KKhb6_M5BnLQ49V_Msv-2fI9ADTbw0P9XwHJL0PwKZkLcttjyWXqJZ6pN_dsV_WaFW4.Ck2WQWrBuSYFHNjuAt6hgDpTXoz3pAHBpBDjGZJFwEA&dib_tag=se&keywords=alchemist&qid=1722827347&sprefix=alchemist,aps,120&sr=8-3" />

                    <ReadListItem sr="03" title="The Go-Giver" author="Bob Burg, John David Mann" pages="144" link="https://www.amazon.ca/Go-Giver-Suprising-Getting-27-Mar-2008-Hardcover/dp/B012HTEPDY/ref=sr_1_8?crid=2JP3DPBFYAR9D&dib=eyJ2IjoiMSJ9.eWnTzhVF_1w7ztC7One4GhjEbh1WJVjCp1_3uSSbYJWBPJCNQuFQ-n4bXhRKYW7vBq03t38XsDLWRBJ0BC6MlwwK2npAFTPi5AaNdYKuMPkU0d8xNJa5f-10GRHacUK7Idt0e2ww0Bv3r7qHAtAgdkZ7iE_lzdMTNLImf17soIa0Nc_ve--95CksuzDuQId2DnXoL10xaE9epVbilIDnV6tl-Ck-y6IffQ963FuRHfEcihso1_39atRT61DUr-hLnr7CmapHj5_TSJqBw8PxD75OR2Y-IFpAk-lGiHSN7ag.2Gc23V3R0ySrG3YK1E2-TjHUcMPH6iEFqL1zlEIHqXQ&dib_tag=se&keywords=go+giver+book&qid=1722827324&sprefix=go+giver,aps,119&sr=8-8" />

                    <ReadListItem sr="04" title="Stop Walking on Eggshells" author="Paul Mason, Randi Kreger" pages="260" link="https://www.amazon.ca/Stop-Walking-Eggshells-Borderline-Personality/dp/1684036895/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.fefAlifxR285zLc8MfY97eGaOeGUa_tN2AYhCraq2-OjoYclMDA5R6D6ehQL-f5qxd2-NkYIql0Lt0sbbLxzgjeBK5_aqcLqyraynBuV1Amvo6w77MpGvDIspaybNBYj-FiyrgQ5H4Yb0nYm_A1bSAS5vORbjWXAndwUD76RvVsU_fLa7sIQ8dUxu9zO1TDrvme-gZEH8z1XVDGo7JDW4BATKYfYstSHPxkuc6XtFsissMycudKJuFO_fmEXMf9r08ECFhMNGWnZC1V7rPnIBwA85dHGi1-jtefWdztash4.niGLgYEP7iqHuWd5klvqt8AT6II7GmyQDK2r74Fc1gQ&qid=1722827299&sr=8-1" />

                    <ReadListItem sr="05" title="Tuesdays with Morrie" author="Mitch Albom" pages="192" link="https://www.amazon.ca/Tuesdays-Morrie-Greatest-Lesson-Anniversary/dp/076790592X/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.aFSZ-Wv_QKb8QHjAApp7E3xET5hfUtgZv3fnX-iSbF9HMKKdfSHzo4cO4wL6slgvnhCkS3HAZ__EPWtBD6acevEamq4SfP-jsA59RVZTikwVkK2AfF8gOmqvCdEHllVsirYPgNyoiQEJVYf4yOiQg7xlG8AtjvoyLzr8Kht-3_Teci6NerWQ6AR8DYqGp9KrIs450-R2OqDp2FRbmny2uwNEqo3-9tBIGgTbTolPpzQ.8RwbtneP514bf1-vHreAB7ohKs5XX3LIOkCaQbXWdDo&qid=1722827277&sr=1-1" />

                    <ReadListItem sr="06" title="12 Rules for Life" author="Jordan Peterson" pages="448" link="https://www.amazon.ca/12-Rules-Life-Antidote-Chaos/dp/0141988517/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.MjdhHI8BO938f2lkvgyVQBpmP9n34UkOKOm1YslkdvUTrczxfNMN15Y265IrsYDv9bdx0qIh-S1A_OcfUfa5oTbaf-eCPEYbqD7RYjxWmdSmOVV7FaLIw59u4ti0fWsRxAr5hu8r6wHzcLr3nN9SDIVu6zrb9oVgOxdKq5wqWzKvsI7SZQbN5e7hV1lnqIoDcVPM2vC0y2C8kQGoMrnpxps5bG-b__XAtGLlNnjMVxM.PWsIMqc8wAXDSG5DxS40LG7SHjQ4rUGaTmeW9SH6_xA&qid=1722827256&sr=1-1" />

                    <ReadListItem sr="07" title="Atomic Habits" author="James Clear" pages="320" link="https://www.amazon.ca/Atomic-Habits-James-Clear/dp/1847941834/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.by3Jx9aG-u74AuRIzstCMXaXQv56Km86hwMO173FqEDpvJN1YCV78z-gNCDBvjtz33WyC9GHKoO5dDrKyU1t0YwFtO_E3JcQzfL6b2uaO2-bcEDRCOUIuxHH2XcG8TXu9pYZivlUvfOaKMbbaRGq6NiB3BAP9zC_vPjrFAD6Z5Mfk56uib7wXveBV4UiGr8MJi2zV0McjaHcTc5NWfFUIiWftKyWlUlyVGFWhH0RqRE.ytjQeGY88nRN06RCufiQv4Al-FAGzsRqoWInHF9XQr8&qid=1722827242&sr=1-1" />

                    <ReadListItem sr="08" title="Feel Good Productivity" author="Ali Abdaal" pages="304" link="https://www.amazon.ca/Feel-Good-Productivity-More-What-Matters/dp/1250865042/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.rLkKxbko-fpc9uw3Lr-N25weGmc2WlPMcI2Olp77NHhQjUeArrgv7ifDJ35KFC4p-0UAeYxjYUvn5Z57hmAqyHUibulfAE7BbvhMZaZd6Or5X8bovdQuUJyIIKAHD9N36J8snziq-ESTcCusjqNNpw-DyDSTd2s1F-8q_jR1o4joEA6wQI332b73F7-1Y2Geq21xdOB2HgFfsw-FoXRdfzKbAj1qYHYXeIqXJM1zNmk.BNeLw66mYaaBW4hdCZ9_jrD0ThExMJmpmwY2iD3vyCA&qid=1722827218&sr=1-1" />

                    <ReadListItem sr="09" title="The Subtle Art of Not Giving a F*ck" author="Mark Manson" pages="224" link="https://www.amazon.ca/Subtle-Art-Not-Giving-Counterintuitive/dp/0062641549/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.98Ga1R6dC37EmS5v-Mai-Ay9ntrk9WkoqQSmsHS2MBEFaCBV9SaD4bP4dXO3r8irRShWDEyQ-T3YcBu63482s3zcPeoroDibHAHShUYdFbS3u_-fGr_67rhIN2t7K-RjS8XiSm0w9Dz2fSKYptIUJq4DSPNqk_l_7j9jRSrHYBGMto_v5w2ESyITjVMuFmFfMsGtEDSCQJTfJFoWwHBn-c9cFOOQanxYtXAIT05Gl3s.amWtp_ZEKcekfWLXo6OxDJHlgHMjDgCE_XIjUev82sM&qid=1722827192&sr=1-2" />

                    <ReadListItem sr="10" title="Murder on the Orient Express" author="Agatha Christie" pages="315" link="https://www.amazon.ca/Murder-Orient-Express-Hercule-Mystery/dp/0062073508" />

                    <ReadListItem sr="11" title="Eat That Frog" author="Bryan Tracy" pages="184" link="https://www.amazon.ca/Eat-That-Frog-Great-Procrastinating/dp/162656941X/ref=sr_1_1?crid=FQMFM2UYU1SF&dib=eyJ2IjoiMSJ9.lMhMFfbCL4k3IvcILkGKKhJQuLynzpcibcgm0ncUa6vivN6Apw89KQr3ECKqdoE3jGMGQ3Idj2Ip56Y2xL7wOw.Vwus_v3t53oJSrpCAKECnztoOe-9oRcC26PWoay--Fc&dib_tag=se&keywords=eat+that+grog&qid=1722827107&s=books&sprefix=eat+that+grog,stripbooks,86&sr=1-1" />

                    <ReadListItem sr="12" title="The Rudest Book Ever" author="Shwetabh Gangwar" pages="192" link="https://www.amazon.ca/Rudest-Book-Ever-Shwetabh-Gangwar/dp/9388754433/ref=sr_1_1?crid=JAMMSUHRCNWW&dib=eyJ2IjoiMSJ9.D9uyHPH28DvTs4YOmhDn6-yeQ3Nl2uFPkfx8of5x0NZgHqtL8r6dgtmLNJ02KmoCtOIp6ulZZIK0k6tgFDY891AV5dQA6GZ_tu1jEKWybFTS4leJH2Tyfd7G-HnaUbPzMwU32BrOjqKS_Rv9OvXppNjN5yB_SuUarkYPN5J3bnUyji-3qRf-f6LZKfm80OpKdPA3o8vultfFAVhyoytUx_4XLPo3nLzE6jhP2UtFe0w.LPuSFXQtw54tizSL_UPJQjSECCcMKjl-YqT7NcT48SY&dib_tag=se&keywords=the+rudest+book+ever+dark&qid=1722827013&s=books&sprefix=the+rudest+book+ever+dark,stripbooks,84&sr=1-1" />

                    <ReadListItem sr="13" title="Grand Prix: An Illustrated History of Formula 1" author="Will Buxton" pages="240" link="https://www.amazon.ca/Grand-Prix-Illustrated-History-Formula/dp/198486324X" />

                    <ReadListItem sr="14" title="The Hidden Hindu (A trilogy)" author="Akshat Gupta" pages="256" link="https://www.amazon.ae/Hidden-Hindu-Akshat-Gupta/dp/0143455699" />
                </div>
            </div>
        </div>
    );
  }