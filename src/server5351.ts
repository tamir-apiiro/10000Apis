
const express = require('express')
import {handler5351} from "./handler5351";
const app = express()
app.get('/5351', handler5351)
app.listen(3000, () => {})
        