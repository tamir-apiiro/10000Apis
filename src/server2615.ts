
const express = require('express')
import {handler2615} from "./handler2615";
const app = express()
app.get('/2615', handler2615)
app.listen(3000, () => {})
        