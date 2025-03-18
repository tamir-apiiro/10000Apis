
const express = require('express')
import {handler5784} from "./handler5784";
const app = express()
app.get('/5784', handler5784)
app.listen(3000, () => {})
        