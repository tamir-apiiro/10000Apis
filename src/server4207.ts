
const express = require('express')
import {handler4207} from "./handler4207";
const app = express()
app.get('/4207', handler4207)
app.listen(3000, () => {})
        