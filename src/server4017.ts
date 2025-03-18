
const express = require('express')
import {handler4017} from "./handler4017";
const app = express()
app.get('/4017', handler4017)
app.listen(3000, () => {})
        