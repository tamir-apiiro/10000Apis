
const express = require('express')
import {handler4848} from "./handler4848";
const app = express()
app.get('/4848', handler4848)
app.listen(3000, () => {})
        