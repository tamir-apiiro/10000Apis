
const express = require('express')
import {handler3293} from "./handler3293";
const app = express()
app.get('/3293', handler3293)
app.listen(3000, () => {})
        