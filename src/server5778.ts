
const express = require('express')
import {handler5778} from "./handler5778";
const app = express()
app.get('/5778', handler5778)
app.listen(3000, () => {})
        