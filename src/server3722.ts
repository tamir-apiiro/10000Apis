
const express = require('express')
import {handler3722} from "./handler3722";
const app = express()
app.get('/3722', handler3722)
app.listen(3000, () => {})
        