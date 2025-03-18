
const express = require('express')
import {handler4374} from "./handler4374";
const app = express()
app.get('/4374', handler4374)
app.listen(3000, () => {})
        