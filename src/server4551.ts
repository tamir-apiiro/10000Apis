
const express = require('express')
import {handler4551} from "./handler4551";
const app = express()
app.get('/4551', handler4551)
app.listen(3000, () => {})
        