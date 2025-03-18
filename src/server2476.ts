
const express = require('express')
import {handler2476} from "./handler2476";
const app = express()
app.get('/2476', handler2476)
app.listen(3000, () => {})
        