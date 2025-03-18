
const express = require('express')
import {handler1357} from "./handler1357";
const app = express()
app.get('/1357', handler1357)
app.listen(3000, () => {})
        