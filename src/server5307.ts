
const express = require('express')
import {handler5307} from "./handler5307";
const app = express()
app.get('/5307', handler5307)
app.listen(3000, () => {})
        