
const express = require('express')
import {handler4449} from "./handler4449";
const app = express()
app.get('/4449', handler4449)
app.listen(3000, () => {})
        