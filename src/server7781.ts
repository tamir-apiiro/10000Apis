
const express = require('express')
import {handler7781} from "./handler7781";
const app = express()
app.get('/7781', handler7781)
app.listen(3000, () => {})
        