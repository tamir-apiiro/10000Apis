
const express = require('express')
import {handler7214} from "./handler7214";
const app = express()
app.get('/7214', handler7214)
app.listen(3000, () => {})
        