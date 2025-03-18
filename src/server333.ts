
const express = require('express')
import {handler333} from "./handler333";
const app = express()
app.get('/333', handler333)
app.listen(3000, () => {})
        