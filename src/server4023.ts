
const express = require('express')
import {handler4023} from "./handler4023";
const app = express()
app.get('/4023', handler4023)
app.listen(3000, () => {})
        