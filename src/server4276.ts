
const express = require('express')
import {handler4276} from "./handler4276";
const app = express()
app.get('/4276', handler4276)
app.listen(3000, () => {})
        