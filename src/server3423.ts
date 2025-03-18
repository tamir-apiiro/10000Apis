
const express = require('express')
import {handler3423} from "./handler3423";
const app = express()
app.get('/3423', handler3423)
app.listen(3000, () => {})
        