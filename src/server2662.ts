
const express = require('express')
import {handler2662} from "./handler2662";
const app = express()
app.get('/2662', handler2662)
app.listen(3000, () => {})
        