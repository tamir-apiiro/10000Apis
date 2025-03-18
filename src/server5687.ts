
const express = require('express')
import {handler5687} from "./handler5687";
const app = express()
app.get('/5687', handler5687)
app.listen(3000, () => {})
        