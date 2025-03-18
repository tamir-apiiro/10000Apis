
const express = require('express')
import {handler4113} from "./handler4113";
const app = express()
app.get('/4113', handler4113)
app.listen(3000, () => {})
        