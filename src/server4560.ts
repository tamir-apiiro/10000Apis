
const express = require('express')
import {handler4560} from "./handler4560";
const app = express()
app.get('/4560', handler4560)
app.listen(3000, () => {})
        