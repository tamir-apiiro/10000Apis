
const express = require('express')
import {handler2816} from "./handler2816";
const app = express()
app.get('/2816', handler2816)
app.listen(3000, () => {})
        