
const express = require('express')
import {handler4512} from "./handler4512";
const app = express()
app.get('/4512', handler4512)
app.listen(3000, () => {})
        