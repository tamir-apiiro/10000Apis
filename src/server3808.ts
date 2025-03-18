
const express = require('express')
import {handler3808} from "./handler3808";
const app = express()
app.get('/3808', handler3808)
app.listen(3000, () => {})
        