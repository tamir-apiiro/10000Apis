
const express = require('express')
import {handler4757} from "./handler4757";
const app = express()
app.get('/4757', handler4757)
app.listen(3000, () => {})
        