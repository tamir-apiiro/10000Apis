
const express = require('express')
import {handler2781} from "./handler2781";
const app = express()
app.get('/2781', handler2781)
app.listen(3000, () => {})
        