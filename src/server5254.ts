
const express = require('express')
import {handler5254} from "./handler5254";
const app = express()
app.get('/5254', handler5254)
app.listen(3000, () => {})
        