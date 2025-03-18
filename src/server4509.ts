
const express = require('express')
import {handler4509} from "./handler4509";
const app = express()
app.get('/4509', handler4509)
app.listen(3000, () => {})
        