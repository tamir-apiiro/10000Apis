
const express = require('express')
import {handler5834} from "./handler5834";
const app = express()
app.get('/5834', handler5834)
app.listen(3000, () => {})
        