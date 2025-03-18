
const express = require('express')
import {handler5992} from "./handler5992";
const app = express()
app.get('/5992', handler5992)
app.listen(3000, () => {})
        