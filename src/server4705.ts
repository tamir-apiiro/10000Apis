
const express = require('express')
import {handler4705} from "./handler4705";
const app = express()
app.get('/4705', handler4705)
app.listen(3000, () => {})
        