
const express = require('express')
import {handler2718} from "./handler2718";
const app = express()
app.get('/2718', handler2718)
app.listen(3000, () => {})
        