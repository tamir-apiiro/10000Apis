
const express = require('express')
import {handler4258} from "./handler4258";
const app = express()
app.get('/4258', handler4258)
app.listen(3000, () => {})
        