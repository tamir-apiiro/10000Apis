
const express = require('express')
import {handler4601} from "./handler4601";
const app = express()
app.get('/4601', handler4601)
app.listen(3000, () => {})
        