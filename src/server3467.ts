
const express = require('express')
import {handler3467} from "./handler3467";
const app = express()
app.get('/3467', handler3467)
app.listen(3000, () => {})
        