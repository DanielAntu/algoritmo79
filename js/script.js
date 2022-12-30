const input_rend = document.querySelector('.input-rend')
const val = document.querySelector('#val')
const tax = document.querySelector('#tax')
const mes = document.querySelector('#mes')
const calcular = document.querySelector('#calcular')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('#closebtn')
const valora = document.querySelector('#valora')
const taxa = document.querySelector('#taxa')
const meses = document.querySelector('#meses')
const valAcu = document.querySelector('#valAcu')

//funçoes
const verifyText = (text) => {
    return text.replace(/[^0-9,]/g, '')
}

const calculoRenda = (p, i, n) => {
    const va = p * (((1 + i) ** n) -1 ) / i
    return va
}

// eventos
const vari = [val, tax]
vari.forEach((el) => {
    el.addEventListener('input', (e) => {
        const updateValue = verifyText(e.target.value)

        e.target.value = updateValue
    })
})

input_rend.addEventListener('submit', (e) => {
    e.preventDefault()
    var p = val.value.replace(',', '.')
    var i = tax.value.replace(',', '.')
    var valor = calculoRenda(Number(p), Number(i), Number(mes.value))
    p = Number(p).toFixed(2)
    i = Number(i).toFixed(2)
    valor = valor.toFixed(2)
    p = p.replace('.', ',')
    i = i.replace('.', ',')
    valor = valor.replace('.', ',')
    valora.innerHTML = `R$${p}`
    taxa.innerHTML = `R$${i}`
    meses.innerHTML = `${mes.value} meses`
    valAcu.innerHTML = `R$${valor}`
    val.value = ''
    tax.value = ''
    mes.value = ''
})

calcular.addEventListener('click', () => {
    modal.classList.remove('hide')
})

closeBtn.addEventListener('click', () => {
    modal.classList.add('hide')
    calcular.setAttribute('disabled', '')
})

input_rend.addEventListener('input', () => {
    if (val.value.length > 0 && tax.value.length > 0 && mes.value.length > 0) {
        calcular.removeAttribute('disabled')
    } else {
        calcular.setAttribute('disabled', '')
    }
})