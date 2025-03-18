
const express = require('express')
import {handler5129} from "./handler5129";
const app = express()
app.get('/5129', handler5129)
app.listen(3000, () => {})
        