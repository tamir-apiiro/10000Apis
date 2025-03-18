
const express = require('express')
import {handler4991} from "./handler4991";
const app = express()
app.get('/4991', handler4991)
app.listen(3000, () => {})
        