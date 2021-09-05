(function init() {
	new CardPreview().start()
})()

function CardPreview() {
	const productCardInfos = {
		image: document.querySelector('.product_card__image__file'),
		title: document.querySelector('.product_card__title__text'),
		previousPrice: document.querySelector('.product_card__price_container__previous_price'),
		currentPrice: document.querySelector('.product_card__price_container__current_price'),
		discount: document.querySelector('.product_card__price_container__discount')
	}

	this.start = () => {
		this._addEventToCardInfosInput()
		this._onSetImage()
	}

	this._addEventToCardInfosInput = () => {
		const infoTypes = ["title", "currentPrice", "previousPrice"]
		const inputInfos = document.querySelectorAll('.product__input')
		inputInfos.forEach(input => {
			const inputType = input.getAttribute('name')
			if (!inputType) return

			for (infoType of infoTypes) {
				if (inputType == infoType) {
					input.addEventListener('keyup', () => {
						const value = input.value
						productCardInfos[inputType].textContent = value

						document.documentElement.style.setProperty('--border-display', '1px solid black');
					})
				}
			}
		})
	}

	this._onSetImage = () => {
		const fileInput = document.querySelector('#file')
		fileInput.addEventListener('change', () => {
			const [file] = fileInput.files
			const imageElement = productCardInfos.image
			imageElement.src = URL.createObjectURL(file)

			const labelText = document.querySelector('.product__input__file_label')
			labelText.textContent = file.name

			document.documentElement.style.setProperty('--image-display', 'block');
			document.documentElement.style.setProperty('--border-display', '1px solid black');
		})
	}
}