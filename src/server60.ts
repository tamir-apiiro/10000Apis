
const express = require('express')
import {handler60} from "./handler60";
const app = express()
app.get('/60', handler60)
app.listen(3000, () => {})
        