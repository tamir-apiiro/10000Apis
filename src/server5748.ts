
const express = require('express')
import {handler5748} from "./handler5748";
const app = express()
app.get('/5748', handler5748)
app.listen(3000, () => {})
        