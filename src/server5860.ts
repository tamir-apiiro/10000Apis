
const express = require('express')
import {handler5860} from "./handler5860";
const app = express()
app.get('/5860', handler5860)
app.listen(3000, () => {})
        