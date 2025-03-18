
const express = require('express')
import {handler5126} from "./handler5126";
const app = express()
app.get('/5126', handler5126)
app.listen(3000, () => {})
        