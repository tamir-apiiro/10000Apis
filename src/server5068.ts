
const express = require('express')
import {handler5068} from "./handler5068";
const app = express()
app.get('/5068', handler5068)
app.listen(3000, () => {})
        