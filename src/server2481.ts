
const express = require('express')
import {handler2481} from "./handler2481";
const app = express()
app.get('/2481', handler2481)
app.listen(3000, () => {})
        