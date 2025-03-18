
const express = require('express')
import {handler5162} from "./handler5162";
const app = express()
app.get('/5162', handler5162)
app.listen(3000, () => {})
        