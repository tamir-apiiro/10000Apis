
const express = require('express')
import {handler3542} from "./handler3542";
const app = express()
app.get('/3542', handler3542)
app.listen(3000, () => {})
        