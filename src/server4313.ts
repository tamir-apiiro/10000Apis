
const express = require('express')
import {handler4313} from "./handler4313";
const app = express()
app.get('/4313', handler4313)
app.listen(3000, () => {})
        