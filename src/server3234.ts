
const express = require('express')
import {handler3234} from "./handler3234";
const app = express()
app.get('/3234', handler3234)
app.listen(3000, () => {})
        