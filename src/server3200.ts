
const express = require('express')
import {handler3200} from "./handler3200";
const app = express()
app.get('/3200', handler3200)
app.listen(3000, () => {})
        