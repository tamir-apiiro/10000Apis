
const express = require('express')
import {handler3173} from "./handler3173";
const app = express()
app.get('/3173', handler3173)
app.listen(3000, () => {})
        