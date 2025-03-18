
const express = require('express')
import {handler3838} from "./handler3838";
const app = express()
app.get('/3838', handler3838)
app.listen(3000, () => {})
        