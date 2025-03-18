
const express = require('express')
import {handler3283} from "./handler3283";
const app = express()
app.get('/3283', handler3283)
app.listen(3000, () => {})
        