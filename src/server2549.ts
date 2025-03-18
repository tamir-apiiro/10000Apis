
const express = require('express')
import {handler2549} from "./handler2549";
const app = express()
app.get('/2549', handler2549)
app.listen(3000, () => {})
        