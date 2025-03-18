
const express = require('express')
import {handler4923} from "./handler4923";
const app = express()
app.get('/4923', handler4923)
app.listen(3000, () => {})
        