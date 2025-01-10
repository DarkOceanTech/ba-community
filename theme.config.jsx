import profilePic from "./public/ba-logo.png";
import Image from "next/image";

import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://community.bermudezassociates.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
       <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <title>
      The Bookkeeping Community | Bermudez Associates
    </title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'The Bookkeeping Community | Bermudez Associates'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The next site builder'}
        />
      </>
    )
  },
  logo: (
    <>
      <Image src={profilePic} alt="bermudez" height={40} />
      <span
        style={{
          marginLeft: "5px",
        }}
      >
        / Community
      </span>
    </>
  ),
  project: {
    link: "https://github.com/DarkOceanTech/ba-community",
  },
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://bermudezassociates.com" target="_blank">
          Bermudez Associates
        </a>
        .
      </span>
    )
  }
  // ... other theme options
};
