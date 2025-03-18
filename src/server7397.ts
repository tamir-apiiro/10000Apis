
const express = require('express')
import {handler7397} from "./handler7397";
const app = express()
app.get('/7397', handler7397)
app.listen(3000, () => {})
        