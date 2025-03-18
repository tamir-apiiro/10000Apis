
const express = require('express')
import {handler4006} from "./handler4006";
const app = express()
app.get('/4006', handler4006)
app.listen(3000, () => {})
        