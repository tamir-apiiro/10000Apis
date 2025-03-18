
const express = require('express')
import {handler5975} from "./handler5975";
const app = express()
app.get('/5975', handler5975)
app.listen(3000, () => {})
        