
const express = require('express')
import {handler5225} from "./handler5225";
const app = express()
app.get('/5225', handler5225)
app.listen(3000, () => {})
        