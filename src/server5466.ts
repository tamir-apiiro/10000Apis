
const express = require('express')
import {handler5466} from "./handler5466";
const app = express()
app.get('/5466', handler5466)
app.listen(3000, () => {})
        