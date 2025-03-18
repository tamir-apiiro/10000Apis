
const express = require('express')
import {handler5991} from "./handler5991";
const app = express()
app.get('/5991', handler5991)
app.listen(3000, () => {})
        