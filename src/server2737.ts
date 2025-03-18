
const express = require('express')
import {handler2737} from "./handler2737";
const app = express()
app.get('/2737', handler2737)
app.listen(3000, () => {})
        