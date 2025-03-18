
const express = require('express')
import {handler3684} from "./handler3684";
const app = express()
app.get('/3684', handler3684)
app.listen(3000, () => {})
        