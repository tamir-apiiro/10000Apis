
const express = require('express')
import {handler5369} from "./handler5369";
const app = express()
app.get('/5369', handler5369)
app.listen(3000, () => {})
        