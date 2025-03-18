
const express = require('express')
import {handler3339} from "./handler3339";
const app = express()
app.get('/3339', handler3339)
app.listen(3000, () => {})
        