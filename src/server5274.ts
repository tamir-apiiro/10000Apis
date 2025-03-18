
const express = require('express')
import {handler5274} from "./handler5274";
const app = express()
app.get('/5274', handler5274)
app.listen(3000, () => {})
        