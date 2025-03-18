
const express = require('express')
import {handler835} from "./handler835";
const app = express()
app.get('/835', handler835)
app.listen(3000, () => {})
        