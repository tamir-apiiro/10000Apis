
const express = require('express')
import {handler4623} from "./handler4623";
const app = express()
app.get('/4623', handler4623)
app.listen(3000, () => {})
        