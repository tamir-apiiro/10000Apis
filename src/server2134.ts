
const express = require('express')
import {handler2134} from "./handler2134";
const app = express()
app.get('/2134', handler2134)
app.listen(3000, () => {})
        