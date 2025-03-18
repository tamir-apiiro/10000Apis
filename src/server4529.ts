
const express = require('express')
import {handler4529} from "./handler4529";
const app = express()
app.get('/4529', handler4529)
app.listen(3000, () => {})
        