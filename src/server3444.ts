
const express = require('express')
import {handler3444} from "./handler3444";
const app = express()
app.get('/3444', handler3444)
app.listen(3000, () => {})
        