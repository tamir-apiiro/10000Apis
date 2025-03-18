
const express = require('express')
import {handler5878} from "./handler5878";
const app = express()
app.get('/5878', handler5878)
app.listen(3000, () => {})
        