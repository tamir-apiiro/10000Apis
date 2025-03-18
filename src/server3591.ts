
const express = require('express')
import {handler3591} from "./handler3591";
const app = express()
app.get('/3591', handler3591)
app.listen(3000, () => {})
        