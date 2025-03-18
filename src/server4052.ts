
const express = require('express')
import {handler4052} from "./handler4052";
const app = express()
app.get('/4052', handler4052)
app.listen(3000, () => {})
        