
const express = require('express')
import {handler2668} from "./handler2668";
const app = express()
app.get('/2668', handler2668)
app.listen(3000, () => {})
        