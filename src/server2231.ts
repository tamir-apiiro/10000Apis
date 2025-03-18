
const express = require('express')
import {handler2231} from "./handler2231";
const app = express()
app.get('/2231', handler2231)
app.listen(3000, () => {})
        