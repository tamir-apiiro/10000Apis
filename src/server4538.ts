
const express = require('express')
import {handler4538} from "./handler4538";
const app = express()
app.get('/4538', handler4538)
app.listen(3000, () => {})
        