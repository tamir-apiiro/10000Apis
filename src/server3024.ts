
const express = require('express')
import {handler3024} from "./handler3024";
const app = express()
app.get('/3024', handler3024)
app.listen(3000, () => {})
        