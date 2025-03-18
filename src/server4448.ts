
const express = require('express')
import {handler4448} from "./handler4448";
const app = express()
app.get('/4448', handler4448)
app.listen(3000, () => {})
        