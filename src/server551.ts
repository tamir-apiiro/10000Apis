
const express = require('express')
import {handler551} from "./handler551";
const app = express()
app.get('/551', handler551)
app.listen(3000, () => {})
        