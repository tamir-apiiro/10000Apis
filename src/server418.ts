
const express = require('express')
import {handler418} from "./handler418";
const app = express()
app.get('/418', handler418)
app.listen(3000, () => {})
        