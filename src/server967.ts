
const express = require('express')
import {handler967} from "./handler967";
const app = express()
app.get('/967', handler967)
app.listen(3000, () => {})
        