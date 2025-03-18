
const express = require('express')
import {handler3819} from "./handler3819";
const app = express()
app.get('/3819', handler3819)
app.listen(3000, () => {})
        