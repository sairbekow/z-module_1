import config from "../data/config.json"

const Testimonials = () => {
  const data = config.testimonials
  const allTestimonials = document.querySelectorAll(".comment")

  for (let i = 0; i < data.length; i++) {
    const commentText = allTestimonials[i].querySelector(".comment__text")
    const commentAuthor = allTestimonials[i].querySelector(".comment__author-name")
    const commentAuthorJob = allTestimonials[i].querySelector(".comment__author-proffession")

    commentText.prepend(data[i].text)
    commentAuthor.prepend(data[i].name)
    commentAuthorJob.prepend(data[i].job)
  }
}

export default Testimonials