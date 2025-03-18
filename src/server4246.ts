
const express = require('express')
import {handler4246} from "./handler4246";
const app = express()
app.get('/4246', handler4246)
app.listen(3000, () => {})
        