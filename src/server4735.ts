
const express = require('express')
import {handler4735} from "./handler4735";
const app = express()
app.get('/4735', handler4735)
app.listen(3000, () => {})
        