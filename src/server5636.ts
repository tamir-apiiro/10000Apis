
const express = require('express')
import {handler5636} from "./handler5636";
const app = express()
app.get('/5636', handler5636)
app.listen(3000, () => {})
        