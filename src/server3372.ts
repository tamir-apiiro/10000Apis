
const express = require('express')
import {handler3372} from "./handler3372";
const app = express()
app.get('/3372', handler3372)
app.listen(3000, () => {})
        