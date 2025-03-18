
const express = require('express')
import {handler5867} from "./handler5867";
const app = express()
app.get('/5867', handler5867)
app.listen(3000, () => {})
        