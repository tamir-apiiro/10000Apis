
const express = require('express')
import {handler1695} from "./handler1695";
const app = express()
app.get('/1695', handler1695)
app.listen(3000, () => {})
        