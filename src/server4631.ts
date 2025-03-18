
const express = require('express')
import {handler4631} from "./handler4631";
const app = express()
app.get('/4631', handler4631)
app.listen(3000, () => {})
        