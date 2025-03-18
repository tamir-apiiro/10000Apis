
const express = require('express')
import {handler5980} from "./handler5980";
const app = express()
app.get('/5980', handler5980)
app.listen(3000, () => {})
        