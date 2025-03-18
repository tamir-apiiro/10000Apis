
const express = require('express')
import {handler5084} from "./handler5084";
const app = express()
app.get('/5084', handler5084)
app.listen(3000, () => {})
        