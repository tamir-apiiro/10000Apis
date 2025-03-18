
const express = require('express')
import {handler4987} from "./handler4987";
const app = express()
app.get('/4987', handler4987)
app.listen(3000, () => {})
        