
const express = require('express')
import {handler3812} from "./handler3812";
const app = express()
app.get('/3812', handler3812)
app.listen(3000, () => {})
        