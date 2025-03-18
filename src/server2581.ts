
const express = require('express')
import {handler2581} from "./handler2581";
const app = express()
app.get('/2581', handler2581)
app.listen(3000, () => {})
        