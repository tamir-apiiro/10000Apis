
const express = require('express')
import {handler3004} from "./handler3004";
const app = express()
app.get('/3004', handler3004)
app.listen(3000, () => {})
        