
const express = require('express')
import {handler5192} from "./handler5192";
const app = express()
app.get('/5192', handler5192)
app.listen(3000, () => {})
        