
const express = require('express')
import {handler3043} from "./handler3043";
const app = express()
app.get('/3043', handler3043)
app.listen(3000, () => {})
        