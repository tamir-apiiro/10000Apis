
const express = require('express')
import {handler5057} from "./handler5057";
const app = express()
app.get('/5057', handler5057)
app.listen(3000, () => {})
        