
const express = require('express')
import {handler4467} from "./handler4467";
const app = express()
app.get('/4467', handler4467)
app.listen(3000, () => {})
        