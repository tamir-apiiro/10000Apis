
const express = require('express')
import {handler5184} from "./handler5184";
const app = express()
app.get('/5184', handler5184)
app.listen(3000, () => {})
        