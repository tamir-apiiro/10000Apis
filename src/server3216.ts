
const express = require('express')
import {handler3216} from "./handler3216";
const app = express()
app.get('/3216', handler3216)
app.listen(3000, () => {})
        