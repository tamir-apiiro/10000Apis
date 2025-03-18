
const express = require('express')
import {handler5152} from "./handler5152";
const app = express()
app.get('/5152', handler5152)
app.listen(3000, () => {})
        