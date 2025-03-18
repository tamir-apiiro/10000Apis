
const express = require('express')
import {handler3855} from "./handler3855";
const app = express()
app.get('/3855', handler3855)
app.listen(3000, () => {})
        