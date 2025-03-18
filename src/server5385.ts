
const express = require('express')
import {handler5385} from "./handler5385";
const app = express()
app.get('/5385', handler5385)
app.listen(3000, () => {})
        