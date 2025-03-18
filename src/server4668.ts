
const express = require('express')
import {handler4668} from "./handler4668";
const app = express()
app.get('/4668', handler4668)
app.listen(3000, () => {})
        