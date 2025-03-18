
const express = require('express')
import {handler3044} from "./handler3044";
const app = express()
app.get('/3044', handler3044)
app.listen(3000, () => {})
        