
const express = require('express')
import {handler4593} from "./handler4593";
const app = express()
app.get('/4593', handler4593)
app.listen(3000, () => {})
        