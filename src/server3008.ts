
const express = require('express')
import {handler3008} from "./handler3008";
const app = express()
app.get('/3008', handler3008)
app.listen(3000, () => {})
        