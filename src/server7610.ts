
const express = require('express')
import {handler7610} from "./handler7610";
const app = express()
app.get('/7610', handler7610)
app.listen(3000, () => {})
        