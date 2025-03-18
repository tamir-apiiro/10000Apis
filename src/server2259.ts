
const express = require('express')
import {handler2259} from "./handler2259";
const app = express()
app.get('/2259', handler2259)
app.listen(3000, () => {})
        