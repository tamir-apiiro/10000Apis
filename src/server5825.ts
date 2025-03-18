
const express = require('express')
import {handler5825} from "./handler5825";
const app = express()
app.get('/5825', handler5825)
app.listen(3000, () => {})
        