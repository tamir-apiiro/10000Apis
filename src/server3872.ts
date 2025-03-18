
const express = require('express')
import {handler3872} from "./handler3872";
const app = express()
app.get('/3872', handler3872)
app.listen(3000, () => {})
        