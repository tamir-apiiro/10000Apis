
const express = require('express')
import {handler5081} from "./handler5081";
const app = express()
app.get('/5081', handler5081)
app.listen(3000, () => {})
        