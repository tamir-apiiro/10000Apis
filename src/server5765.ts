
const express = require('express')
import {handler5765} from "./handler5765";
const app = express()
app.get('/5765', handler5765)
app.listen(3000, () => {})
        