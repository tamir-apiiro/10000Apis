
const express = require('express')
import {handler3665} from "./handler3665";
const app = express()
app.get('/3665', handler3665)
app.listen(3000, () => {})
        