
const express = require('express')
import {handler3305} from "./handler3305";
const app = express()
app.get('/3305', handler3305)
app.listen(3000, () => {})
        