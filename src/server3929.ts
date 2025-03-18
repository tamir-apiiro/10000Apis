
const express = require('express')
import {handler3929} from "./handler3929";
const app = express()
app.get('/3929', handler3929)
app.listen(3000, () => {})
        