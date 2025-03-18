
const express = require('express')
import {handler4073} from "./handler4073";
const app = express()
app.get('/4073', handler4073)
app.listen(3000, () => {})
        