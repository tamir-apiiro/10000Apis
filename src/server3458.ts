
const express = require('express')
import {handler3458} from "./handler3458";
const app = express()
app.get('/3458', handler3458)
app.listen(3000, () => {})
        