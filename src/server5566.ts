
const express = require('express')
import {handler5566} from "./handler5566";
const app = express()
app.get('/5566', handler5566)
app.listen(3000, () => {})
        