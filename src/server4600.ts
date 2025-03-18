
const express = require('express')
import {handler4600} from "./handler4600";
const app = express()
app.get('/4600', handler4600)
app.listen(3000, () => {})
        