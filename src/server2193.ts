
const express = require('express')
import {handler2193} from "./handler2193";
const app = express()
app.get('/2193', handler2193)
app.listen(3000, () => {})
        