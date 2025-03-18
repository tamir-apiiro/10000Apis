
const express = require('express')
import {handler2870} from "./handler2870";
const app = express()
app.get('/2870', handler2870)
app.listen(3000, () => {})
        