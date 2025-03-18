
const express = require('express')
import {handler7322} from "./handler7322";
const app = express()
app.get('/7322', handler7322)
app.listen(3000, () => {})
        