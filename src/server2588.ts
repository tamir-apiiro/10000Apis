
const express = require('express')
import {handler2588} from "./handler2588";
const app = express()
app.get('/2588', handler2588)
app.listen(3000, () => {})
        