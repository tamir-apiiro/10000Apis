
const express = require('express')
import {handler3240} from "./handler3240";
const app = express()
app.get('/3240', handler3240)
app.listen(3000, () => {})
        