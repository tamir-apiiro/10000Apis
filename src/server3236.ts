
const express = require('express')
import {handler3236} from "./handler3236";
const app = express()
app.get('/3236', handler3236)
app.listen(3000, () => {})
        