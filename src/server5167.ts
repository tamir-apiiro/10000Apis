
const express = require('express')
import {handler5167} from "./handler5167";
const app = express()
app.get('/5167', handler5167)
app.listen(3000, () => {})
        