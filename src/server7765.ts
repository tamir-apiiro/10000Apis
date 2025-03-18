
const express = require('express')
import {handler7765} from "./handler7765";
const app = express()
app.get('/7765', handler7765)
app.listen(3000, () => {})
        