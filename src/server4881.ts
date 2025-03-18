
const express = require('express')
import {handler4881} from "./handler4881";
const app = express()
app.get('/4881', handler4881)
app.listen(3000, () => {})
        