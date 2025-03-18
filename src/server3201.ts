
const express = require('express')
import {handler3201} from "./handler3201";
const app = express()
app.get('/3201', handler3201)
app.listen(3000, () => {})
        