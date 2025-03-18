
const express = require('express')
import {handler5340} from "./handler5340";
const app = express()
app.get('/5340', handler5340)
app.listen(3000, () => {})
        