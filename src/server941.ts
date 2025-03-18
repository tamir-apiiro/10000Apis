
const express = require('express')
import {handler941} from "./handler941";
const app = express()
app.get('/941', handler941)
app.listen(3000, () => {})
        