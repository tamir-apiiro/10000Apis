
const express = require('express')
import {handler4946} from "./handler4946";
const app = express()
app.get('/4946', handler4946)
app.listen(3000, () => {})
        