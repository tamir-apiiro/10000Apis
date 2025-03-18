
const express = require('express')
import {handler4867} from "./handler4867";
const app = express()
app.get('/4867', handler4867)
app.listen(3000, () => {})
        