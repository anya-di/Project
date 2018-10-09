function CreditCard () {
    this.cardNum =prompt ("Enter card number")
    var pinCode = prompt ("Enter pin code")
    var cash = 30000
    this.putCash = function (sum) {
      cash += sum
    }
    this.testPin = function (pin) {
      return pin === pinCode ? cash : null
    }
    this.getCash = function (sum, pin) {
      if ( pin === pinCode ) cash -= sum
    }
    this.elem = document.createElement("img")
    document.body.appendChild(this.elem)
    this.elem.src = "https://www.lhv.ee/assets/images/cards/partnerDebit.png"
    this.elem.width = "220"
    this.elem.style = `
      position: fixed;
      top: 40%;
      left: 43%;
    `
    this.elem.onclick = function (event) {
      bank.getCardCash(this)
    }.bind(this)
}


function Bankomat () {
  this.demo = document.createElement("p")
  document.body.appendChild(this.demo)
  this.demo.style = `
    width: 300px;
    height: 150px;
    position: fixed;
    top: 10%;
    left: 40%;
    padding: 5px 10px;
    background-color: #ffa;
    border: ridge 3px gold;
    font-size: 30px;
    color: blue;
    text: center;
  `


  var cash = 1000000000
  this.getCardCash = function ( card ) {
     var cardCash = card.testPin (prompt("Enter pin code"))
     console.log(cardCash)
     if (typeof cardCash === "number" ) {
        sum = prompt ("Enter amount of money")
        if (sum <= cardCash) {
           if (cash >= sum) {
               card.getCash (sum, prompt  ("Enter pin code"))
               this.demo.innerHTML = `Get the money : ${sum}`
               this.money = document.createElement("img")
               document.body.appendChild(this.money)
               this.money.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Emoji_u1f4b8.svg/2000px-Emoji_u1f4b8.svg.png"
               this.money.width = "400"
               this.money.style = `
                 position: fixed;
                 top: 55%;
                 left: 70%;
               `
           }
           else this.demo.innerHTML ="There is not enough money in the ATM"
        }
        else this.demo.innerHTML = "Not enough money in the account"
     }
     else this.demo.innerHTML = "Invalid pin"
  }
}

function createCard() {
  return new CreditCard ()
}

var bank = new Bankomat()

document.body.style = `
    background-image: url(http://fony-kartinki.ru/_ph/76/2/806914660.jpg);
    background-repeat: ;
    background-size: cover;
    background-position: right center;
`
