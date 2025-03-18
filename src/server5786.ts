
const express = require('express')
import {handler5786} from "./handler5786";
const app = express()
app.get('/5786', handler5786)
app.listen(3000, () => {})
        