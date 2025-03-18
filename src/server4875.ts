
const express = require('express')
import {handler4875} from "./handler4875";
const app = express()
app.get('/4875', handler4875)
app.listen(3000, () => {})
        