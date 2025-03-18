
const express = require('express')
import {handler2729} from "./handler2729";
const app = express()
app.get('/2729', handler2729)
app.listen(3000, () => {})
        