
const express = require('express')
import {handler3731} from "./handler3731";
const app = express()
app.get('/3731', handler3731)
app.listen(3000, () => {})
        