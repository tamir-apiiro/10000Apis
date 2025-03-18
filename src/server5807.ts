
const express = require('express')
import {handler5807} from "./handler5807";
const app = express()
app.get('/5807', handler5807)
app.listen(3000, () => {})
        