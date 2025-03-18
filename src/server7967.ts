
const express = require('express')
import {handler7967} from "./handler7967";
const app = express()
app.get('/7967', handler7967)
app.listen(3000, () => {})
        