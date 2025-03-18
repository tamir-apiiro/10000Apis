
const express = require('express')
import {handler3145} from "./handler3145";
const app = express()
app.get('/3145', handler3145)
app.listen(3000, () => {})
        