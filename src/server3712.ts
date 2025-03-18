
const express = require('express')
import {handler3712} from "./handler3712";
const app = express()
app.get('/3712', handler3712)
app.listen(3000, () => {})
        