
const express = require('express')
import {handler4727} from "./handler4727";
const app = express()
app.get('/4727', handler4727)
app.listen(3000, () => {})
        