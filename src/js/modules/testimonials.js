import config from "../data/config.json"

class Testimonials {
    testimonialsListElement = document.querySelector('.testimonials__list')
    testimonialsStorage = config.testimonials

  render = () => {
    for (let i = 0; i < this.testimonialsStorage.length; i++) {

      const comment = document.createElement('li')
      comment.classList.add('comment')

      const commentText = document.createElement('p')
      commentText.classList.add('comment__text')

      const commentAuthor = document.createElement('div')
      commentAuthor.classList.add('comment__author')

      const commentAuthorName = document.createElement('p')
      commentAuthorName.classList.add('comment__author-name')

      const commentAuthorJob = document.createElement('p')
      commentAuthorJob.classList.add('comment__author-proffession')

      comment.append(commentText)
      comment.append(commentAuthor)

      commentAuthor.append(commentAuthorName)
      commentAuthor.append(commentAuthorJob)

      commentText.textContent = this.testimonialsStorage[i].text
      commentAuthorName.textContent = this.testimonialsStorage[i].name
      commentAuthorJob.textContent = this.testimonialsStorage[i].job

      this.testimonialsListElement.append(comment)
    }
  }
}

export default Testimonials