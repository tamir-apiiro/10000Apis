
const express = require('express')
import {handler4891} from "./handler4891";
const app = express()
app.get('/4891', handler4891)
app.listen(3000, () => {})
        