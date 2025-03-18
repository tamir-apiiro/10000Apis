
const express = require('express')
import {handler4121} from "./handler4121";
const app = express()
app.get('/4121', handler4121)
app.listen(3000, () => {})
        