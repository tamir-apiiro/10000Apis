
const express = require('express')
import {handler3000} from "./handler3000";
const app = express()
app.get('/3000', handler3000)
app.listen(3000, () => {})
        