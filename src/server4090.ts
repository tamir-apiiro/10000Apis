
const express = require('express')
import {handler4090} from "./handler4090";
const app = express()
app.get('/4090', handler4090)
app.listen(3000, () => {})
        