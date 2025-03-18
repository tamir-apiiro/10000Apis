
const express = require('express')
import {handler4247} from "./handler4247";
const app = express()
app.get('/4247', handler4247)
app.listen(3000, () => {})
        