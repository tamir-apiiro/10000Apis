
const express = require('express')
import {handler3729} from "./handler3729";
const app = express()
app.get('/3729', handler3729)
app.listen(3000, () => {})
        