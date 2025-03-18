
const express = require('express')
import {handler3557} from "./handler3557";
const app = express()
app.get('/3557', handler3557)
app.listen(3000, () => {})
        