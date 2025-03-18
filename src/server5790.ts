
const express = require('express')
import {handler5790} from "./handler5790";
const app = express()
app.get('/5790', handler5790)
app.listen(3000, () => {})
        