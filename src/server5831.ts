
const express = require('express')
import {handler5831} from "./handler5831";
const app = express()
app.get('/5831', handler5831)
app.listen(3000, () => {})
        