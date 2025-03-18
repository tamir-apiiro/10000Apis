
const express = require('express')
import {handler5276} from "./handler5276";
const app = express()
app.get('/5276', handler5276)
app.listen(3000, () => {})
        