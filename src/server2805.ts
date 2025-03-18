
const express = require('express')
import {handler2805} from "./handler2805";
const app = express()
app.get('/2805', handler2805)
app.listen(3000, () => {})
        