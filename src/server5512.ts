
const express = require('express')
import {handler5512} from "./handler5512";
const app = express()
app.get('/5512', handler5512)
app.listen(3000, () => {})
        