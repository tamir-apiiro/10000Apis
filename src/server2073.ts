
const express = require('express')
import {handler2073} from "./handler2073";
const app = express()
app.get('/2073', handler2073)
app.listen(3000, () => {})
        