
const express = require('express')
import {handler3890} from "./handler3890";
const app = express()
app.get('/3890', handler3890)
app.listen(3000, () => {})
        