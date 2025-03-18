
const express = require('express')
import {handler4618} from "./handler4618";
const app = express()
app.get('/4618', handler4618)
app.listen(3000, () => {})
        