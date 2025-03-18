
const express = require('express')
import {handler4198} from "./handler4198";
const app = express()
app.get('/4198', handler4198)
app.listen(3000, () => {})
        