
const express = require('express')
import {handler2971} from "./handler2971";
const app = express()
app.get('/2971', handler2971)
app.listen(3000, () => {})
        