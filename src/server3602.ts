
const express = require('express')
import {handler3602} from "./handler3602";
const app = express()
app.get('/3602', handler3602)
app.listen(3000, () => {})
        