
const express = require('express')
import {handler7551} from "./handler7551";
const app = express()
app.get('/7551', handler7551)
app.listen(3000, () => {})
        