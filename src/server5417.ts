
const express = require('express')
import {handler5417} from "./handler5417";
const app = express()
app.get('/5417', handler5417)
app.listen(3000, () => {})
        