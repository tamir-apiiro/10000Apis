
const express = require('express')
import {handler5603} from "./handler5603";
const app = express()
app.get('/5603', handler5603)
app.listen(3000, () => {})
        