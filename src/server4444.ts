
const express = require('express')
import {handler4444} from "./handler4444";
const app = express()
app.get('/4444', handler4444)
app.listen(3000, () => {})
        