
const express = require('express')
import {handler5258} from "./handler5258";
const app = express()
app.get('/5258', handler5258)
app.listen(3000, () => {})
        