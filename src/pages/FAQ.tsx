import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'reactstrap'

import styled from 'styled-components'

const FAQContainer = styled(Container)`
    padding: 2rem;
`

const Title = styled.h1`
    color: ${ (props) => props.theme.colors.primary };
    margin-bottom: 2rem;
    text-align: center;
`

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const VideoIframe = styled.iframe`
  max-width: 100%;
  height: 50vh;
`

function FAQ() {
  const [open, setOpen] = useState('')
  const toggle = (id: React.SetStateAction<string>) => {
    if (open !== id) {
      setOpen(id)
    }
  }
  
  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span className="span-150"/>
            <span className="span-50"/>
            <span className="span-50"/>
            <span className="span-75"/>
            <span className="span-100"/>
            <span className="span-75"/>
            <span className="span-50"/>
            <span className="span-100"/>
            <span className="span-50"/>
            <span className="span-100"/>
          </div>
          <FAQContainer>
            <Title>Frequently Asked Questions</Title>
            <Accordion flush open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">How can I capture a screenshot using ScreenMe ?</AccordionHeader>
                <AccordionBody accordionId="1">
                  <strong>Install the ScreenMe application</strong>
                  { ' ' } and press the <code>PrntScr</code> button on your keyboard. For detailed instructions, please visit our tutorials.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">Where can I find all my screenshots ?</AccordionHeader>
                <AccordionBody accordionId="2">
                  <strong>You need to have an account on screen-me.cloud</strong>
                  { ' ' } to access your screenshots. Visit the <code>gallery page</code> after logging in. <br />
                  <i>Note: You must connect through the ScreenMe software to upload your screenshots to your gallery.</i>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">How do I remove a screenshot that contains private information ?</AccordionHeader>
                <AccordionBody accordionId="3">
                  <strong>Registered users can manage and delete their screenshots through the gallery page.</strong>
                  { ' ' } If you are a <code>guest user</code>, contact our support team via <code>Discord</code> or email at <code>support@screen-me.cloud</code>, or use the abuse <code>report button</code> on the website.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">Can I copy a screenshot to the clipboard on Windows ?</AccordionHeader>
                <AccordionBody accordionId="4">
                  <strong>Yes</strong>, after selecting the capture area, press <code>Ctrl+C</code> to copy the screenshot to your clipboard.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="5">Is ScreenMe available on Mac ?</AccordionHeader>
                <AccordionBody accordionId="5">
                  <strong>Not yet</strong>, ScreenMe is currently not available on Mac, but we are actively working to release a Mac version in the future.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="6">What image formats and file sizes are supported ?</AccordionHeader>
                <AccordionBody accordionId="6">
                  <strong>We support</strong> <code>.png</code> and <code>.jpg</code> formats with a <code>maximum file size of 10MB</code>.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="7">How do I resolve issues with ScreenMe ?</AccordionHeader>
                <AccordionBody accordionId="7">
                  <strong>Ensure you are using the latest version of ScreenMe. If the issue persists, please contact us for assistance.</strong>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="8">How can I provide feedback on ScreenMe ?</AccordionHeader>
                <AccordionBody accordionId="8">
                  <strong>We welcome your feedback !</strong>  Please reach out to us through our <code>Discord server</code> or email us at <code>support@screen-me.cloud</code>.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="9">How do I uninstall ScreenMe ?</AccordionHeader>
                <AccordionBody accordionId="9">
                  <strong>To uninstall ScreenMe, follow the standard uninstallation process for your operating system.</strong>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="10">Can I customize the hotkeys for ScreenMe ?</AccordionHeader>
                <AccordionBody accordionId="10">
                  <strong>Yes, you can customize hotkeys in the ScreenMe settings. Navigate to the settings panel and adjust the hotkeys to your preference.</strong>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="11">Is there a way to import my Lighshot captures on ScreenMe ?</AccordionHeader>
                <AccordionBody accordionId="11">
                  <strong>Yes</strong>, with a tool that ScreenMe provide <code>Lightshot Gallery Downloader</code> (<a
                    href="https://chromewebstore.google.com/detail/lightshot-gallery-downloa/fdbdmbnmihjoicckbhdmkfpbpndgneok?hl=fr"
                    target="_blank" rel="noreferrer">Link to chrome webstore</a>), you
                  can export all your Lightshot captures (up to 5,000) then import them into your gallery on
                  Screen.me. <br/>
                  Here is a quick video guide :
                  <VideoContainer>
                    <VideoIframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/o4fUE5yMrBE"
                      title="Export/migrate your Lightshot captures to Screen.me"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></VideoIframe>
                  </VideoContainer>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="12">Can I customize the hotkeys for ScreenMe ?</AccordionHeader>
                <AccordionBody accordionId="12">
                  <strong>Currently, we do not support organizing screenshots in folders, but we plan to add this
                    feature in future updates.</strong>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </FAQContainer>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </div>
    </>
  )
}

export default FAQ
