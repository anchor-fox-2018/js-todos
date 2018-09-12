const Model = require('./model.js')
const View = require('./view.js')

class Controller {
    static help(){
        let help = Model.help()
        View.print(help);
    }
}

module.exports = Controller