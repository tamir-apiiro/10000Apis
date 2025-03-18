
const express = require('express')
import {handler4857} from "./handler4857";
const app = express()
app.get('/4857', handler4857)
app.listen(3000, () => {})
        