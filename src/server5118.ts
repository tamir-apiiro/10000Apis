
const express = require('express')
import {handler5118} from "./handler5118";
const app = express()
app.get('/5118', handler5118)
app.listen(3000, () => {})
        