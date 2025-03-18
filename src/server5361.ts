
const express = require('express')
import {handler5361} from "./handler5361";
const app = express()
app.get('/5361', handler5361)
app.listen(3000, () => {})
        