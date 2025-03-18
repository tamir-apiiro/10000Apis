
const express = require('express')
import {handler5849} from "./handler5849";
const app = express()
app.get('/5849', handler5849)
app.listen(3000, () => {})
        