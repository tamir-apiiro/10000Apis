
const express = require('express')
import {handler2678} from "./handler2678";
const app = express()
app.get('/2678', handler2678)
app.listen(3000, () => {})
        