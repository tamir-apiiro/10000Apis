
const express = require('express')
import {handler3307} from "./handler3307";
const app = express()
app.get('/3307', handler3307)
app.listen(3000, () => {})
        