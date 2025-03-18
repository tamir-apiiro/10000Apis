
const express = require('express')
import {handler5821} from "./handler5821";
const app = express()
app.get('/5821', handler5821)
app.listen(3000, () => {})
        