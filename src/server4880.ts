
const express = require('express')
import {handler4880} from "./handler4880";
const app = express()
app.get('/4880', handler4880)
app.listen(3000, () => {})
        