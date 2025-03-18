
const express = require('express')
import {handler2646} from "./handler2646";
const app = express()
app.get('/2646', handler2646)
app.listen(3000, () => {})
        