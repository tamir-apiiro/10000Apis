
const express = require('express')
import {handler5555} from "./handler5555";
const app = express()
app.get('/5555', handler5555)
app.listen(3000, () => {})
        