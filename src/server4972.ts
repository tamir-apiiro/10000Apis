
const express = require('express')
import {handler4972} from "./handler4972";
const app = express()
app.get('/4972', handler4972)
app.listen(3000, () => {})
        