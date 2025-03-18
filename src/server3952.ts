
const express = require('express')
import {handler3952} from "./handler3952";
const app = express()
app.get('/3952', handler3952)
app.listen(3000, () => {})
        