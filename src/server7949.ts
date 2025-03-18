
const express = require('express')
import {handler7949} from "./handler7949";
const app = express()
app.get('/7949', handler7949)
app.listen(3000, () => {})
        