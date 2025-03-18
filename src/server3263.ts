
const express = require('express')
import {handler3263} from "./handler3263";
const app = express()
app.get('/3263', handler3263)
app.listen(3000, () => {})
        