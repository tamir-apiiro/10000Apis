
const express = require('express')
import {handler3370} from "./handler3370";
const app = express()
app.get('/3370', handler3370)
app.listen(3000, () => {})
        