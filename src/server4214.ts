
const express = require('express')
import {handler4214} from "./handler4214";
const app = express()
app.get('/4214', handler4214)
app.listen(3000, () => {})
        