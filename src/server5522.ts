
const express = require('express')
import {handler5522} from "./handler5522";
const app = express()
app.get('/5522', handler5522)
app.listen(3000, () => {})
        