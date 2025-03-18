
const express = require('express')
import {handler2041} from "./handler2041";
const app = express()
app.get('/2041', handler2041)
app.listen(3000, () => {})
        