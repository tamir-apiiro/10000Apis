
const express = require('express')
import {handler3985} from "./handler3985";
const app = express()
app.get('/3985', handler3985)
app.listen(3000, () => {})
        