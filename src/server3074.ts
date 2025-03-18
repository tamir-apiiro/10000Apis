
const express = require('express')
import {handler3074} from "./handler3074";
const app = express()
app.get('/3074', handler3074)
app.listen(3000, () => {})
        