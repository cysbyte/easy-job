import React from 'react'

const Questions = () => {
    const questins = [
        {
            question: 'How does the Interview Copilot work?',
            answer: 'The Copilot connects to your meetings tab and listens to your conversation. lt then provides you with real-time suggestions to help you ace your interview.'
        },
        {
            question: 'Is my data secure with Interviews Chat?',
            answer: "Absolutely. We use end-to-end encryption and make every effort to minimize the amount of data we collect. ln Interview Prep, your answers to practice questions areonly retained during the current browser session. We do not record any audio or video; audio is processed in realtime by a speech-to-text service and then immediately discarded. In Interview Copilot, the interviewer'squestions, your responses, and any real-time Alsuggestions are all deleted once the session ends. Formore information, please refer to our Privacy Policy."
        },
        {
            question: 'Are AI suggestions always accurate?',
            answer: "We use Large Language Models developed by leading Alresearch companies such as OpenAl. Similar to ChatGPT the Al may not always provide the best feedback. lt's natural for these models to occasionally make mistakes, even as they improve daily. This is why Copilot uses two Al models simultaneously to provide you with two different options. However, always use your own judgment to assess the accuracy of the feedback.lnterview Copilot is designed to help you stay on track during your interview, but it is not a substitute for yourown knowledge and experience."
        },
        {
            question: 'Is my meeting app supported?',
            answer: 'Interview Copilot works with any meeting platformaccessible via a browser, including Google Meet, Zoom, and Teams. Check if your meeting app has a browser-based version-if it does, Copilot will integrateseamlessly。'
        },
        {
            question: 'Will the interviewer see Interview Copilotas another participant during the meeting?',
            answer: 'No, our Copilot does not join the meeting or notifyparticipants in any way. Instead, it discreetly monitors the browser tab where the meeting is being held.'
        },
        {
            question: 'Can I use Interviews Chat on my mobile device?',
            answer: "Yes, our platform is mobile-friendly, with the exception ofCopilot for Video Meetings, which requires a desktop browser."
        },
        {
            question: "Can the interviewer detect if I'm using Copilot during the interview?",
            answer: "No, unless you share the screen where the Copilot is running. lf screen sharing is required, consider using Copilot for Phone Calls on a separate device instead. Avoid reading Al suggestions verbatim, as this can sound unnatural. Instead, use the suggestions as inspiration to guide your responses naturally. Use Copilot sparingly keep your eyes on the camera as much as possible to avoid giving the impression that you're reading."
        },
        {
            question: 'Does Interviews Chat support languages other than English?',
            answer: "Yes, our platform is multilingual. Ensure the app's selected language matches your interview language for live transcription to work. The app's language also determines the language used for all Al responses."
        },
        {
            question: 'Can I use Interviews Chat anonymously?',
            answer: "While we assure you that your data is secure, you canuse a temporary email address to create an account, andredact any sensitive information from your resume beforepasting it in, such as your name and any specific company names. You also don't need to provide yourresume at all; most features will work just fine without itthough Al suggestions may be less personalized. Noother personal information is stored permanently on the platform."
        },
        {
            question: 'Why should I use Interview Copilot if Iknow my stuff?',
            answer: "You should only use Copilot if you know your stuff! However, interviewers often ask questions meant tounsettle you or bring up topics you haven't revisited in months or even years, since they're not part of your daily work. They may also expect STAR responses to behavioral questions, which can be challenging to formulate on the spot. Interview Copilot is here to help you navigate these curve balls and respond with confidence."
        },
    ]
  return (
    <article className='text-center mt-20 px-16'>
        <h3 className='uppercase text-[#1C1D20] text-lg'>Frequently asked questions</h3>
        <p className='text-[#5F6166] text-sm mt-5'>If you can't find what you're looking for, email our support team.</p>
        <div className='mt-10 masonry'>
            {
                questins.map((item)=>(
                    <div key={item.question} className='masonry-item p-4'>
                        <h6 className='text-[#1C1D20] text-base font-semibold'>{item.question}</h6>
                        <p className='text-[#5F6166] text-sm mt-4'>{item.answer}</p>
                    </div>
                ))
            }
        </div>
    </article>
  )
}

export default Questions