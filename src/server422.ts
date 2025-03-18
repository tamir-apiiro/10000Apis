
const express = require('express')
import {handler422} from "./handler422";
const app = express()
app.get('/422', handler422)
app.listen(3000, () => {})
        