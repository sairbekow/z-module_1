import config from "../data/config.json"

class Testimonials {
  constructor() {
    this.testimonialsStorage = config.testimonials
    this.allTestimonials = document.querySelectorAll(".comment")
  }

  render = () => {
    for (let i = 0; i < this.testimonialsStorage.length; i++) {
      const commentText = this.allTestimonials[i].querySelector(".comment__text")
      const commentAuthor = this.allTestimonials[i].querySelector(".comment__author-name")
      const commentAuthorJob = this.allTestimonials[i].querySelector(".comment__author-proffession")

      commentText.textContent = this.testimonialsStorage[i].text
      commentAuthor.textContent = this.testimonialsStorage[i].name
      commentAuthorJob.textContent = this.testimonialsStorage[i].job
    }
  }
}

export default Testimonials