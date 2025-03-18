
const express = require('express')
import {handler5729} from "./handler5729";
const app = express()
app.get('/5729', handler5729)
app.listen(3000, () => {})
        