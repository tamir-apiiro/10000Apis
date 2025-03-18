
const express = require('express')
import {handler3027} from "./handler3027";
const app = express()
app.get('/3027', handler3027)
app.listen(3000, () => {})
        