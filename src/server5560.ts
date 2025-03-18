
const express = require('express')
import {handler5560} from "./handler5560";
const app = express()
app.get('/5560', handler5560)
app.listen(3000, () => {})
        