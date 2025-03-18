
const express = require('express')
import {handler5700} from "./handler5700";
const app = express()
app.get('/5700', handler5700)
app.listen(3000, () => {})
        