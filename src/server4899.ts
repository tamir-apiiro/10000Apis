
const express = require('express')
import {handler4899} from "./handler4899";
const app = express()
app.get('/4899', handler4899)
app.listen(3000, () => {})
        