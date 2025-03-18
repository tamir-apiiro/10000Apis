
const express = require('express')
import {handler3320} from "./handler3320";
const app = express()
app.get('/3320', handler3320)
app.listen(3000, () => {})
        