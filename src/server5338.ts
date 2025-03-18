
const express = require('express')
import {handler5338} from "./handler5338";
const app = express()
app.get('/5338', handler5338)
app.listen(3000, () => {})
        