
const express = require('express')
import {handler3369} from "./handler3369";
const app = express()
app.get('/3369', handler3369)
app.listen(3000, () => {})
        