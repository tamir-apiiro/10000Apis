
const express = require('express')
import {handler5626} from "./handler5626";
const app = express()
app.get('/5626', handler5626)
app.listen(3000, () => {})
        