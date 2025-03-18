
const express = require('express')
import {handler861} from "./handler861";
const app = express()
app.get('/861', handler861)
app.listen(3000, () => {})
        