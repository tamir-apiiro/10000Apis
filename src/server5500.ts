
const express = require('express')
import {handler5500} from "./handler5500";
const app = express()
app.get('/5500', handler5500)
app.listen(3000, () => {})
        