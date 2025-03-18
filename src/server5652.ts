
const express = require('express')
import {handler5652} from "./handler5652";
const app = express()
app.get('/5652', handler5652)
app.listen(3000, () => {})
        