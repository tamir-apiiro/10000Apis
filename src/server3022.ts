
const express = require('express')
import {handler3022} from "./handler3022";
const app = express()
app.get('/3022', handler3022)
app.listen(3000, () => {})
        