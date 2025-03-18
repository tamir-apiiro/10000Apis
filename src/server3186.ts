
const express = require('express')
import {handler3186} from "./handler3186";
const app = express()
app.get('/3186', handler3186)
app.listen(3000, () => {})
        