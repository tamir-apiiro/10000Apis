
const express = require('express')
import {handler5863} from "./handler5863";
const app = express()
app.get('/5863', handler5863)
app.listen(3000, () => {})
        