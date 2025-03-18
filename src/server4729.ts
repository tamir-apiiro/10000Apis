
const express = require('express')
import {handler4729} from "./handler4729";
const app = express()
app.get('/4729', handler4729)
app.listen(3000, () => {})
        